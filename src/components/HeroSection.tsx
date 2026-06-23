import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroPortrait from "@/assets/hero-portrait.mp4.asset.json";


const HeroSection = () => {
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
        >
          NOISE
        </motion.span>
      </div>

      {/* Right-side video atmosphere — tucked behind the hero with a gradient fade */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <video
          src={heroPortrait.url}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute bottom-0 right-0 h-[92%] sm:h-full w-full sm:w-[78%] lg:w-[68%] object-cover opacity-[0.82] sm:opacity-[0.78]"
          style={{
            objectPosition: "72% center",
            filter: "contrast(1.04) brightness(1.04) saturate(0.82) hue-rotate(-14deg)",
            maskImage: "linear-gradient(to right, transparent 0%, black 44%), linear-gradient(to bottom, transparent 0%, black 18%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 44%), linear-gradient(to bottom, transparent 0%, black 18%)",
            animation: "hero-zoom 28s ease-in-out infinite alternate",
            transformOrigin: "70% 55%",
          }}
        />
        {/* Burgundy wash to pull the painting into the site palette */}
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background: "linear-gradient(105deg, hsl(var(--background) / 0.94) 0%, hsl(var(--background) / 0.5) 42%, hsl(var(--burgundy-mid) / 0.12) 100%)",
          }}
        />
        {/* Cool color overlay — shifts warm oranges toward the burgundy/wine register */}
        <div
          className="absolute inset-0 mix-blend-color opacity-[0.18]"
          style={{
            background: "linear-gradient(120deg, hsl(var(--wine-deep)) 0%, hsl(var(--burgundy)) 60%, hsl(var(--wine)) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="relative grid grid-cols-1 items-end min-h-[68vh] sm:min-h-[92vh] pb-16 sm:pb-20 pt-24">
          {/* Left: typographic title stack */}
          <div className="max-w-2xl">
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
                  style={{ color: 'hsl(var(--brass))' }}
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
              Strategic communication for science. Narrative risk mapping.
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
              <span className="inline-block">
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
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.35 }}
              className="relative lg:absolute mt-8 lg:mt-0 lg:bottom-12 lg:right-10 max-w-none lg:max-w-[260px] text-left lg:text-right pointer-events-none"
            >
              <div className="h-px w-10 lg:w-12 mb-2 lg:mb-3 lg:ml-auto bg-brass/55" />
              <p
                className="font-heading text-[11px] lg:text-[13px] xl:text-[14px] uppercase tracking-[0.18em] lg:tracking-[0.22em] leading-[1.45] lg:leading-[1.55] font-normal lg:font-medium"
                style={{
                  color: "hsl(var(--brass) / 1)",
                  textShadow: "0 1px 10px hsl(var(--background) / 0.92), 0 2px 22px hsl(var(--background) / 0.7)",
                }}
              >
                "SCIENTIST WATCHING HER RESEARCH GO WILD ON SOCIALS", OIL ON WORRY, 2026
              </p>
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