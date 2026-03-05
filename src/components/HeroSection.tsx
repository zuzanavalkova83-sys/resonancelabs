import { motion } from "framer-motion";
import heroIllustration from "@/assets/hero-illustration.png";
import decorButterfly from "@/assets/decor-butterfly.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full bg-background min-h-screen pt-16">
      <div className="relative w-full h-[calc(100vh-4rem)] flex flex-col md:flex-row items-stretch">
        {/* Brand panel on the left */}
        <motion.div
          className="flex flex-col justify-center items-start px-8 md:px-14 lg:px-20 py-12 md:py-0 md:w-[38%] lg:w-[35%] shrink-0 z-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6 text-foreground font-light tracking-wide">
            Resonance
            <br />
            Labs.
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-primary font-light mb-8 leading-tight tracking-wide">
            Science,
            <br />
            Amplified.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light max-w-sm">
            In an age defined by the industrial production of noise, we protect your voice.
          </p>
        </motion.div>

        {/* Illustration — full height, subtle blue tint */}
        <motion.div
          className="relative flex-1 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Subtle blue overlay — low opacity to let original colors through */}
          <div className="absolute inset-0 z-10 mix-blend-color opacity-30" style={{ backgroundColor: 'hsl(220, 45%, 40%)' }} />
          {/* Left edge fade — lighter */}
          <div className="absolute inset-y-0 left-0 w-28 z-30 bg-gradient-to-r from-background/80 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-20 z-30 bg-gradient-to-t from-background to-transparent" />

          <img
            src={heroIllustration}
            alt="Cosmic collage with rocket launch, astronaut, moon, and surreal botanical elements"
            className="w-full h-full object-cover object-center"
          />

          {/* Interactive butterfly */}
          <motion.img
            src={decorButterfly}
            alt=""
            className="absolute z-20 w-16 md:w-24 lg:w-28 drop-shadow-lg"
            style={{ top: '18%', left: '12%' }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            whileHover={{ scale: 1.2, rotate: 8 }}
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
