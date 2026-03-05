import { motion } from "framer-motion";
import heroIllustration from "@/assets/hero-illustration.png";
import decorButterfly from "@/assets/decor-butterfly.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full bg-background min-h-[100vh] pt-16">
      <div className="relative w-full min-h-[calc(100vh-4rem)] md:min-h-[680px] lg:min-h-[720px] flex flex-col md:flex-row items-stretch">

        {/* Brand panel — editorial left sidebar */}
        <motion.div
          className="relative flex flex-col justify-center items-start md:w-[30%] shrink-0 z-10 px-8 py-12 md:px-16 md:py-0"
          style={{
            background: 'linear-gradient(180deg, hsl(220, 30%, 10%) 0%, hsl(222, 28%, 8%) 100%)',
            minWidth: '340px',
            maxWidth: '460px',
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Noise texture overlay for depth */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
            }}
          />

          {/* Right-side hairline border */}
          <div
            className="absolute top-0 right-0 bottom-0 w-px hidden md:block"
            style={{ backgroundColor: 'hsl(220, 25%, 25% / 0.2)' }}
          />

          {/* Text block — positioned slightly above center */}
          <div className="relative md:-mt-12">
            <h1 className="font-heading text-[40px] md:text-[56px] lg:text-[62px] font-light leading-[1.05] tracking-[-0.02em] text-foreground mb-6">
              Resonance Labs.
            </h1>

            <p
              className="font-heading text-[24px] md:text-[28px] lg:text-[30px] font-medium leading-[1.2] tracking-[-0.01em] mb-8"
              style={{ color: 'hsl(28, 65%, 52%)' }}
            >
              Science, Amplified.
            </p>

            <p className="font-body text-[16px] md:text-[17px] leading-[1.65] font-normal max-w-[320px]" style={{ color: 'hsl(215, 20%, 62%)' }}>
              In an age defined by the industrial production of noise, we protect your voice.
            </p>
          </div>
        </motion.div>

        {/* Illustration — full height, subtle blue tint */}
        <motion.div
          className="relative flex-1 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Subtle blue overlay */}
          <div className="absolute inset-0 z-10 mix-blend-color opacity-30" style={{ backgroundColor: 'hsl(220, 45%, 40%)' }} />

          {/* Left edge fade — seamless blend into sidebar */}
          <div
            className="absolute inset-y-0 left-0 w-32 z-30"
            style={{ backgroundImage: 'linear-gradient(to right, hsl(222, 28%, 8%) 0%, hsl(222, 28%, 8% / 0.5) 45%, transparent 100%)' }}
          />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-20 z-30 bg-gradient-to-t from-background to-transparent" />

          <img
            src={heroIllustration}
            alt="Cosmic collage with rocket launch, astronaut, moon, and surreal botanical elements"
            className="w-full h-full object-cover object-center"
          />

          {/* Interactive element */}
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
