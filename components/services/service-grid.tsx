"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Service } from "@/types/service";

interface ServiceGridProps {
  services: Service[];
}

export function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
                <p className="text-[#4A3F35]/80 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <Calendar className="w-5 h-5 text-[#C79F7D]" />
                  <span className="text-[#4A3F35]/80">{service.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-medium text-[#C79F7D]">
                    {service.price}
                  </span>
                  <Link href="/contacto">
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
    </div>
  );
}