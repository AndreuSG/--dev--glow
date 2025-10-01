"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, Star, ShoppingBag, MessageCircle, ChevronDown, Heart } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { WhyUs } from "./why-us";

const playfair = Playfair_Display({ subsets: ["latin"] });

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
      <section className="relative min-h-[90vh] md:h-screen">
        <div className="relative h-full">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
            style={{ 
              backgroundImage: `url(https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)`,
              backgroundPosition: "right"
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col">
              <div className="flex-1 flex flex-col justify-center">
                <div className="max-w-2xl text-white mb-8 md:mb-16 pt-32 md:pt-0">
                  <h1 
                    className={`${playfair.className} text-4xl md:text-7xl mb-6 leading-tight`}
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
                  >
                    Glow estética avanzada
                  </h1>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/equipo">
                      <Button
                        size="lg"
                        className="hidden md:inline-flex w-full sm:w-auto bg-white text-black hover:bg-white/90 text-lg px-8 py-6"
                      >
                        Conoce nuestro equipo
                      </Button>
                    </Link>
                    <Link href="/contacto">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto border-white text-white hover:text-[#C79F7D] text-lg px-8 py-6"
                      >
                        Contáctanos
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Section Categories */}
              <div className="pb-8 -mt-48 md:-mt-48 md:mb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                  {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full"
                  >
                    <button 
                    onClick={() => scrollToSection(section.href)}
                    className="w-full h-full text-left"
                    >
                    <div className={`group cursor-pointer rounded-2xl border border-white/20 transition-all duration-300 h-full p-4 md:p-8
                      md:bg-white/10 md:backdrop-blur-sm md:hover:bg-white/20
                      bg-white/80 backdrop-blur-md
                    `}>
                      <section.icon className="w-6 h-6 md:w-8 md:h-8 text-[#C79F7D] mb-4 md:mb-6" />
                      <h3 className="text-[#4A3F35] md:text-white font-serif text-lg md:text-2xl mb-2 md:mb-3">{section.title}</h3>
                      <p className="text-[#4A3F35]/80 md:text-white/80 text-sm leading-relaxed">
                      {section.description}
                      </p>
                    </div>
                    </button>
                  </motion.div>
                  ))}
                </div>
              </div>

              {/* Discover More Arrow */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-center"
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
      <div id="why-us" className="mt-48 md:mt-0">
        <WhyUs />
      </div>
    </>
  );
}