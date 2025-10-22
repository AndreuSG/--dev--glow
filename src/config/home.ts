import {
  Check,
  Users,
  Heart,
  Sparkles,
  Star,
  ShoppingBag,
  MessageCircle,
} from "lucide-react";
import type { HeroSection, WhyUsReason, InstagramPost } from "@/types/home";
import { prefixPath } from "../lib/prefixPath";

export const heroSection: HeroSection = {
  title: "Glow estética avanzada",
  buttons: {
    primary: {
      text: "Conoce nuestro equipo",
      href: "/equipo",
    },
    secondary: {
      text: "Contáctanos",
      href: "/contacto",
    },
  },
  categories: [
    {
      title: "¿Por qué elegirnos?",
      description: "Descubre lo que nos hace únicos",
      icon: "Heart",
      href: "#why-us",
    },
    {
      title: "Novedades",
      description: "Descubre nuestros tratamientos más innovadores",
      icon: "Sparkles",
      href: "#novedades",
    },
    {
      title: "Tratamientos destacados",
      description: "Tratamientos exclusivos para tu belleza",
      icon: "Star",
      href: "#servicios",
    },
    {
      title: "Nuestros productos",
      description: "Línea profesional TOSKANI y CASMARA",
      icon: "ShoppingBag",
      href: "#productos",
    },
    {
      title: "Opiniones",
      description: "Descubre lo que opinan nuestros clientes",
      icon: "MessageCircle",
      href: "#testimonios",
    },
  ],
};

export const whyUsReasons: WhyUsReason[] = [
  {
    title: "Experiencia",
    description:
      "30 años de experiencia y especialización en estética avanzada. Profesionales altamente cualificados.",
    icon: "Check",
  },
  {
    title: "Personalización",
    description:
      "Tratamientos adaptados a tus necesidades específicas. Atención individualizada y seguimiento continuo.",
    icon: "Users",
  },
  {
    title: "Dedicación",
    description:
      "Técnica especializada en Plasma Pen oficial. Expertos en rejuvenecimiento no invasivo.",
    icon: "Heart",
  },
  {
    title: "Innovación",
    description:
      "Tecnología de última generación para resultados óptimos. Blefaroplastía y lifting sin cirugía.",
    icon: "Sparkles",
  },
];

export const instagramPosts: InstagramPost[] = [
  {
    img: "/img/ig/post1.jpg",
    caption:
      "Nueva temporada! 💛 En Glow comenzamos esta etapa con mucha ilusión… Hoy queremos presentaros al corazón de nuestra estética: 💖 Nuestro equipo 💖 ✨Rosa – Especialista en estética facial y corporal, manos mágicas y el motor de este proyecto. Con una experiencia de 30 años en el sector. ✨ Claudia – Recepcionista y organizadora , la que siempre te recibe con buena energía. Especializada en tratamientos corporales.",
    link: "https://www.instagram.com/p/DO6WVfgDJ_H/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    img: "/img/ig/post2.jpg",
    caption: "✨ Bienvenid@ a nuestro espacio✨ Cada rincón de nuestra estética ha sido pensado para ofrecerte comodidad, lo último en tecnología y una experiencia única. 💫 \n Aquí no solo cuidamos tu piel, también cuidamos de ti. 💛",
    link: "https://www.instagram.com/reel/C1HMbhALMrg/?utm_source=ig_web_copy_link&igsh=MXVlbnA5YXM1OXYxNw==",
  },
  {
    img: "/img/ig/post3.jpg",
    caption: "Centro especializado en plasma pen ✨ #Transformation",
    link: "https://www.instagram.com/p/DKzXqoltcrc/?utm_source=ig_web_copy_link&igsh=MTg3eG4zMHN6MG9mZQ==",
  },
  {
    img: "/img/ig/post4.jpg",
    caption:
      "¡El verano está llegando! Tiempo de sol, playa y momentos al aire libre. Pero recuerda,también aumenta la exposición de tu piel. Este es el momento perfecto para prepararla, fortalecerla y protegerla. La mejor opción es nuestra mesoterapia, un tratamiento que consiste en aplicar pequeñas dosis de vitaminas, minerales y otros ingredientes activos directamente en la piel.",
    link: "https://www.instagram.com/p/DKNO8Pst3d0/?utm_source=ig_web_copy_link&igsh=Nmx3bncxdmhscWts",
  },
];
