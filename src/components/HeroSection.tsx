import { motion } from "framer-motion";
import heroIllustration from "@/assets/hero-illustration.png";
import decorButterfly from "@/assets/decor-butterfly.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full bg-background min-h-[100vh] pt-16">
      <div className="relative w-full min-h-[calc(100vh-4rem)] md:min-h-[740px] lg:min-h-[800px] flex flex-col md:flex-row items-stretch overflow-hidden">

        {/* Brand panel */}
        <motion.div
          className="relative flex flex-col justify-center items-start md:w-[30%] shrink-0 z-20 px-8 py-12 md:px-16 md:py-0"
          style={{ minWidth: '340px', maxWidth: '460px' }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Panel background — solid oxblood fading into image */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'hsl(340, 45%, 10%)',
              maskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
            }}
          />

          {/* Subtle noise */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              maskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
            }}
          />

          <div className="relative md:-mt-12">
            <p
              className="font-mono text-[11px] tracking-[0.25em] uppercase mb-6"
              style={{ color: 'hsl(var(--brass))' }}
            >
              Science Communication Studio
            </p>

            <h1 className="font-display text-[56px] md:text-[72px] lg:text-[84px] tracking-wider leading-[0.82] text-foreground mb-8">
              Resonance
              <br />
              Labs.
            </h1>

            <div className="w-12 h-px mb-8" style={{ backgroundColor: 'hsl(var(--brass) / 0.4)' }} />

            <p
              className="font-heading text-[18px] md:text-[20px] font-medium leading-[1.3] tracking-[-0.01em] mb-6"
              style={{ color: 'hsl(var(--foreground))' }}
            >
              Science, Amplified.
            </p>

            <p
              className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal max-w-[300px]"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              In an age defined by the industrial production of noise, we protect your voice.
            </p>
          </div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          className="relative flex-1 overflow-hidden md:-ml-24 lg:-ml-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Soft darken — keeps original colours, adds depth */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, hsl(340, 45%, 10% / 0.15) 0%, transparent 50%, hsl(340, 45%, 10% / 0.1) 100%)',
            }}
          />

          {/* Left bleed from brand panel */}
          <div
            className="absolute inset-y-0 left-0 w-48 md:w-64 lg:w-80 z-30 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right,
                hsl(340, 45%, 10%) 0%,
                hsl(340, 45%, 10% / 0.95) 8%,
                hsl(340, 45%, 10% / 0.8) 18%,
                hsl(340, 45%, 10% / 0.55) 32%,
                hsl(340, 45%, 10% / 0.25) 50%,
                hsl(340, 45%, 10% / 0.08) 70%,
                transparent 100%)`,
            }}
          />

          {/* Top vignette */}
          <div
            className="absolute inset-x-0 top-0 h-16 z-30 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, hsl(340, 45%, 10% / 0.4), transparent)',
            }}
          />

          {/* Bottom fade to background */}
          <div
            className="absolute inset-x-0 bottom-0 h-32 z-30 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, hsl(340, 45%, 10%), hsl(340, 45%, 10% / 0.6) 40%, transparent)',
            }}
          />

          {/* Right edge vignette */}
          <div
            className="absolute inset-y-0 right-0 w-24 z-30 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, hsl(340, 45%, 10% / 0.3), transparent)',
            }}
          />

          <img
            src={heroIllustration}
            alt="Cosmic collage with rocket launch, astronaut, moon, and surreal botanical elements"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 50%', filter: 'saturate(0.85) brightness(0.95) hue-rotate(-8deg)' }}
          />

          <motion.img
            src={decorButterfly}
            alt=""
            className="absolute z-20 w-16 md:w-24 lg:w-28 drop-shadow-lg"
            style={{ top: '18%', left: '12%' }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            whileHover={{ scale: 1.15, rotate: 6 }}
            drag
            dragConstraints={{ top: -80, bottom: 80, left: -80, right: 80 }}
            dragElastic={0.3}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 15 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
