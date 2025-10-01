

import { Button } from "../../components/ui/button";
import { Sparkles, Star, ShoppingBag, MessageCircle, ChevronDown, Heart } from "lucide-react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { WhyUs } from "./why-us";



const sections = [
  {
    title: "¿Por qué elegirnos?",
    description: "Descubre lo que nos hace únicos",
    icon: Heart,
    href: "#why-us"
  },
  {
    title: "Novedades",
    description: "Descubre nuestros tratamientos más innovadores",
    icon: Sparkles,
    href: "#novedades"
  },
  {
    title: "Servicios Destacados",
    description: "Tratamientos exclusivos para tu belleza",
    icon: Star,
    href: "#servicios"
  },
  {
    title: "Nuestros Productos",
    description: "Línea profesional TOSKANI y CASMARA",
    icon: ShoppingBag,
    href: "#productos"
  },
  {
    title: "Opiniones",
    description: "Lo que dicen nuestros clientes",
    icon: MessageCircle,
    href: "#testimonios"
  }
];

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <section className="relative min-h-screen">
        <div className="relative h-full min-h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)`,
              backgroundPosition: "right"
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative h-full min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Hero Content */}
              <div className="flex items-center h-[70vh] pt-20">
                <div className="max-w-2xl text-white">
                  <h1
                    className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
                  >
                    Glow estética avanzada
                  </h1>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/equipo">
                      <Button
                        size="lg"
                        className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6"
                      >
                        Conoce nuestro equipo
                      </Button>
                    </Link>
                    <Link to="/contacto">
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-2 border-white text-white hover:bg-white hover:text-[#C79F7D] text-lg px-8 py-6"
                      >
                        Contáctanos
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Section Categories - Only visible on desktop */}
              <div className="hidden lg:block absolute bottom-16 left-0 right-0 px-8">
                <div className="max-w-6xl mx-auto">
                  <div className="flex justify-center gap-3">
                    {sections.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                      onClick={() => scrollToSection(section.href)}
                      className="text-center"
                      >
                      <div className="group cursor-pointer rounded-lg border border-white/30 transition-all duration-300 px-4 py-2.5 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/50 flex items-center gap-2">
                        <section.icon className="w-4 h-4 text-[#C79F7D]" />
                        <h3 className="text-white text-sm font-medium whitespace-nowrap">{section.title}</h3>
                      </div>
                      </button>
                    </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Discover More Arrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center"
              >
                <button
                  onClick={() => scrollToSection('#why-us')}
                  className="text-white flex flex-col items-center gap-2 animate-bounce"
                >
                  <span className="text-sm font-medium">Descubre más</span>
                  <ChevronDown className="w-6 h-6" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <div id="why-us">
        <WhyUs />
      </div>
    </>
  );
}