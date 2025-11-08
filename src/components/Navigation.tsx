// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Button } from "./ui/button";
// import { Menu, X } from "lucide-react";

// interface NavigationProps {
//   onOrderClick: () => void;
//   onAccessibilityClick?: () => void;
// }

// export function Navigation({ onOrderClick, onAccessibilityClick }: NavigationProps) {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (id: string) => {
//     const el = document.getElementById(id);
//     el?.scrollIntoView({ behavior: "smooth" });
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6 }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
//           <div className={`transition-colors duration-300 ${isScrolled ? "text-gray-900" : "text-white"}`}>
//             <span className="text-2xl tracking-tight">LenDes</span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-4">
//             <button onClick={() => scrollToSection("services")} className={`transition-colors hover:opacity-70 ${isScrolled ? "text-gray-900" : "text-white"}`}>Usługi</button>
//             <button onClick={() => scrollToSection("portfolio")} className={`transition-colors hover:opacity-70 ${isScrolled ? "text-gray-900" : "text-white"}`}>Portfolio</button>
//             <button onClick={() => scrollToSection("about")} className={`transition-colors hover:opacity-70 ${isScrolled ? "text-gray-900" : "text-white"}`}>O nas</button>
//             <button onClick={() => scrollToSection("contact")} className={`transition-colors hover:opacity-70 ${isScrolled ? "text-gray-900" : "text-white"}`}>Kontakt</button>

//             <Button onClick={onOrderClick} className={`${isScrolled ? "bg-gray-900 text-white hover:bg-gray-800" : "bg-white text-gray-900 hover:bg-gray-100"}`}>Zamów projekt</Button>

//             {onAccessibilityClick && (
//               <Button onClick={onAccessibilityClick} className="bg-yellow-500 text-black hover:bg-yellow-400">
//                 Accessibility
//               </Button>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`md:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}>
//             {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           className="fixed inset-0 z-50 bg-white pt-20 flex flex-col items-center gap-8 p-8"
//         >
//           <button onClick={() => scrollToSection("services")} className="text-2xl text-gray-900 hover:opacity-70">Usługi</button>
//           <button onClick={() => scrollToSection("portfolio")} className="text-2xl text-gray-900 hover:opacity-70">Portfolio</button>
//           <button onClick={() => scrollToSection("about")} className="text-2xl text-gray-900 hover:opacity-70">O nas</button>
//           <button onClick={() => scrollToSection("contact")} className="text-2xl text-gray-900 hover:opacity-70">Kontakt</button>

//           <Button onClick={onOrderClick} size="lg" className="bg-gray-900 text-white">Zamów projekt</Button>

//           {onAccessibilityClick && (
//             <Button onClick={onAccessibilityClick} size="lg" className="bg-yellow-500 text-black">Accessibility</Button>
//           )}
//         </motion.div>
//       )}
//     </>
//   );
// }


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onOrderClick: () => void;
  onAccessibilityClick?: () => void;
}

export function Navigation({ onOrderClick, onAccessibilityClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className={`transition-colors duration-300 ${isScrolled ? "text-gray-900" : "text-white"}`}>
            <span className="text-2xl tracking-tight">LenDes</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => scrollToSection("services")} className={`transition-colors hover:opacity-70 ${isScrolled ? "text-gray-900" : "text-white"}`}>Usługi</button>
            <button onClick={() => scrollToSection("portfolio")} className={`transition-colors hover:opacity-70 ${isScrolled ? "text-gray-900" : "text-white"}`}>Portfolio</button>
            <button onClick={() => scrollToSection("about")} className={`transition-colors hover:opacity-70 ${isScrolled ? "text-gray-900" : "text-white"}`}>O nas</button>
            <button onClick={() => scrollToSection("contact")} className={`transition-colors hover:opacity-70 ${isScrolled ? "text-gray-900" : "text-white"}`}>Kontakt</button>

            <Button onClick={onOrderClick} className={`${isScrolled ? "bg-gray-900 text-white hover:bg-gray-800" : "bg-white text-gray-900 hover:bg-gray-100"}`}>Zamów projekt</Button>

            {onAccessibilityClick && (
              <Button
                onClick={() => {
                  console.log("Accessibility clicked");
                  onAccessibilityClick();
                }}
                className="bg-yellow-500 text-black hover:bg-yellow-400"
              >
                Accessibility
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`md:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-50 bg-white pt-20 flex flex-col items-center gap-8 p-8"
        >
          <button onClick={() => scrollToSection("services")} className="text-2xl text-gray-900 hover:opacity-70">Usługi</button>
          <button onClick={() => scrollToSection("portfolio")} className="text-2xl text-gray-900 hover:opacity-70">Portfolio</button>
          <button onClick={() => scrollToSection("about")} className="text-2xl text-gray-900 hover:opacity-70">O nas</button>
          <button onClick={() => scrollToSection("contact")} className="text-2xl text-gray-900 hover:opacity-70">Kontakt</button>

          <Button onClick={onOrderClick} size="lg" className="bg-gray-900 text-white">Zamów projekt</Button>

          {onAccessibilityClick && (
            <Button onClick={onAccessibilityClick} size="lg" className="bg-yellow-500 text-black">Accessibility</Button>
          )}
        </motion.div>
      )}
    </>
  );
}

{}