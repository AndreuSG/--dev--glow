import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 px-4 bg-[#F7F3EE] diagonal-top relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h2 className="text-4xl font-serif mb-6 text-[#4A3F35]">Contacta con nosotros</h2>
          <p className="text-lg text-[#4A3F35]/90 mb-8">
            Estamos aquí para responder tus preguntas y ayudarte a conseguir los
            resultados que deseas.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-[#4A3F35]">
              <Phone className="w-6 h-6" />
              <span>+34 601 99 52 34</span>
            </div>
            <div className="flex items-center gap-4 text-[#4A3F35]">
              <Mail className="w-6 h-6" />
              <span>glowesteticaavanzada@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-[#4A3F35]">
              <MapPin className="w-6 h-6" />
              <span>Calle Alberes 62, 17300 Blanes, Girona, España</span>
            </div>
            <div className="flex items-start gap-4 text-[#4A3F35]">
              <Clock className="w-6 h-6 mt-1" />
              <div>
                <div>Lunes - Viernes: 9:00-13:00 | 15:00-19:00</div>
                <div className="text-sm text-[#4A3F35]/70 mt-1">Sábados y Domingos: Cerrado</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Card className="p-6 bg-white shadow-md">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full p-3 border rounded-md bg-white focus:border-[#C79F7D] focus:ring-[#C79F7D] transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-md bg-white focus:border-[#C79F7D] focus:ring-[#C79F7D] transition-colors"
              />
              <textarea
                placeholder="Mensaje"
                rows={4}
                className="w-full p-3 border rounded-md bg-white focus:border-[#C79F7D] focus:ring-[#C79F7D] transition-colors"
              />
              <Button className="w-full bg-[#C79F7D] hover:bg-[#B68E6C] text-white transition-colors">
                Enviar mensaje
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}