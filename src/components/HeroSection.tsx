import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full bg-background">
      {/* Hero image — constrained to show full panoramic width */}
      <div className="relative w-full pt-16">
        <motion.img
          src={heroBanner}
          alt="Resonance Labs cosmic illustration with rocket, planets, butterflies and jellyfish"
          className="w-full h-auto block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      {/* Title below the illustration */}
      <div className="section-padding py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 text-foreground font-light tracking-wide">
            Resonance Labs.{" "}
            <span className="gradient-gold-text font-normal italic">Science, Amplified.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto">
            In an age defined by the industrial production of noise, we protect your voice.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
