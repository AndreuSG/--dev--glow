import type { ProductBrand } from "@/types/product";

export const productBrands: Record<string, ProductBrand> = {
  toskani: {
    name: "TOSKANI",
    description: "TOSKANI es una marca líder en cosmética profesional que combina la innovación científica con ingredientes naturales de alta calidad. Sus productos, desarrollados en laboratorios especializados, ofrecen soluciones efectivas para el cuidado de la piel, respaldadas por años de investigación y resultados probados.",
    products: [
      {
        name: "Aquabalance Cream PRO",
        description: "Crema hidratante de textura ligera y rápida absorción, perfecta para todo tipo de pieles. Proporciona una hidratación profunda y duradera.",
        image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg",
        price: "89,99€"
      },
      {
        name: "Total Recovery Gel PRO",
        description: "Gel reparador intensivo para pieles sensibles. Su fórmula única ayuda a calmar y restaurar la barrera cutánea.",
        image: "https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg",
        price: "95,99€"
      },
      {
        name: "Sun Protection Cream PRO",
        description: "Protector solar de amplio espectro con tecnología avanzada. Protege contra los rayos UVA/UVB mientras cuida tu piel.",
        image: "https://images.pexels.com/photos/4465821/pexels-photo-4465821.jpeg",
        price: "45,99€"
      }
    ]
  },
  casmara: {
    name: "CASMARA",
    description: "CASMARA es una marca líder en cosmética profesional que combina la innovación científica con ingredientes naturales de alta calidad. Sus productos, desarrollados en laboratorios especializados, ofrecen soluciones efectivas para el cuidado de la piel, respaldadas por años de investigación y resultados probados.",
    products: [
      {
        name: "Hydra Lifting Mask",
        description: "Máscara facial hidratante y reafirmante con efecto lifting inmediato. Perfecta para ocasiones especiales.",
        image: "https://images.pexels.com/photos/4465824/pexels-photo-4465824.jpeg",
        price: "42,99€"
      },
      {
        name: "Vitamin C Ampoules",
        description: "Ampollas concentradas de Vitamina C para un rostro luminoso y radiante. Combate los signos del envejecimiento.",
        image: "https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg",
        price: "65,99€"
      },
      {
        name: "Purifying Clay Mask",
        description: "Mascarilla purificante de arcilla que limpia profundamente los poros y equilibra la producción de sebo.",
        image: "https://images.pexels.com/photos/4465826/pexels-photo-4465826.jpeg",
        price: "38,99€"
      }
    ]
  }
};