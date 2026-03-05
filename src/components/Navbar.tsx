import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-4" : "py-6 bg-transparent"
      }`}
    >
      <div className="section-padding flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="text-xl tracking-widest text-foreground hover:text-primary transition-colors font-medium">
          RESONANCE LABS
        </button>
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          {[
            { label: "About", id: "about" },
            { label: "Team", id: "team" },
            { label: "Purpose", id: "purpose" },
            { label: "Services", id: "services" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase tracking-widest text-xs"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
