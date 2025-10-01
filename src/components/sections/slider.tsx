

import useEmblaCarousel from 'embla-carousel-react';
import { Button } from "../../components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from 'react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "¿Estás lista para tu mejor versión?",
    subtitle: "Descubre nuestros tratamientos personalizados"
  },
  {
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Tecnología de última generación",
    subtitle: "Los mejores resultados con la máxima seguridad"
  }
];

export function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative bg-secondary">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide relative h-[600px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center text-white max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-serif mb-4">{slide.title}</h2>
                    <p className="text-xl mb-8">{slide.subtitle}</p>
                    <Button className="bg-white text-black hover:bg-white/90">
                      Descubre más
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
        onClick={scrollNext}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
}