import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import decorButterfly from "@/assets/decor-butterfly.png";
import footerBanner from "@/assets/footer-banner.jpg";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="relative overflow-hidden" ref={ref}>

      <div className="relative py-16 section-padding bg-cosmic-deep border-t border-border/30">
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

        {/* Decorative butterfly */}
        <motion.img
          src={decorButterfly}
          alt=""
          className="absolute bottom-8 right-12 w-14 md:w-20 opacity-30 pointer-events-none"
          animate={{ y: [0, -5, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h3 className="text-3xl md:text-4xl text-foreground mb-4 font-light tracking-wide">Resonance Labs</h3>
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
      </div>
    </footer>
  );
};

export default FooterSection;
