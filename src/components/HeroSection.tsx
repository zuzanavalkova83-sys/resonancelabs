import { motion } from "framer-motion";
import { useGlitch, glitchStyle } from "@/hooks/useGlitch";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const glitch = useGlitch(9000, 800, 2500);
  const letterGlitch = useGlitch(12000, 600, 4000);
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

  // Giant letters for the right side typographic sculpture
  const letters = ["R", "L"];

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

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[85vh] gap-12 md:gap-0 pt-20 pb-16">

          {/* ── Left: Title stack ── */}
          <div className="relative">
            {/* Pink dot — tucked into the title */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute pointer-events-none z-0"
              style={{ right: '10%', top: '15%' }}
            >
              <motion.div
                animate={{ y: [0, -5, 0], scale: [1, 1.04, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full"
                  style={{
                    background: 'hsl(340 75% 55%)',
                    boxShadow: '0 10px 35px -6px hsl(340 75% 55% / 0.4)',
                    transition: dotGlitch ? 'none' : 'transform 0.3s, box-shadow 0.3s',
                    ...(dotGlitch ? {
                      transform: 'translate(4px, -2px) skew(-1.5deg)',
                      boxShadow: '5px 0 20px -4px hsl(340 75% 55% / 0.5), -5px 0 20px -4px hsl(180 80% 50% / 0.25)',
                    } : {}),
                  }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-10 h-[1px]" style={{ background: 'hsl(var(--brass) / 0.5)' }} />
              <p className="text-[11px] font-mono tracking-[0.3em] uppercase" style={{ color: 'hsl(var(--brass))' }}>
                Strategic Science Communication
              </p>
            </motion.div>

            <div className="overflow-hidden relative z-10">
              <motion.h1
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[3rem] sm:text-[4rem] md:text-[4.8rem] tracking-wider leading-[0.88]"
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
              className="text-lg sm:text-xl text-foreground/50 leading-relaxed mt-8 max-w-sm relative z-10"
            >
              Protecting meaning where research meets public life.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="text-[15px] text-foreground/35 leading-relaxed mt-4 max-w-sm"
            >
              We help serious ideas survive noise, distortion,<br className="hidden sm:inline" />
              and the distance between expertise and understanding.
            </motion.p>
          </div>

          {/* ── Right: Typographic sculpture ── */}
          <div className="relative hidden md:flex items-center justify-center overflow-hidden">
            {/* Giant stacked monogram */}
            <div className="relative" style={{ height: '420px', width: '100%' }}>
              {letters.map((letter, i) => (
                <motion.div
                  key={letter}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute font-display select-none"
                  style={{
                    fontSize: i === 0 ? '22rem' : '18rem',
                    lineHeight: 0.8,
                    right: i === 0 ? '10%' : '0%',
                    top: i === 0 ? '-2rem' : '8rem',
                    color: 'transparent',
                    WebkitTextStroke: i === 0
                      ? '1px hsl(var(--brass) / 0.12)'
                      : '1px hsl(var(--brass) / 0.08)',
                    letterSpacing: '-0.04em',
                    ...(letterGlitch && i === 0 ? {
                      WebkitTextStroke: '1px hsl(340 75% 55% / 0.2)',
                      textShadow: '3px 0 hsl(340 75% 55% / 0.08), -3px 0 hsl(180 80% 50% / 0.06)',
                      transform: 'translate(2px, -1px)',
                    } : {}),
                  }}
                >
                  {letter}
                </motion.div>
              ))}

              {/* Floating label anchored to the monogram */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute"
                style={{ bottom: '3rem', left: '15%' }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-8 h-[1px]" style={{ background: 'hsl(var(--brass) / 0.3)' }} />
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase" style={{ color: 'hsl(var(--brass) / 0.4)' }}>
                    Est. 2025
                  </p>
                </div>
                <p className="text-[13px] leading-relaxed max-w-[22ch]" style={{ color: 'hsl(var(--foreground) / 0.2)' }}>
                  Where expertise meets understanding
                </p>
              </motion.div>

              {/* Thin horizontal rule cutting through the letters */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute origin-left"
                style={{
                  top: '55%',
                  left: '5%',
                  right: '5%',
                  height: '1px',
                  background: 'linear-gradient(to right, hsl(var(--brass) / 0.2), hsl(340 75% 55% / 0.15), transparent)',
                }}
              />
            </div>
          </div>
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
