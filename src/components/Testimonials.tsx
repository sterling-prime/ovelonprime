import { useState, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const images = [testimonial1, testimonial2, testimonial3];

export const Testimonials = () => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const testimonials = t("testimonials.items", { returnObjects: true }) as Array<{
    quote: string;
    name: string;
    title: string;
  }>;

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">
            {t("testimonials.label", "CLIENT VOICES")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
            {t("testimonials.title")}
          </h2>
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto">
          <div className="border border-border/30 rounded-lg p-8 sm:p-12 lg:p-16 bg-card/5">
            
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-14 h-14 border border-accent/50 rounded flex items-center justify-center">
                <span className="text-accent text-2xl font-serif">"</span>
              </div>
            </div>

            {/* Carousel */}
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0">
                    <div className="flex flex-col items-center text-center px-4">
                      {/* Quote */}
                      <p className="text-primary-foreground text-lg sm:text-xl lg:text-2xl leading-relaxed mb-10 max-w-2xl">
                        "{testimonial.quote}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <img
                          src={images[index]}
                          alt={testimonial.name}
                          width={56}
                          height={56}
                          loading="lazy"
                          decoding="async"
                          className="w-14 h-14 rounded-full object-cover grayscale"
                        />
                        <div className="text-left">
                          <div className="font-medium text-primary-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-primary-foreground/60">
                            {testimonial.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 border border-border/30 rounded flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-border/50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Progress Indicators */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`h-0.5 transition-all duration-300 ${
                      index === selectedIndex
                        ? "w-8 bg-accent"
                        : "w-4 bg-primary-foreground/20"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={scrollNext}
                className="w-10 h-10 border border-border/30 rounded flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-border/50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
