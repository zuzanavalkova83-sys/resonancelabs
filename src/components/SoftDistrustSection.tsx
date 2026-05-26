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

const SoftDistrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-44 section-padding bg-burgundy overflow-hidden"
    >
      {/* Noise texture — matches AboutSection */}
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
          className="flex items-center gap-4 mb-8"
        >
          <motion.div
            className="w-10 h-px"
            style={{ background: "hsl(30, 15%, 45%)" }}
            animate={isInView ? { scaleX: [0, 1] } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p
            className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-medium"
            style={{ color: "hsl(30, 15%, 55%)" }}
          >
            A field note
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[48px] md:text-[60px] lg:text-[72px] tracking-wider leading-[0.88] text-foreground max-w-[18ch] mb-10"
        >
          Welcome to the Era of Soft Distrust
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="font-body text-[17px] md:text-[19px] leading-[1.55] max-w-[58ch]"
          style={{ color: "hsl(35, 20%, 72%)" }}
        >
          Scepticism has become identity, and intellectually respectable bull
          has learned to speak in a calm podcast voice.
        </motion.p>

        {/* Pull quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 md:mt-20 pl-6 md:pl-8 max-w-[44ch]"
          style={{ borderLeft: "1px solid hsl(var(--brass) / 0.45)" }}
        >
          <p
            className="font-display text-[28px] md:text-[38px] tracking-wider leading-[1.1]"
            style={{ color: "hsl(35, 25%, 90%)" }}
          >
            “Science is probably fine. The people behind it, less so.”
          </p>
        </motion.blockquote>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px w-full origin-left my-20 md:my-28"
          style={{ background: "hsl(340, 22%, 22% / 0.4)" }}
        />

        {/* ─── EXPLAINER ────────────────────────────── */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px" style={{ background: "hsl(30, 15%, 45%)" }} />
              <p
                className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-medium"
                style={{ color: "hsl(30, 15%, 55%)" }}
              >
                The diagnosis
              </p>
            </div>
            <h3 className="font-display text-[26px] md:text-[32px] tracking-wider leading-[0.95] text-foreground">
              Not a conspiracy.
              <br />A posture.
            </h3>
          </div>

          <div
            className="md:col-span-8 space-y-5 font-body text-[15px] md:text-[16px] leading-[1.7] font-normal"
            style={{ color: "hsl(30, 12%, 55%)" }}
          >
            <p>
              Soft distrust is the well-mannered cousin of conspiracy. It does
              not reject reality; it just lowers the temperature on it. The
              moon landing happened. The vaccine works. But have you considered
              who benefits, and have you considered it on a podcast, slowly,
              with a fern in the background.
            </p>
            <p>
              It rarely makes claims you can fact-check. It nudges. It hedges.
              It assembles a tone — measured, faintly disappointed, vaguely
              spiritual — and lets that tone do the arguing. Most of its
              individual sentences are technically defensible. The cumulative
              effect is a quiet erosion of the idea that anyone, anywhere,
              knows what they are talking about.
            </p>
            <p>
              It travels best inside socially respectable language: wellness
              vocabulary, the “as a parent” framing, the contrarian essay, the
              long-form interview. It almost always contains a real fragment
              of truth, which it uses the way a magician uses a real coin.
              Then it asks you to be brave enough to think for yourself, which
              is flattering, and free.
            </p>
          </div>
        </div>

        <div
          className="h-px w-full my-20 md:my-28"
          style={{ background: "hsl(340, 22%, 22% / 0.4)" }}
        />

        {/* ─── GLOSSARY ─────────────────────────────── */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-px" style={{ background: "hsl(30, 15%, 45%)" }} />
            <p
              className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-medium"
              style={{ color: "hsl(30, 15%, 55%)" }}
            >
              A glossary
            </p>
          </div>

          <h3 className="font-display text-[36px] md:text-[44px] lg:text-[52px] tracking-wider leading-[0.92] text-foreground max-w-[20ch] mb-14">
            Intellectually Respectable Bull
          </h3>

          <div
            className="grid grid-cols-12 pb-4 text-[11px] uppercase tracking-[0.2em] font-heading"
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
                className="grid grid-cols-12 gap-x-6 py-6"
                style={{ borderBottom: "1px solid hsl(var(--brass) / 0.15)" }}
              >
                <dt
                  className="col-span-12 md:col-span-5 font-display text-[20px] md:text-[24px] tracking-wider leading-[1.15]"
                  style={{ color: "hsl(35, 25%, 88%)" }}
                >
                  {row.line}
                </dt>
                <dd
                  className="col-span-12 md:col-span-7 mt-2 md:mt-0 font-body text-[15px] md:text-[16px] leading-[1.7] font-normal"
                  style={{ color: "hsl(30, 12%, 55%)" }}
                >
                  {row.gloss}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        <div
          className="h-px w-full my-20 md:my-28"
          style={{ background: "hsl(340, 22%, 22% / 0.4)" }}
        />

        {/* ─── AESTHETIC: THEN / NOW ────────────────── */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-px" style={{ background: "hsl(30, 15%, 45%)" }} />
            <p
              className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-medium"
              style={{ color: "hsl(30, 15%, 55%)" }}
            >
              A wardrobe change
            </p>
          </div>

          <h3 className="font-display text-[36px] md:text-[44px] lg:text-[52px] tracking-wider leading-[0.92] text-foreground max-w-[22ch] mb-14">
            The New Aesthetic of Distrust
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Then */}
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-10 flex flex-col gap-5"
              style={{
                backgroundColor: "hsl(340, 38%, 13%)",
                border: "1px solid hsl(340, 22%, 22%)",
              }}
            >
              <p
                className="font-mono text-[11px] uppercase tracking-[0.25em]"
                style={{ color: "hsl(30, 15%, 50%)" }}
              >
                Then
              </p>
              <h4
                className="font-display text-[24px] md:text-[30px] tracking-wider leading-[1.05]"
                style={{ color: "hsl(35, 25%, 88%)" }}
              >
                Old conspiracy culture
              </h4>
              <ul
                className="font-body text-[15px] md:text-[16px] leading-[1.7] space-y-1.5 font-normal"
                style={{ color: "hsl(30, 12%, 58%)" }}
              >
                <li>Comic Sans on a black background</li>
                <li>Apocalypse on a Tuesday</li>
                <li>A clearly visible fringe identity</li>
                <li>Capital letters. Many of them.</li>
                <li>A basement, structurally</li>
              </ul>
            </motion.article>

            {/* Now */}
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 md:p-10 flex flex-col gap-5"
              style={{
                backgroundColor: "hsl(348, 50%, 18%)",
                border: "1px solid hsl(348, 35%, 28%)",
              }}
            >
              <p
                className="font-mono text-[11px] uppercase tracking-[0.25em]"
                style={{ color: "hsl(30, 18%, 70%)" }}
              >
                Now
              </p>
              <h4
                className="font-display text-[24px] md:text-[30px] tracking-wider leading-[1.05]"
                style={{ color: "hsl(35, 25%, 90%)" }}
              >
                Soft distrust culture
              </h4>
              <ul
                className="font-body text-[15px] md:text-[16px] leading-[1.7] space-y-1.5 font-normal"
                style={{ color: "hsl(30, 15%, 68%)" }}
              >
                <li>A linen shirt and a forty-minute monologue</li>
                <li>A microphone that costs more than the research</li>
                <li>A discount code for magnesium</li>
                <li>Selectively rigorous skepticism</li>
                <li>A minimalist kitchen, lit beautifully</li>
              </ul>
            </motion.article>
          </div>

          <p
            className="font-display text-[24px] md:text-[32px] tracking-wider leading-[1.15] mt-14 max-w-[44ch]"
            style={{ color: "hsl(35, 25%, 88%)" }}
          >
            The modern misinformation ecosystem rarely looks dangerous. It
            looks well moisturised.
          </p>
        </div>

        <div
          className="h-px w-full my-20 md:my-28"
          style={{ background: "hsl(340, 22%, 22% / 0.4)" }}
        />

        {/* ─── WHY IT WORKS ─────────────────────────── */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-px" style={{ background: "hsl(30, 15%, 45%)" }} />
            <p
              className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-medium"
              style={{ color: "hsl(30, 15%, 55%)" }}
            >
              Mechanics
            </p>
          </div>

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
                    className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left group"
                  >
                    <span className="flex items-baseline gap-5 md:gap-7">
                      <span
                        className="font-mono text-[12px] tracking-[0.15em]"
                        style={{ color: "hsl(30, 15%, 45%)" }}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className="font-display text-[20px] md:text-[24px] tracking-wider leading-[1.1]"
                        style={{ color: "hsl(35, 25%, 88%)" }}
                      >
                        {r.title}
                      </span>
                    </span>
                    <span style={{ color: "hsl(30, 15%, 55%)" }}>
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p
                      className="pb-6 md:pb-8 pl-10 md:pl-14 pr-10 font-body text-[15px] md:text-[16px] leading-[1.7] max-w-[60ch] font-normal"
                      style={{ color: "hsl(30, 12%, 55%)" }}
                    >
                      {r.body}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="h-px w-full my-20 md:my-28"
          style={{ background: "hsl(340, 22%, 22% / 0.4)" }}
        />

        {/* ─── BRIDGE / CTA ─────────────────────────── */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-end">
          <div className="md:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px" style={{ background: "hsl(30, 15%, 45%)" }} />
              <p
                className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-medium"
                style={{ color: "hsl(30, 15%, 55%)" }}
              >
                Where this goes
              </p>
            </div>
            <p
              className="font-body text-[15px] md:text-[16px] leading-[1.7] max-w-[58ch] font-normal"
              style={{ color: "hsl(30, 12%, 55%)" }}
            >
              Most of this material rhymes. The same plots, the same
              rhetorical moves, the same calm voice doing the same trick in a
              different kitchen. The{" "}
              <span style={{ color: "hsl(35, 25%, 90%)" }}>NoBull Library</span>{" "}
              is our working map of those recurring patterns — the narrative
              instruments soft distrust tends to reach for, catalogued so they
              stop feeling like fresh insights every time.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/the-usual-suspects"
              className="inline-flex items-center gap-3 px-6 py-3.5 font-heading text-[13px] tracking-[0.1em] uppercase font-medium transition-all duration-200 hover:brightness-110 group"
              style={{
                color: "hsl(35, 25%, 92%)",
                backgroundColor: "hsl(348, 45%, 28%)",
              }}
            >
              Explore the Usual Suspects
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftDistrustSection;