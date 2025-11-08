import { useState, useEffect } from "react";

export function AccessibilityToolbar() {
  const [theme, setTheme] = useState("normal");
  const [fontSize, setFontSize] = useState(16);
  const [isTranslating, setIsTranslating] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Polish");

  // Применяем тему и размер шрифта к body
  useEffect(() => {
    const body = document.body;
    switch (theme) {
      case "highContrast":
        body.style.backgroundColor = "#000";
        body.style.color = "#fff";
        break;
      case "light":
        body.style.backgroundColor = "#fff";
        body.style.color = "#000";
        break;
      case "dark":
        body.style.backgroundColor = "#111";
        body.style.color = "#eee";
        break;
      default:
        body.style.backgroundColor = "";
        body.style.color = "";
    }
    body.style.fontSize = `${fontSize}px`;
  }, [theme, fontSize]);

  // Text-to-Speech
  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      alert("Twój przeglądarka nie obsługuje syntezatora mowy");
    }
  };

  // AI Translator
  const translatePage = async () => {
    setIsTranslating(true);
    const text = document.body.innerText;

    try {
      const res = await fetch("/api/translate", {  // ✅ локальный endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, targetLanguage: selectedLanguage }),
      });

      const data = await res.json();
      if (data.translation) {
        document.body.innerText = data.translation;
        speakText(data.translation);
      }
    } catch (err) {
      console.error(err);
      alert("Błąd tłumaczenia AI");
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <div
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-200 p-4 rounded-lg shadow-lg flex gap-2 z-50"
      style={{ fontSize: "14px" }}
    >
      {/* Темы / контраст */}
      <button onClick={() => setTheme("highContrast")} className="px-2 py-1 bg-black text-white rounded">
        Kontrast wysoki
      </button>
      <button onClick={() => setTheme("light")} className="px-2 py-1 bg-white text-black border rounded">
        Jasna
      </button>
      <button onClick={() => setTheme("dark")} className="px-2 py-1 bg-gray-900 text-gray-100 rounded">
        Ciemna
      </button>

      {/* Размер шрифта */}
      <button onClick={() => setFontSize(fontSize + 2)} className="px-2 py-1 bg-gray-300 rounded">
        A+
      </button>
      <button onClick={() => setFontSize(fontSize - 2)} className="px-2 py-1 bg-gray-300 rounded">
        A-
      </button>

      {/* Чтение текста */}
      <button onClick={() => speakText(document.body.innerText)} className="px-2 py-1 bg-blue-600 text-white rounded">
        Czytaj na głos
      </button>

      {/* Выбор языка */}
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        className="px-2 py-1 border rounded bg-white"
      >
        <option value="Polish">Polski</option>
        <option value="English">English</option>
        <option value="German">Deutsch</option>
        <option value="French">Français</option>
      </select>

      {/* AI Translator */}
      <button
        onClick={translatePage}
        className="px-2 py-1 bg-green-600 text-white rounded"
        disabled={isTranslating}
      >
        {isTranslating ? "Tłumaczenie..." : "AI Translator"}
      </button>
    </div>
  );
}
