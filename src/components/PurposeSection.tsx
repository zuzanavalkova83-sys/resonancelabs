import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useGlitch, glitchStyle } from "@/hooks/useGlitch";
import bustSocratesTeal from "@/assets/bust-socrates-teal.png";
import bustGoddessFacepalm from "@/assets/bust-goddess-facepalm.png";
import bustSocratesTinfoil from "@/assets/bust-socrates-tinfoil.png";

const PurposeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const glitch = useGlitch(7000, 420, 2500);

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

        {/* Visual — Specimen plate: three stages of meaning's decay */}
        <motion.figure
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative mb-16 md:mb-20 overflow-hidden"
          style={{ backgroundColor: 'hsl(var(--wine-deep))' }}
        >
          {/* Plate header — clinical caption strip */}
          <div className="flex items-center justify-between px-5 md:px-8 py-3 border-b" style={{ borderColor: 'hsl(var(--brass) / 0.18)' }}>
            <p className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] uppercase" style={{ color: 'hsl(var(--brass) / 0.7)' }}>
              Plate 01 — On the decay of meaning
            </p>
            <p className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] uppercase hidden md:block" style={{ color: 'hsl(var(--brass) / 0.5)' }}>
              Three figures, observed
            </p>
          </div>

          {/* Three-figure display */}
          <div className="relative grid grid-cols-3 gap-2 md:gap-6 px-4 md:px-10 pt-10 md:pt-14 pb-0">
            {/* Brass timeline rule across all three */}
            <motion.div
              className="absolute left-[8%] right-[8%] pointer-events-none"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.5, ease: 'easeOut' }}
              style={{
                bottom: '88px',
                height: '1px',
                transformOrigin: 'left center',
                background: 'linear-gradient(90deg, transparent, hsl(var(--brass) / 0.35) 15%, hsl(var(--brass) / 0.35) 85%, transparent)',
              }}
            />
            {/* Tick marks under each bust */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`tick-${i}`}
                className="absolute pointer-events-none"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.3 + i * 0.12 }}
                style={{
                  bottom: '82px',
                  left: `${16.66 + i * 33.33}%`,
                  width: '1px',
                  height: '8px',
                  backgroundColor: 'hsl(var(--brass) / 0.5)',
                }}
              />
            ))}

            {/* Figure I — Inquiry */}
            <Specimen
              src={bustSocratesTeal}
              numeral="I"
              latin="Quaestio"
              english="Inquiry"
              note="The question, asked in good faith."
              delay={0.4}
              isInView={isInView}
              filterStyle={{ filter: 'grayscale(0.15) contrast(1.05)' }}
            />

            {/* Figure II — Despair */}
            <Specimen
              src={bustGoddessFacepalm}
              numeral="II"
              latin="Desperatio"
              english="Despair"
              note="The answer arrives, already misread."
              delay={0.55}
              isInView={isInView}
              filterStyle={{ filter: 'grayscale(0.4) contrast(1.1) brightness(0.95)' }}
              tall
            />

            {/* Figure III — Distortion (glitches) */}
            <Specimen
              src={bustSocratesTinfoil}
              numeral="III"
              latin="Distortio"
              english="Distortion"
              note="The truth, dressed in tinfoil."
              delay={0.7}
              isInView={isInView}
              glitch={glitch}
              filterStyle={{
                filter: glitch
                  ? 'grayscale(0) contrast(1.15) hue-rotate(-8deg) brightness(1.05)'
                  : 'grayscale(0.05) contrast(1.05)',
                transition: glitch ? 'filter 0.08s' : 'filter 0.6s ease-out',
              }}
            />
          </div>

          {/* Plate footer — catalog line */}
          <div className="flex items-center justify-between px-5 md:px-8 py-3 border-t" style={{ borderColor: 'hsl(var(--brass) / 0.18)' }}>
            <p className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] uppercase" style={{ color: 'hsl(var(--brass) / 0.5)' }}>
              Cat. RL—001
            </p>
            <p className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] uppercase" style={{ color: 'hsl(var(--brass) / 0.5)' }}>
              Observed in the wild
            </p>
          </div>

          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: 'inset 0 0 100px 20px hsl(var(--wine-deep))' }}
          />
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
