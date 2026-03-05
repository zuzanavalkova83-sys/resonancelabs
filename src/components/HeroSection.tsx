import { motion } from "framer-motion";
import heroIllustration from "@/assets/hero-illustration.png";

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
          <p className="text-2xl md:text-3xl lg:text-4xl gradient-gold-text font-normal italic mb-8 leading-tight">
            Science,
            <br />
            Amplified.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light max-w-sm">
            In an age defined by the industrial production of noise, we protect your voice.
          </p>
        </motion.div>

        {/* Illustration — full height, blue-shifted */}
        <motion.div
          className="relative flex-1 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Blue hue overlay */}
          <div className="absolute inset-0 z-10 mix-blend-color" style={{ backgroundColor: 'hsl(220, 50%, 35%)' }} />
          <div className="absolute inset-0 z-20 mix-blend-soft-light" style={{ backgroundColor: 'hsl(220, 40%, 20%)' }} />
          {/* Left edge fade into background */}
          <div className="absolute inset-y-0 left-0 w-32 z-30 bg-gradient-to-r from-background to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-24 z-30 bg-gradient-to-t from-background to-transparent" />

          <img
            src={heroIllustration}
            alt="Cosmic collage with rocket launch, astronaut, moon, and surreal botanical elements"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
