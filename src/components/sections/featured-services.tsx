

import { siteConfig } from "../../config/site";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FeaturedServices() {
  return (
    <section className="py-20 px-4 bg-[#F5EDE4] diagonal-top diagonal-bottom relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-serif text-center mb-4 text-[#4A3F35]">
          Novedades
        </h2>
        <p className="text-lg text-center text-[#4A3F35]/80 mb-16 max-w-2xl mx-auto">
          Descubre nuestros tratamientos más innovadores con resultados probados
        </p>

        <div className="space-y-16">
          {siteConfig.featuredServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 p-6">
                <span className="inline-block bg-[#C79F7D]/10 text-[#C79F7D] text-sm font-medium px-4 py-2 rounded-full mb-4">
                  Nuevo tratamiento
                </span>
                <h3 className="text-4xl font-serif text-[#4A3F35] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#4A3F35]/70 text-xl leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 text-[#C79F7D] font-medium hover:text-[#B68E6C] transition-colors group"
                >
                  <span>Consultar precio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
