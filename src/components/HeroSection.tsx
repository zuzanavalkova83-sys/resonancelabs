import { motion } from "framer-motion";
import heroIllustration from "@/assets/hero-illustration-v2.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full bg-background min-h-[100vh] pt-16">
      <div className="relative w-full min-h-[calc(100vh-4rem)] md:min-h-[740px] lg:min-h-[800px] flex flex-col md:flex-row items-stretch overflow-hidden">

        {/* Brand panel */}
        <motion.div
          className="relative flex flex-col justify-center items-start md:w-[32%] shrink-0 z-20 px-8 py-12 md:px-16 md:py-0"
          style={{ minWidth: '360px', maxWidth: '480px' }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Panel background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'hsl(340, 45%, 10%)',
              maskImage: 'linear-gradient(to right, black 65%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, black 65%, transparent 100%)',
            }}
          />

          {/* Noise */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              maskImage: 'linear-gradient(to right, black 65%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, black 65%, transparent 100%)',
            }}
          />

          <div className="relative md:-mt-8">
            <p
              className="font-mono text-[10px] tracking-[0.3em] uppercase mb-8"
              style={{ color: 'hsl(var(--brass))' }}
            >
              Strategic Science Communication
            </p>

            <h1 className="font-display text-[52px] md:text-[68px] lg:text-[80px] tracking-wider leading-[0.82] text-foreground mb-10">
              Resonance
              <br />
              Labs.
            </h1>

            <div className="w-10 h-px mb-8" style={{ backgroundColor: 'hsl(var(--brass) / 0.35)' }} />

            <p
              className="font-heading text-[17px] md:text-[19px] font-medium leading-[1.35] tracking-[-0.01em] text-foreground mb-5 max-w-[320px]"
            >
              Protecting meaning where
              <br />
              research meets public life.
            </p>

            <p
              className="font-body text-[14px] md:text-[15px] leading-[1.75] font-normal max-w-[300px]"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              We help serious ideas survive noise, distortion, and the distance between expertise and understanding.
            </p>
          </div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          className="relative flex-1 overflow-hidden md:-ml-20 lg:-ml-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Depth overlay */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, hsl(340, 45%, 10% / 0.12) 0%, transparent 50%, hsl(340, 45%, 10% / 0.08) 100%)',
            }}
          />

          {/* Left bleed */}
          <div
            className="absolute inset-y-0 left-0 w-48 md:w-56 lg:w-72 z-30 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right,
                hsl(340, 45%, 10%) 0%,
                hsl(340, 45%, 10% / 0.95) 10%,
                hsl(340, 45%, 10% / 0.75) 22%,
                hsl(340, 45%, 10% / 0.45) 38%,
                hsl(340, 45%, 10% / 0.15) 58%,
                transparent 100%)`,
            }}
          />

          {/* Top vignette */}
          <div
            className="absolute inset-x-0 top-0 h-20 z-30 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, hsl(340, 45%, 10% / 0.5), transparent)',
            }}
          />

          {/* Bottom fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-36 z-30 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, hsl(340, 45%, 10%), hsl(340, 45%, 10% / 0.5) 45%, transparent)',
            }}
          />

          {/* Right vignette */}
          <div
            className="absolute inset-y-0 right-0 w-20 z-30 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, hsl(340, 45%, 10% / 0.25), transparent)',
            }}
          />

          <img
            src={heroIllustration}
            alt="Editorial collage: open book with pages dissolving into signal noise, cracked magnifying glass, botanical specimens, and scattered typography"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 45%', filter: 'saturate(0.8) brightness(0.92)' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
