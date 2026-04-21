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
      setTimeout(() => setDotGlitch(false), 2200);
    };
    const first = setTimeout(trigger, 6000);
    const interval = setInterval(() => {
      if (Math.random() > 0.3) trigger();
    }, 11000);
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
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[88vh] gap-12 md:gap-4 pt-20 pb-16">

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

          {/* ── Right: heads illustration with halo ── */}
          <div className="relative hidden md:flex items-end justify-start min-h-[600px] overflow-visible">
            <div className="relative" style={{ width: 'min(100%, 460px)', height: '560px', marginLeft: '-90px', marginBottom: '-40px' }}>

              {/* Outer atmospheric bloom — diffused, painterly */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2.4, delay: 0.2 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 42%, hsl(340 70% 48% / 0.22) 0%, hsl(340 60% 36% / 0.10) 38%, transparent 68%)',
                  filter: 'blur(56px)',
                  transform: 'scale(1.4)',
                  zIndex: 0,
                }}
              />

              {/* The pink halo disc — sized as halo behind the heads */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute pointer-events-none"
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  left: '38%',
                  top: '20px',
                  transform: 'translateX(-50%)',
                  zIndex: 1,
                }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 36% 30%, hsl(340 72% 58% / 0.78) 0%, hsl(340 60% 42% / 0.62) 55%, hsl(338 50% 26% / 0.45) 100%)',
                    boxShadow: '0 60px 140px -20px hsl(340 65% 40% / 0.45), inset -24px -36px 90px hsl(335 45% 14% / 0.55), inset 18px 22px 70px hsl(340 70% 62% / 0.18)',
                    opacity: 0.82,
                    transition: 'transform 2.2s cubic-bezier(0.45, 0, 0.25, 1), box-shadow 2.2s cubic-bezier(0.45, 0, 0.25, 1), filter 2.2s ease',
                    ...(dotGlitch ? {
                      transform: 'translate(6px, -3px) scale(1.015)',
                      boxShadow: '14px 0 90px -8px hsl(340 75% 56% / 0.42), -14px 0 90px -8px hsl(180 65% 50% / 0.28), 0 60px 140px -20px hsl(340 65% 40% / 0.45), inset -24px -36px 90px hsl(335 45% 14% / 0.55)',
                      filter: 'hue-rotate(-6deg)',
                    } : {}),
                  }}
                />
              </motion.div>

              {/* Heads illustration — dominant foreground, centered over disc */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-10"
                style={{ width: '100%', top: '90px' }}
                initial={{ opacity: 0, y: 32, scale: 0.94, filter: 'blur(10px)' }}
                animate={{
                  opacity: 1,
                  y: dotGlitch ? -2 : 0,
                  x: dotGlitch ? 3 : 0,
                  scale: 1,
                  filter: 'blur(0px)',
                }}
                transition={{ duration: dotGlitch ? 0.08 : 1.6, delay: dotGlitch ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.img
                  src={heroHeadsCluster}
                  alt="Three figures from antiquity in conversation"
                  className="w-full h-auto select-none"
                  draggable={false}
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  style={{
                    opacity: 0.88,
                    mixBlendMode: 'luminosity',
                    filter: 'contrast(1.04) saturate(0.85) brightness(1.02) drop-shadow(0 32px 48px hsl(340 50% 4% / 0.6)) drop-shadow(0 0 50px hsl(340 60% 32% / 0.25))',
                  }}
                />
              </motion.div>

              {/* Bottom shadow pool to anchor figures */}
              <div
                className="absolute left-1/2 -translate-x-1/2 bottom-4 pointer-events-none"
                style={{
                  width: '60%',
                  height: '36px',
                  background: 'radial-gradient(ellipse at center, hsl(340 60% 4% / 0.7) 0%, transparent 70%)',
                  filter: 'blur(10px)',
                  zIndex: 5,
                }}
              />

              {/* ── Latin labels: quaestio · distortio · desperatio ── */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                {[
                  { word: 'quaestio',   left: '14%',  top: '10%', delay: 1.6, align: 'left' as const },
                  { word: 'distortio',  left: '50%',  top: '2%',  delay: 1.9, align: 'center' as const },
                  { word: 'desperatio', left: '86%',  top: '14%', delay: 2.2, align: 'right' as const },
                ].map(({ word, left, top, delay, align }) => (
                  <motion.div
                    key={word}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute flex items-center gap-2"
                    style={{
                      left,
                      top,
                      transform: align === 'center'
                        ? 'translateX(-50%)'
                        : align === 'right'
                          ? 'translateX(-100%)'
                          : 'translateX(0)',
                    }}
                  >
                    {align !== 'left' && (
                      <span
                        className="block h-px"
                        style={{ width: '18px', background: 'hsl(var(--brass) / 0.45)' }}
                      />
                    )}
                    <span
                      className="font-mono uppercase"
                      style={{
                        fontSize: '10px',
                        letterSpacing: '0.32em',
                        color: 'hsl(var(--brass) / 0.78)',
                        textShadow: '0 1px 8px hsl(340 50% 6% / 0.8)',
                      }}
                    >
                      {word}
                    </span>
                    {align === 'left' && (
                      <span
                        className="block h-px"
                        style={{ width: '18px', background: 'hsl(var(--brass) / 0.45)' }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
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
