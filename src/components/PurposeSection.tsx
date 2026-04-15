import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useGlitch, glitchStyle } from "@/hooks/useGlitch";

const keywords = ["NOISE", "DISTORTION", "CLARITY", "MEANING", "SIGNAL", "TRUTH"];

const PurposeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const glitch = useGlitch(8000, 500, 2500);

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

        {/* Visual element — editorial signal constellation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative overflow-hidden mb-16 md:mb-20"
          style={{ height: '320px', backgroundColor: 'hsl(var(--wine-deep))' }}
        >
          {/* Noise texture */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
            }}
          />

          {/* Wine accent circle */}
          <motion.div
            className="absolute"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            style={{
              width: '200px',
              height: '200px',
              top: '50%',
              left: '12%',
              transform: 'translateY(-50%)',
              borderRadius: '50%',
              background: 'hsl(var(--wine))',
              boxShadow: '0 20px 80px -10px hsl(var(--wine) / 0.5)',
            }}
          />

          {/* Breathing ring */}
          <motion.div
            className="absolute"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: '300px',
              height: '300px',
              top: '50%',
              left: '12%',
              transform: 'translateY(-50%) translateX(-50px)',
              borderRadius: '50%',
              border: '1px solid hsl(var(--wine-glow) / 0.3)',
            }}
          />

          {/* Brass dot */}
          <motion.div
            className="absolute"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 0.7 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              width: '10px',
              height: '10px',
              top: '30%',
              left: '28%',
              borderRadius: '50%',
              background: 'hsl(var(--brass))',
              boxShadow: '0 0 12px 3px hsl(var(--brass) / 0.3)',
            }}
          />

          {/* Vertical line */}
          <motion.div
            className="absolute"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              width: '1px',
              height: '120px',
              top: '25%',
              left: '35%',
              background: 'hsl(var(--brass) / 0.15)',
              transformOrigin: 'top',
            }}
          />

          {/* Floating keywords — scattered typographic accents */}
          {keywords.map((word, i) => (
            <motion.span
              key={word}
              className="absolute font-mono uppercase pointer-events-none select-none"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              style={{
                fontSize: i === 3 ? '11px' : '9px',
                letterSpacing: '0.25em',
                color: i === 3
                  ? 'hsl(var(--brass) / 0.6)'
                  : 'hsl(var(--foreground) / 0.12)',
                top: `${18 + (i * 13) % 65}%`,
                right: `${8 + (i * 17) % 45}%`,
                ...(glitch && i === 0 ? glitchStyle(true, "subtle") : {}),
              }}
            >
              {word}
            </motion.span>
          ))}

          {/* Horizontal editorial line */}
          <motion.div
            className="absolute"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            style={{
              width: '40%',
              height: '1px',
              top: '70%',
              right: '10%',
              background: 'linear-gradient(90deg, transparent, hsl(var(--brass) / 0.15), transparent)',
              transformOrigin: 'right',
            }}
          />

          {/* Edge vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: 'inset 0 0 60px 15px hsl(340, 40%, 10% / 0.5)' }}
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
