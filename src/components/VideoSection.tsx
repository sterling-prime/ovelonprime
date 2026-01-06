import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

// HeyGen video embed IDs by language
const videoEmbedsByLanguage: Record<string, string> = {
  en: "e1c7583b5c134516bc95cfc14e91f246", // English uses German video as default
  de: "e1c7583b5c134516bc95cfc14e91f246",
  fr: "7658b7d7365a432a9b8267302f9a05cf",
  pl: "e9914d45a759415aa89e68bdcf12f631",
  nl: "e1c7583b5c134516bc95cfc14e91f246", // NL uses German video
  es: "fdfd9f347e2f4f2f915242cfe993e9ee",
  it: "b7e0ce086311486eb3b7ff5bd16777dc",
};

const getVideoEmbedId = (lang: string): string => {
  // Check for exact language match
  if (videoEmbedsByLanguage[lang]) {
    return videoEmbedsByLanguage[lang];
  }
  
  // Check for language prefix (e.g., "en-US" -> "en")
  const langPrefix = lang.split("-")[0];
  if (videoEmbedsByLanguage[langPrefix]) {
    return videoEmbedsByLanguage[langPrefix];
  }
  
  // Fallback to English (which uses German video)
  return videoEmbedsByLanguage.en;
};

export const VideoSection = () => {
  const { t, i18n } = useTranslation();
  const [embedId, setEmbedId] = useState<string>(() => getVideoEmbedId(i18n.language));

  // Update embed ID when language changes
  useEffect(() => {
    const newEmbedId = getVideoEmbedId(i18n.language);
    setEmbedId(newEmbedId);
  }, [i18n.language]);

  const embedUrl = `https://app.heygen.com/embedded-player/${embedId}`;

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

        {/* Video Embed - HeyGen iframe */}
        <div className="w-full flex justify-center bg-black rounded-xl overflow-hidden">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              key={embedId}
              src={embedUrl}
              title="HeyGen video player"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="encrypted-media; fullscreen;"
              allowFullScreen
            />
          </div>
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