import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ObvykliPodezreliLibrary from "@/components/library/ObvykliPodezreliLibrary";

const ObvykliPodezreli = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      <ObvykliPodezreliLibrary />

      {/* ─── FOOTER ─── */}
      <footer className="py-12 section-padding border-t" style={{ borderColor: "hsl(var(--border) / 0.3)" }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/"
            className="font-heading text-[11px] tracking-[0.2em] uppercase font-medium text-foreground/50 hover:text-foreground/70 transition-colors"
          >
            Resonance Labs
          </Link>
          <p className="text-xs" style={{ color: "hsl(var(--muted-foreground) / 0.5)" }}>
            © {new Date().getFullYear()} Zuzana Válková. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ObvykliPodezreli;