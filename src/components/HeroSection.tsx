import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full overflow-hidden">
      {/* Hero image — full natural size, no overlapping decorations */}
      <div className="relative w-full">
        <motion.img
          src={heroBanner}
          alt="Resonance Labs cosmic illustration with rocket, planets, butterflies and jellyfish"
          className="w-full h-auto block"
          initial={{ scale: 1.03 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
        {/* Subtle bottom fade for text readability */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Title overlay at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-12 md:pb-20 section-padding">
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
