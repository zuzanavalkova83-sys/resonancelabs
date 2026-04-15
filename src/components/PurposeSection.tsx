import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useGlitch, glitchStyle } from "@/hooks/useGlitch";

const PurposeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const glitch = useGlitch(9000, 500, 2500);

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
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px" style={{ background: 'hsl(30, 15%, 45%)' }} />
            <p className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-medium" style={{ color: 'hsl(30, 15%, 55%)' }}>
              Our Purpose
            </p>
          </div>

          <h2 className="font-display text-[48px] md:text-[60px] lg:text-[72px] tracking-wider leading-[0.88] text-foreground">
            Why We Exist
          </h2>
        </motion.div>

        {/* Visual — single bold typographic panel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative flex items-center justify-center mb-16 md:mb-20 overflow-hidden"
          style={{ height: '280px', backgroundColor: 'hsl(var(--wine-deep))' }}
        >
          {/* Large watermark text */}
          <motion.span
            className="font-display tracking-[0.15em] uppercase select-none pointer-events-none text-center"
            animate={{ opacity: [0.04, 0.07, 0.04] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              fontSize: 'clamp(100px, 18vw, 260px)',
              lineHeight: 1,
              color: 'hsl(var(--foreground))',
              ...glitchStyle(glitch, "subtle"),
            }}
          >
            MEANING
          </motion.span>

          {/* Single horizontal brass rule across centre */}
          <motion.div
            className="absolute left-0 right-0"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
            style={{
              top: '50%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent 5%, hsl(var(--brass) / 0.25) 30%, hsl(var(--brass) / 0.25) 70%, transparent 95%)',
            }}
          />

          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: 'inset 0 0 80px 30px hsl(var(--wine-deep))' }}
          />
        </motion.div>

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
