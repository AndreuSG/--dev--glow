"use client";

import { motion } from "framer-motion";
import { Check, Users, Heart, Sparkles } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const reasons = [
  {
    title: "Experiencia",
    description: "30 años de experiencia y especialización en estética avanzada. Profesionales altamente cualificados.",
    icon: Check
  },
  {
    title: "Personalización",
    description: "Tratamientos adaptados a tus necesidades específicas. Atención individualizada y seguimiento continuo.",
    icon: Users
  },
  {
    title: "Dedicación",
    description: "Técnica especializada en tratamientos faciales y corporales. Expertos en rejuvenecimiento no invasivo.",
    icon: Heart
  },
  {
    title: "Innovación",
    description: "Tecnología de última generación para resultados óptimos. Plasma Pen. Blefaroplastía y lifting sin cirugía.",
    icon: Sparkles
  }
];

export function WhyUs() {
  return (
    <section className="py-32 px-4 bg-[#F7F3EE]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`${playfair.className} text-4xl text-[#4A3F35] mb-4`}>¿Por qué elegirnos?</h2>
          <p className="text-[#4A3F35]/80 max-w-2xl mx-auto">
            Descubre por qué somos tu mejor opción para cuidar tu belleza y bienestar
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-6 rounded-full bg-[#C79F7D]/10 flex items-center justify-center">
                  <reason.icon className="w-8 h-8 text-[#C79F7D]" />
                </div>
                <h3 className={`${playfair.className} text-2xl text-[#4A3F35] mb-4`}>
                  {reason.title}
                </h3>
                <p className="text-[#4A3F35]/80 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}