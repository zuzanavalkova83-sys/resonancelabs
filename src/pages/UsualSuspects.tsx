import { motion } from "framer-motion";
import { useGlitch, glitchStyle } from "@/hooks/useGlitch";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const frames = [
  {
    code: "F01",
    title: "Experts are hiding the truth",
    desc: "What they publish is only the safe part. The real story, naturally, is being kept from you.",
    tag: "DISTRUST",
  },
  {
    code: "F04",
    title: "Children under threat",
    desc: "What they really mean is that our children are being used as test subjects, dressed up as science.",
    tag: "PROTECTION",
  },
  {
    code: "F31",
    title: "Hidden cure / miracle claim",
    desc: "A narrow signal becomes proof that the cure exists and someone is sitting on it.",
    tag: "HOPE",
  },
  {
    code: "F15",
    title: "Toxic traces everywhere",
    desc: "If instruments can detect it, surely it must be harming us already.",
    tag: "FEAR",
  },
  {
    code: "F36",
    title: "AI medical pseudo-authority",
    desc: "Confidence arrives dressed as competence, wearing a stethoscope it did not earn.",
    tag: "MIMICRY",
  },
  {
    code: "F08",
    title: "Science as political control",
    desc: "A finding becomes evidence that experts were trying to regulate, nudge, or corner you all along.",
    tag: "GRIEVANCE",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay },
});

const UsualSuspects = () => {
  const glitch = useGlitch(9000, 500, 3000);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Nav */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 glass-nav py-4"
      >
        <div className="section-padding flex items-center justify-between">
          <Link
            to="/"
            className="font-heading text-[11px] tracking-[0.2em] uppercase font-medium text-foreground/70 hover:text-foreground/90 transition-opacity duration-300"
          >
            RESONANCE LABS
          </Link>
          <Link
            to="/"
            className="font-heading text-[11px] tracking-[0.15em] uppercase font-normal text-foreground/50 hover:text-foreground/80 transition-opacity duration-300"
          >
            Back to home
          </Link>
        </div>
      </motion.nav>

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 section-padding overflow-hidden">
        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />

        {/* Wine circle accent */}
        <motion.div
          className="absolute pointer-events-none hidden md:block"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          style={{
            width: "220px",
            height: "220px",
            top: "8%",
            right: "8%",
            borderRadius: "50%",
            background: "hsl(var(--wine))",
            boxShadow: "0 20px 80px -10px hsl(var(--wine) / 0.4)",
          }}
        />

        <div className="max-w-5xl mx-auto relative">
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-4 mb-10">
            <div className="w-10 h-px" style={{ backgroundColor: "hsl(var(--brass))" }} />
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: "hsl(var(--brass))" }}>
              Field Guide
            </p>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="font-display text-[4.5rem] sm:text-[6rem] md:text-[8rem] tracking-wider leading-[0.82] text-foreground mb-10"
          >
            <span className="inline-block" style={glitchStyle(glitch, "subtle")}>
              The Usual
            </span>
            <br />
            Suspects.
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="origin-left mb-10"
            style={{ width: "48px", height: "1px", backgroundColor: "hsl(var(--brass) / 0.4)" }}
          />

          <motion.div {...fadeUp(0.35)} className="max-w-xl mb-6">
            <p className="text-xl sm:text-2xl leading-relaxed text-foreground/50">
              A field guide to the recurring ways science gets{" "}
              <span className="inline-block" style={glitchStyle(glitch)}>twisted</span>{" "}
              in public.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.45)} className="max-w-lg">
            <p className="text-base leading-relaxed text-foreground/40">
              We collect and group the familiar plots that keep turning research into panic,
              miracle, scandal, ideology, or noise. They are not random. They repeat.
              Which is good news, actually. Repeated nonsense is easier to recognise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── HOW TO READ ─── */}
      <section className="py-24 md:py-32 section-padding border-t" style={{ borderColor: "hsl(var(--border) / 0.3)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <motion.div {...fadeUp(0.1)} className="md:col-span-4">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(var(--brass))" }}>
                Orientation
              </p>
              <h2 className="font-display text-[2.5rem] md:text-[3rem] tracking-wider leading-[0.88] text-foreground">
                What this library is for
              </h2>
            </motion.div>
            <motion.div {...fadeUp(0.2)} className="md:col-span-8 flex flex-col justify-center">
              <p className="text-lg leading-relaxed text-foreground/45 mb-6">
                This is not a list of random bad takes. It is a working library of recurring story
                forms that keep attaching themselves to science. Each frame is a ready-made public
                script: a way of making research sound more scandalous, simpler, more moral, or more
                sinister than it really is.
              </p>
              <p className="text-base leading-relaxed text-foreground/35">
                The point is not paranoia. The point is pattern recognition.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED FRAMES ─── */}
      <section className="py-24 md:py-36 section-padding" style={{ backgroundColor: "hsl(var(--burgundy-mid))" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0.1)} className="mb-16">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(var(--brass))" }}>
              Selected Frames
            </p>
            <h2 className="font-display text-[2.5rem] md:text-[3.5rem] tracking-wider leading-[0.88] text-foreground">
              Start with the usual suspects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "hsl(var(--border) / 0.2)" }}>
            {frames.map((frame, i) => (
              <motion.div
                key={frame.code}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex flex-col justify-between p-7 md:p-8 group cursor-default transition-colors duration-300"
                style={{
                  backgroundColor: "hsl(var(--wine-deep))",
                  minHeight: "240px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "hsl(348, 50%, 20%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "hsl(var(--wine-deep))";
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: "hsl(var(--brass) / 0.7)" }}>
                      {frame.code}
                    </p>
                    <span
                      className="font-mono text-[9px] tracking-[0.15em] uppercase px-2 py-0.5"
                      style={{
                        color: "hsl(var(--brass) / 0.5)",
                        backgroundColor: "hsl(var(--wine) / 0.2)",
                      }}
                    >
                      {frame.tag}
                    </span>
                  </div>
                  <h3 className="font-heading text-[16px] md:text-[17px] font-medium leading-[1.3] mb-4 text-foreground">
                    {frame.title}
                  </h3>
                </div>
                <p className="font-body text-[13px] leading-[1.65]" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {frame.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ORGANISING PRINCIPLE ─── */}
      <section className="py-24 md:py-32 section-padding border-t" style={{ borderColor: "hsl(var(--border) / 0.3)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <motion.div {...fadeUp(0.1)} className="md:col-span-4">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(var(--brass))" }}>
                Structure
              </p>
              <h2 className="font-display text-[2.5rem] md:text-[3rem] tracking-wider leading-[0.88] text-foreground">
                How the library works
              </h2>
            </motion.div>
            <motion.div {...fadeUp(0.2)} className="md:col-span-8 flex flex-col justify-center">
              <p className="text-lg leading-relaxed text-foreground/45 mb-6">
                The library groups these traps by pattern family, emotional trigger, and type of
                distortion. Some run on fear. Some on grievance. Some on hope. Most of them recycle
                very old storylines in fresh clothes.
              </p>
              <p className="text-base leading-relaxed text-foreground/35">
                You do not need to memorise them. You just need to start recognising the rhythm.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── BRIDGE TO NOBULL ─── */}
      <section className="py-24 md:py-32 section-padding" style={{ backgroundColor: "hsl(var(--burgundy-mid) / 0.5)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <motion.div {...fadeUp(0.1)} className="md:col-span-4">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(var(--brass))" }}>
                Context
              </p>
              <h2 className="font-display text-[2.5rem] md:text-[3rem] tracking-wider leading-[0.88] text-foreground">
                Where this is going
              </h2>
            </motion.div>
            <motion.div {...fadeUp(0.2)} className="md:col-span-8 flex flex-col justify-center">
              <p className="text-lg leading-relaxed text-foreground/45 mb-6">
                The Usual Suspects is part of NoBull, a narrative-mapping tool currently being built
                for scientists, communicators, and research-led organisations. The broader aim is to
                help people spot likely public distortion before it hardens into the version everyone
                else has to fight.
              </p>
              <p className="text-sm leading-relaxed text-foreground/30">
                This is a selected part of NoBull, a narrative-mapping tool currently being developed
                within Resonance Labs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-28 md:py-40 section-padding relative overflow-hidden">
        {/* Ambient glow */}
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
          <motion.div {...fadeUp(0.1)}>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: "hsl(var(--brass))" }}>
              Next step
            </p>
            <h2 className="font-display text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] tracking-wider leading-[0.88] text-foreground mb-8">
              Feeling lost in the universe of twisted meaning?
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.2)}>
            <p className="text-base md:text-lg leading-relaxed text-foreground/40 mb-4 max-w-xl mx-auto">
              That is normal. This library is here to make the terrain more legible.
            </p>
            <p className="text-sm leading-relaxed text-foreground/30 mb-12 max-w-lg mx-auto">
              For institutions, labs, and teams working with sensitive research, this can also
              become something more practical: sharper messaging, earlier warning, and better
              readiness before the public plot writes itself for you.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@resonancelabs.com"
              className="inline-flex items-center gap-3 px-8 py-3.5 font-heading text-[13px] tracking-[0.1em] uppercase font-medium transition-all duration-200 hover:brightness-110 group"
              style={{
                color: "hsl(var(--primary-foreground))",
                backgroundColor: "hsl(var(--wine))",
              }}
            >
              Let's talk
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 font-heading text-[13px] tracking-[0.1em] uppercase font-normal transition-colors duration-200 text-foreground/40 hover:text-foreground/70"
            >
              Explore more frames
            </Link>
          </motion.div>
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
