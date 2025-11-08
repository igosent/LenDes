import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps {
  onOrderClick: () => void;
  onCalculateClick: () => void;
}

export function Hero({ onOrderClick, onCalculateClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
      {/* Background with Split Design */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <img
            src = "/images/3.jpg"
            alt="Modern luxury interior"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        {/* Geometric Accent */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-amber-500/20 text-amber-300 text-sm tracking-wider border border-amber-500/30">
                LenDes 2025
              </span>
            </div>
            
            <h1 className="text-white mb-6 text-6xl lg:text-7xl">
              Przestrzeń<br />
              która<br />
              <span className="text-amber-500">inspiruje</span>
            </h1>
            
            <p className="text-gray-300 mb-10 text-lg max-w-lg">
              Tworzymy nowoczesne wnętrza, które odzwierciedlają Twoją osobowość i styl życia. 
              Od koncepcji po realizację.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={onOrderClick}
                className="bg-amber-500 text-gray-900 hover:bg-amber-400 px-8 group"
              >
                Rozpocznij projekt
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onCalculateClick}
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8"
              >
                <Play className="mr-2 h-5 w-5" />
                Zobacz jak działamy
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl text-white mb-1">1</div>
                <div className="text-gray-400 text-sm">Zrealizowany projekt</div>
              </div>
              <div>
                <div className="text-3xl text-white mb-1">2</div>
                <div className="text-gray-400 text-sm">Lata doświadczenia</div>
              </div>
              <div>
                <div className="text-3xl text-white mb-1">1</div>
                <div className="text-gray-400 text-sm">Zadowolony mąż</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image Showcase */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:block relative"
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-500/30"></div>
            <img
              src = "/images/4.jpg"
              alt="Elegant interior"
              className="relative w-full h-[600px] object-cover"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-8 -left-8 bg-white p-6 shadow-2xl">
              <div className="text-sm text-gray-600 mb-1">Nagroda</div>
              <div className="text-gray-900">Design Award 2024</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
