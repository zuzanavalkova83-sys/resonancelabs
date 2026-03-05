import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";
import decorJellyfish from "@/assets/decor-jellyfish.png";
import decorRocket from "@/assets/decor-rocket.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full min-h-[85vh] overflow-hidden">
      {/* Hero image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroBanner}
          alt="Resonance Labs cosmic illustration with rocket, planets, butterflies and jellyfish"
          className="w-full h-full object-cover object-center"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />
      </div>

      {/* Floating decorative icons */}
      <motion.img
        src={decorJellyfish}
        alt=""
        className="absolute top-20 right-12 w-16 md:w-24 opacity-60 pointer-events-none"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={decorRocket}
        alt=""
        className="absolute bottom-32 left-8 w-14 md:w-20 opacity-50 pointer-events-none"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Content overlay */}
      <div className="relative z-10 min-h-[85vh] flex items-end pb-20 section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl leading-[1.1] mb-6 text-foreground font-light tracking-wide">
            Science,{" "}
            <span className="gradient-gold-text font-normal italic">Amplified.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
            In an age defined by the industrial production of noise, we protect your voice.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
