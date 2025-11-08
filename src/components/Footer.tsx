import { Instagram, Facebook, Linkedin, ArrowUpRight } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="text-3xl mb-4 tracking-tight">LenDes</div>
            <p className="text-gray-400 mb-6">
              Tworzymy przestrzenie, które inspirują i odzwierciedlają Twoją osobowość.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white mb-6 uppercase text-sm tracking-wider">Nawigacja</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group">
                  Usługi
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group">
                  Portfolio
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group">
                  O nas
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group">
                  Kontakt
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-6 uppercase text-sm tracking-wider">Usługi</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Projekt mieszkania</li>
              <li>Projekt domu</li>
              <li>Projekt tarasu</li>
              <li>Projekt ogrodu</li>
              <li>Indywidualne projekty</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-6 uppercase text-sm tracking-wider">Kontakt</h4>
            <ul className="space-y-3 text-gray-400">
              <li>ul. Pomorska 31J/1</li>
              <li>15-548 Bialystok</li>
              <li className="pt-2">
                <a href="tel:+48785413509" className="hover:text-white transition-colors">
                  +48 785 413 509
                </a>
              </li>
              <li>
                <a href="mailto:kontakt@studio-design.pl" className="hover:text-white transition-colors">
                  olena.boiko@studio-design.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 LenDes. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Polityka prywatności
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Regulamin
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              RODO
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-amber-500 text-gray-900 flex items-center justify-center hover:bg-amber-400 transition-colors shadow-lg z-40"
        aria-label="Wróć na górę"
      >
        <ArrowUpRight className="h-6 w-6 rotate-45" />
      </button>
    </footer>
  );
}
