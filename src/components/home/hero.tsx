import { Button } from "../../components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";
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
    <section className="relative min-h-screen overflow-hidden bg-[#FDF8F3]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C79F7D] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#B68E6C] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-13rem)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-[#C79F7D]/20">
              <Sparkles className="w-4 h-4 text-[#C79F7D]" />
              <span className="text-sm font-medium text-gray-700">
                Tu belleza, nuestra pasión
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] text-gray-900">
                Eleva tu
                <br />
                <span className="font-bold text-[#C79F7D]">Belleza Natural</span>
              </h1>

              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Descubre tratamientos innovadores que transforman y rejuvenecen tu piel con resultados visibles
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to={heroSection.buttons.primary.href}>
                <Button
                  size="lg"
                  className="bg-[#C79F7D] text-white hover:bg-[#B68E6C] transition-all duration-300 px-8 py-6 rounded-full text-base shadow-lg hover:shadow-xl hover:scale-105"
                >
                  {heroSection.buttons.primary.text}
                </Button>
              </Link>
              <Link to={heroSection.buttons.secondary.href}>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-gray-700 hover:text-[#C79F7D] transition-all duration-300 px-8 py-6 text-base group"
                >
                  {heroSection.buttons.secondary.text}
                  <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-6">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-gray-900">30+</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>

              <div className="bg-white rounded-2xl px-6 py-3 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C79F7D] to-[#B68E6C] border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B68E6C] to-[#A67D5B] border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#A67D5B] to-[#956C4A] border-2 border-white"></div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                    <div className="text-xs text-gray-600">Valoración media</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-[#C79F7D]/10 via-transparent to-[#B68E6C]/10 rounded-[3rem] blur-3xl"></div>

              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                    <img
                      src="https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Tratamiento facial"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                    <img
                      src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Cuidado de piel"
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-12">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                    <img
                      src="https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Masaje facial"
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                    <img
                      src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Tratamiento premium"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("#why-us")}
            className="text-gray-500 hover:text-[#C79F7D] flex flex-col items-center gap-2 animate-bounce transition-colors duration-300"
          >
            <span className="text-sm font-medium">Descubre más</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
