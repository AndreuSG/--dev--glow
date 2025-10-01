
import { Button } from "../../components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { heroSection } from "../../config/home";
import { prefixPath } from "@/lib/prefixPath";

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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-white to-amber-50">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-rose-200/50 mb-6">
              <Sparkles className="w-4 h-4 text-[#C79F7D]" />
              <span className="text-sm font-medium text-gray-700">Estética Avanzada</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-6 leading-tight">
              <span className="block text-gray-900">Glow</span>
              <span className="block bg-gradient-to-r from-[#C79F7D] via-rose-400 to-amber-400 bg-clip-text text-transparent font-semibold">
                estética avanzada
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Realza tu belleza natural con tratamientos personalizados y tecnología de vanguardia
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to={heroSection.buttons.primary.href}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#C79F7D] to-[#B68E6C] text-white hover:shadow-xl hover:scale-105 transition-all duration-300 text-base px-8 py-6 rounded-full"
                >
                  {heroSection.buttons.primary.text}
                </Button>
              </Link>
              <Link to={heroSection.buttons.secondary.href}>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-[#C79F7D] text-[#C79F7D] hover:bg-[#C79F7D] hover:text-white transition-all duration-300 text-base px-8 py-6 rounded-full"
                >
                  {heroSection.buttons.secondary.text}
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-300 to-amber-300 rounded-3xl blur-2xl opacity-30" />
              <img
                src={prefixPath("/img/image.png")}
                alt="Glow Estética"
                className="relative w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {heroSection.categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                onClick={() => scrollToSection(category.href)}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50 hover:border-[#C79F7D]/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C79F7D]/10 to-rose-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-6 h-6 text-[#C79F7D]" />
                  </div>
                  <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                    {category.title}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-8"
        >
          <button
            onClick={() => scrollToSection("#why-us")}
            className="text-gray-500 hover:text-[#C79F7D] flex flex-col items-center gap-2 animate-bounce mx-auto transition-colors duration-300"
          >
            <span className="text-sm font-medium">Descubre más</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
