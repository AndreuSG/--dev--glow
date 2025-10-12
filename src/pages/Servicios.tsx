import React from 'react';
import { serviceCategories } from "../config/services";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function ServiciosPage() {
  const allServices = Object.entries(serviceCategories).flatMap(([key, category]) =>
    category.services.map(service => ({
      ...service,
      category: category.name
    }))
  );

  return (
    <div className="min-h-screen bg-[#F5EDE4]">
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.2em] uppercase text-[#C79F7D] mb-4">
              Nuestros Tratamientos
            </p>
            <h1 className="text-5xl md:text-6xl font-light text-[#4A3F35] mb-6">
              Servicios de Estética
            </h1>
            <p className="text-lg text-[#4A3F35]/60 max-w-2xl mx-auto">
              Descubre nuestra selección de tratamientos profesionales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-sm overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#C79F7D] text-white text-xs px-3 py-1 rounded-sm">
                      {service.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-light text-[#4A3F35] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#4A3F35]/70 leading-relaxed mb-4 min-h-[60px]">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-[#4A3F35]/60 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{service.duration}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#4A3F35]/10">
                    <span className="text-lg font-light text-[#4A3F35]">
                      {service.price}
                    </span>
                    <Link to="/contacto">
                      <Button
                        variant="ghost"
                        className="text-[#C79F7D] hover:text-[#B68E6C] hover:bg-transparent p-0 h-auto font-light"
                      >
                        Reservar
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-20 bg-white rounded-sm p-12 text-center"
          >
            <h2 className="text-3xl font-light text-[#4A3F35] mb-4">
              ¿No estás seguro de qué tratamiento elegir?
            </h2>
            <p className="text-[#4A3F35]/70 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de profesionales estará encantado de asesorarte y ayudarte a encontrar el tratamiento perfecto para ti
            </p>
            <Link to="/contacto">
              <Button className="bg-[#C79F7D] hover:bg-[#B68E6C] text-white px-8 py-6 rounded-sm">
                Contactar con nosotros
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
