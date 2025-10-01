

import { Card } from "../../components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/types";
import { useKeenSlider } from 'keen-slider/react';
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

const testimonials: Testimonial[] = [
  {
    content:
      "Increíble experiencia en Glow. Los tratamientos son realmente efectivos y el personal es muy profesional. He notado una mejora significativa en mi piel desde que empecé los tratamientos.",
    author: "María García",
    rating: 5,
  },
  {
    content:
      "El mejor centro de estética que he visitado. La atención es personalizada y los resultados son visibles desde la primera sesión. El ambiente es muy relajante y acogedor.",
    author: "Laura Martínez",
    rating: 5,
  },
  {
    content:
      "Profesionales altamente cualificados y tecnología de última generación. Me encanta cómo cuidan cada detalle y cómo se preocupan por el bienestar de sus clientes.",
    author: "Ana Rodríguez",
    rating: 5,
  },
  {
    content:
      "Desde que descubrí Glow, no he vuelto a otro centro. Sus tratamientos son innovadores y efectivos. El equipo es muy amable y siempre te hacen sentir especial.",
    author: "Carmen López",
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
    <section className="py-20 bg-[#F7F3EE] diagonal-top diagonal-bottom relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-4 text-[#4A3F35]">
          Lo que opinan nuestros clientes
        </h2>
        <p className="text-center text-[#4A3F35]/80 mb-16 max-w-2xl mx-auto">
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
                  <p className="mb-6 text-[#4A3F35]/80 leading-relaxed">
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