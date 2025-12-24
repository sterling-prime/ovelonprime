import Video from "@/assets/Intro.mp4";
import { Button } from "@/components/ui/button";
export const VideoSection = () => {
  return (
    <section className="relative py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Designed for uninterrupted operations
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            See how Ovelon Prime supports mission-critical environments without disrupting live systems.
          </p>
        </div>

        {/* Video */}
<div className="w-full flex justify-center bg-black rounded-xl overflow-hidden">
  <video
    src={Video}
    className="max-w-full h-auto"
    controls
    playsInline
  />
</div>

{/* CTA */}
<div className="flex justify-center mt-10 mb-12">
  <Button
    size="lg"
    className="
      bg-slate-900
      text-white
      font-medium
      px-10
      py-4
      rounded-md
      transition-colors
      hover:bg-[#3A8F94]
      active:bg-[#3A8F94]
      focus-visible:bg-[#3A8F94]
    "
    onClick={() =>
      window.dispatchEvent(new Event("open-booking-modal"))
    }
  >
    Take Back Control
  </Button>
</div>


      </div>
    </section>
  );
};
