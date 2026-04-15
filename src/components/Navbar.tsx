import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-4" : "py-5 bg-transparent"
      }`}
    >
      <div className="section-padding flex items-center justify-between">
        <Link
          to="/"
          className="font-heading text-[11px] tracking-[0.2em] uppercase font-medium text-foreground/70 hover:text-foreground/90 transition-opacity duration-300"
        >
          RESONANCE LABS
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: "About", id: "about" },
            { label: "Team", id: "team" },
            { label: "Purpose", id: "purpose" },
            { label: "Services", id: "services" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-heading text-[11px] tracking-[0.15em] uppercase font-normal text-foreground/50 hover:text-foreground/80 transition-opacity duration-300"
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/the-usual-suspects"
            className="font-heading text-[11px] tracking-[0.15em] uppercase font-normal text-foreground/50 hover:text-foreground/80 transition-opacity duration-300"
          >
            NoBull Library
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
