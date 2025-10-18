import type { TeamMember } from "@/types/team";
import { prefixPath } from "../lib/prefixPath";

export const teamMembers: Record<string, { member: TeamMember; description: string }> = {
  rosa: {
    description:
      "Rosa es nuestra directora y especialista en estética avanzada con más de 15 años de experiencia en el sector. Certificada en las técnicas más innovadoras del mercado, se especializa en tratamientos de rejuvenecimiento no invasivo y es experta oficial en Plasma Pen.",
    member: {
      name: "Rosa",
      role: "Directora y Especialista en Estética Avanzada",
      description:
        "Con más de 15 años de experiencia en el sector de la estética avanzada. Especialista certificada en Plasma Pen y técnicas de rejuvenecimiento no invasivo. Su pasión por la belleza y el bienestar la ha llevado a formarse continuamente en las últimas tecnologías del sector.",
      image: "/img/team/rosa1.jpg",
      specialties: [
        "Plasma Pen",
        "Rejuvenecimiento facial",
        "Blefaroplastia sin cirugía",
        "Tratamientos anti-edad",
      ],
    },
  },
  claudia: {
    description:
      "Claudia es nuestra especialista en tratamientos faciales y corporales con más de 10 años de experiencia. Experta en las técnicas más avanzadas para el cuidado de la piel, se mantiene siempre actualizada con las últimas innovaciones en estética profesional.",
    member: {
      name: "Claudia",
      role: "Especialista en Tratamientos Faciales y Corporales",
      description:
        "Experta en tratamientos faciales y corporales con más de 10 años de experiencia. Especializada en técnicas de última generación para el cuidado de la piel. Su enfoque personalizado y atención al detalle garantizan resultados excepcionales para cada cliente.",
      image: "/img/team/claudia1.jpg",
      specialties: [
        "Tratamientos faciales",
        "Tratamientos corporales",
        "Tecnología láser",
        "Hidratación profunda",
      ],
    },
  },
};