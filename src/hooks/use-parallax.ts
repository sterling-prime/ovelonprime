import { useEffect, useRef, useState, useCallback } from "react";

interface UseParallaxOptions {
  /** Speed multiplier — 0.3 = subtle, 0.6 = aggressive */
  speed?: number;
  /** Separate speed for mobile (defaults to speed * 0.5) */
  mobileSpeed?: number;
  /** Max translate in px to prevent image gaps */
  maxTranslate?: number;
  /** Scale factor per scroll pixel */
  scaleFactor?: number;
}

export const useParallax = ({
  speed = 0.4,
  mobileSpeed,
  maxTranslate = 300,
  scaleFactor = 0.0002,
}: UseParallaxOptions = {}) => {
  const ref = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState({ y: 0, scale: 1 });
  const rafId = useRef<number>(0);
  const isMobile = useRef(false);

  useEffect(() => {
    isMobile.current = window.innerWidth < 768;
    const onResize = () => { isMobile.current = window.innerWidth < 768; };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const viewH = window.innerHeight;

    // Only compute when section is in viewport
    if (rect.bottom < 0 || rect.top > viewH) return;

    // Progress: 0 when element top is at viewport bottom, 1 when top is at viewport top
    const progress = 1 - rect.top / viewH;
    const currentSpeed = isMobile.current ? (mobileSpeed ?? speed * 0.5) : speed;

    const y = Math.min(progress * viewH * currentSpeed, maxTranslate);
    const scale = 1 + Math.min(progress * viewH * scaleFactor, 0.15);

    setTransform({ y, scale });
  }, [speed, mobileSpeed, maxTranslate, scaleFactor]);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(update);
    };

    // Initial calc
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [update]);

  const style: React.CSSProperties = {
    transform: `translate3d(0, ${transform.y}px, 0) scale(${transform.scale})`,
    willChange: "transform",
  };

  return { ref, style, transform };
};
