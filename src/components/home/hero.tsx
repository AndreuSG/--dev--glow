import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Tratamiento facial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative h-[70vh] flex mt-[50px] items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-6 sm:space-y-8"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light leading-tight text-white">
            Tu bienestar,
            <br />
            <span className="font-bold">nuestra prioridad</span>
          </h1>

          <p className="text-base sm:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Descubre tratamientos innovadores que transforman y rejuvenecen tu piel con resultados visibles
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/tratamientos">
              <Button
                size="lg"
                className="bg-[#C79F7D] text-white hover:bg-[#B68E6C] transition-all duration-300 px-6 py-4 sm:px-8 sm:py-6 rounded-full text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto"
              >
                Nuestros tratamientos
              </Button>
            </Link>
            <Link to="/contacto">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 transition-all duration-300 px-6 py-4 sm:px-8 sm:py-6 rounded-full text-sm sm:text-base w-full sm:w-auto"
              >
                Contacto
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
