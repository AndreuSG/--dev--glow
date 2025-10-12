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
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 py-4 sticky top-[72px] bg-[#F5EDE4] z-40">
          <div role="tablist" className="flex justify-center gap-6">
            {['facial', 'corporal', 'masajes'].map((category) => (
              <button
                key={category}
                onClick={() => scrollToSection(category)}
                className="px-6 py-2 text-lg font-semibold tracking-[.03em] rounded-full transition-all duration-250 ease-in-out bg-transparent border border-[#AE8871] text-[#AE8871] hover:bg-[#AE8871] hover:text-white"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {Object.entries(serviceCategories).map(([key, category], sectionIndex) => {
        const bgColor = sectionIndex % 2 === 0 ? 'bg-[#F5EDE4]' : 'bg-[#F7F3EE]';
        return (
        <section key={key} id={key} className={`py-20 px-4 diagonal-top diagonal-bottom relative ${bgColor}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-5xl text-[#4A3F35] mb-6">
              Tratamientos {category.name}es
            </h2>
            <p className="text-xl text-[#4A3F35]/80 max-w-3xl leading-relaxed mb-16">
              {category.description}
            </p>

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
