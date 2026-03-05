import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="relative py-20 section-padding bg-cosmic-deep border-t border-border/30 overflow-hidden" ref={ref}>
      {/* Stars */}
      {Array.from({ length: 12 }).map((_, i) => (
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Resonance Labs</h3>
        <p className="text-muted-foreground text-sm mb-8 tracking-wide">Science, Amplified.</p>

        <div className="flex justify-center gap-8 mb-10 text-xs tracking-widest uppercase text-muted-foreground">
          {["About", "Team", "Purpose", "Services"].map((item) => (
            <button
              key={item}
              onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-primary transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Resonance Labs. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
