import { Button } from "../../components/ui/button";
import { ChevronDown } from "lucide-react";
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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      <div
        className="absolute inset-0 bg-cover bg-right opacity-40"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl leading-tight">
                <span className="block font-light text-gray-800">Descubre tu</span>
                <span className="block font-bold text-gray-900">
                  Glow Natural
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-xl font-light leading-relaxed">
                Tratamientos personalizados que realzan tu belleza única con la última tecnología en estética
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={heroSection.buttons.primary.href}>
                <Button
                  size="lg"
                  className="bg-[#C79F7D] text-white hover:bg-[#B68E6C] transition-all duration-300 text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl"
                >
                  {heroSection.buttons.primary.text}
                </Button>
              </Link>
              <Link to={heroSection.buttons.secondary.href}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 text-lg px-10 py-6 rounded-full"
                >
                  {heroSection.buttons.secondary.text}
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#C79F7D]/20 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-[#C79F7D]/40 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-[#C79F7D]/60 border-2 border-white"></div>
              </div>
              <div className="text-sm text-gray-600">
                <div className="font-semibold text-gray-800">15,000+ clientes satisfechos</div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="ml-1">5.0 valoración</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#C79F7D]/20 to-[#B68E6C]/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Tratamiento estético"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-sm text-gray-600 mb-1">Desde</div>
                  <div className="text-3xl font-bold text-[#C79F7D]">€49.00</div>
                  <div className="text-sm text-gray-500 mt-1">Por sesión</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("#why-us")}
            className="text-gray-600 hover:text-gray-800 flex flex-col items-center gap-2 animate-bounce transition-colors duration-300"
          >
            <span className="text-sm font-medium">Descubre más</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
