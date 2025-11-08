import { motion } from "framer-motion";
import { Award, Users, Lightbulb, Target } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Kreatywność",
    description: "Każdy projekt to nowe wyzwanie. Łączymy innowacyjne pomysły z praktycznym designem.",
  },
  {
    icon: Users,
    title: "Indywidualne podejście",
    description: "Słuchamy potrzeb męża i tworzymy przestrzenie odzwierciedlające Twoją osobowość.",
  },
  {
    icon: Award,
    title: "Najwyższa jakość",
    description: "2 lata doświadczenia i uznanie w branży. Dbamy o każdy detal wykonania.",
  },
  {
    icon: Target,
    title: "Terminowość",
    description: "Dotrzymujemy terminów i budżetów. Jasna komunikacja na każdym etapie projektu.",
  },
];

export function About() {
  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-32"
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gray-100 text-gray-600 text-sm tracking-wider">
                O NAS
              </span>
            </div>
            <h2 className="text-gray-900 mb-6">
              Tworzymy przestrzenie, które inspirują
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Jesteśmy studiem projektowym z pasją do tworzenia wyjątkowych wnętrz. 
              Od 2 lat pomagamy klientom realizować marzenia o idealnej przestrzeni do życia.
            </p>
            <p className="text-gray-600 mb-8">
              Nasza filozofia opiera się na przekonaniu, że dobre projektowanie to nie tylko 
              estetyka, ale przede wszystkim zrozumienie potrzeb człowieka. Każdy projekt 
              zaczynamy od rozmowy i analizy stylu życia naszych klientów.
            </p>

            <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-4xl text-gray-900 mb-1">1</div>
                <div className="text-gray-600">Projekt</div>
              </div>
              <div>
                <div className="text-4xl text-gray-900 mb-1">2</div>
                <div className="text-gray-600">Lata doświadczenia</div>
              </div>
              <div>
                <div className="text-4xl text-gray-900 mb-1">1</div>
                <div className="text-gray-600">Zadowolony mąż</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mb-6">
              <img
                src="/images/1.jpg"
                alt="Studio design process"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-amber-500 text-white p-8 max-w-xs">
                <p className="text-sm mb-2">Design Award</p>
                <p className="mb-1">Best Interior Design Studio 2024</p>
                <p className="text-sm opacity-80">Polish Design Association</p>
              </div>
            </div>

            <div className="mt-16 relative">
              <img
                src = "/images/2.jpg"
                alt="Team workspace"
                className="w-2/3 ml-auto h-[400px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-gray-900 mb-4">Nasze wartości</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Cztery filary, na których opieramy naszą pracę
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 group-hover:bg-amber-500 transition-colors duration-300 mb-6">
                    <Icon className="h-8 w-8 text-gray-900 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
