import Video from "@/assets/video.mp4";

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
        <div className="relative w-full aspect-video overflow-hidden rounded-xl">
  <video
    src={Video}
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
  />
</div>

      </div>
    </section>
  );
};
