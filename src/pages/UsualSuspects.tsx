import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import UsualSuspectsLibrary from "@/components/library/UsualSuspectsLibrary";

const UsualSuspects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* ─── Full library imported from NoBull ─── */}
      <UsualSuspectsLibrary />

      {/* ─── CTA ─── */}
      <section className="py-28 md:py-40 section-padding relative overflow-hidden bg-background">
        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: "500px",
            height: "500px",
            bottom: "-20%",
            left: "10%",
            background: "radial-gradient(circle, hsl(var(--wine) / 0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="max-w-3xl mx-auto text-center relative">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: "hsl(var(--brass))" }}>
            Narrative risk mapping
          </p>
          <h2 className="font-display text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] tracking-wider leading-[0.88] text-foreground mb-8">
            Want this mapped for your own research?
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-foreground/40 mb-4 max-w-xl mx-auto">
            For institutions, labs, and teams working on sensitive science, this library
            becomes something more practical: narrative intelligence, early warning, and
            sharper messaging — before the public plot writes itself for you.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@resonancelabs.com"
              className="inline-flex items-center gap-3 px-8 py-3.5 font-heading text-[13px] tracking-[0.1em] uppercase font-medium transition-all duration-200 hover:brightness-110 group"
              style={{
                color: "hsl(var(--primary-foreground))",
                backgroundColor: "hsl(var(--wine))",
              }}
            >
              Talk to us
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 font-heading text-[13px] tracking-[0.1em] uppercase font-normal transition-colors duration-200 text-foreground/40 hover:text-foreground/70"
            >
              Back to Resonance Labs
            </Link>
          </div>
        </div>
      </section>

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
            © {new Date().getFullYear()} Resonance Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default UsualSuspects;
