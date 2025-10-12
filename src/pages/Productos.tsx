import React from 'react';
import { productBrands } from "../config/products";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ShoppingBag } from "lucide-react";

export default function ProductosPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
    <div className="min-h-screen bg-[#F5EDE4]">
      <div className="pt-32 pb-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h1 className="text-6xl md:text-7xl font-serif text-[#4A3F35] mb-6">
            Nuestros Productos
          </h1>
          <p className="text-xl text-[#4A3F35]/70 leading-relaxed">
            Productos profesionales de marcas líderes en cosmética avanzada
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto sticky top-[72px] bg-[#F5EDE4]/95 backdrop-blur-sm z-40 py-6">
          <div className="flex justify-center gap-3">
            <motion.button
              onClick={() => scrollToSection('toskani')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-base font-medium rounded-full transition-all duration-300 bg-white border-2 border-[#C79F7D] text-[#C79F7D] hover:bg-[#C79F7D] hover:text-white shadow-md hover:shadow-lg"
            >
              TOSKANI
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('casmara')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-base font-medium rounded-full transition-all duration-300 bg-white border-2 border-[#C79F7D] text-[#C79F7D] hover:bg-[#C79F7D] hover:text-white shadow-md hover:shadow-lg"
            >
              CASMARA
            </motion.button>
          </div>
        </div>
      </div>

      {Object.entries(productBrands).map(([key, brand], sectionIndex) => {
        const bgColor = sectionIndex % 2 === 0 ? 'bg-[#F5EDE4]' : 'bg-[#F7F3EE]';
        return (
        <section key={key} id={key} className={`py-20 px-4 diagonal-top diagonal-bottom relative ${bgColor}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block bg-[#C79F7D]/10 text-[#C79F7D] text-sm font-semibold px-4 py-2 rounded-full mb-6">
                MARCA PROFESIONAL
              </span>
              <h2 className="font-serif text-5xl md:text-6xl text-[#4A3F35] mb-6">
                {brand.name}
              </h2>
              <p className="text-xl text-[#4A3F35]/70 max-w-3xl mx-auto leading-relaxed">
                {brand.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brand.products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
                >
                  <div className="relative h-80 w-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-serif text-2xl text-[#4A3F35] mb-4">
                      {product.name}
                    </h3>
                    <p className="text-base text-[#4A3F35]/80 leading-relaxed mb-6 flex-grow">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <Button className="bg-[#C79F7D] hover:bg-[#B68E6C] text-white ml-auto">
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Comprar
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        );
      })}
    </div>
  );
}
