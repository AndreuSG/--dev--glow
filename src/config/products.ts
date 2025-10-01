import type { ProductBrand } from "@/types/product";
import { prefixPath } from "../lib/prefixPath";

export const productBrands: Record<string, ProductBrand> = {
  toskani: {
    name: "TOSKANI",
    description:
      "TOSKANI es una marca líder en cosmética profesional que combina la innovación científica con ingredientes naturales de alta calidad. Sus productos, desarrollados en laboratorios especializados, ofrecen soluciones efectivas para el cuidado de la piel, respaldadas por años de investigación y resultados probados.",
    products: [
      {
        name: "RADIANCE COCKTAIL",
        description: "Unifica y aclara el tono de piel",
        image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg",
      },
      {
        name: "WCPR",
        description: "Corrector global y regulador de las hiperpigmentaciones.",
        image: "https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg",
      },
      {
        name: "NCPR",
        description: "Nutrición global inmediata para rejuvenecimiento facial.",
        image: "https://images.pexels.com/photos/4465821/pexels-photo-4465821.jpeg",
      },
      {
        name: "ECPR",
        description: "Rejuvenece la zona periocular de forma intensiva.",
        image: "https://images.pexels.com/photos/4465824/pexels-photo-4465824.jpeg",
      },
      {
        name: "ANTI AGEING",
        description: "Solución antiedad intensiva. Aporta efecto tensor y favorece la reconstrucción de la dermis.",
        image: "https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg",
      },
      {
        name: "FIRMING",
        description: "Potencia la síntesis de colágeno endógeno y ofrece un potente efecto reafirmante.",
        image: "https://images.pexels.com/photos/4465826/pexels-photo-4465826.jpeg",
      },
    ],
  },
  casmara: {
    name: "CASMARA",
    description:
      "CASMARA es una marca líder en cosmética profesional que combina la innovación científica con ingredientes naturales de alta calidad. Sus productos, desarrollados en laboratorios especializados, ofrecen soluciones efectivas para el cuidado de la piel, respaldadas por años de investigación y resultados probados.",
    products: [
      {
        name: "GOLDEN AGE",
        description: "Tratamiento no invasivo para rejuvenecimiento facial, mejora de arrugas y flacidez mediante plasma.",
        image: prefixPath("/img/services/plasma-pen.png"),
      },
      {
        name: "SENSATIONS",
        description: "Vitamina C Biodisponible y Oro de 24K",
        image:
          "https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg",
      },
      {
        name: "Q 10 RESCUE",
        description: "El rescate global para las pieles más exigentes.",
        image:
          "https://images.pexels.com/photos/4465826/pexels-photo-4465826.jpeg",
      },
      {
        name: "RGNERIN",
        description: "Alternativa cosmética al bótox.",
        image:
          "https://images.pexels.com/photos/4465821/pexels-photo-4465821.jpeg",
      },
      {
        name: "AGE DEFENSE",
        description: "Prebióticos y probióticos que restauran el microbioma.",
        image:
          "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg",
      },
      {
        name: "LIGHTENING",
        description: "Tratamiento antiedad aclarante e iluminador.",
        image:
          "https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg",
      },
      {
        name: "SHINE STOP",
        description:
          "Tecnología inteligente para una piel libre de imperfecciones.",
        image:
          "https://images.pexels.com/photos/4465824/pexels-photo-4465824.jpeg",
      },
      {
        name: "RETINOL PRO AGE",
        description:
          "Crema fluida de noche de acción transformadora y antiedad global con retinol puro en una concentración del 0,15% o el 0,3%. Reduce visiblemente los signos de la edad y el fotoenvejecimiento y consigue una renovación total de tu piel.",
        image: prefixPath("/img/products/retinol-pro-age.jpg"),
      },
      {
        name: "INFINITY EYE SERUM",
        description: "Sérum efecto botox para el contorno de ojos. INFINITY Eye serum es el cuidado diario para el contorno de ojos que activa la regeneración celular de la piel y potencia sus defensas, para retrasar y revertir las causas del envejecimiento.",
        image: prefixPath("/img/products/eye-serum.jpg"),
      },
      {
        name: "BODY SCULPTOR",
        description: "Crema lipo reductora-reafirmante intensiva",
        image:
          "https://images.pexels.com/photos/4465821/pexels-photo-4465821.jpeg",
      },
    ],
  },
};
