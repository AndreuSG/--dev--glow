

import { motion } from "framer-motion";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="p-8 bg-white/50 backdrop-blur-sm border-0">
        <h2 className="text-3xl font-serif text-[#4A3F35] mb-6">Envíanos un mensaje</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#4A3F35] mb-2">
                Nombre
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-[#C79F7D]/20 bg-white/50 focus:outline-none focus:border-[#C79F7D] transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#4A3F35] mb-2">
                Apellidos
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-[#C79F7D]/20 bg-white/50 focus:outline-none focus:border-[#C79F7D] transition-colors"
                placeholder="Tus apellidos"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#4A3F35] mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-lg border border-[#C79F7D]/20 bg-white/50 focus:outline-none focus:border-[#C79F7D] transition-colors"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#4A3F35] mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              className="w-full p-3 rounded-lg border border-[#C79F7D]/20 bg-white/50 focus:outline-none focus:border-[#C79F7D] transition-colors"
              placeholder="+34 600 000 000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#4A3F35] mb-2">
              Mensaje
            </label>
            <textarea
              rows={6}
              className="w-full p-3 rounded-lg border border-[#C79F7D]/20 bg-white/50 focus:outline-none focus:border-[#C79F7D] transition-colors"
              placeholder="¿En qué podemos ayudarte?"
            />
          </div>

          <Button className="w-full bg-[#C79F7D] hover:bg-[#B68E6C] text-white py-6 text-lg">
            <Send className="w-5 h-5 mr-2" />
            Enviar mensaje
          </Button>
        </form>
      </Card>
    </motion.div>
  );
}