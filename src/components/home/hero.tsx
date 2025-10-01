
import { Button } from "../../components/ui/button";
import { ChevronDown, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { heroSection } from "../../config/home";

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
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3852159/pexels-photo-3852159.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 min-h-screen flex flex-col justify-between">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-8 border border-[#C79F7D]/30 shadow-sm">
              <Star className="w-4 h-4 text-[#C79F7D] fill-[#C79F7D]" />
              <span className="text-sm font-medium text-[#C79F7D]">
                30 años de experiencia en estética avanzada
              </span>
              <Star className="w-4 h-4 text-[#C79F7D] fill-[#C79F7D]" />
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl mb-8 leading-none">
              <span className="block font-light text-gray-800 mb-2">Descubre tu</span>
              <span className="block font-bold text-[#C79F7D]">
                Glow Natural
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Tratamientos personalizados que realzan tu belleza única con la última tecnología en estética
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link to={heroSection.buttons.primary.href}>
              <Button
                size="lg"
                className="group relative overflow-hidden bg-[#C79F7D] text-white hover:bg-[#B68E6C] hover:shadow-2xl transition-all duration-300 text-lg px-10 py-7 rounded-full"
              >
                <span className="relative z-10">{heroSection.buttons.primary.text}</span>
              </Button>
            </Link>
            <Link to={heroSection.buttons.secondary.href}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#C79F7D] text-[#C79F7D] hover:bg-[#C79F7D] hover:text-white transition-all duration-300 text-lg px-10 py-7 rounded-full bg-white/80 backdrop-blur-sm"
              >
                {heroSection.buttons.secondary.text}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative mb-16"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
              <img
                src="https://images.pexels.com/photos/3852159/pexels-photo-3852159.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Tratamiento de belleza profesional"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 z-20">
                <div className="flex items-center justify-center gap-8 text-white">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">30+</div>
                    <div className="text-sm">Años de experiencia</div>
                  </div>
                  <div className="w-px h-12 bg-white/30" />
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">100%</div>
                    <div className="text-sm">Satisfacción</div>
                  </div>
                  <div className="w-px h-12 bg-white/30" />
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">5★</div>
                    <div className="text-sm">Valoración</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-6xl mx-auto mb-8">
            {heroSection.categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                onClick={() => scrollToSection(category.href)}
                className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-5 border-2 border-[#C79F7D]/20 hover:border-[#C79F7D] hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-row sm:flex-col items-center sm:items-center gap-4 sm:gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#C79F7D]/10 flex items-center justify-center flex-shrink-0">
                    <category.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#C79F7D]" />
                  </div>
                  <span className="text-sm sm:text-sm font-semibold text-gray-800 text-left sm:text-center leading-tight flex-1 sm:flex-initial">
                    {category.title}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => scrollToSection("#why-us")}
              className="text-[#C79F7D] hover:text-[#B68E6C] flex flex-col items-center gap-2 animate-bounce mx-auto transition-colors duration-300"
            >
              <span className="text-sm font-medium">Descubre más</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
