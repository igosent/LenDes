import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Home, Building2, Trees, Sparkles, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    icon: Home,
    title: "Przyklad 1",
    description: "Kompleksowe projekty wnętrz mieszkań - od kawalerki po apartament.",
    image : "/images/1.jpg",
    features: ["Wizualizacja 3D", "Dokumentacja techniczna", "Nadzór autorski"],
  },
  {
    icon: Building2,
    title: "Przyklad 2",
    description: "Projektowanie przestrzeni domów jednorodzinnych z dbałością o każdy detal.",
    image : "/images/2.jpg",
    features: ["Projekt całościowy", "Dobór materiałów", "Aranżacja ogrodu"],
  },
  {
    icon: Trees,
    title: "Przyklad 3",
    description: "Tworzenie funkcjonalnych i pięknych przestrzeni zewnętrznych.",
    image : "/images/3.jpg",
    features: ["Projekty tarasów", "Małe ogrody", "Projekty patio"],
  },
  {
    icon: Sparkles,
    title: "Pryzklad 4",
    description: "Unikalne rozwiązania dostosowane do Twoich wymagań.",
    image : "/images/4.jpg",
    features: ["Nietypowe przestrzenie", "Koncepcje artystyczne", "Projekty specjalne"],
  },
];

export function Services() {
  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gray-100 text-gray-600 text-sm tracking-wider">
                NASZE USŁUGI
              </span>
            </div>
            <h2 className="text-gray-900 mb-6">Co oferujemy</h2>
            <p className="text-gray-600 text-lg">
              Kompleksowe rozwiązania projektowe dostosowane do Twoich potrzeb i budżetu.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-end"
          >
            <p className="text-gray-500">
              Każdy projekt traktujemy indywidualnie. Nasz zespół doświadczonych projektantów 
              łączy kreatywność z praktycznym podejściem, tworząc przestrzenie, które są zarówno 
              piękne, jak i funkcjonalne.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-gray-50 hover:bg-white transition-colors duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gray-900 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-4xl text-gray-200">0{index + 1}</span>
                  </div>

                  <h3 className="text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-700 text-sm">
                        <div className="w-1.5 h-1.5 bg-amber-500"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="ghost"
                    className="group/btn p-0 hover:bg-transparent text-gray-900"
                  >
                    Dowiedz się więcej
                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Button>
                </div>

                {/* Hover Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
