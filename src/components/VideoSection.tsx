import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useMemo, useRef, useEffect, useState } from "react";

/* ---------------- Video assets per language ---------------- */
import introEN from "@/assets/intro-en.mp4";
import introDE from "@/assets/intro-de.mp4";
import introFR from "@/assets/intro-fr.mp4";
import introPL from "@/assets/intro-pl.mp4";
import introES from "@/assets/intro-es.mp4";
import introIT from "@/assets/intro-it.mp4";

const INTRO_VIDEOS: Record<string, string> = {
  en: introEN,
  de: introDE,
  fr: introFR,
  pl: introPL,
  es: introES,
  it: introIT,
};

const resolveLang = (lng: string) => {
  const base = lng.split("-")[0];
  return INTRO_VIDEOS[base] ? base : "en";
};

export const VideoSection = () => {
  const { t, i18n } = useTranslation();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInViewRef = useRef(false);
  const [showHint, setShowHint] = useState(true);

  const lang = resolveLang(i18n.language);
  const videoSrc = useMemo(() => INTRO_VIDEOS[lang], [lang]);

  /* -------------------------------------------------------
     Helper: autoplay muted if visible
  ------------------------------------------------------- */
  const playMutedIfVisible = () => {
    const v = videoRef.current;
    if (!v || !isInViewRef.current) return;

    v.muted = true;
    v.play().catch(() => {});
  };

  /* -------------------------------------------------------
     1️⃣ Language change → reset + autoplay if visible
  ------------------------------------------------------- */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.pause();
    v.muted = true;
    setShowHint(true);

    const onLoaded = () => playMutedIfVisible();
    v.addEventListener("loadeddata", onLoaded, { once: true });

    return () => v.removeEventListener("loadeddata", onLoaded);
  }, [videoSrc]);

  /* -------------------------------------------------------
     2️⃣ IntersectionObserver → autoplay / pause ONLY
  ------------------------------------------------------- */
  useEffect(() => {
    const section = sectionRef.current;
    const v = videoRef.current;
    if (!section || !v) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          setShowHint(true);
          playMutedIfVisible();
        } else {
          v.pause();
          v.muted = true;
          setShowHint(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  /* -------------------------------------------------------
     3️⃣ GLOBAL SCROLL → ALWAYS MUTE SOUND
  ------------------------------------------------------- */
  useEffect(() => {
    const onScroll = () => {
      const v = videoRef.current;
      if (!v) return;

      if (!v.muted) {
        v.muted = true;
        setShowHint(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* -------------------------------------------------------
     4️⃣ ENABLE SOUND (shared logic)
  ------------------------------------------------------- */
  const enableSound = () => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = false;
    v.volume = 1;
    v.currentTime = 0; // Restart from beginning
    v.play().catch(() => {});
    setShowHint(false);
  };

  /* -------------------------------------------------------
     5️⃣ HERO EXPLORE ARROW → PLAY WITH SOUND
  ------------------------------------------------------- */
  useEffect(() => {
    const handler = () => {
      // Small delay to allow scroll to complete
      setTimeout(() => {
        enableSound();
      }, 600);
    };

    window.addEventListener("play-hero-video", handler);
    return () =>
      window.removeEventListener("play-hero-video", handler);
  }, []);

  /* -------------------------------------------------------
     5️⃣b MOBILE: Expose global helper for gesture-safe play
  ------------------------------------------------------- */
  useEffect(() => {
    (window as any).__playVideoWithSound = () => {
      setTimeout(() => {
        enableSound();
      }, 600);
    };
    return () => {
      delete (window as any).__playVideoWithSound;
    };
  }, []);

  /* -------------------------------------------------------
     6️⃣ Click on video → NO SOUND (play muted only)
  ------------------------------------------------------- */
  const handleVideoClick = () => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    setShowHint(true);
    v.play().catch(() => {});
  };

  return (
    <section
      id="video-section"
      ref={sectionRef}
      className="relative bg-primary py-24"
    >
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground">
            {t("video.title")}
          </h2>
          <p className="mt-3 text-primary-foreground/70 max-w-2xl mx-auto">
            {t("video.subtitle")}
          </p>
        </div>

        {/* Video */}
        <div className="mx-auto max-w-5xl">
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-xl">

            <video
              key={videoSrc}
              ref={videoRef}
              src={videoSrc}
              className="absolute inset-0 w-full h-full object-cover cursor-pointer"
              muted
              playsInline
              preload="auto"
              controls={false}
              onClick={handleVideoClick}
            />

            {/* 🔊 TURN ON SOUND */}
            {showHint && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  onClick={enableSound}
                  className="
                    px-4 py-2
                    text-xs
                    tracking-widest
                    uppercase
                    rounded-md
                    bg-black/70
                    text-white
                    backdrop-blur
                    hover:bg-black/80
                  "
                >
                  🔊 Turn on sound
                </button>
              </div>
            )}

          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <Button
            size="lg"
            className="bg-slate-900 text-white px-10 py-4 hover:bg-[#3A8F94]"
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
