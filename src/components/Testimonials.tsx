import { useTranslation } from "react-i18next";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const images = [testimonial1, testimonial2, testimonial3];

export const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = t("testimonials.items", { returnObjects: true }) as Array<{
    quote: string;
    name: string;
    title: string;
  }>;

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
            {t("testimonials.title")}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="flex flex-col items-center text-center"
            >
              {/* Centered accent line */}
              <div className="w-1 h-16 bg-accent mb-6" />

              {/* Quote */}
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-8">
                {testimonial.quote}
              </p>

              {/* Author (fully centered) */}
              <div className="flex flex-col items-center gap-3">
                <img
                  src={images[index]}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="text-center">
                  <div className="font-medium text-primary-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-primary-foreground/60">
                    {testimonial.title}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
