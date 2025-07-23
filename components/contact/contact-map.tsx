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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.6855925799736!2d2.170466776654675!3d41.38506659830161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f5cb49eb5d%3A0x927b5ab3fde45b04!2sBarcelona%2C%20Spain!5e0!3m2!1sen!2sus!4v1709913824947!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </motion.div>
  );
}