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
            {"\n"}
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

          <div className="flex items-center justify-center gap-5 mb-8">
            <a
              href="mailto:zuzana.valkova83@gmail.com"
              className="text-[11px] tracking-[0.15em] uppercase hover:text-foreground transition-colors duration-300"
              style={{ color: 'hsl(30, 12%, 50%)' }}
            >
              Contact
            </a>
            <span className="w-px h-3" style={{ backgroundColor: 'hsl(340, 22%, 25%)' }} />
            <a
              href="https://www.linkedin.com/in/zuzana-valkova-science-comms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="hsl(30, 12%, 50%)"/>
              </svg>
            </a>
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
