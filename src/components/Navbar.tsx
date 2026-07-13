import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    if (isHome) {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Purpose", id: "purpose" },
    { label: "Founder", id: "team" },
  ];

  return (
    <>
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
            className="group inline-flex items-center gap-2.5 font-display text-[14px] sm:text-[15px] tracking-[0.18em] uppercase font-normal text-foreground/90 hover:text-foreground transition-opacity duration-300"
          >
            <span
              className="block w-[6px] h-[6px] rounded-full"
              style={{ backgroundColor: "hsl(var(--brass))", boxShadow: "0 0 8px hsl(var(--brass) / 0.5)" }}
              aria-hidden
            />
            Resonance Labs
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-heading text-[10.5px] tracking-[0.22em] uppercase font-normal text-foreground/55 hover:text-foreground/90 transition-opacity duration-300"
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/the-usual-suspects"
              className="font-heading text-[10.5px] tracking-[0.22em] uppercase font-normal text-foreground/55 hover:text-foreground/90 transition-opacity duration-300"
            >
              NoBull Library
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden relative z-50 p-2 -mr-2 text-foreground/80 hover:text-foreground transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: "hsl(var(--background))" }}
          >
            <div className="section-padding pt-24 h-full flex flex-col">
              <div className="flex-1 flex flex-col items-start gap-8">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.25, delay: i * 0.05 }}
                    onClick={() => scrollTo(item.id)}
                    className="font-display text-3xl sm:text-4xl tracking-wider text-foreground/90 hover:text-foreground transition-colors text-left"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.25, delay: navItems.length * 0.05 }}
                >
                  <Link
                    to="/the-usual-suspects"
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-3xl sm:text-4xl tracking-wider text-foreground/90 hover:text-foreground transition-colors block"
                  >
                    NoBull Library
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, delay: 0.2 }}
                className="pb-10"
              >
                <div className="h-px w-full mb-8" style={{ background: "hsl(var(--brass) / 0.2)" }} />
                <div className="flex flex-col gap-4">
                  <Link
                    to="/obvykli-podezreli"
                    onClick={() => setMenuOpen(false)}
                    className="font-heading text-[11px] tracking-[0.22em] uppercase text-foreground/55 hover:text-foreground/90 transition-colors"
                  >
                    Obvyklí podezřelí (CZ)
                  </Link>
                  <a
                    href="mailto:hello@resonancelabs.com"
                    className="font-heading text-[11px] tracking-[0.22em] uppercase text-foreground/55 hover:text-foreground/90 transition-colors"
                  >
                    hello@resonancelabs.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
