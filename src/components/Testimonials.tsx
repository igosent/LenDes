import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anna Kowalska",
    role: "CEO, Tech Startup",
    content: "Współpraca z LenDes była niesamowitym doświadczeniem. Zespół doskonale zrozumiał moją wizję i przekroczył wszystkie oczekiwania. Moje mieszkanie to teraz miejsce, które naprawdę inspiruje.",
    rating: 5,
    image: "AK",
  },
  {
    name: "Piotr Nowak",
    role: "Przedsiębiorca",
    content: "Profesjonalizm na najwyższym poziomie. Każdy detal został przemyślany, a proces realizacji był bezproblemowy. Polecam każdemu, kto szuka wyjątkowego designu.",
    rating: 5,
    image: "PN",
  },
  {
    name: "Magdalena Wiśniewska",
    role: "Architektka krajobrazu",
    content: "Projekt mojego tarasu przekroczył wszelkie wyobrażenia. LenDes łączy kreatywność z funkcjonalnością w sposób, którego nie spotkałam nigdzie indziej. To prawdziwi artyści swojego fachu.",
    rating: 5,
    image: "MW",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 px-4 bg-gray-900 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 blur-3xl rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-white/5 text-gray-400 text-sm tracking-wider border border-white/10">
              OPINIE KLIENTÓW
            </span>
          </div>
          <h2 className="text-white mb-6">Co mówią o nas</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Zadowolenie naszych klientów jest dla nas najważniejsze
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 h-full">
                <Quote className="h-10 w-10 text-amber-500 mb-6" />
                
                <p className="text-gray-300 mb-8 text-lg italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                    <span className="text-white">{testimonial.image}</span>
                  </div>
                  <div>
                    <p className="text-white mb-1">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
