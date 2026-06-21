import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Minus } from "lucide-react";

const respectableBull: { line: string; gloss: string }[] = [
  {
    line: "“I’m just asking questions.”",
    gloss:
      "Asks one, posts the answer he already wanted, then asks the same question again next Tuesday.",
  },
  {
    line: "“Nobody really knows.”",
    gloss:
      "Several thousand people do, in fact, know. They have written it down. The microphone is just louder than the footnote.",
  },
  {
    line: "“There are conflicts of interest.”",
    gloss:
      "True of almost everything, including the supplement company sponsoring the episode that brought it up.",
  },
  {
    line: "“Do your own research.”",
    gloss:
      "Translation: please arrive at my conclusion using a method I would not survive scrutiny on.",
  },
];

const reasons: { title: string; body: string }[] = [
  {
    title: "Distrust feels intelligent",
    body: "Doubting something in public is read as having thought about it. Often, neither party has.",
  },
  {
    title: "Cynicism mimics critical thinking",
    body: "Same posture, almost none of the work. On a podcast, the two are indistinguishable.",
  },
  {
    title: "Ambiguity survives fact-checking",
    body: "You cannot debunk a vibe. “Something feels off” is unfalsifiable and quietly contagious.",
  },
  {
    title: "Algorithms reward emotional certainty",
    body: "The calm, sure voice wins the watch-time auction. Hesitation gets buried near the kitchen renovation videos.",
  },
  {
    title: "“Natural” feels morally clean",
    body: "A useful word, because it means almost nothing and almost everyone agrees they prefer it.",
  },
];

const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <div className="flex items-center gap-4 mb-8">
    {/* Signal-red tick — risk-marker motif */}
    <div
      className="w-1.5 h-1.5 rounded-full"
      style={{
        background: light ? "hsl(var(--ivory))" : "hsl(var(--signal-red))",
        boxShadow: light
          ? "0 0 10px hsl(var(--ivory) / 0.55)"
          : "0 0 8px hsl(var(--signal-red) / 0.6)",
      }}
    />
    <div
      className="w-8 h-px"
      style={{ background: light ? "hsl(var(--ivory) / 0.45)" : "hsl(30, 15%, 45%)" }}
    />
    <p
      className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-medium"
      style={{ color: light ? "hsl(var(--ivory) / 0.85)" : "hsl(30, 15%, 55%)" }}
    >
      {children}
    </p>
  </div>
);

const SoftDistrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-44 section-padding bg-burgundy-mid overflow-hidden"
    >
      {/* Vertical tone shift — lighter at top, deeper toward bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, hsl(340, 22%, 14%) 0%, transparent 22%, transparent 70%, hsl(340, 30%, 7%) 100%)",
        }}
      />
      {/* Soft brass glow, top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "8%",
          right: "-10%",
          width: "55%",
          height: "45%",
          background:
            "radial-gradient(ellipse at center, hsl(var(--brass) / 0.07), transparent 65%)",
          filter: "blur(40px)",
        }}
      />
      {/* Cool burgundy wash, mid-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "38%",
          left: "-15%",
          width: "60%",
          height: "40%",
          background:
            "radial-gradient(ellipse at center, hsl(340, 30%, 18% / 0.55), transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      {/* Deeper burgundy pool, bottom-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "5%",
          right: "-10%",
          width: "70%",
          height: "45%",
          background:
            "radial-gradient(ellipse at center, hsl(340, 35%, 10% / 0.7), transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* ─── HERO ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>A field note</Eyebrow>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[48px] md:text-[60px] lg:text-[72px] tracking-wider leading-[0.88] text-foreground max-w-[18ch] mb-10"
        >
          Welcome to the Era of Soft Distrust
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24"
        >
          <div className="space-y-5">
            <p
              className="font-body text-[17px] md:text-[19px] leading-[1.55] font-normal"
              style={{ color: "hsl(35, 20%, 72%)" }}
            >
              Scepticism has become an identity.&nbsp;<br />
              Intellectually respectable bull has learned to speak&nbsp;<br />
              in a calm podcast voice.
            </p>
          </div>
          <div className="space-y-5">
            <p
              className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal"
              style={{ color: "hsl(30, 12%, 52%)" }}
            >
              This is not a conspiracy. It's posture. This category moulds
              health-related misinformation into a wellness-and-identity
              agenda, spiced with attempts at public intellectualism.
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px w-full origin-left my-20 md:my-28"
          style={{ background: "hsl(340, 22%, 22% / 0.4)" }}
        />

        {/* ─── DIAGNOSIS ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="grid md:grid-cols-12 gap-10 md:gap-14"
        >
          <div className="md:col-span-4">
            <div className="md:sticky md:top-20">
              <Eyebrow>The diagnosis</Eyebrow>
              <h3 className="font-display text-[26px] md:text-[32px] tracking-wider leading-[0.95] text-foreground">
                Not a conspiracy.
                <br />A posture.
              </h3>
            </div>
          </div>

          <div className="md:col-span-8 space-y-6 font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: "hsl(35, 20%, 72%)" }}>
            <p>
              Imagine the hard disinformation behind major conspiracy theories as
              a Hydra with self-reviving properties. It's powerful, ugly, but
              not cool enough for the city folk.&nbsp;<br />
              <br />
              “Soft distrust”, on the other hand, is Hydra's well-mannered cousin
              with a regular mani-pedi, a capacity for small talk, and
              unlimited resources.
            </p>
            <p>
              It’s bullsh*t for better people.
            </p>
            <p>
              Soft distrust, as we'll see, is not conspiratorial thinking. It
              does not reject reality; it just lowers the temperature on it.
              The Moon landing happened, why not? The vaccines may even work.
              But have you considered who benefits, and have you considered it
              on a podcast, slowly, with a fern in the background?
            </p>

            <blockquote
              className="my-10 pl-6 md:pl-8"
              style={{ borderLeft: "2px solid hsl(var(--signal-red) / 0.7)" }}
            >
              <p
                className="font-display text-[20px] md:text-[24px] tracking-wider leading-[1.25]"
                style={{ color: "hsl(35, 25%, 88%)" }}
              >
                “We smell nice, and we’re not stupid, either. Now be a darling,
                consider doubting this and buy my bottle of supplements.”
              </p>
            </blockquote>

            <p>
              Soft distrust nudges. It hedges. It assembles a tone — measured,
              faintly disappointed, vaguely spiritual — and lets that tone do
              the arguing. Most of its individual sentences are technically
              defensible.
            </p>
            <p>
              The cumulative effect is a quiet erosion of the idea that anyone,
              anywhere, knows what they are talking about.
            </p>
            <p>
              It travels best inside socially respectable language: wellness
              vocabulary, the “as a parent” framing, the contrarian essay, the
              long-form interview. It almost always contains a real fragment
              of truth, which it uses the way a magician uses a real coin.
            </p>
            <p>
              Then it asks you to be brave enough to think for yourself, which
              is flattering and free.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="h-px w-full origin-left my-20 md:my-28"
          style={{ background: "hsl(340, 22%, 22% / 0.4)" }}
        />

        {/* ─── GLOSSARY ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Eyebrow>A glossary</Eyebrow>
          <h3 className="font-display text-[36px] md:text-[44px] lg:text-[52px] tracking-wider leading-[0.92] text-foreground max-w-[20ch] mb-14">
            Intellectually Respectable Bull
          </h3>

          <div
            className="grid grid-cols-12 pb-5 mb-2 font-heading text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-medium"
            style={{
              color: "hsl(30, 15%, 55%)",
              borderBottom: "1px solid hsl(var(--brass) / 0.2)",
            }}
          >
            <div className="col-span-12 md:col-span-5">Sounds thoughtful</div>
            <div className="col-span-12 md:col-span-7 hidden md:block">
              Actually does
            </div>
          </div>

          <dl>
            {respectableBull.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="grid grid-cols-12 gap-x-6 py-7 items-baseline"
                style={{ borderBottom: "1px solid hsl(var(--brass) / 0.15)" }}
              >
                <dt
                  className="col-span-12 md:col-span-5 font-display text-[20px] md:text-[23px] tracking-wider leading-[1.2]"
                  style={{ color: "hsl(35, 25%, 88%)" }}
                >
                  {row.line}
                </dt>
                <dd
                  className="col-span-12 md:col-span-7 mt-2 md:mt-0 font-body text-[15px] md:text-[16px] leading-[1.7] font-normal"
                  style={{ color: "hsl(30, 12%, 52%)" }}
                >
                  {row.gloss}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="h-px w-full origin-left my-20 md:my-28"
          style={{ background: "hsl(340, 22%, 22% / 0.4)" }}
        />

        {/* ─── WARDROBE: THEN / NOW ─────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative -mx-6 md:-mx-12 lg:-mx-20 xl:-mx-32 px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-20 overflow-hidden bg-signal-red-deep"
        >
          {/* Full red wash — edge-to-edge signal red band */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(160deg, hsl(var(--signal-red) / 0.95) 0%, hsl(var(--signal-red-deep) / 0.98) 60%, hsl(358, 65%, 32%) 100%)",
            }}
          />
          {/* Hot glow, top-left */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-20%",
              left: "-10%",
              width: "65%",
              height: "70%",
              background:
                "radial-gradient(ellipse at center, hsl(2 78% 58% / 0.55), transparent 60%)",
              filter: "blur(80px)",
            }}
          />
          {/* Deeper red pool, bottom-right */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "-25%",
              right: "-15%",
              width: "70%",
              height: "65%",
              background:
                "radial-gradient(ellipse at center, hsl(358 70% 24% / 0.75), transparent 65%)",
              filter: "blur(90px)",
            }}
          />
          {/* Grain */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "128px 128px",
            }}
          />

          <div className="relative text-ivory">
            <Eyebrow light>A wardrobe change</Eyebrow>
            <h3 className="font-display text-[36px] md:text-[44px] lg:text-[52px] tracking-wider leading-[0.92] max-w-[22ch] mb-14">
              The New Aesthetic of Distrust
            </h3>

            <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12">
              {[
                {
                  tag: "Then",
                  title: "Old conspiracy culture",
                  items: [
                    "Comic Sans on a black background",
                    "Apocalypse on a Tuesday",
                    "A clearly visible fringe identity",
                    "Capital letters. Many of them.",
                    "A basement, structurally",
                  ],
                },
                {
                  tag: "Now",
                  title: "Soft distrust culture",
                  items: [
                    "A linen shirt and a forty-minute monologue",
                    "A microphone that costs more than the research",
                    "A discount code for magnesium",
                    "Selectively rigorous skepticism",
                    "A minimalist kitchen, lit beautifully",
                  ],
                },
              ].map((col, i) => (
                <motion.div
                  key={col.tag}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
                >
                  <h4
                    className="font-display text-[20px] md:text-[23px] tracking-wider leading-[0.95] pb-5 mb-8 border-b"
                    style={{ borderColor: "hsl(var(--ivory) / 0.35)" }}
                  >
                    {col.tag} — {col.title}
                  </h4>
                  <ul className="space-y-3 font-body text-[15px] md:text-[16px] leading-[1.7]" style={{ color: "hsl(var(--ivory) / 0.9)" }}>
                    {col.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <p
              className="font-display text-[22px] md:text-[28px] tracking-wider leading-[1.2] mt-16 max-w-[44ch] text-ivory"
            >
              The modern misinformation ecosystem rarely looks dangerous. It
              looks well moisturised.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="h-px w-full origin-left my-20 md:my-28"
          style={{ background: "hsl(340, 22%, 22% / 0.4)" }}
        />

        {/* ─── WHY IT WORKS ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Eyebrow>Mechanics</Eyebrow>
          <h3 className="font-display text-[36px] md:text-[44px] lg:text-[52px] tracking-wider leading-[0.92] text-foreground mb-14">
            Why It Works
          </h3>

          <div style={{ borderTop: "1px solid hsl(var(--brass) / 0.2)" }}>
            {reasons.map((r, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  style={{ borderBottom: "1px solid hsl(var(--brass) / 0.15)" }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left group"
                  >
                    <span className="flex items-baseline gap-5 md:gap-7">
                      <span
                        className="font-mono text-[12px] tracking-[0.15em]"
                        style={{ color: "hsl(30, 15%, 45%)" }}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className="font-display text-[20px] md:text-[23px] tracking-wider leading-[1.1]"
                        style={{ color: "hsl(35, 25%, 88%)" }}
                      >
                        {r.title}
                      </span>
                    </span>
                    <span style={{ color: "hsl(30, 15%, 55%)" }}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p
                      className="pb-7 md:pb-8 pl-10 md:pl-14 pr-10 font-body text-[15px] md:text-[16px] leading-[1.7] max-w-[60ch] font-normal"
                      style={{ color: "hsl(30, 12%, 52%)" }}
                    >
                      {r.body}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="h-px w-full origin-left my-20 md:my-28"
          style={{ background: "hsl(340, 22%, 22% / 0.4)" }}
        />

        {/* ─── BRIDGE / CTA ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-12 gap-10 md:gap-14 items-end"
        >
          <div className="md:col-span-8">
            <Eyebrow>Where this goes</Eyebrow>
            <p
              className="font-body text-[15px] md:text-[16px] leading-[1.7] max-w-[58ch] font-normal"
              style={{ color: "hsl(35, 20%, 72%)" }}
            >
              Most of this material rhymes. The same plots, the same
              rhetorical moves, the same calm voice doing the same trick in a
              different kitchen. The{" "}
              <span style={{ color: "hsl(35, 25%, 90%)" }}>NoBull Library</span>{" "}
              is our working map of those recurring patterns — catalogued so
              they stop feeling like fresh insights every time.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/the-usual-suspects"
              className="inline-flex items-center gap-2 font-heading text-[13px] tracking-[0.12em] uppercase font-medium transition-opacity duration-200 hover:opacity-100 group"
              style={{ color: "hsl(30, 15%, 68%)", opacity: 0.85 }}
            >
              Explore the Usual Suspects
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftDistrustSection;
