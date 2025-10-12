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
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 py-4 sticky top-[72px] bg-[#F5EDE4] z-40">
          <div role="tablist" className="flex justify-center gap-6">
            <button
              onClick={() => scrollToSection('toskani')}
              className="px-6 py-2 text-lg font-semibold tracking-[.03em] rounded-full transition-all duration-250 ease-in-out bg-transparent border border-[#AE8871] text-[#AE8871] hover:bg-[#AE8871] hover:text-white"
            >
              TOSKANI
            </button>
            <button
              onClick={() => scrollToSection('casmara')}
              className="px-6 py-2 text-lg font-semibold tracking-[.03em] rounded-full transition-all duration-250 ease-in-out bg-transparent border border-[#AE8871] text-[#AE8871] hover:bg-[#AE8871] hover:text-white"
            >
              CASMARA
            </button>
          </div>
        </div>
      </div>

      {Object.entries(productBrands).map(([key, brand]) => (
        <section key={key} id={key} className="py-16">
          <div className="bg-[#E5D5C5] py-16 mb-16">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="font-serif text-5xl text-[#4A3F35] mb-6">
                {brand.name}
              </h2>
              <p className="text-xl text-[#4A3F35]/80 max-w-3xl leading-relaxed">
                {brand.description}
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4">
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
      ))}
    </div>
  );
}
