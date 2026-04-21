import { motion } from "framer-motion";
import { useGlitch, glitchStyle } from "@/hooks/useGlitch";
import { useState, useEffect } from "react";
import heroHeadsCluster from "@/assets/hero-heads-cluster.png";

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
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[85vh] gap-12 md:gap-0 pt-20 pb-16">

          {/* ── Left: Title stack ── */}
          <div className="relative">
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

          {/* ── Right: finished heads illustration ── */}
          <div className="relative hidden md:flex items-center justify-center" style={{ minHeight: '600px' }}>
            <div className="relative w-full" style={{ height: '600px' }}>
              {/* ── Pink dot — sun/moon behind the trio, anchoring the composition ── */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute pointer-events-none"
                style={{
                  width: '460px',
                  height: '460px',
                  left: '50%',
                  top: '12%',
                  transform: 'translateX(-50%)',
                  zIndex: 0,
                }}
              >
                {/* Outer soft halo */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, hsl(340 75% 50% / 0.45) 0%, hsl(340 70% 40% / 0.18) 55%, transparent 78%)',
                    filter: 'blur(48px)',
                    transform: 'scale(1.5)',
                  }}
                />
                {/* The disc itself — pink halo behind the heads */}
                <motion.div
                  animate={{ y: [0, -4, 0], scale: [1, 1.02, 1] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 38% 32%, hsl(340 78% 60%) 0%, hsl(340 72% 48%) 60%, hsl(338 65% 36%) 100%)',
                    boxShadow: '0 40px 100px -20px hsl(340 75% 50% / 0.55), inset -14px -24px 70px hsl(335 60% 22% / 0.55)',
                    transition: dotGlitch ? 'none' : 'transform 0.3s, box-shadow 0.3s',
                    ...(dotGlitch ? {
                      transform: 'translate(3px, -2px)',
                      boxShadow: '5px 0 40px -4px hsl(340 80% 60% / 0.55), -5px 0 40px -4px hsl(180 75% 50% / 0.25), inset -14px -24px 70px hsl(335 60% 22% / 0.55)',
                    } : {}),
                  }}
                />
              </motion.div>

              <motion.div
                className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 pointer-events-none"
                style={{ width: '115%' }}
                initial={{ opacity: 0, y: 28, scale: 0.94, filter: 'blur(8px)' }}
                animate={{
                  opacity: 1,
                  y: dotGlitch ? -2 : 0,
                  x: dotGlitch ? 3 : 0,
                  scale: 1,
                  filter: 'blur(0px)',
                }}
                transition={{ duration: dotGlitch ? 0.08 : 1.4, delay: dotGlitch ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.img
                  src={heroHeadsCluster}
                  alt="Three figures from antiquity in conversation"
                  className="w-full h-auto select-none"
                  draggable={false}
                  animate={{ y: [0, -5, 0], scale: [1, 1.012, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                  style={{
                    filter: 'contrast(1.05) saturate(1.05) drop-shadow(0 30px 40px hsl(0 0% 0% / 0.6))',
                  }}
                />
              </motion.div>

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
