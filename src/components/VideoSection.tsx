import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useMemo, useRef, useEffect, useState, useCallback } from "react";

/* ---------------- Video assets per language ---------------- */
import introEN from "@/assets/intro-en.mp4";
import introDE from "@/assets/intro-de.mp4";
import introFR from "@/assets/intro-fr.mp4";
import introES from "@/assets/intro-es.mp4";
import introIT from "@/assets/intro-it.mp4";
import introPT from "@/assets/intro-pt.mp4";

/* ---------------- Language → Video map ---------------- */
const INTRO_VIDEOS: Record<string, string> = {
  en: introEN,
  de: introDE,
  nl: introDE,
  fr: introFR,
  es: introES,
  it: introIT,
  pt: introPT,
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
  const isIntentionalScrollRef = useRef(false);

  const [showHint, setShowHint] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

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
     Language change → reset + autoplay muted
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
     IntersectionObserver → play / pause
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
     Global scroll → mute unless intentional
  ------------------------------------------------------- */
  useEffect(() => {
    const onScroll = () => {
      const v = videoRef.current;
      if (!v) return;

      if (isIntentionalScrollRef.current) return;

      if (!v.muted) {
        v.muted = true;
        setShowHint(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* -------------------------------------------------------
     Enable sound
  ------------------------------------------------------- */
  const enableSound = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = false;
    v.volume = 1;
    v.currentTime = 0;
    v.play().catch(() => {});
    setShowHint(false);
  }, []);

  /* -------------------------------------------------------
     Hero arrow → play with sound
  ------------------------------------------------------- */
  useEffect(() => {
    const handler = () => {
      isIntentionalScrollRef.current = true;

      setTimeout(() => {
        enableSound();
        setTimeout(() => {
          isIntentionalScrollRef.current = false;
        }, 1000);
      }, 800);
    };

    window.addEventListener("play-hero-video", handler);
    return () => window.removeEventListener("play-hero-video", handler);
  }, [enableSound]);

  /* -------------------------------------------------------
     Mobile helper
  ------------------------------------------------------- */
  useEffect(() => {
    (window as any).__playVideoWithSound = () => {
      isIntentionalScrollRef.current = true;

      setTimeout(() => {
        enableSound();
        setTimeout(() => {
          isIntentionalScrollRef.current = false;
        }, 1000);
      }, 800);
    };

    return () => {
      delete (window as any).__playVideoWithSound;
    };
  }, [enableSound]);

  /* -------------------------------------------------------
     Click on video → muted replay
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
      className="relative bg-primary pt-12 pb-24 md:pt-16 md:pb-28"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-6 max-w-6xl">

        {/* HEADER */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground">
            {t("video.title")}
          </h2>
          <p className="mt-3 text-primary-foreground/70">
            {t("video.subtitle")}
          </p>
        </div>

        {/* VIDEO */}
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

            {/* ENABLE SOUND */}
            {showHint && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  aria-label={t("video.enableSound")}
                  onClick={enableSound}
                  className="
                    px-5 py-2
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
                  🔊 {t("video.enableSound")}
                </button>
              </div>
            )}

          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground px-10 py-4 hover:bg-accent hover:text-accent-foreground"
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
