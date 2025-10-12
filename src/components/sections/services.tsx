

import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "../../config/site";

export function Services() {
  return (
    <section className="py-20 px-4 bg-[#F7F3EE]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-5xl font-serif text-[#4A3F35] mb-4">
              Tratamientos destacados
            </h2>
            <p className="text-lg text-[#4A3F35]/80 max-w-2xl">
              Descubre nuestros tratamientos más exclusivos para cuidar tu belleza
            </p>
          </div>
          <Link
            href="/servicios"
            className="hidden md:flex items-center gap-2 text-[#C79F7D] hover:text-[#B68E6C] transition-colors"
          >
            <span className="font-medium">Ver todos los tratamientos</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group bg-white h-full">
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-[#4A3F35]">{service.title}</h3>
                  <p className="text-base text-[#4A3F35]/80 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <Link
                      href="/contacto"
                      className="text-[#C79F7D] font-medium hover:text-[#B68E6C] transition-colors"
                    >
                      Consultar precio
                    </Link>
                    <Button className="bg-[#C79F7D] hover:bg-[#B68E6C] text-white">
                      Reservar
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <Link
          href="/servicios"
          className="mt-8 flex md:hidden items-center justify-center gap-2 text-[#C79F7D] hover:text-[#B68E6C] transition-colors"
        >
          <span className="font-medium">Ver todos los tratamientos</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}