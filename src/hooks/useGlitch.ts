import { useState, useEffect } from "react";

/** Returns a boolean that pulses true for `duration`ms every `interval`ms (±jitter). */
export function useGlitch(interval = 8000, duration = 700, delay = 2000) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const trigger = () => {
      setActive(true);
      setTimeout(() => setActive(false), duration);
    };
    const first = setTimeout(trigger, delay);
    const loop = setInterval(() => {
      if (Math.random() > 0.3) trigger();
    }, interval);
    return () => { clearTimeout(first); clearInterval(loop); };
  }, [interval, duration, delay]);
  return active;
}

/** CSS style object for chromatic-split glitch on text */
export const glitchStyle = (active: boolean, intensity: "strong" | "subtle" = "strong"): React.CSSProperties => {
  if (!active) return {};
  const px = intensity === "strong" ? 3 : 2;
  return {
    textShadow: `${px}px 0 hsl(340 75% 55%), -${px}px 0 hsl(180 80% 50%)`,
    transform: `translate(${px - 1}px, -1px)`,
    transition: "none",
  };
};
