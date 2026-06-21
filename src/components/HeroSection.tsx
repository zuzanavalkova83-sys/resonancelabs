import { motion } from "framer-motion";
import { useGlitch, glitchStyle } from "@/hooks/useGlitch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroPortrait from "@/assets/hero-portrait.mp4.asset.json";
import heroPortraitPoster from "@/assets/hero-portrait-poster.jpg.asset.json";

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
              opacity: [0.02, 0.03, 0.038, 0.03, 0.02],
            x: [60, 0, 0, 0, 0],
            scale: [1, 1, 1.06, 1.06, 1],
          }}
          transition={{
            opacity: { duration: 26, delay: 2.4, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 2.2, ease: "easeOut" },
            scale: { duration: 26, delay: 2.4, repeat: Infinity, ease: "easeInOut" },
          }}
            className="absolute -left-[6%] sm:-left-[4%] bottom-[-8vw] font-display text-[30vw] sm:text-[26vw] leading-[0.78] tracking-[-0.02em] text-foreground origin-bottom-left"
          aria-hidden
          style={bgGlitch ? {
              opacity: 0.05,
            textShadow: "6px 0 hsl(var(--signal-red)), -6px 0 hsl(var(--brass))",
            transform: "translate(4px, -2px) skewX(-1.5deg)",
            transition: "none",
          } : {}}
        >
          NOISE
        </motion.span>
      </div>

      {/* Right-side video atmosphere — tucked behind the hero with a gradient fade */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <video
          src={heroPortrait.url}
          poster={heroPortraitPoster.url}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute top-0 right-0 h-full w-full sm:w-[70%] lg:w-[62%] object-cover opacity-[0.55] sm:opacity-[0.5]"
          style={{
            filter: "contrast(1.05) brightness(0.92)",
            maskImage: "linear-gradient(to right, transparent 0%, transparent 30%, black 60%), linear-gradient(to top, transparent 0%, black 18%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, transparent 30%, black 60%), linear-gradient(to top, transparent 0%, black 18%)",
          }}
        />
        {/* Subtle navy wash to unify the palette without killing color */}
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background: "linear-gradient(105deg, hsl(var(--background) / 0.92) 0%, hsl(var(--background) / 0.55) 45%, transparent 72%)",
          }}
        />
      </div>


      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-end min-h-[68vh] sm:min-h-[92vh] gap-10 pb-16 sm:pb-20 pt-24">

          {/* Left: typographic title stack */}
          <div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 110 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[3.6rem] sm:text-[5.6rem] md:text-[7.4rem] tracking-wider leading-[0.84]"
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
              className="text-lg sm:text-xl text-foreground/55 leading-snug mt-8 max-w-2xl sm:whitespace-nowrap"
            >
              Communication services for science. Narrative risk mapping.
              <br />
              <span className="text-foreground/35 whitespace-normal">
                Write your story before the story writes itself for you.
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-[14px] text-foreground/40 leading-relaxed mt-4 max-w-md"
            >
              Resonance Labs is a communications practice for research, clinical,
              and science-led organisations. We chart how serious work is likely to be{" "}
              <span className="inline-block" style={glitchStyle(riskGlitch, "subtle")}>
                twisted
              </span>{" "}
              in public, and help you get there first.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.25 }}
              className="flex flex-wrap items-center gap-4 mt-10"
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

          {/* Right: portrait plate — the subject, under pressure */}
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden sm:flex flex-col items-end gap-3 self-stretch h-full"
          >
            <div
              className="relative h-full aspect-[4/6] overflow-hidden"
              style={{
                border: "1px solid hsl(var(--ivory) / 0.18)",
                boxShadow:
                  "0 40px 80px -30px hsl(340 60% 3% / 0.85), inset 0 0 0 1px hsl(var(--ivory) / 0.05)",
              }}
            >
              {/* Base video — pushed toward high-contrast monochrome so the tint reads cleanly */}
              <video
                src={heroPortrait.url}
                poster={heroPortraitPoster.url}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  filter:
                    "grayscale(0.95) contrast(1.22) brightness(1.06)",
                }}
              />
              {/* Signal-red duotone wash — paints the midtones/shadows in accent red */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-multiply"
                style={{
                  background: "hsl(var(--signal-red) / 0.78)",
                }}
              />
              {/* Ivory highlights — pulls whites back, breaks the flat red */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-screen"
                style={{
                  background:
                    "linear-gradient(160deg, hsl(var(--ivory) / 0.22) 0%, transparent 45%, transparent 100%)",
                }}
              />
              {/* Deep wine in the shadows — anchors to site palette */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-multiply"
                style={{
                  background:
                    "linear-gradient(200deg, transparent 0%, transparent 55%, hsl(var(--wine-deep) / 0.55) 100%)",
                }}
              />
              {/* Inner vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 100px hsl(340 60% 4% / 0.7)",
                }}
              />
              {/* Film grain — match section noise */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.1] mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
              />
            </div>
            <figcaption className="flex items-baseline justify-between w-full gap-3">
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground/45">
                The subject, under pressure
              </span>
              <span className="h-px flex-1 mx-2" style={{ background: "hsl(var(--ivory) / 0.12)" }} />
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground/30">
                oil / loop
              </span>
            </figcaption>
          </motion.figure>
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