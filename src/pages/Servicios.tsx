import React from 'react';
import { serviceCategories } from "../config/services";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function ServiciosPage() {
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
            Nuestros Servicios
          </h1>
          <p className="text-xl text-[#4A3F35]/70 leading-relaxed">
            Descubre tratamientos personalizados diseñados para realzar tu belleza natural
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto sticky top-[72px] bg-[#F5EDE4]/95 backdrop-blur-sm z-40 py-6">
          <div className="flex justify-center gap-3">
            {['facial', 'corporal', 'masajes'].map((category) => (
              <motion.button
                key={category}
                onClick={() => scrollToSection(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 text-base font-medium rounded-full transition-all duration-300 bg-white border-2 border-[#C79F7D] text-[#C79F7D] hover:bg-[#C79F7D] hover:text-white shadow-md hover:shadow-lg"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {Object.entries(serviceCategories).map(([key, category], sectionIndex) => {
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
                {category.name.toUpperCase()}
              </span>
              <h2 className="font-serif text-5xl md:text-6xl text-[#4A3F35] mb-6">
                Tratamientos {category.name}es
              </h2>
              <p className="text-xl text-[#4A3F35]/70 max-w-3xl mx-auto leading-relaxed">
                {category.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-serif text-[#4A3F35] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-base text-[#4A3F35]/80 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <Calendar className="w-5 h-5 text-[#C79F7D]" />
                      <span className="text-base text-[#4A3F35]/80">{service.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-medium text-[#C79F7D]">
                        {service.price}
                      </span>
                      <Link to="/contacto">
                        <Button className="bg-[#C79F7D] hover:bg-[#B68E6C] text-white">
                          Reservar ahora
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
