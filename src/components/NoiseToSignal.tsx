import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

/**
 * NoiseToSignal
 * A cinematic full-bleed scroll moment. Scattered, glitching words
 * representing how science gets twisted in public — panic, miracle,
 * scandal, ideology, noise — drift across the deep navy field and
 * gradually converge, dim, and resolve into a single quiet line.
 *
 * Sticky viewport, ~250vh of scroll travel.
 */

type Noise = {
  text: string;
  // initial position as % of viewport
  x: number;
  y: number;
  rotate: number;
  size: number; // rem
  weight: number; // px translate amount on parallax
  delay: number; // 0-1 within scroll progress
};

const NOISE: Noise[] = [
  { text: "PANIC",     x: 8,  y: 18, rotate: -4, size: 4.2, weight: -60, delay: 0.02 },
  { text: "miracle",   x: 68, y: 12, rotate: 3,  size: 5.0, weight: 80,  delay: 0.05 },
  { text: "SCANDAL",   x: 22, y: 70, rotate: 2,  size: 3.6, weight: -40, delay: 0.08 },
  { text: "ideology",  x: 74, y: 62, rotate: -3, size: 4.4, weight: 90,  delay: 0.04 },
  { text: "noise",     x: 46, y: 84, rotate: -1, size: 3.2, weight: -30, delay: 0.10 },
  { text: "FEAR",      x: 4,  y: 48, rotate: -6, size: 3.0, weight: 50,  delay: 0.06 },
  { text: "hype",      x: 84, y: 38, rotate: 5,  size: 2.8, weight: -70, delay: 0.03 },
  { text: "leak",      x: 38, y: 8,  rotate: 1,  size: 2.4, weight: 40,  delay: 0.07 },
  { text: "toxic",     x: 58, y: 88, rotate: -2, size: 2.6, weight: -50, delay: 0.09 },
  { text: "CONSPIRACY",x: 14, y: 32, rotate: -2, size: 2.2, weight: 30,  delay: 0.11 },
  { text: "outrage",   x: 70, y: 80, rotate: 4,  size: 2.4, weight: -45, delay: 0.05 },
  { text: "doom",      x: 90, y: 70, rotate: -4, size: 2.6, weight: 60,  delay: 0.08 },
];

const NoiseWord = ({
  noise,
  progress,
}: {
  noise: Noise;
  progress: MotionValue<number>;
}) => {
  // each word: visible & drifting from ~0 to 0.55, fades/converges by 0.7
  const opacity = useTransform(
    progress,
    [0, 0.08, 0.55, 0.72],
    [0, 1, 1, 0]
  );
  // converge toward center horizontally + vertically as we approach signal
  const x = useTransform(progress, [0, 0.5, 0.75], [0, noise.weight * 0.4, (50 - noise.x) * 6]);
  const y = useTransform(progress, [0, 0.5, 0.75], [0, noise.weight * 0.25, (50 - noise.y) * 4]);
  const scale = useTransform(progress, [0, 0.5, 0.75], [1, 1.05, 0.4]);
  const blur = useTransform(progress, [0.5, 0.72], [0, 8]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <motion.span
      aria-hidden
      className="absolute font-display select-none whitespace-nowrap"
      style={{
        left: `${noise.x}%`,
        top: `${noise.y}%`,
        x,
        y,
        scale,
        opacity,
        filter,
        rotate: noise.rotate,
        fontSize: `${noise.size}rem`,
        letterSpacing: noise.text === noise.text.toUpperCase() ? "0.08em" : "-0.01em",
        color: "hsl(35, 25%, 88%)",
        textShadow:
          "0 0 24px hsl(348 45% 28% / 0.35), 0 0 80px hsl(32 55% 58% / 0.08)",
        mixBlendMode: "screen",
      }}
    >
      {noise.text}
    </motion.span>
  );
};

const NoiseToSignal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Eyebrow appears briefly at the start
  const eyebrowOpacity = useTransform(scrollYProgress, [0, 0.05, 0.5, 0.65], [0, 1, 1, 0]);
  const eyebrowY = useTransform(scrollYProgress, [0, 0.05], [10, 0]);

  // Signal line: rises from below, resolves clear
  const signalOpacity = useTransform(scrollYProgress, [0.6, 0.75, 0.95], [0, 1, 1]);
  const signalY = useTransform(scrollYProgress, [0.6, 0.78], [40, 0]);
  const signalBlur = useTransform(scrollYProgress, [0.6, 0.78], [12, 0]);
  const signalFilter = useTransform(signalBlur, (b) => `blur(${b}px)`);

  // Caption beneath signal
  const captionOpacity = useTransform(scrollYProgress, [0.78, 0.88], [0, 1]);
  const captionY = useTransform(scrollYProgress, [0.78, 0.88], [16, 0]);

  // Hairline reveal
  const lineScale = useTransform(scrollYProgress, [0.7, 0.88], [0, 1]);

  // Background warmth grows
  const warmth = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [
      "radial-gradient(ellipse at 50% 50%, hsl(348 45% 12% / 0) 0%, hsl(222 28% 8%) 70%)",
      "radial-gradient(ellipse at 50% 50%, hsl(348 45% 14% / 0.35) 0%, hsl(222 28% 8%) 75%)",
      "radial-gradient(ellipse at 50% 50%, hsl(32 55% 18% / 0.18) 0%, hsl(222 28% 8%) 70%)",
    ]
  );

  // Subtle vertical accent line opacity
  const accentOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 0.45]);

  return (
    <section
      ref={ref}
      aria-label="Noise to signal"
      className="relative w-full"
      style={{ height: "260vh", backgroundColor: "hsl(222, 28%, 8%)" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Warm radial wash */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: warmth }}
        />

        {/* Noise field */}
        <div className="absolute inset-0">
          {NOISE.map((n) => (
            <NoiseWord key={n.text} noise={n} progress={scrollYProgress} />
          ))}
        </div>

        {/* Eyebrow */}
        <motion.div
          style={{ opacity: eyebrowOpacity, y: eyebrowY }}
          className="absolute top-[14vh] left-1/2 -translate-x-1/2 flex items-center gap-4"
        >
          <div className="w-10 h-px" style={{ background: "hsl(32, 55%, 58% / 0.6)" }} />
          <p
            className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.32em]"
            style={{ color: "hsl(32, 30%, 70%)" }}
          >
            How research becomes
          </p>
          <div className="w-10 h-px" style={{ background: "hsl(32, 55%, 58% / 0.6)" }} />
        </motion.div>

        {/* Vertical accent line */}
        <motion.div
          className="absolute left-1/2 top-[42vh] -translate-x-1/2"
          style={{
            width: "1px",
            height: "10vh",
            background:
              "linear-gradient(to bottom, transparent, hsl(32, 55%, 58% / 0.7), transparent)",
            opacity: accentOpacity,
          }}
        />

        {/* Signal */}
        <motion.div
          style={{ opacity: signalOpacity, y: signalY, filter: signalFilter }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center px-6 text-center"
        >
          <h2
            className="font-display tracking-wider leading-[0.9]"
            style={{
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
              color: "hsl(35, 28%, 92%)",
              textShadow: "0 0 40px hsl(32 55% 58% / 0.18)",
            }}
          >
            <span style={{ color: "hsl(32, 55%, 64%)" }}>Signal</span>
            <span style={{ color: "hsl(35, 25%, 88% / 0.55)" }}>.</span>
          </h2>

          <motion.div
            style={{ scaleX: lineScale }}
            className="origin-center mt-8 mb-8"
          >
            <div
              style={{
                width: "120px",
                height: "1px",
                background:
                  "linear-gradient(to right, transparent, hsl(32, 55%, 58% / 0.8), transparent)",
              }}
            />
          </motion.div>

          <motion.p
            style={{ opacity: captionOpacity, y: captionY }}
            className="font-body text-[15px] md:text-[18px] max-w-[42ch] leading-[1.6]"
          >
            <span style={{ color: "hsl(30, 12%, 72%)" }}>
              The work is to keep the signal audible —
            </span>{" "}
            <span style={{ color: "hsl(32, 35%, 78%)" }}>
              before the noise writes the story for us.
            </span>
          </motion.p>
        </motion.div>

        {/* Top/bottom edge fades to blend with surrounding sections */}
        <div
          className="absolute inset-x-0 top-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, hsl(222, 28%, 8%) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, hsl(222, 28%, 8%) 0%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
};

export default NoiseToSignal;