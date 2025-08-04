"use client";

import { motion } from "framer-motion";

export function ContactMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative aspect-[4/3] rounded-2xl overflow-hidden"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.8437645479936!2d2.7896344!3d41.6747095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bae4d5a5a5a5a5%3A0x12345678!2sCalle%20Alberes%2062%2C%2017300%20Blanes%2C%20Girona%2C%20Espa%C3%B1a!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de Glow Estética Avanzada"
      ></iframe>
    </motion.div>
  );
}