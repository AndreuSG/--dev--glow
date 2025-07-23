import { Check, Users, Heart, Sparkles, Star, ShoppingBag, MessageCircle } from "lucide-react";
import type { HeroSection, WhyUsReason, InstagramPost } from "@/types/home";

export const heroSection: HeroSection = {
  title: "Glow estética avanzada",
  buttons: {
    primary: {
      text: "Conoce nuestro equipo",
      href: "/equipo"
    },
    secondary: {
      text: "Contáctanos",
      href: "/contacto"
    }
  },
  categories: [
    {
      title: "¿Por qué elegirnos?",
      description: "Descubre lo que nos hace únicos",
      icon: "Heart",
      href: "#why-us"
    },
    {
      title: "Novedades",
      description: "Descubre nuestros tratamientos más innovadores",
      icon: "Sparkles",
      href: "#novedades"
    },
    {
      title: "Servicios Destacados",
      description: "Tratamientos exclusivos para tu belleza",
      icon: "Star",
      href: "#servicios"
    },
    {
      title: "Nuestros Productos",
      description: "Línea profesional TOSKANI",
      icon: "ShoppingBag",
      href: "#productos"
    },
    {
      title: "Opiniones",
      description: "Lo que dicen nuestros clientes",
      icon: "MessageCircle",
      href: "#testimonios"
    }
  ]
};

export const whyUsReasons: WhyUsReason[] = [
  {
    title: "Experiencia",
    description: "30 años de experiencia y especialización en estética avanzada. Profesionales altamente cualificados.",
    icon: "Check"
  },
  {
    title: "Personalización",
    description: "Tratamientos adaptados a tus necesidades específicas. Atención individualizada y seguimiento continuo.",
    icon: "Users"
  },
  {
    title: "Dedicación",
    description: "Técnica especializada en Plasma Pen oficial. Expertos en rejuvenecimiento no invasivo.",
    icon: "Heart"
  },
  {
    title: "Innovación",
    description: "Tecnología de última generación para resultados óptimos. Blefaroplastía y lifting sin cirugía.",
    icon: "Sparkles"
  }
];

export const instagramPosts: InstagramPost[] = [
  {
    id: "1",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    caption: "Consejos para una piel radiante 💫 #GlowSkin #Beauty",
    likes: 124
  },
  {
    id: "2",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    caption: "Nuevo tratamiento disponible 🌟 #GlowUp",
    likes: 89
  },
  {
    id: "3",
    type: "reel",
    thumbnail: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    caption: "Antes y después increíble ✨ #Transformation",
    likes: 256
  },
  {
    id: "4",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    caption: "Promoción especial este mes 🎉 #GlowOffers",
    likes: 167
  }
];