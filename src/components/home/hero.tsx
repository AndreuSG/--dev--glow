
import { Button } from "../../components/ui/button";
import { ChevronDown, Sparkles, Star } from "lucide-react";
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
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#C79F7D]/20 to-rose-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-[#C79F7D]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 min-h-screen flex flex-col justify-between">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#C79F7D]/10 to-rose-100/50 rounded-full mb-8 border border-[#C79F7D]/20">
              <Star className="w-4 h-4 text-[#C79F7D] fill-[#C79F7D]" />
              <span className="text-sm font-medium bg-gradient-to-r from-[#C79F7D] to-rose-600 bg-clip-text text-transparent">
                30 años de experiencia en estética avanzada
              </span>
              <Star className="w-4 h-4 text-[#C79F7D] fill-[#C79F7D]" />
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl mb-8 leading-none">
              <span className="block font-light text-gray-800 mb-2">Descubre tu</span>
              <span className="block font-bold bg-gradient-to-r from-[#C79F7D] via-rose-400 to-amber-400 bg-clip-text text-transparent">
                Glow Natural
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
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
                className="group relative overflow-hidden bg-gradient-to-r from-[#C79F7D] to-[#B68E6C] text-white hover:shadow-2xl transition-all duration-300 text-lg px-10 py-7 rounded-full"
              >
                <span className="relative z-10">{heroSection.buttons.primary.text}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#B68E6C] to-[#C79F7D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
            <Link to={heroSection.buttons.secondary.href}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#C79F7D] text-[#C79F7D] hover:bg-[#C79F7D] hover:text-white transition-all duration-300 text-lg px-10 py-7 rounded-full"
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C79F7D]/30 via-transparent to-rose-400/30 z-10" />
              <img
                src="https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Tratamiento de belleza profesional"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8 z-20">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-8">
            {heroSection.categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                onClick={() => scrollToSection(category.href)}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#C79F7D] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C79F7D] to-rose-400 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#C79F7D]/10 to-rose-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-7 h-7 text-[#C79F7D]" />
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-gray-700 text-center leading-tight group-hover:text-[#C79F7D] transition-colors duration-300">
                    {category.title}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => scrollToSection("#why-us")}
              className="text-gray-400 hover:text-[#C79F7D] flex flex-col items-center gap-2 animate-bounce mx-auto transition-colors duration-300"
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
