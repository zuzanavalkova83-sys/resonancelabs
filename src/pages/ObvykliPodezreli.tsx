import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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

      {/* ─── CTA — školení ─── */}
      <section className="py-28 md:py-40 section-padding relative overflow-hidden" style={{ background: "hsl(var(--wine-deep))" }}>
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
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
            background: "radial-gradient(circle, hsl(var(--wine) / 0.35) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="max-w-3xl mx-auto text-center relative">
          <p
            className="font-heading text-[11px] tracking-[0.22em] uppercase font-medium mb-6"
            style={{ color: "hsl(var(--wine-blush))" }}
          >
            Pro instituce, laboratoře, vědecké týmy i jednotlivce
          </p>
          <h2
            className="font-display text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] tracking-wider leading-[0.88] mb-8"
            style={{ color: "hsl(35 30% 92%)" }}
          >
            Chcete se v problému zorientovat?
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-4 max-w-xl mx-auto" style={{ color: "hsl(30 15% 72%)" }}>
            Školím vědce, komunikační týmy a vedení institucí v tom, jak rozpoznat narativní pasti dřív, než sklapnou — a jak připravit sdělení, které se hůř zkresluje. Od přednášky přes půldenní workshop až po dvoudenní simulaci.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:zuzana.valkova83@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-3.5 font-heading text-[13px] tracking-[0.1em] uppercase font-medium transition-all duration-200 hover:brightness-110 group"
              style={{
                color: "hsl(var(--primary-foreground))",
                backgroundColor: "hsl(var(--wine))",
              }}
            >
              Napište mi
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 font-heading text-[13px] tracking-[0.1em] uppercase font-normal transition-colors duration-200"
              style={{ color: "hsl(30 15% 65%)" }}
            >
              Zpět na Resonance Labs
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
            © {new Date().getFullYear()} Zuzana Válková. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ObvykliPodezreli;