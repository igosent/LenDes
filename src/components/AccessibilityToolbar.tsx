import { useState, useEffect } from "react";

interface Props {
  onClose?: () => void;
}

export function AccessibilityToolbar({ onClose }: Props) {
  const [theme, setTheme] = useState("normal");
  const [fontSize, setFontSize] = useState(16);
  const [isReading, setIsReading] = useState(false);

  useEffect(() => {
    if (theme === "normal") {
      document.body.removeAttribute("data-theme");
    } else {
      document.body.setAttribute("data-theme", theme);
    }
    document.body.style.fontSize = `${fontSize}px`;
  }, [theme, fontSize]);

  const speakText = (text: string) => {
    if (!("speechSynthesis" in window)) return;
    if (isReading) {
      window.speechSynthesis.cancel(); // stop reading
      setIsReading(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => setIsReading(false);
      window.speechSynthesis.speak(utterance);
      setIsReading(true);
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-200 p-4 rounded-lg shadow-lg flex flex-wrap gap-2 z-[9999]">
      <button
        onClick={() => setTheme("highContrast")}
        className="px-2 py-1 bg-black text-white rounded"
      >
        Kontrast wysoki
      </button>
      <button
        onClick={() => setTheme("light")}
        className="px-2 py-1 bg-white text-black border rounded"
      >
        Jasna
      </button>
      <button
        onClick={() => setTheme("dark")}
        className="px-2 py-1 bg-gray-900 text-gray-100 rounded"
      >
        Ciemna
      </button>
      <button
        onClick={() => setFontSize(fontSize + 2)}
        className="px-2 py-1 bg-gray-300 rounded"
      >
        A+
      </button>
      <button
        onClick={() => setFontSize(fontSize - 2)}
        className="px-2 py-1 bg-gray-300 rounded"
      >
        A-
      </button>
      <button
        onClick={() => speakText(document.body.innerText)}
        className="px-2 py-1 bg-blue-600 text-white rounded"
      >
        {isReading ? "Stop" : "Czytaj na głos"}
      </button>
      {onClose && (
        <button
          onClick={onClose}
          className="px-2 py-1 bg-red-600 text-white rounded"
        >
          zamknij
        </button>
      )}
    </div>
  );
}
