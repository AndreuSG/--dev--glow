import React, { useState } from 'react';
import { serviceCategories } from "../config/services";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function ServiciosPage() {
  const [activeCategory, setActiveCategory] = useState<string>('facial');

  const categories = Object.keys(serviceCategories);
  const currentCategory = serviceCategories[activeCategory];

  return (
    <div className="min-h-screen bg-[#F5EDE4]">
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-7xl md:text-8xl font-serif text-[#4A3F35] mb-8 tracking-tight">
              Servicios
            </h1>
            <p className="text-2xl text-[#4A3F35]/60 max-w-2xl mx-auto font-light">
              Experiencias de bienestar diseñadas para ti
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center mb-20"
          >
            <div className="inline-flex bg-white rounded-full p-2 shadow-xl">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-8 py-4 text-lg font-medium rounded-full transition-all duration-500 ${
                    activeCategory === category
                      ? 'bg-[#C79F7D] text-white shadow-lg'
                      : 'text-[#4A3F35]/70 hover:text-[#4A3F35]'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-16 text-center">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block bg-[#C79F7D]/10 px-6 py-3 rounded-full mb-6"
                >
                  <span className="text-[#C79F7D] font-semibold tracking-wider text-sm uppercase">
                    Tratamientos {currentCategory.name}es
                  </span>
                </motion.div>
                <p className="text-xl text-[#4A3F35]/70 max-w-4xl mx-auto leading-relaxed">
                  {currentCategory.description}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {currentCategory.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                      <div className="relative h-80 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-3xl font-serif text-[#4A3F35] mb-4 group-hover:text-[#C79F7D] transition-colors duration-300">
                          {service.title}
                        </h3>

                        <p className="text-[#4A3F35]/70 leading-relaxed mb-6 flex-grow">
                          {service.description}
                        </p>

                        <div className="flex items-center gap-3 mb-6 text-[#4A3F35]/60">
                          <Calendar className="w-5 h-5" />
                          <span className="text-sm font-medium">{service.duration}</span>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-[#4A3F35]/10">
                          <span className="text-2xl font-serif text-[#C79F7D]">
                            {service.price}
                          </span>
                          <Link to="/contacto">
                            <Button className="bg-[#C79F7D] hover:bg-[#B68E6C] text-white rounded-full px-6 py-6 group-hover:scale-105 transition-transform duration-300">
                              Reservar
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
