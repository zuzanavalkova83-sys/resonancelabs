import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import decorPlanet from "@/assets/decor-planet.png";

const PurposeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="purpose" className="py-28 md:py-40 section-padding gradient-cosmic relative overflow-hidden" ref={ref}>
      {/* Stars */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            ["--duration" as string]: `${2 + Math.random() * 4}s`,
            ["--delay" as string]: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Decorative planet */}
      <motion.img
        src={decorPlanet}
        alt=""
        className="absolute top-16 right-16 w-20 md:w-28 opacity-40 pointer-events-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl lg:text-7xl mb-16 gradient-gold-text font-light tracking-wide"
        >
          Our Purpose
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
            We used to think of science communication as a delight—perhaps the most intriguing work in the world. Our perspective shifted in light of industrial misinformation and hybrid warfare.
          </p>

          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
            We realised that knowledge without consequence is a vulnerability. When research remains isolated from the world it aims to serve, the gap is exploited. Worse, research itself can be twisted and exploited.
          </p>

          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-light italic">
            We founded Resonance Labs to bridge that distance: to translate expertise into action and to protect the simple, necessary idea that truth must endure.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;
