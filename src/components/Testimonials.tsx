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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Client Testimonials</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-xl p-6 border border-border shadow-card"
            >
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
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
