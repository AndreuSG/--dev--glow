import type { ProductBrand } from "@/types/product";
import { prefixPath } from "../lib/prefixPath";

export const productBrands: Record<string, ProductBrand> = {
  toskani: {
    name: "TOSKANI",
    description:
      "TOSKANI es una marca líder en cosmética profesional que combina la innovación científica con ingredientes naturales de alta calidad. Sus productos, desarrollados en laboratorios especializados, ofrecen soluciones efectivas para el cuidado de la piel, respaldadas por años de investigación y resultados probados.",
    products: [
      {
        name: "Radiance Cocktail",
        description: "Unifica y aclara el tono de piel",
        image: "/img/products/radiance-cocktail.png",
      },
      {
        name: "WCPR",
        description: "Corrector global y regulador de las hiperpigmentaciones.",
        image: "/img/products/WCPR.jpg",
      },
      {
        name: "NCPR",
        description: "Nutrición global inmediata para rejuvenecimiento facial.",
        image: "/img/products/NCPR.jpg",
      },
      {
        name: "ECPR",
        description: "Rejuvenece la zona periocular de forma intensiva.",
        image: "/img/products/ECPR.jpg",
      },
      {
        name: "Anti Ageing",
        description: "Solución antiedad intensiva. Aporta efecto tensor y favorece la reconstrucción de la dermis.",
        image: "/img/products/Anti-ageing---HA-Ampoules.jpg",
      },
      {
        name: "Firming Gel",
        description: "Potencia la síntesis de colágeno endógeno y ofrece un potente efecto reafirmante.",
        image: "/img/products/Firming-Gel.jpg",
      },
    ],
  },
  casmara: {
    name: "CASMARA",
    description:
      "CASMARA es una marca líder en cosmética profesional que combina la innovación científica con ingredientes naturales de alta calidad. Sus productos, desarrollados en laboratorios especializados, ofrecen soluciones efectivas para el cuidado de la piel, respaldadas por años de investigación y resultados probados.",
    products: [
      {
        name: "Golden age",
        description: "Tratamiento no invasivo para rejuvenecimiento facial, mejora de arrugas y flacidez mediante plasma.",
        image: "/img/products/Intense_Cream_-_Casmara_large.webp",
      },
      {
        name: "Sensations",
        description: "Vitamina C Biodisponible y Oro de 24K",
        image:
          "/img/products/SENSATIONS_SERUM-VITAMIN-SHOT-600x600.jpg",
      },
      {
        name: "Q 10 Rescue",
        description: "El rescate global para las pieles más exigentes.",
        image:
          "/img/products/q10-rescue-frasco-_-caja_web-1-1-600x554.jpg",
      },
      {
        name: "Rgnerin",
        description: "Alternativa cosmética al bótox.",
        image:
          "/img/products/RGnerin-frasco-NUTRI-1-600x600.jpg",
      },
      {
        name: "Age Defense",
        description: "Prebióticos y probióticos que restauran el microbioma.",
        image:
          "/img/products/AgeDefense-2022_WEB-1-600x600.jpg",
      },
      {
        name: "Lightening",
        description: "Tratamiento antiedad aclarante e iluminador.",
        image:
          "/img/products/Lightening-Clarifying-NUTRI-SPF50-Cream-50ml-2022_WEB-1-600x600.jpg",
      },
      {
        name: "Shine stop",
        description:
          "Tecnología inteligente para una piel libre de imperfecciones.",
        image:
          "/img/products/02_Shine-Stop-ANTI-AGING-SEBO-REGULATING-CREAM-50ml-2023_WEB-1-600x600.jpg",
      },
      {
        name: "Retinol pro age",
        description:
          "La transformación definitiva que redescubre tu belleza natural.",
        image: "/img/products/A71001_RETINOL-PROAGE_Renewal-Day-Cream_SPF50_50ml_V02-600x600.jpg",
      },
      {
        name: "Infinity eye serum",
        description: "Sérum efecto botox para el contorno de ojos.",
        image: "/img/products/INFINITY-eye-serum-frasco-caja-1-600x600.jpg",
      },
      {
        name: "Body sculptor",
        description: "Crema lipo reductora-reafirmante intensiva",
        image:
          "/img/products/body-scultor-200ml-1-600x554.gif",
      },
    ],
  },
};
