
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex flex-col justify-center">
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
            className="flex flex-col sm:flex-row gap-4 justify-center"
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-20"
        >
          <button
            onClick={() => scrollToSection("#why-us")}
            className="text-[#C79F7D] hover:text-[#B68E6C] flex flex-col items-center gap-2 animate-bounce mx-auto transition-colors duration-300"
          >
            <span className="text-sm font-medium">Descubre más</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
