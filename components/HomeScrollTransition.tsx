"use client";

import { ReactNode, useEffect, useRef } from "react";

type HomeScrollTransitionProps = {
  children: ReactNode;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export default function HomeScrollTransition({ children }: HomeScrollTransitionProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const rect = root.getBoundingClientRect();
      const transitionDistance = Math.max(window.innerHeight * 0.72, 420);
      const progress = clamp(-rect.top / transitionDistance, 0, 1);
      root.style.setProperty("--home-progress", progress.toFixed(4));
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div ref={rootRef} className="home-scroll-transition">
      {children}
    </div>
  );
}
