import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { ContactInfo } from "@/types/contact";

export const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    title: "Teléfono",
    details: ["+34 900 123 456"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@glowestetica.com"],
  },
  {
    icon: MapPin,
    title: "Dirección",
    details: ["Calle Principal 123", "08001 Barcelona"],
  },
  {
    icon: Clock,
    title: "Horario",
    details: ["Lunes - Viernes: 9:00 - 20:00", "Sábado: 9:00 - 14:00"],
  },
];