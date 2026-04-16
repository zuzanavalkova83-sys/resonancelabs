import { motion } from "framer-motion";
import { useGlitch, glitchStyle } from "@/hooks/useGlitch";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const glitch = useGlitch(9000, 800, 2500);
  const [dotGlitch, setDotGlitch] = useState(false);
  const [shockwave, setShockwave] = useState(false);
  const [shockCount, setShockCount] = useState(0);

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

  // Shockwave: fires every 6-10s, lasts 1.2s
  useEffect(() => {
    const fire = () => {
      setShockwave(true);
      setShockCount(c => c + 1);
      setTimeout(() => setShockwave(false), 1200);
    };
    const first = setTimeout(fire, 3500);
    const loop = setInterval(() => {
      if (Math.random() > 0.3) fire();
    }, 8000);
    return () => { clearTimeout(first); clearInterval(loop); };
  }, []);

  // Orbital ring config
  const rings = [
    { r: 140, duration: 20, dots: 3, delay: 0.6, opacity: 0.15, dotSize: 4 },
    { r: 100, duration: 14, dots: 2, delay: 0.9, opacity: 0.1, dotSize: 3, reverse: true },
    { r: 60, duration: 10, dots: 1, delay: 1.2, opacity: 0.08, dotSize: 3 },
  ];

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

          {/* ── Right: Resonance orbital ── */}
          <div className="relative hidden md:flex items-center justify-center" style={{ minHeight: '420px' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
              style={{ width: '320px', height: '320px' }}
            >
              {/* Shockwave expanding rings */}
              {shockwave && (
                <>
                  {[0, 150, 300].map((delayMs, i) => (
                    <motion.div
                      key={`shock-${shockCount}-${i}`}
                      className="absolute rounded-full pointer-events-none"
                      style={{
                        left: 'calc(50% - 8px)',
                        top: 'calc(50% - 8px)',
                        width: 16,
                        height: 16,
                        border: '1.5px solid hsl(340 75% 55% / 0.6)',
                        boxShadow: '0 0 8px 2px hsl(340 75% 55% / 0.15), inset 0 0 8px 2px hsl(180 80% 50% / 0.08)',
                      }}
                      initial={{ scale: 1, opacity: 0.8 }}
                      animate={{ scale: 25, opacity: 0 }}
                      transition={{
                        duration: 1.0,
                        delay: delayMs / 1000,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  ))}
                  {/* Horizontal glitch slash */}
                  <motion.div
                    key={`slash-${shockCount}`}
                    className="absolute pointer-events-none"
                    style={{
                      top: 'calc(50% - 1px)',
                      left: '-20%',
                      right: '-20%',
                      height: '2px',
                      background: 'linear-gradient(to right, transparent 10%, hsl(340 75% 55% / 0.5) 30%, hsl(180 80% 50% / 0.3) 50%, hsl(340 75% 55% / 0.5) 70%, transparent 90%)',
                    }}
                    initial={{ scaleX: 0, opacity: 1 }}
                    animate={{ scaleX: 1, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </>
              )}

              {/* Orbital rings — distort on shockwave */}
              {rings.map((ring, ri) => (
                <motion.div
                  key={ri}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: shockwave ? 1 + (0.08 * (3 - ri)) : 1,
                  }}
                  transition={shockwave
                    ? { scale: { duration: 0.15, ease: "easeOut" } }
                    : { duration: 0.8, delay: ring.delay }
                  }
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    filter: shockwave
                      ? `hue-rotate(${ri * 15}deg) brightness(1.3)`
                      : 'none',
                    transition: shockwave ? 'filter 0.1s' : 'filter 0.8s ease-out',
                  }}
                >
                  {/* Ring circle */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: ring.r * 2,
                      height: ring.r * 2,
                      border: shockwave
                        ? `1px solid hsl(340 75% 55% / ${ring.opacity * 2.5})`
                        : `1px solid hsl(var(--brass) / ${ring.opacity})`,
                      transition: shockwave ? 'border-color 0.1s' : 'border-color 0.6s ease-out',
                      transform: shockwave
                        ? `translate(${(ri - 1) * 3}px, ${(ri - 1) * -2}px)`
                        : 'none',
                    }}
                  />
                  {/* Rotating dots on this ring */}
                  <motion.div
                    animate={{ rotate: ring.reverse ? -360 : 360 }}
                    transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
                    className="absolute"
                    style={{ width: ring.r * 2, height: ring.r * 2 }}
                  >
                    {Array.from({ length: ring.dots }).map((_, di) => {
                      const angle = (di / ring.dots) * 360;
                      const rad = (angle * Math.PI) / 180;
                      const x = Math.cos(rad) * ring.r;
                      const y = Math.sin(rad) * ring.r;
                      const isPink = ri === 0 && di === 0;
                      return (
                        <motion.div
                          key={di}
                          className="absolute rounded-full"
                          style={{
                            width: ring.dotSize + (isPink ? 2 : 0),
                            height: ring.dotSize + (isPink ? 2 : 0),
                            left: `calc(50% + ${x}px - ${(ring.dotSize + (isPink ? 2 : 0)) / 2}px)`,
                            top: `calc(50% + ${y}px - ${(ring.dotSize + (isPink ? 2 : 0)) / 2}px)`,
                            background: isPink
                              ? 'hsl(340 75% 55%)'
                              : shockwave ? 'hsl(340 75% 55% / 0.7)' : 'hsl(var(--brass))',
                            boxShadow: isPink
                              ? '0 0 12px 3px hsl(340 75% 55% / 0.5)'
                              : shockwave
                                ? '0 0 12px 3px hsl(340 75% 55% / 0.3)'
                                : '0 0 8px 2px hsl(var(--brass) / 0.3)',
                            transition: shockwave ? 'none' : 'background 0.6s, box-shadow 0.6s',
                          }}
                          animate={isPink ? {
                            boxShadow: [
                              '0 0 12px 3px hsl(340 75% 55% / 0.5)',
                              '0 0 20px 6px hsl(340 75% 55% / 0.7)',
                              '0 0 12px 3px hsl(340 75% 55% / 0.5)',
                            ],
                          } : undefined}
                          transition={isPink ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : undefined}
                        />
                      );
                    })}
                  </motion.div>
                </motion.div>
              ))}

              {/* Core — pulsing glow, flares on shockwave */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: 10,
                  height: 10,
                  left: 'calc(50% - 5px)',
                  top: 'calc(50% - 5px)',
                  background: shockwave ? 'hsl(340 75% 65%)' : 'hsl(var(--brass))',
                  transition: shockwave ? 'none' : 'background 0.6s',
                }}
                animate={{
                  boxShadow: shockwave
                    ? [
                        '0 0 30px 10px hsl(340 75% 55% / 0.6)',
                        '0 0 50px 15px hsl(340 75% 55% / 0.8)',
                        '0 0 30px 10px hsl(340 75% 55% / 0.6)',
                      ]
                    : [
                        '0 0 15px 4px hsl(var(--brass) / 0.3)',
                        '0 0 30px 8px hsl(var(--brass) / 0.5)',
                        '0 0 15px 4px hsl(var(--brass) / 0.3)',
                      ],
                  scale: shockwave ? [1, 1.8, 1] : [1, 1.2, 1],
                }}
                transition={{ duration: shockwave ? 0.4 : 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Chromatic split glitch lines — only during shockwave */}
              {shockwave && (
                <>
                  {[...Array(5)].map((_, i) => {
                    const y = (Math.random() - 0.5) * 280;
                    return (
                      <motion.div
                        key={`glitch-line-${shockCount}-${i}`}
                        className="absolute pointer-events-none"
                        style={{
                          top: `calc(50% + ${y}px)`,
                          left: 0,
                          right: 0,
                          height: `${1 + Math.random() * 2}px`,
                          background: i % 2 === 0
                            ? 'hsl(340 75% 55% / 0.25)'
                            : 'hsl(180 80% 50% / 0.15)',
                        }}
                        initial={{ scaleX: 0, opacity: 1 }}
                        animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{
                          duration: 0.3 + Math.random() * 0.3,
                          delay: Math.random() * 0.3,
                          ease: "easeOut",
                        }}
                      />
                    );
                  })}
                </>
              )}

              {/* Core label — MEANING */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="absolute"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: shockwave
                    ? 'translate(-50%, -50%) translate(3px, -1px)'
                    : 'translate(-50%, -50%)',
                  transition: shockwave ? 'none' : 'transform 0.4s',
                }}
              >
                <p
                  className="font-display text-[13px] tracking-[0.15em] uppercase whitespace-nowrap"
                  style={{
                    color: shockwave ? 'hsl(340 75% 55% / 0.9)' : 'hsl(var(--brass) / 0.6)',
                    textShadow: shockwave ? '2px 0 hsl(340 75% 55% / 0.4), -2px 0 hsl(180 80% 50% / 0.3)' : '0 0 20px hsl(var(--brass) / 0.2)',
                    transition: shockwave ? 'none' : 'color 0.6s, text-shadow 0.6s',
                  }}
                >
                  meaning
                </p>
              </motion.div>

              {/* Crosshair lines */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="absolute origin-center"
                style={{
                  width: '1px',
                  height: '100%',
                  left: 'calc(50% - 0.5px)',
                  background: shockwave
                    ? 'linear-gradient(to bottom, transparent, hsl(340 75% 55% / 0.2), transparent)'
                    : 'linear-gradient(to bottom, transparent, hsl(var(--brass) / 0.08), transparent)',
                  transition: shockwave ? 'none' : 'background 0.6s',
                }}
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute origin-center"
                style={{
                  height: '1px',
                  width: '100%',
                  top: 'calc(50% - 0.5px)',
                  background: shockwave
                    ? 'linear-gradient(to right, transparent, hsl(340 75% 55% / 0.2), transparent)'
                    : 'linear-gradient(to right, transparent, hsl(var(--brass) / 0.08), transparent)',
                  transition: shockwave ? 'none' : 'background 0.6s',
                }}
              />

              {/* Corner coordinates */}
              {[
                { pos: { top: 0, right: 0 }, label: '48°N' },
                { pos: { bottom: 0, left: 0 }, label: '16°E' },
              ].map((c, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 + i * 0.1, duration: 0.6 }}
                  className="absolute font-mono text-[9px] tracking-[0.2em]"
                  style={{ ...c.pos, color: 'hsl(var(--brass) / 0.25)' }}
                >
                  {c.label}
                </motion.p>
              ))}
            </motion.div>
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
