import { useRef } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Testimonials } from "./components/Testimonials";
import { About } from "./components/About";
import { CostEstimator } from "./components/CostEstimator";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { AccessibilityToolbar } from "./components/AccessibilityToolbar"; // импортируем

export default function App() {
  const contactRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onOrderClick={scrollToContact} />
      
      <Hero onOrderClick={scrollToContact} onCalculateClick={scrollToCalculator} />
      
      <div id="services">
        <Services />
      </div>
      
      <div id="portfolio">
        <Portfolio />
      </div>
      
      <Testimonials />
      
      <div id="about">
        <About />
      </div>
      
      <div ref={calculatorRef}>
        <CostEstimator />
      </div>
      
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>
      
      <Footer />
      
      <Toaster />

      {/* Панель доступности */}
      <AccessibilityToolbar />
    </div>
  );
}
