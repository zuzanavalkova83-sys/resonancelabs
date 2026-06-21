import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import bustQuaestio from "@/assets/socrates-teal-uniform.png";
import bustDistortio from "@/assets/socrates-tinfoil-uniform.png";
import bustDesperatio from "@/assets/goddess-facepalm-uniform.png";

/**
 * Three-act cycle: Quaestio → Distortio → Desperatio → (loops back to Quaestio).
 * Story told through opacity, scale, and micro-motion. No captions.
 */
const ACTS = ["quaestio", "distortio", "desperatio"] as const;
type Act = typeof ACTS[number];
const ACT_DURATION = 3800; // ms per act

type FigureProps = {
  src: string;
  active: boolean;
  isInView: boolean;
  enterDelay: number;
  /** Visual behaviour when this figure is the active act */
  behaviour: "still" | "glitch" | "sigh";
};

const Figure = ({ src, active, isInView, enterDelay, behaviour }: FigureProps) => {
  const [glitchTick, setGlitchTick] = useState(0);

  // Drive periodic chromatic split only while the distortio act is active
  useEffect(() => {
    if (!(active && behaviour === "glitch")) return;
    const id = setInterval(() => setGlitchTick((t) => t + 1), 280);
    return () => clearInterval(id);
  }, [active, behaviour]);

  const isGlitching = active && behaviour === "glitch";
  const offset = (glitchTick % 2 === 0 ? 1 : -1) * 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, delay: enterDelay, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-square w-full overflow-hidden"
    >
      {/* Chromatic split layers — only during glitch act */}
      {isGlitching && (
        <>
          <img
            src={src}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none mix-blend-screen"
            style={{
              opacity: 0.55,
              transform: `translate(${-offset}px, 0)`,
              filter: "brightness(0.55) sepia(1) hue-rotate(280deg) saturate(7)",
            }}
            draggable={false}
          />
          <img
            src={src}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none mix-blend-screen"
            style={{
              opacity: 0.45,
              transform: `translate(${offset}px, 0)`,
              filter: "brightness(0.55) sepia(1) hue-rotate(150deg) saturate(6)",
            }}
            draggable={false}
          />
        </>
      )}

      {/* Main image — opacity & subtle scale follow active state */}
      <motion.img
        src={src}
        alt=""
        aria-hidden
        className="relative w-full h-full object-contain pointer-events-none select-none"
        animate={
          behaviour === "sigh" && active
            ? { opacity: 1, scale: 1, y: [0, 6, 0], rotate: [0, -1.2, 0] }
            : { opacity: active ? 1 : 0.22, scale: active ? 1 : 0.97 }
        }
        transition={
          behaviour === "sigh" && active
            ? { duration: 3.6, ease: "easeInOut", times: [0, 0.55, 1] }
            : { duration: 1.4, ease: [0.22, 1, 0.36, 1] }
        }
        style={{
          filter: active ? "grayscale(0) contrast(1.05)" : "grayscale(0.6) contrast(0.95) brightness(0.85)",
          transition: "filter 1.2s ease",
          transform: isGlitching ? `translate(${offset / 4}px, 0)` : undefined,
        }}
        draggable={false}
      />
    </motion.div>
  );
};

const PurposeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [actIndex, setActIndex] = useState(0);

  // Drive the cyclic narrative once the section enters view
  useEffect(() => {
    if (!isInView) return;
    const id = setInterval(() => setActIndex((i) => (i + 1) % ACTS.length), ACT_DURATION);
    return () => clearInterval(id);
  }, [isInView]);

  const currentAct: Act = ACTS[actIndex];

  return (
    <section
      id="purpose"
      className="py-32 md:py-44 section-padding bg-burgundy-mid"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >

          <h2 className="font-display text-[48px] md:text-[60px] lg:text-[72px] tracking-wider leading-[0.88] text-foreground">
            Why We Exist
          </h2>
        </motion.div>

        {/* Visual — three-act cycle, no captions */}
        <motion.figure
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="relative mb-16 md:mb-20"
          aria-label="Three figures: Quaestio, Distortio, Desperatio"
        >
          <div className="relative grid grid-cols-3 items-center">
            {/* Hairline brass dividers between figures */}
            <motion.div
              className="absolute top-[10%] bottom-[10%] pointer-events-none"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              style={{
                left: "33.333%",
                width: "1px",
                transformOrigin: "top center",
                background: "linear-gradient(180deg, transparent, hsl(var(--brass) / 0.25) 30%, hsl(var(--brass) / 0.25) 70%, transparent)",
              }}
            />
            <motion.div
              className="absolute top-[10%] bottom-[10%] pointer-events-none"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.75, ease: "easeOut" }}
              style={{
                left: "66.666%",
                width: "1px",
                transformOrigin: "top center",
                background: "linear-gradient(180deg, transparent, hsl(var(--brass) / 0.25) 30%, hsl(var(--brass) / 0.25) 70%, transparent)",
              }}
            />

            <Figure
              src={bustQuaestio}
              active={currentAct === "quaestio"}
              isInView={isInView}
              enterDelay={0.2}
              behaviour="still"
            />
            <Figure
              src={bustDistortio}
              active={currentAct === "distortio"}
              isInView={isInView}
              enterDelay={0.35}
              behaviour="glitch"
            />
            <Figure
              src={bustDesperatio}
              active={currentAct === "desperatio"}
              isInView={isInView}
              enterDelay={0.5}
              behaviour="sigh"
            />
          </div>

          {/* Quiet progress dots — three positions, current one filled brass */}
          <div className="flex items-center justify-center gap-3 mt-10 md:mt-12">
            {ACTS.map((act, i) => (
              <motion.span
                key={act}
                className="block rounded-full"
                animate={{
                  width: i === actIndex ? 22 : 4,
                  opacity: i === actIndex ? 1 : 0.35,
                  backgroundColor:
                    i === actIndex ? "hsl(var(--brass))" : "hsl(var(--brass) / 0.4)",
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: 4 }}
              />
            ))}
          </div>
        </motion.figure>

        {/* Manifesto — two balanced columns of text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24"
        >
          <div className="space-y-5">
            <p className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: 'hsl(30, 12%, 55%)' }}>
              We used to think of science communication mainly as a question of clarity, reach, and public engagement. That is no longer enough.
            </p>
            <p className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: 'hsl(30, 12%, 55%)' }}>
              Research now enters a public space shaped by noise, strategic distortion, grievance, and misplaced certainty. Careful work can be flattened, moralised, politicised, or pulled into stories it was never trying to tell.
            </p>
          </div>

          <div className="space-y-5">
            <p className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: 'hsl(30, 12%, 55%)' }}>
              Resonance Labs exists to help serious ideas survive that contact. The work is about protecting meaning: translating expertise into language people can hear, while reducing the chances that it will be hijacked on the way.
            </p>
            <p className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: 'hsl(35, 15%, 62%)' }}>
              We do not work to make science louder for the sake of it. We work to help it remain legible, credible, and alive in the world it actually enters.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;
