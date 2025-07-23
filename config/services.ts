import type { ServiceCategory } from "@/types/service";

export const serviceCategories: Record<string, ServiceCategory> = {
  facial: {
    name: "Facial",
    description: "Nuestros tratamientos faciales combinan la última tecnología con productos de alta calidad para ofrecer resultados visibles desde la primera sesión. Cada tratamiento está diseñado para abordar necesidades específicas de la piel, desde el rejuvenecimiento hasta la eliminación de imperfecciones.",
    services: [
      {
        title: "Rejuvenecimiento",
        description: "Tratamiento que mejora tonalidad e iluminación, sin ningún tipo de irritación además de resultados inmediatos",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        duration: "60 min",
        price: "Desde 89€"
      },
      {
        title: "Carbon Peeling",
        description: "Técnica enfocada en la eliminación de imperfecciones y mejoría de la salud cutánea",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        duration: "45 min",
        price: "Desde 75€"
      },
      {
        title: "Eliminación de manchas",
        description: "Eliminación rápida y total de manchas con la última tecnología láser",
        image: "https://images.unsplash.com/photo-1598963459774-a6b5c019f2b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        duration: "30 min",
        price: "Desde 65€"
      }
    ]
  },
  corporal: {
    name: "Corporal",
    description: "Los tratamientos corporales están diseñados para moldear, tonificar y mejorar la apariencia de tu cuerpo. Utilizamos tecnología de vanguardia y técnicas probadas para ayudarte a alcanzar tus objetivos de manera segura y efectiva.",
    services: [
      {
        title: "Criolipolisis",
        description: "Procedimiento dermatológico no-invasivo que elimina la grasa corporal mediante el enfriamiento",
        image: "https://images.unsplash.com/photo-1662751283781-a5e6fb369635?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        duration: "60 min",
        price: "Desde 120€"
      },
      {
        title: "Radiofrecuencia",
        description: "Tratamiento que restablece la microcirculación y mejora el flujo de oxígenos en el tejido",
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        duration: "45 min",
        price: "Desde 85€"
      },
      {
        title: "Vacumterapia",
        description: "Activación de la circulación venosa y linfática para reducir la celulitis",
        image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        duration: "40 min",
        price: "Desde 70€"
      }
    ]
  },
  masajes: {
    name: "Masajes",
    description: "Nuestros masajes terapéuticos combinan diferentes técnicas para proporcionar una experiencia única de relajación y bienestar. Cada sesión está personalizada para abordar tus necesidades específicas y ayudarte a recuperar el equilibrio físico y mental.",
    services: [
      {
        title: "Masaje Relajante",
        description: "Técnica de masaje que ayuda a reducir el estrés y la tensión muscular",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        duration: "60 min",
        price: "Desde 65€"
      },
      {
        title: "Masaje Descontracturante",
        description: "Masaje terapéutico enfocado en eliminar contracturas y nudos musculares",
        image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        duration: "45 min",
        price: "Desde 75€"
      },
      {
        title: "Masaje Energético",
        description: "Técnica que equilibra la energía corporal y promueve el bienestar general",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        duration: "50 min",
        price: "Desde 80€"
      }
    ]
  }
};