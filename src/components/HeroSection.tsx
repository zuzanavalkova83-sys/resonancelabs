import { motion } from "framer-motion";
import { useGlitch, glitchStyle } from "@/hooks/useGlitch";
import { useState, useEffect } from "react";
import bustQuaestio from "@/assets/socrates-teal-uniform.png";
import bustDistortio from "@/assets/socrates-tinfoil-uniform.png";
import bustDesperatio from "@/assets/goddess-facepalm-uniform.png";

const HeroSection = () => {
  const glitch = useGlitch(9000, 800, 2500);
  const [dotGlitch, setDotGlitch] = useState(false);
  const [distortGlitch, setDistortGlitch] = useState(false);

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

  // Periodic chromatic twitch on the Distortio bust (after it has entered)
  useEffect(() => {
    const fire = () => {
      setDistortGlitch(true);
      setTimeout(() => setDistortGlitch(false), 320);
    };
    const first = setTimeout(fire, 4200);
    const loop = setInterval(() => {
      if (Math.random() > 0.35) fire();
    }, 6500);
    return () => { clearTimeout(first); clearInterval(loop); };
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
            {/* Pink dot */}
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

          {/* ── Right: Three Figures composition ── */}
          <div className="relative hidden md:flex items-center justify-center" style={{ minHeight: '480px' }}>
            <div
              className="relative"
              style={{ width: '460px', height: '460px' }}
            >
              {/* Brass hairline crosshairs — quiet anchor */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute origin-top"
                style={{
                  width: '1px',
                  height: '100%',
                  left: 'calc(50% - 0.5px)',
                  background: 'linear-gradient(to bottom, transparent, hsl(var(--brass) / 0.12) 25%, hsl(var(--brass) / 0.12) 75%, transparent)',
                }}
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.3, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute origin-left"
                style={{
                  height: '1px',
                  width: '100%',
                  bottom: '14%',
                  background: 'linear-gradient(to right, transparent, hsl(var(--brass) / 0.18) 20%, hsl(var(--brass) / 0.18) 80%, transparent)',
                }}
              />

              {/* Soft pink glow halo behind composition */}
              <motion.div
                className="absolute pointer-events-none"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.6, delay: 0.6 }}
                style={{
                  width: '380px',
                  height: '380px',
                  left: '50%',
                  top: '52%',
                  transform: 'translate(-50%, -50%)',
                  background: 'radial-gradient(circle, hsl(340 75% 55% / 0.08) 0%, transparent 65%)',
                  filter: 'blur(20px)',
                }}
              />

              {/* ── DESPERATIO — back-left, descending diagonally, slow tilt ── */}
              <motion.div
                className="absolute pointer-events-none"
                initial={{ opacity: 0, x: -40, y: -50, rotate: -8, scale: 0.9 }}
                animate={{
                  opacity: 0.55,
                  x: 0, y: 0,
                  rotate: 0,
                  scale: 1,
                }}
                transition={{ duration: 2, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: '230px',
                  height: '230px',
                  left: '-2%',
                  top: '0%',
                  zIndex: 1,
                }}
              >
                <motion.img
                  src={bustDesperatio}
                  alt=""
                  aria-hidden
                  className="w-full h-full object-contain select-none"
                  draggable={false}
                  animate={{ y: [0, 4, 0], rotate: [0, -1.5, 0] }}
                  transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 3.5 }}
                  style={{ filter: 'grayscale(0.55) brightness(0.78) contrast(1.05)' }}
                />
              </motion.div>

              {/* ── DISTORTIO — back-right, rising in, glitching periodically ── */}
              <motion.div
                className="absolute pointer-events-none"
                initial={{ opacity: 0, x: 50, y: 30, scale: 0.92 }}
                animate={{ opacity: 0.78, x: 0, y: 0, scale: 1 }}
                transition={{ duration: 1.6, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: '260px',
                  height: '260px',
                  right: '-4%',
                  top: '12%',
                  zIndex: 2,
                }}
              >
                {/* chromatic split layers visible during glitch */}
                {distortGlitch && (
                  <>
                    <img
                      src={bustDistortio}
                      alt=""
                      aria-hidden
                      className="absolute inset-0 w-full h-full object-contain select-none mix-blend-screen"
                      style={{
                        opacity: 0.55,
                        transform: 'translate(-3px, 0)',
                        filter: 'brightness(0.55) sepia(1) hue-rotate(280deg) saturate(7)',
                      }}
                      draggable={false}
                    />
                    <img
                      src={bustDistortio}
                      alt=""
                      aria-hidden
                      className="absolute inset-0 w-full h-full object-contain select-none mix-blend-screen"
                      style={{
                        opacity: 0.45,
                        transform: 'translate(3px, 0)',
                        filter: 'brightness(0.55) sepia(1) hue-rotate(150deg) saturate(6)',
                      }}
                      draggable={false}
                    />
                  </>
                )}
                <motion.img
                  src={bustDistortio}
                  alt=""
                  aria-hidden
                  className="relative w-full h-full object-contain select-none"
                  draggable={false}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  style={{
                    filter: distortGlitch
                      ? 'grayscale(0) contrast(1.15) hue-rotate(-8deg) brightness(1.05)'
                      : 'grayscale(0.1) brightness(0.95) contrast(1.05)',
                    transition: distortGlitch ? 'filter 0.08s' : 'filter 0.6s ease-out',
                  }}
                />
              </motion.div>

              {/* ── QUAESTIO — front-center, anchors composition, enters first ── */}
              <motion.div
                className="absolute pointer-events-none"
                initial={{ opacity: 0, y: 24, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.4, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: '300px',
                  height: '300px',
                  left: '24%',
                  bottom: '6%',
                  zIndex: 3,
                  filter: 'drop-shadow(0 18px 28px hsl(0 0% 0% / 0.5))',
                }}
              >
                <motion.img
                  src={bustQuaestio}
                  alt="Three figures: inquiry, distortion, despair"
                  className="w-full h-full object-contain select-none"
                  draggable={false}
                  animate={{ y: [0, -2.5, 0] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
                  style={{ filter: 'grayscale(0) contrast(1.05)' }}
                />
              </motion.div>

              {/* Whispered Latin — sequenced under each entrance */}
              {[
                { word: 'quaestio', delay: 1.4, x: '32%' },
                { word: 'distortio', delay: 2.1, x: '70%' },
                { word: 'desperatio', delay: 3.1, x: '12%' },
              ].map((w) => (
                <motion.p
                  key={w.word}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: [0, 0.55, 0.32], y: 0 }}
                  transition={{ duration: 1.4, delay: w.delay, times: [0, 0.4, 1], ease: 'easeOut' }}
                  className="absolute font-display italic text-[12px] tracking-[0.2em] lowercase whitespace-nowrap"
                  style={{
                    left: w.x,
                    bottom: '6%',
                    transform: 'translateX(-50%)',
                    color: 'hsl(var(--brass) / 0.7)',
                  }}
                >
                  {w.word}
                </motion.p>
              ))}
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
