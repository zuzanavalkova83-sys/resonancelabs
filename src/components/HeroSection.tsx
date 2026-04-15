import { motion } from "framer-motion";
import { useGlitch, glitchStyle } from "@/hooks/useGlitch";
import { useState, useEffect } from "react";

const signals = [
  { code: "S01", label: "Narrative Strategy", desc: "Shaping how research enters public conversation." },
  { code: "S02", label: "Distortion Mapping", desc: "Tracking how findings get twisted between lab and headline." },
  { code: "S03", label: "Clarity Under Pressure", desc: "Holding meaning steady when the stakes are high." },
];

const HeroSection = () => {
  const glitch = useGlitch(10000, 600, 3000);
  const [dotGlitch, setDotGlitch] = useState(false);

  useEffect(() => {
    const trigger = () => {
      setDotGlitch(true);
      setTimeout(() => setDotGlitch(false), 400);
    };
    const interval = setInterval(() => {
      if (Math.random() > 0.5) trigger();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative w-full bg-background min-h-[100vh] pt-16 overflow-hidden">
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Hot pink accent dot — breathing + glitch */}
      <motion.div
        className="absolute pointer-events-none hidden md:block"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ top: '14%', right: '8%' }}
      >
        <motion.div
          animate={{
            y: [0, -6, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              background: 'hsl(340 75% 55%)',
              boxShadow: '0 16px 50px -8px hsl(340 75% 55% / 0.35)',
              transition: dotGlitch ? 'none' : 'transform 0.3s, box-shadow 0.3s',
              ...(dotGlitch ? {
                transform: 'translate(3px, -2px) skew(-1deg)',
                boxShadow: '4px 0 20px -4px hsl(340 75% 55% / 0.5), -4px 0 20px -4px hsl(180 80% 50% / 0.3)',
              } : {}),
            }}
          />
        </motion.div>
      </motion.div>

      {/* Small brass dot accent */}
      <motion.div
        className="absolute pointer-events-none hidden md:block"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        style={{
          width: '12px',
          height: '12px',
          top: '28%',
          right: '32%',
          borderRadius: '50%',
          background: 'hsl(var(--brass))',
        }}
      />

      {/* Vertical editorial line */}
      <motion.div
        className="absolute pointer-events-none hidden md:block"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        style={{
          width: '1px',
          height: '120px',
          top: '15%',
          right: '28%',
          background: 'hsl(var(--brass) / 0.2)',
          transformOrigin: 'top',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 min-h-[calc(100vh-4rem)] flex flex-col justify-center py-20">
        {/* Top marker */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-10 h-px" style={{ backgroundColor: 'hsl(var(--brass))' }} />
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: 'hsl(var(--brass))' }}>
            Strategic Science Communication
          </p>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="font-display text-[3.2rem] sm:text-[5.5rem] md:text-[7rem] tracking-wider leading-[0.82] text-foreground mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
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

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="origin-left mb-10"
          style={{ width: '48px', height: '1px', backgroundColor: 'hsl(var(--brass) / 0.4)' }}
        />

        {/* Sub-copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="max-w-xl mb-16 md:mb-20"
        >
          <p className="text-lg sm:text-2xl leading-relaxed text-foreground/50 mb-4 sm:whitespace-nowrap">
            Protecting{" "}
            <span className="inline-block" style={glitchStyle(glitch)}>meaning</span>
            {" "}where research meets public life.
          </p>
          <p className="text-base leading-relaxed text-foreground/40 max-w-md">
            We help serious ideas survive noise, distortion,<br />
            and the distance between expertise and understanding.
          </p>
        </motion.div>

        {/* Signal cards — editorial grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-px"
          style={{ backgroundColor: 'hsl(var(--border) / 0.3)' }}
        >
          {signals.map((s, i) => (
            <motion.div
              key={s.code}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.08 }}
              className="p-6 md:p-8 flex flex-col justify-between"
              style={{
                backgroundColor: 'hsl(var(--burgundy-mid))',
                minHeight: '160px',
              }}
            >
              <div>
                <p
                  className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4"
                  style={{ color: 'hsl(var(--brass))' }}
                >
                  {s.code}
                </p>
                <h3
                  className="font-heading text-[15px] md:text-[16px] font-medium leading-[1.3] mb-3 text-foreground"
                >
                  {s.label}
                </h3>
              </div>
              <p
                className="font-body text-[13px] leading-[1.6]"
                style={{ color: 'hsl(var(--muted-foreground))' }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
