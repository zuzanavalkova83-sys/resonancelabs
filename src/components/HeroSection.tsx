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
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, hsl(340, 42%, 12%) 0%, hsl(340, 45%, 10%) 100%)',
              maskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
            }}
          />

          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              maskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
            }}
          />

          <div className="relative md:-mt-12">
            <h1 className="font-display text-[56px] md:text-[72px] lg:text-[80px] tracking-wider leading-[0.85] text-foreground mb-6">
              Resonance Labs.
            </h1>

            <p
              className="font-heading text-[20px] md:text-[24px] font-medium leading-[1.2] tracking-[-0.01em] mb-8"
              style={{ color: 'hsl(30, 15%, 68%)' }}
            >
              Science, Amplified.
            </p>

            <p className="font-body text-[16px] md:text-[17px] leading-[1.65] font-normal max-w-[320px]" style={{ color: 'hsl(35, 15%, 55%)' }}>
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
          <div className="absolute inset-0 z-10 mix-blend-color opacity-20 pointer-events-none" style={{ backgroundColor: 'hsl(340, 35%, 30%)' }} />

          <div
            className="absolute inset-y-0 left-0 w-48 md:w-64 lg:w-80 z-30 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right,
                hsl(340, 45%, 10%) 0%,
                hsl(340, 45%, 10% / 0.92) 10%,
                hsl(340, 45%, 10% / 0.75) 22%,
                hsl(340, 45%, 10% / 0.5) 38%,
                hsl(340, 45%, 10% / 0.25) 55%,
                hsl(340, 45%, 10% / 0.1) 72%,
                hsl(340, 45%, 10% / 0.03) 85%,
                transparent 100%)`,
            }}
          />

          <div className="absolute inset-x-0 top-0 h-8 md:h-10 z-30 bg-gradient-to-b from-background/30 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 z-30 bg-gradient-to-t from-background to-transparent pointer-events-none" />

          <img
            src={heroIllustration}
            alt="Cosmic collage with rocket launch, astronaut, moon, and surreal botanical elements"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 50%' }}
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
