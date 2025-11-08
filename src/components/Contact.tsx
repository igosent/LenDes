import { motion } from "motion/react";
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock form submission
    toast.success("Dziękujemy za wiadomość! Skontaktujemy się wkrótce.");
    setFormData({ name: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gray-100 text-gray-600 text-sm tracking-wider">
              KONTAKT
            </span>
          </div>
          <h2 className="text-gray-900 mb-4">Porozmawiajmy o Twoim projekcie</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Skontaktuj się z nami, aby omówić szczegóły i rozpocząć współpracę
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-gray-900 mb-6">Dane kontaktowe</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-900 p-3 text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Telefon</p>
                    <a href="tel:+48785413509" className="text-gray-900 hover:text-amber-500 transition-colors">
                      +48 785 413 509
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-900 p-3 text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Email</p>
                    <a href="mailto:kontakt@studio-design.pl" className="text-gray-900 hover:text-amber-500 transition-colors">
                      olena.boiko@studio-design.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-900 p-3 text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Adres</p>
                    <p className="text-gray-900">
                      ul. Pomorska 31J/1<br />
                      15/548 Bialystok
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-900 p-3 text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Godziny otwarcia</p>
                    <div className="text-gray-900 space-y-1">
                      <p>Pon - Pt: 9:00 - 18:00</p>
                      <p>Sobota: 10:00 - 14:00</p>
                      <p>Niedziela: Zamknięte</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gray-900 text-white p-8 border-0">
              <h3 className="text-white mb-4">Umów bezpłatną konsultację</h3>
              <p className="text-gray-400 mb-6">
                Spotkajmy się, aby omówić Twoje pomysły i stworzyć koncepcję Twojej wymarzonej przestrzeni.
              </p>
              <Button 
                className="w-full bg-amber-500 text-gray-900 hover:bg-amber-400"
                size="lg"
              >
                Umów spotkanie
              </Button>
            </Card>
          </motion.div>

          {/* Contact Form - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Card className="p-8 border-2 border-gray-200 shadow-lg">
              <h3 className="text-gray-900 mb-6">Wyślij wiadomość</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-900">
                      Imię i nazwisko *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jan Kowalski"
                      required
                      className="h-12 border-gray-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-900">
                      Telefon *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+48 123 456 789"
                      required
                      className="h-12 border-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-900">
                    Wiadomość *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Opowiedz nam o swoim projekcie..."
                    rows={6}
                    required
                    className="border-gray-300 resize-none"
                  />
                </div>

                <p className="text-gray-500 text-sm">
                  * Pola wymagane. Wysyłając formularz akceptujesz naszą politykę prywatności.
                </p>

                <Button
                  type="submit"
                  className="w-full h-12 bg-gray-900 hover:bg-gray-800 transition-colors group"
                  size="lg"
                >
                  Wyślij wiadomość
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="h-96 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">ul. Pomorska 31J/1, 15-548 Bialystok</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
