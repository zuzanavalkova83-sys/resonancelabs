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

      {/* ── Pink accent dot — overlaps title area ── */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute pointer-events-none left-[38%] top-[28%] sm:left-[32%] sm:top-[24%]"
      >
        <motion.div
          animate={{ y: [0, -6, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full"
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

      {/* Vertical accent line — editorial divider between left and right */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 right-[34%] w-[1px] h-full origin-top hidden md:block"
        style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--brass) / 0.15), transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1px_1fr] items-center min-h-[85vh] gap-0 md:gap-10 pt-20 pb-16">

          {/* ── Left: Title stack ── */}
          <div className="py-10">
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

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] tracking-wider leading-[0.85]"
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
              className="text-lg sm:text-xl text-foreground/50 leading-relaxed mt-8 max-w-sm"
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

          {/* ── Centre rule ── */}
          <div
            className="hidden md:block h-[60%] self-center"
            style={{
              background: 'linear-gradient(to bottom, transparent, hsl(var(--brass) / 0.2), transparent)',
            }}
          />

          {/* ── Right: Signal cards — editorial sidebar ── */}
          <div className="py-10">
            {signals.map((s, i) => (
              <motion.div
                key={s.code}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + i * 0.12 }}
                className="relative pl-6 py-6"
                style={{
                  borderBottom: i < signals.length - 1 ? '1px solid hsl(var(--border) / 0.3)' : 'none',
                }}
              >
                {/* Accent pip */}
                <div
                  className="absolute left-0 top-8 w-[3px] h-8 rounded-full"
                  style={{ background: i === 0 ? 'hsl(340 75% 55%)' : 'hsl(var(--brass) / 0.3)' }}
                />
                <p
                  className="font-mono text-[10px] tracking-[0.25em] uppercase mb-2"
                  style={{ color: 'hsl(var(--brass) / 0.6)' }}
                >
                  {s.code}
                </p>
                <h3 className="font-heading text-[15px] font-medium leading-snug text-foreground mb-1.5">
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

            {/* Vertical whisper text at bottom-right */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-[10px] font-mono tracking-[0.3em] uppercase text-foreground/10 mt-8 text-right"
            >
              Where expertise meets understanding
            </motion.p>
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