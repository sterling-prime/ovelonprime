import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    quote:
      "Before Ovelon Prime, shift coordination depended on individual follow-up. Today, maintenance and planning execute predictably across all shifts — without manual intervention.",
    name: "Martin Keller",
    title: "Logistics Operations Lead",
    image: testimonial1,
  },
  {
    quote:
      "In our environment, delays directly affect safety and output. Ovelon Prime helped us standardize execution across teams, reducing response time by 45% without increasing operational risk.",
    name: "Alicia Zhang",
    title: "Director of Operations",
    image: testimonial2,
  },
  {
    quote:
      "We operate under continuous pressure. Since implementing the system, routing and escalation follow fixed rules — not assumptions. Downtime caused by coordination errors is no longer a factor.",
    name: "Daniel Hoffman",
    title: "Plant Manager",
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
