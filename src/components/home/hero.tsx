

import { Button } from "../../components/ui/button";
import { ChevronDown } from "lucide-react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { heroSection } from "../../config/home";
import { CategoryCard } from "./category-card";



export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-[120vh] md:min-h-0 md:h-screen overflow-hidden">
      <div className="relative h-full">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)`,
            backgroundPosition: "right",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-between py-8">
            <div className="flex-1 flex flex-col justify-center">
              <div className="max-w-2xl text-white mb-8 md:mb-16 pt-32 md:pt-0">
                <h1
                  className={`${"font-serif"} text-4xl md:text-7xl mb-6 leading-tight text-[#C79F7D] md:text-white`}
                >
                  {heroSection.title}
                </h1>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to={heroSection.buttons.primary.href}>
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-[#C79F7D] text-white hover:bg-[#B68E6C] md:bg-white md:text-black md:hover:bg-white/90 text-lg px-8 py-6"
                    >
                      {heroSection.buttons.primary.text}
                    </Button>
                  </Link>
                  <Link to={heroSection.buttons.secondary.href}>
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-[#C79F7D] text-white hover:bg-[#B68E6C] md:bg-white md:text-black md:hover:bg-white/90 text-lg px-8 py-6"
                    >
                      {heroSection.buttons.secondary.text}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Section Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto mb-12 md:mb-16 px-4">
              {heroSection.categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(category.href)}
                  className="rounded-xl border border-white/30 transition-all duration-300 p-4 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/50 flex flex-col items-center gap-2 aspect-square justify-center"
                >
                  <category.icon className="w-8 h-8 md:w-10 md:h-10 text-[#C79F7D]" />
                  <span className="text-white text-xs md:text-sm font-medium text-center">{category.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Discover More Arrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center mb-4"
            >
              <button
                onClick={() => scrollToSection("#why-us")}
                className="text-white flex flex-col items-center gap-2 animate-bounce mx-auto"
              >
                <span className="text-sm font-medium">Descubre más</span>
                <ChevronDown className="w-6 h-6" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
