import { motion } from "motion/react";
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Check } from "lucide-react";

const styleMultipliers = {
  modern: 1.2,
  scandinavian: 1.1,
  industrial: 1.15,
  classic: 1.3,
  minimalist: 1.0,
} as const; // строгие литеральные типы

const basePrice = 150; // PLN per m²

const styles = [
  { value: "minimalist", label: "Minimalistyczny", description: "Prostota i funkcjonalność" },
  { value: "scandinavian", label: "Skandynawski", description: "Jasne kolory, naturalne materiały" },
  { value: "industrial", label: "Industrialny", description: "Surowe materiały, nowoczesność" },
  { value: "modern", label: "Nowoczesny", description: "Innowacyjne rozwiązania" },
  { value: "classic", label: "Klasyczny", description: "Elegancja i ponadczasowość" },
] as const;

type StyleKey = keyof typeof styleMultipliers;

export function CostEstimator() {
  const [rooms, setRooms] = useState<number>(3);
  const [area, setArea] = useState<string>("");
  const [style, setStyle] = useState<StyleKey | "">("");
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const calculateCost = () => {
    if (!area || !style) return;

    const areaSize = parseFloat(area);
    const styleMultiplier = styleMultipliers[style]; // безопасно по типу

    const cost = areaSize * basePrice * styleMultiplier * (1 + rooms * 0.05);
    setEstimatedCost(Math.round(cost));
  };

  return (
    <section className="py-32 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-white text-gray-600 text-sm tracking-wider">
              KALKULATOR KOSZTÓW
            </span>
          </div>
          <h2 className="text-gray-900 mb-4">Oszacuj koszt projektu</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Sprawdź orientacyjny koszt projektu Twojego wnętrza w kilku krokach
          </p>
        </motion.div>

        {/* Карточка калькулятора */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-10 border-0 shadow-lg bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Левая часть: форма */}
              <div className="space-y-8">
                {/* Слайдер комнат */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-gray-900">Liczba pomieszczeń</Label>
                    <span className="text-2xl text-amber-500">{rooms}</span>
                  </div>
                  <Slider
                    value={[rooms]}
                    onValueChange={(value: number[]) => setRooms(value[0])}
                    min={1}
                    max={10}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>1 pokój</span>
                    <span>10 pokoi</span>
                  </div>
                </div>

                {/* Поле площади */}
                <div className="space-y-2">
                  <Label htmlFor="area" className="text-gray-900">
                    Powierzchnia (m²)
                  </Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="np. 65"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="h-12 border-gray-300"
                    min="1"
                  />
                </div>

                {/* Выбор стиля с анимацией */}
                <div className="space-y-3">
                  <Label className="text-gray-900">Preferowany styl</Label>
                  <div className="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {styles.map((s) => (
                      <motion.div
                        key={s.value}
                        onClick={() => setStyle(s.value)}
                        layout
                        whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0,0,0,0.12)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={`p-4 border-2 cursor-pointer rounded-lg transition-all duration-300 ${
                          style === s.value
                            ? "border-amber-500 bg-amber-50"
                            : "border-gray-200 hover:border-gray-300 bg-white"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-gray-900 mb-1 font-medium">{s.label}</p>
                            <p className="text-gray-500 text-sm">{s.description}</p>
                          </div>
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={style === s.value ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 25 }}
                            className="bg-amber-500 p-1 rounded-full"
                          >
                            <Check className="h-4 w-4 text-white" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={calculateCost}
                  className="w-full h-12 bg-gray-900 hover:bg-gray-800 transition-colors"
                  size="lg"
                >
                  Oblicz koszt
                </Button>
              </div>

              {/* Правая часть: результат */}
              <div className="flex flex-col justify-center">
                {estimatedCost === null ? (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-4xl">💰</span>
                    </div>
                    <p className="text-gray-600">
                      Wypełnij formularz, aby otrzymać<br />szacunkowy koszt projektu
                    </p>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 text-white"
                  >
                    <p className="text-gray-400 mb-2 text-sm uppercase tracking-wider">
                      Szacowany koszt projektu
                    </p>
                    <div className="text-5xl mb-6">
                      {estimatedCost.toLocaleString("pl-PL")}{" "}
                      <span className="text-2xl text-gray-400">PLN</span>
                    </div>

                    <div className="space-y-3 mb-8 pt-6 border-t border-white/10">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Liczba pomieszczeń:</span>
                        <span>{rooms}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Powierzchnia:</span>
                        <span>{area} m²</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Styl:</span>
                        <span>{styles.find((s) => s.value === style)?.label}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm">
                      *Cena orientacyjna. Dokładna wycena po konsultacji i analizie projektu.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
