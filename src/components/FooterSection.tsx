import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="relative overflow-hidden" ref={ref}>
      <div className="relative py-16 section-padding bg-background border-t" style={{ borderColor: 'hsl(340, 22%, 18%)' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h3 className="font-display text-[36px] md:text-[44px] tracking-wider text-foreground mb-4 leading-[0.9]">
            Resonance Labs
          </h3>
          <p className="text-sm mb-8 tracking-wide" style={{ color: 'hsl(30, 15%, 55%)' }}>
            Science, Amplified.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-8 mb-10 text-[11px] tracking-[0.2em] uppercase" style={{ color: 'hsl(30, 12%, 50%)' }}>
            {["About", "Team", "Purpose", "Services"].map((item) => (
              <button
                key={item}
                onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-foreground transition-colors duration-300"
              >
                {item}
              </button>
            ))}
            <Link
              to="/the-usual-suspects"
              className="hover:text-foreground transition-colors duration-300"
            >
              NoBull Library
            </Link>
          </div>

          <div className="editorial-rule mb-8" />

          <p className="text-xs" style={{ color: 'hsl(340, 12%, 35%)' }}>
            © {new Date().getFullYear()} Resonance Labs. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
