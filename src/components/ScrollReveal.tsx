import { forwardRef, HTMLAttributes, ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

type AnimationVariant = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale" | "stagger";

interface ScrollRevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  as?: "div" | "section" | "article" | "aside" | "header" | "footer";
}

const variantStyles: Record<AnimationVariant, { initial: string; visible: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-in": {
    initial: "opacity-0",
    visible: "opacity-100",
  },
  "slide-left": {
    initial: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "slide-right": {
    initial: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "scale": {
    initial: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
  "stagger": {
    initial: "opacity-0 translate-y-4",
    visible: "opacity-100 translate-y-0",
  },
};

export const ScrollReveal = forwardRef<HTMLElement, ScrollRevealProps>(
  ({ children, variant = "fade-up", delay = 0, duration = 600, as = "div", className, style, ...props }, _ref) => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    const Component = as;
    const styles = variantStyles[variant];

    return (
      <Component
        ref={ref as any}
        className={cn(
          "transition-all will-change-transform",
          isVisible ? styles.visible : styles.initial,
          className
        )}
        style={{
          transitionDuration: `${duration}ms`,
          transitionDelay: `${delay}ms`,
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          ...style,
        }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

ScrollReveal.displayName = "ScrollReveal";

// Staggered children wrapper
interface StaggerContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  staggerDelay?: number;
  baseDelay?: number;
}

export const StaggerContainer = ({ children, staggerDelay = 100, baseDelay = 0, className, ...props }: StaggerContainerProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div ref={ref as any} className={className} {...props}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={cn(
                "transition-all will-change-transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{
                transitionDuration: "500ms",
                transitionDelay: `${baseDelay + index * staggerDelay}ms`,
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
};
