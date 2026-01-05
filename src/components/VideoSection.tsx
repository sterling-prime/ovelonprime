import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

// Import videos - currently only one video exists
// When language-specific videos are added, import them here:
// import VideoEN from "@/assets/Intro-en.mp4";
// import VideoDE from "@/assets/Intro-de.mp4";
// etc.
import VideoDefault from "@/assets/Intro.mp4";

// Video mapping by language - extend when videos are available
const videosByLanguage: Record<string, string> = {
  // When language-specific videos are added:
  // en: VideoEN,
  // de: VideoDE,
  // fr: VideoFR,
  // pl: VideoPL,
  // nl: VideoNL,
};

const getVideoForLanguage = (lang: string): string => {
  // Check for exact language match
  if (videosByLanguage[lang]) {
    return videosByLanguage[lang];
  }
  
  // Check for language prefix (e.g., "en-US" -> "en")
  const langPrefix = lang.split("-")[0];
  if (videosByLanguage[langPrefix]) {
    return videosByLanguage[langPrefix];
  }
  
  // Fallback to default video
  return VideoDefault;
};

export const VideoSection = () => {
  const { t, i18n } = useTranslation();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoSrc, setVideoSrc] = useState<string>(VideoDefault);

  // Update video source when language changes
  useEffect(() => {
    const newVideoSrc = getVideoForLanguage(i18n.language);
    setVideoSrc(newVideoSrc);
  }, [i18n.language]);

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
            key={videoSrc} // Force re-render when video changes
            ref={videoRef}
            src={videoSrc}
            className="max-w-full h-auto"
            controls
            playsInline
            preload="metadata"
            // No autoplay on mobile - user must interact
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
