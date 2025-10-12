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
      title: "Servicios destacados",
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
    img: prefixPath("/img/team/rosa.png"),
    caption:
      "✨¡Tú eres nuestra prioridad! ✨ Queremos sacar a relucir tu mejor versión y ofrecerte una experiencia única y personalizada.",
    link: "https://www.instagram.com/p/CV1a5k8F3g/",
  },
  {
    img: prefixPath("/img/post3.png"),
    caption: "Antes y después. Resultados en menos de 3 meses 🌟 #GlowUp",
    link: "https://www.instagram.com/reel/C1HMbhALMrg/?utm_source=ig_web_copy_link&igsh=MXVlbnA5YXM1OXYxNw==",
  },
  {
    img: prefixPath("/img/post4.png"),
    caption: "Centro especializado en plasma pen ✨ #Transformation",
    link: "https://www.instagram.com/p/DKzXqoltcrc/?utm_source=ig_web_copy_link&igsh=MTg3eG4zMHN6MG9mZQ==",
  },
  {
    img: prefixPath("/img/post5.png"),
    caption:
      "¡El verano está llegando! Tiempo de sol, playa y momentos al aire libre. Pero recuerda,también aumenta la exposición de tu piel. Este es el momento perfecto para prepararla, fortalecerla y protegerla. La mejor opción es nuestra mesoterapia, un tratamiento que consiste en aplicar pequeñas dosis de vitaminas, minerales y otros ingredientes activos directamente en la piel.",
    link: "https://www.instagram.com/p/DKNO8Pst3d0/?utm_source=ig_web_copy_link&igsh=Nmx3bncxdmhscWts",
  },
];
