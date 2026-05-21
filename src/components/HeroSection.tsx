import { motion } from "framer-motion";
import { useGlitch, glitchStyle } from "@/hooks/useGlitch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const labsGlitch = useGlitch(9000, 800, 2500);
  const riskGlitch = useGlitch(11000, 500, 4500);
  const [bgGlitch, setBgGlitch] = useState(false);

  useEffect(() => {
    const trigger = () => {
      setBgGlitch(true);
      setTimeout(() => setBgGlitch(false), 600);
    };
    const first = setTimeout(trigger, 5000);
    const interval = setInterval(() => {
      if (Math.random() > 0.4) trigger();
    }, 7500);
    return () => { clearTimeout(first); clearInterval(interval); };
  }, []);

  return (
    <header id="hero" className="relative w-full bg-background overflow-hidden">
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Giant watermark — NOISE / breathing */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <motion.span
          initial={{ opacity: 0, x: 60, scale: 1 }}
          animate={{
            opacity: [0.025, 0.035, 0.045, 0.035, 0.025],
            x: [60, 0, 0, 0, 0],
            scale: [1, 1, 1.06, 1.06, 1],
          }}
          transition={{
            opacity: { duration: 26, delay: 2.4, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 2.2, ease: "easeOut" },
            scale: { duration: 26, delay: 2.4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -right-[6%] bottom-[-6vw] font-display text-[34vw] sm:text-[30vw] leading-[0.78] tracking-[-0.02em] text-foreground origin-bottom-right"
          aria-hidden
          style={bgGlitch ? {
            opacity: 0.055,
            textShadow: "6px 0 hsl(340 75% 55%), -6px 0 hsl(180 80% 50%)",
            transform: "translate(4px, -2px) skewX(-1.5deg)",
            transition: "none",
          } : {}}
        >
          NOISE
        </motion.span>
      </div>

      {/* Stationary pink accent disc — quiet, off-axis */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute pointer-events-none
          right-[-1rem] top-[5.5rem] sm:right-auto sm:left-[34%] sm:top-[20%]"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="w-16 h-16 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 36% 30%, hsl(340 72% 58% / 0.78) 0%, hsl(340 60% 42% / 0.62) 55%, hsl(338 50% 26% / 0.45) 100%)",
              boxShadow:
                "0 18px 60px -10px hsl(340 65% 40% / 0.5), inset -10px -16px 50px hsl(335 45% 14% / 0.55)",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Diagonal hairline */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 right-[34%] w-px h-full origin-top hidden sm:block"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--brass) / 0.18), transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-end min-h-[78vh] sm:min-h-[86vh] gap-8 pb-20 sm:pb-24 pt-28">

          {/* Left: typographic title stack */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-10 h-px" style={{ background: 'hsl(var(--brass) / 0.5)' }} />
              <p className="text-[12px] font-mono tracking-[0.35em] uppercase" style={{ color: 'hsl(var(--brass))' }}>
                Narrative risk intelligence
              </p>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 110 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[4.2rem] sm:text-[6.5rem] md:text-[8.5rem] tracking-wider leading-[0.82]"
              >
                <span className="text-foreground">RESONANCE</span>
                <br />
                <span
                  className="inline-block"
                  style={{ color: 'hsl(var(--brass))', ...glitchStyle(labsGlitch) }}
                >
                  LABS.
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.95 }}
              className="text-xl sm:text-2xl text-foreground/55 leading-relaxed mt-10 max-w-xl"
            >
              Narrative risk mapping for science.
              <br />
              <span className="text-foreground/30">
                Before the story writes itself for you.
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-[15px] text-foreground/40 leading-relaxed mt-5 max-w-md"
            >
              Resonance Labs is a narrative intelligence practice for research,
              clinical, and science-led organisations. We map how serious work is
              likely to be{" "}
              <span className="inline-block" style={glitchStyle(riskGlitch, "subtle")}>
                twisted
              </span>{" "}
              in public, and help you get there first.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.25 }}
              className="flex flex-wrap items-center gap-4 mt-12"
            >
              <Link
                to="/the-usual-suspects"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-heading text-[12px] tracking-[0.18em] uppercase font-medium transition-all duration-200 hover:brightness-110"
                style={{
                  background: "hsl(var(--brass))",
                  color: "hsl(340 45% 10%)",
                  boxShadow: "0 4px 20px -4px hsl(var(--brass) / 0.35)",
                }}
              >
                Explore the library →
              </Link>
              <a
                href="mailto:hello@resonancelabs.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-heading text-[12px] tracking-[0.18em] uppercase font-normal border transition-colors duration-200"
                style={{
                  color: "hsl(var(--ivory) / 0.8)",
                  borderColor: "hsl(var(--ivory) / 0.2)",
                }}
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          {/* Right: vertical text accent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="hidden sm:flex flex-col items-end gap-6 pb-4"
          >
            <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-foreground/15 [writing-mode:vertical-rl] rotate-180">
              Mapping the stories that hijack science
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom strip */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="h-[1px] origin-left"
        style={{ background: 'linear-gradient(to right, transparent, hsl(var(--brass) / 0.25), transparent)' }}
      />
    </header>
  );
};

export default HeroSection;
