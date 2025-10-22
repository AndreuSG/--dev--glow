

import { Card } from "../../components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/types";
import { useKeenSlider } from 'keen-slider/react';
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

const testimonials: Testimonial[] = [
  {
    content:
      "El servicio es excelente, en mi caso hice depilación laser y fue genial. Los cambios son increíbles desde la primera sesión, he ido a diferentes sitios pero este es el que tiene mejores maquinas y el mejor trato. Lo recomiendo mucho calidad / precio / resultados.",
    author: "Simón Marín Blánquez",
    rating: 5,
  },
  {
    content:
      "Hoy he ido por primera vez y he salido encantada, Rosa es una gran profesional, te explica todo paso a paso, lo que necesitas y lo que no. Un trato inmejorable tanto por Rosa como por Claudia. Seguir así!! Habéis ganado una clienta más!!",
    author: "cloti",
    rating: 5,
  },
  {
    content:
      "Sitio maravilloso con trato excepcional. Soy profesora de yoga y pilates y he hecho varias sesiones de vacumterapia con presoterapia para compartir el cansancio y la retención de líquidos. Un 10!! Ya soy clienta fija seguro!!",
    author: "DK Studio Palafolls",
    rating: 5,
  },
  {
    content:
      "Súper contenta con el tratamiento e increíble los resultados. Un trato excelente y unas grandes profesionales. Súper recomendado!",
    author: "Laura Martinez",
    rating: 5,
  }
];

export function Testimonials() {
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 3,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 20 },
      },
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="py-20 bg-[#F7F3EE]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-serif text-center mb-4 text-[#4A3F35]">
          Lo que opinan nuestros clientes
        </h2>
        <p className="text-lg text-center text-[#4A3F35]/80 mb-16 max-w-2xl mx-auto">
          Descubre por qué nuestros clientes confían en nosotros para cuidar su belleza
        </p>
        <div className="relative px-12">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="keen-slider__slide">
                <Card className="p-6 hover:shadow-lg transition-shadow bg-white h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star 
                        key={j} 
                        className="w-4 h-4 fill-[#C79F7D] text-[#C79F7D]"
                      />
                    ))}
                  </div>
                  <p className="mb-6 text-base text-[#4A3F35]/80 leading-relaxed">
                    {testimonial.content}
                  </p>
                  <p className="font-semibold text-[#4A3F35]">
                    {testimonial.author}
                  </p>
                </Card>
              </div>
            ))}
          </div>

          {loaded && (
            <>
              <button
                onClick={() => instanceRef.current?.prev()}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full hover:bg-white/90 transition-all duration-250 ease-in-out shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center z-10"
              >
                <ChevronLeft className="w-6 h-6 text-[#AE8871]" />
              </button>
              <button
                onClick={() => instanceRef.current?.next()}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full hover:bg-white/90 transition-all duration-250 ease-in-out shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center z-10"
              >
                <ChevronRight className="w-6 h-6 text-[#AE8871]" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}