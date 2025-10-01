

import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
import { Button } from "../../components/ui/button";
import { siteConfig } from "../../config/site";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";



export function FeaturedProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 1,
      spacing: 48,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="py-20 px-4 bg-[#F5EDE4] diagonal-top diagonal-bottom relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2
              className="font-serif text-4xl text-[#4A3F35] mb-4"
            >
              Productos Destacados
            </h2>
            <p className="text-[#4A3F35]/80 max-w-2xl">
              Descubre nuestra línea profesional TOSKANI para el cuidado de tu
              piel
            </p>
          </div>
          <Link
            to="/productos"
            className="hidden md:flex items-center gap-2 text-[#C79F7D] hover:text-[#B68E6C] transition-colors"
          >
            <span className="font-medium">Ver todos los productos</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="relative px-16">
          <div ref={sliderRef} className="keen-slider h-[500px]">
            {siteConfig.featuredProducts.map((product, index) => (
              <div key={index} className="keen-slider__slide">
                <div className="h-full flex flex-col lg:flex-row gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 flex justify-center"
                  >
                    <div className="bg-[#F5EDE4] rounded-2xl overflow-hidden p-4 w-full max-w-[480px]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto object-contain rounded-2xl"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full lg:w-1/2"
                  >
                    <h3
                      className="font-serif text-4xl text-[#4A3F35] mb-4"
                    >
                      {product.name}
                    </h3>
                    <p className="text-lg text-[#4A3F35]/80 leading-relaxed mb-8">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-8">
                      <Link to="/contacto"> 
                        <Button className="bg-[#C79F7D] hover:bg-[#B68E6C] text-white px-8 py-6 text-lg">
                          <ShoppingBag className="w-5 h-5 mr-2" />
                          Consultar precio
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {loaded && (
            <>
              <button
                onClick={() => instanceRef.current?.prev()}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full hover:bg-white/90 transition-all duration-250 ease-in-out shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center z-10"
              >
                <ChevronLeft className="w-6 h-6 text-[#AE8871]" />
              </button>
              <button
                onClick={() => instanceRef.current?.next()}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full hover:bg-white/90 transition-all duration-250 ease-in-out shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center z-10"
              >
                <ChevronRight className="w-6 h-6 text-[#AE8871]" />
              </button>
            </>
          )}
        </div>

        <Link
          to="/productos"
          className="mt-8 flex md:hidden items-center justify-center gap-2 text-[#C79F7D] hover:text-[#B68E6C] transition-colors"
        >
          <span className="font-medium">Ver todos los productos</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
