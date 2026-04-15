import { motion } from "framer-motion";
import { useGlitch, glitchStyle } from "@/hooks/useGlitch";
import { useState, useEffect } from "react";

const signals = [
  { code: "S01", label: "Narrative Strategy", desc: "Shaping how research enters public conversation." },
  { code: "S02", label: "Distortion Mapping", desc: "Tracking how findings get twisted between lab and headline." },
  { code: "S03", label: "Clarity Under Pressure", desc: "Holding meaning steady when the stakes are high." },
];

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

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[85vh] gap-12 md:gap-16 pt-20 pb-16">

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

          {/* ── Right: Signal cards ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            {/* Vertical line accent */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[1px] hidden md:block"
              style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--brass) / 0.15), transparent)' }}
            />

            <div className="md:pl-10 space-y-0">
              {signals.map((s, i) => (
                <motion.div
                  key={s.code}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                  className="relative py-6 first:pt-0 last:pb-0"
                >
                  {i < signals.length - 1 && (
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[1px]"
                      style={{ background: 'hsl(var(--border) / 0.2)' }}
                    />
                  )}
                  <p
                    className="font-mono text-[10px] tracking-[0.25em] uppercase mb-2"
                    style={{ color: 'hsl(var(--brass) / 0.5)' }}
                  >
                    {s.code}
                  </p>
                  <h3 className="font-heading text-[15px] font-medium leading-snug text-foreground/90 mb-1">
                    {s.label}
                  </h3>
                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ color: 'hsl(var(--muted-foreground))' }}
                  >
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="text-[10px] font-mono tracking-[0.25em] uppercase text-foreground/10 mt-10 md:pl-10"
            >
              Where expertise meets understanding
            </motion.p>
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