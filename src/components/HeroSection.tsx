import { motion } from "framer-motion";
import { useGlitch, glitchStyle } from "@/hooks/useGlitch";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const glitch = useGlitch(9000, 800, 2500);
  const [dotGlitch, setDotGlitch] = useState(false);

  useEffect(() => {
    const trigger = () => {
      setDotGlitch(true);
      setTimeout(() => setDotGlitch(false), 400);
    };
    const first = setTimeout(trigger, 5000);
    const interval = setInterval(() => {
      if (Math.random() > 0.4) trigger();
    }, 7000);
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

      {/* ── Pink accent dot — overlaps where Resonance meets Labs ── */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute pointer-events-none right-[-1rem] top-[6rem] sm:right-auto sm:left-[26%] sm:top-[22%]"
      >
        <motion.div
          animate={{ y: [0, -6, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full"
            style={{
              background: 'hsl(340 75% 55%)',
              boxShadow: '0 12px 40px -8px hsl(340 75% 55% / 0.45), 0 0 60px -12px hsl(340 75% 55% / 0.2)',
              transition: dotGlitch ? 'none' : 'transform 0.3s, box-shadow 0.3s',
              ...(dotGlitch ? {
                transform: 'translate(5px, -3px) skew(-2deg)',
                boxShadow: '6px 0 25px -4px hsl(340 75% 55% / 0.5), -6px 0 25px -4px hsl(180 80% 50% / 0.3)',
              } : {}),
            }}
          />
        </motion.div>
      </motion.div>

      {/* Diagonal accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 right-[38%] w-[1px] h-full origin-top hidden sm:block"
        style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--brass) / 0.2), transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-end min-h-[70vh] sm:min-h-[80vh] gap-8 pb-16 sm:pb-20 pt-20">
          {/* Left: title stack */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-10 h-[1px]" style={{ background: 'hsl(var(--brass) / 0.5)' }} />
              <p className="text-[12px] font-mono tracking-[0.35em] uppercase" style={{ color: 'hsl(var(--brass))' }}>
                Strategic Science Communication
              </p>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[5.5rem] sm:text-[7rem] md:text-[9rem] tracking-wider leading-[0.82]"
              >
                <span className="text-foreground">Resonance</span>
                <br />
                <span
                  className="inline-block"
                  style={{
                    color: 'hsl(var(--brass))',
                    ...glitchStyle(glitch),
                  }}
                >
                  Labs.
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-xl sm:text-2xl text-foreground/50 leading-relaxed mt-8 max-w-md"
            >
              Protecting meaning where research meets public life.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="text-base text-foreground/40 leading-relaxed mt-4 max-w-md"
            >
              We help serious ideas survive noise, distortion,<br />
              and the distance between expertise and understanding.
            </motion.p>
          </div>

          {/* Right: vertical text accent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="hidden sm:flex flex-col items-end gap-6 pb-4"
          >
            <p
              className="text-[11px] font-mono tracking-[0.3em] uppercase text-foreground/15"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Where expertise meets understanding
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom strip */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="h-[2px] origin-left"
        style={{ background: 'linear-gradient(to right, transparent, hsl(var(--brass) / 0.3), transparent)' }}
      />
    </header>
  );
};

export default HeroSection;