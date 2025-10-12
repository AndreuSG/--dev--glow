import { productBrands } from "../config/products";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-[#F5EDE4]">
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Nuestros productos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative h-[70vh] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto space-y-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-tight text-white">
              Nuestros productos
            </h1>

            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Línea profesional de cosmética de alta calidad para el cuidado de tu piel
            </p>
          </motion.div>
        </div>
      </section>

      {Object.entries(productBrands).map(([key, brand], sectionIndex) => {
        const bgColor = sectionIndex % 2 === 0 ? 'bg-[#F5EDE4]' : 'bg-[#F7F3EE]';
        return (
        <section key={key} id={key} className={`py-20 px-4 diagonal-top diagonal-bottom relative ${bgColor}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl text-[#4A3F35] mb-6">
              {brand.name}
            </h2>
            <p className="text-xl text-[#4A3F35]/80 max-w-3xl leading-relaxed mb-16">
              {brand.description}
            </p>

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
                    <h3 className="text-2xl text-[#4A3F35] mb-4">
                      {product.name}
                    </h3>
                    <p className="text-base text-[#4A3F35]/80 leading-relaxed mb-6 flex-grow">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <Link to="/contacto">
                        <Button className="bg-[#C79F7D] hover:bg-[#B68E6C] text-white ml-auto">
                          <ShoppingBag className="w-4 h-4 mr-2" />
                          Comprar
                        </Button>
                      </Link>
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
