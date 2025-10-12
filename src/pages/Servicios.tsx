import { serviceCategories } from "../config/services";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-[#F5EDE4]">
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Nuestros tratamientos"
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
              Nuestros tratamientos
            </h1>

            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Tratamientos innovadores personalizados para cada necesidad
            </p>
          </motion.div>
        </div>
      </section>

      {Object.entries(serviceCategories).map(([key, category], sectionIndex) => {
        const bgColor = sectionIndex % 2 === 0 ? 'bg-[#F5EDE4]' : 'bg-[#F7F3EE]';
        return (
        <section key={key} id={key} className={`py-20 px-4 ${bgColor}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl text-[#4A3F35] mb-6">
              Tratamientos {category.name.toLowerCase()}es
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
                    <h3 className="text-2xl text-[#4A3F35] mb-4">
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
