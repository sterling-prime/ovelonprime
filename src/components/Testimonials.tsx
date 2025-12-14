import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    quote:
      "Ovelon Prime helped us eliminate manual coordination across our shift-planning and maintenance workflows. Their team mapped our processes with precision and delivered automations that now run continuously without errors.",
    name: "Martin Keller",
    title: "Managing Director",
    image: testimonial1,
  },
  {
    quote:
      "The automation framework Ovelon Prime delivered transformed our patient intake and scheduling processes. Our response times improved by 45%, misrouted cases dropped significantly. The system scales effortlessly as our patient volume grows.",
    name: "Alicia Zhang",
    title: "Director of Operations",
    image: testimonial2,
  },
  {
    quote:
      "Ovelon Prime automated our lead routing, customer support triage, and internal workflow triggers across multiple warehouse units. The system now handles thousands of daily interactions with consistent accuracy and zero downtime.",
    name: "Daniel Hoffman",
    title: "Entrepreneur",
    image: testimonial3,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Client Testimonials
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
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
                  src={testimonial.image}
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
