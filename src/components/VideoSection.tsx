import Video from "@/assets/Intro.mp4";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

export const VideoSection = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handler = () => {
      videoRef.current?.play().catch(() => {
        // Browser / iOS autoplay safety — ignore silently
      });
    };

    window.addEventListener("play-hero-video", handler);
    return () => {
      window.removeEventListener("play-hero-video", handler);
    };
  }, []);

  return (
    <section
      id="video-section"
      className="relative pt-24 pb-8 bg-primary"
    >
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground">
            {t("video.title")}
          </h2>
          <p className="mt-3 text-primary-foreground/70 max-w-2xl mx-auto">
            {t("video.subtitle")}
          </p>
        </div>

        {/* Video */}
        <div className="w-full flex justify-center bg-black rounded-xl overflow-hidden">
          <video
            ref={videoRef}
            src={Video}
            className="max-w-full h-auto"
            controls
            playsInline
          />
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8 mb-4">
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
            {t("video.cta")}
          </Button>
        </div>

      </div>
    </section>
  );
};
