import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { ContactInfo } from "@/types/contact";

export const contactInfo: ContactInfo[] = [
	{
		icon: Phone,
		title: "Teléfono",
		details: ["+34 601 99 52 34"],
	},
	{
		icon: Mail,
		title: "Email",
		details: ["glowesteticaavanzada@gmail.com"],
	},
	{
		icon: MapPin,
		title: "Dirección",
		details: ["Calle Alberes 62, 17300 Blanes, Girona, España"],
	},
	{
		icon: Clock,
		title: "Horario",
		details: [
			"Lunes - Viernes: 9:00-13:00 | 15:00-19:00",
			"Sábados y Domingos: Cerrado",
		],
	},
];