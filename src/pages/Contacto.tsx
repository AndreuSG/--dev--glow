import React from 'react';
import { motion } from "framer-motion";
import { contactInfo } from "../config/contact";
import { ContactInfoCard } from "../components/contact/contact-info-card";
import { ContactForm } from "../components/contact/contact-form";
import { ContactMap } from "../components/contact/contact-map";

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-[#F5EDE4]">
      <div className="relative h-[40vh]">
        <img
          src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Contacto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Contacta con nosotros</h1>
            <p className="text-xl text-white">Estamos aquí para ayudarte a conseguir los resultados que deseas</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            >
              {contactInfo.map((info, index) => (
                <ContactInfoCard key={index} info={info} index={index} />
              ))}
            </motion.div>

            <ContactMap />
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
