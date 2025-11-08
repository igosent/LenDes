import { useState, useEffect } from "react";

interface Props {
  onClose?: () => void;
}

export function AccessibilityToolbar({ onClose }: Props) {
  const [theme, setTheme] = useState<"normal" | "highContrast" | "light" | "dark">("normal");
  const [fontSize, setFontSize] = useState(16);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Управление классами Tailwind на корневом div приложения
  useEffect(() => {
    const root = document.getElementById("root");
    if (!root) return;

    // Удаляем все темы
    root.classList.remove(
      "bg-gray-900", "bg-white", "bg-black", 
      "text-white", "text-gray-100", "text-black"
    );

    switch (theme) {
      case "highContrast":
        root.classList.add("bg-black", "text-white");
        break;
      case "light":
        root.classList.add("bg-white", "text-black");
        break;
      case "dark":
        root.classList.add("bg-gray-900", "text-gray-100");
        break;
      default:
        // normal – можно оставить default Tailwind цвета
        break;
    }

    // Шрифт
    root.style.fontSize = `${fontSize}px`;
  }, [theme, fontSize]);

  // Чтение текста вслух
  const toggleSpeak = () => {
    if (!("speechSynthesis" in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(document.body.innerText);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-200 p-4 rounded-lg shadow-lg flex flex-wrap gap-2 z-[9999]">
      <button onClick={() => setTheme("highContrast")} className="px-3 py-1 bg-black text-white rounded">Kontrast wysoki</button>
      <button onClick={() => setTheme("light")} className="px-3 py-1 bg-white text-black border rounded">Jasna</button>
      <button onClick={() => setTheme("dark")} className="px-3 py-1 bg-gray-900 text-gray-100 rounded">Ciemna</button>
      <button onClick={() => setFontSize(fontSize + 2)} className="px-3 py-1 bg-gray-300 rounded">A+</button>
      <button onClick={() => setFontSize(fontSize - 2)} className="px-3 py-1 bg-gray-300 rounded">A-</button>
      <button onClick={toggleSpeak} className={`px-3 py-1 rounded ${isSpeaking ? "bg-red-600 text-white" : "bg-blue-600 text-white"}`}>
        {isSpeaking ? "Stop" : "Czytaj na głos"}
      </button>
      {onClose && <button onClick={onClose} className="px-3 py-1 bg-red-600 text-white rounded">zamknij</button>}
    </div>
  );
}
