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
      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12">
        {/* ─── FOLIO HEADER ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-baseline pb-5 mb-16 md:mb-24"
          style={{ borderBottom: "1px solid hsl(var(--brass) / 0.25)" }}
        >
          <p
            className="font-heading text-[11px] uppercase tracking-[0.3em] font-medium"
            style={{ color: "hsl(var(--brass))" }}
          >
            A field note
          </p>
          <p
            className="font-mono text-[11px] uppercase tracking-[0.25em]"
            style={{ color: "hsl(30, 15%, 50%)" }}
          >
            Vol. 01 · Folio 04
          </p>
        </motion.div>

        {/* ─── HERO ─────────────────────────────────── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-[56px] md:text-[88px] lg:text-[104px] leading-[0.88] tracking-tight text-foreground mb-14 md:mb-20"
        >
          Welcome to the<br />
          <span className="italic font-light" style={{ color: "hsl(var(--brass))" }}>
            Era of Soft Distrust
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 mb-28 md:mb-36">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="md:col-start-5 md:col-span-8 font-body text-[18px] md:text-[22px] leading-[1.5] italic font-light"
            style={{ color: "hsl(35, 20%, 78%)" }}
          >
            Scepticism has become identity, and intellectually respectable bull
            has learned to speak in a calm podcast voice.
          </motion.p>
        </div>

        {/* ─── HERO PULL QUOTE ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex justify-center mb-32 md:mb-44"
        >
          <blockquote
            className="relative py-10 md:py-14 px-6 max-w-[44ch] text-center"
            style={{
              borderTop: "1px solid hsl(var(--brass) / 0.35)",
              borderBottom: "1px solid hsl(var(--brass) / 0.35)",
            }}
          >
            <span
              className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-4 font-mono text-[10px] tracking-[0.3em] uppercase bg-burgundy"
              style={{ color: "hsl(var(--brass))" }}
            >
              Observation
            </span>
            <p
              className="font-display text-[24px] md:text-[34px] leading-[1.15] tracking-tight"
              style={{ color: "hsl(35, 25%, 92%)" }}
            >
              “Science is probably fine. The people behind it, less so.”
            </p>
          </blockquote>
        </motion.div>

        {/* ─── DIAGNOSIS ────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 mb-32 md:mb-44">
          <aside className="md:col-span-4">
            <div className="md:sticky md:top-16">
              <div
                className="w-10 h-px mb-5"
                style={{ background: "hsl(var(--brass))" }}
              />
              <p
                className="font-heading text-[11px] uppercase tracking-[0.25em] font-medium mb-5"
                style={{ color: "hsl(var(--brass))" }}
              >
                The Diagnosis
              </p>
              <h3 className="font-display text-[34px] md:text-[40px] leading-[0.95] tracking-tight text-foreground mb-8">
                Not a conspiracy.
                <br />A posture.
              </h3>
              <div
                className="hidden md:block font-mono text-[10px] leading-[1.9] uppercase tracking-[0.2em]"
                style={{ color: "hsl(30, 15%, 45%)" }}
              >
                Subject — Behavioural analysis
                <br />
                Classification — Social contagion
                <br />
                Status — Pervasive
              </div>
            </div>
          </aside>

          <div
            className="md:col-span-8 font-body text-[16px] md:text-[17px] leading-[1.75] font-normal space-y-7"
            style={{ color: "hsl(35, 18%, 78%)" }}
          >
            <p>
              <span
                className="float-left font-display text-[80px] md:text-[96px] leading-[0.78] mr-3 mt-1.5"
                style={{ color: "hsl(var(--brass))" }}
              >
                I
              </span>
              f hard disinformation feeding major conspiracy theories is a
              hydra with self-reviving properties, “soft distrust” is its
              well-mannered cousin with a regular mani-pedi, a capacity for
              concerned small talk, and unlimited resources.
            </p>
            <p>
              It looks and smells much better. It’s bullsh*t for better people.
            </p>
            <p>
              Soft distrust, as we will see, is not conspiratorial thinking. It
              does not reject reality; it just lowers the temperature on it.
              The Moon landing happened, why not? The vaccines may even work.
              But have you considered who benefits, and have you considered it
              on a podcast, slowly, with a fern in the background?
            </p>
            <p>
              Soft distrust is a misinformation category that moulds major
              health-related misinformation into a wellness-and-identity
              agenda, spiced with attempts at public intellectualism.
            </p>

            <div
              className="my-10 md:my-12 pl-6 md:pl-8 py-2"
              style={{ borderLeft: "2px solid hsl(var(--brass))" }}
            >
              <p
                className="font-display text-[22px] md:text-[26px] leading-[1.25] tracking-tight"
                style={{ color: "hsl(35, 25%, 92%)" }}
              >
                “We smell nice, and we’re not stupid, either. Now be a darling,
                consider doubting this and buy my bottle of supplements.”
              </p>
            </div>

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
        </div>

        {/* ─── GLOSSARY ─────────────────────────────── */}
        <div className="mb-32 md:mb-44">
          <div className="flex items-baseline justify-between mb-10">
            <div>
              <p
                className="font-heading text-[11px] uppercase tracking-[0.3em] font-medium mb-3"
                style={{ color: "hsl(var(--brass))" }}
              >
                The Lexicon
              </p>
              <h3 className="font-display text-[32px] md:text-[44px] leading-[0.95] tracking-tight text-foreground max-w-[22ch]">
                Intellectually Respectable Bull
              </h3>
            </div>
            <span
              className="font-mono text-[10px] uppercase tracking-[0.25em] hidden md:inline"
              style={{ color: "hsl(30, 15%, 45%)" }}
            >
              Table 1.1
            </span>
          </div>

          <div style={{ borderTop: "1px solid hsl(var(--brass) / 0.35)" }}>
            <div
              className="grid grid-cols-12 gap-x-6 py-4 font-heading text-[10px] uppercase tracking-[0.25em] font-medium"
              style={{
                color: "hsl(30, 15%, 55%)",
                borderBottom: "1px solid hsl(var(--brass) / 0.15)",
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
                  className="grid grid-cols-12 gap-x-6 py-8 items-baseline"
                  style={{ borderBottom: "1px solid hsl(var(--brass) / 0.12)" }}
                >
                  <dt
                    className="col-span-12 md:col-span-5 font-display text-[20px] md:text-[24px] leading-[1.2] tracking-tight italic"
                    style={{ color: "hsl(35, 25%, 90%)" }}
                  >
                    {row.line}
                  </dt>
                  <dd
                    className="col-span-12 md:col-span-7 mt-2 md:mt-0 font-body text-[15px] md:text-[16px] leading-[1.7] font-normal"
                    style={{ color: "hsl(35, 15%, 65%)" }}
                  >
                    {row.gloss}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>

        {/* ─── WARDROBE: THEN / NOW ─────────────────── */}
        <div className="mb-32 md:mb-44">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px" style={{ background: "hsl(var(--brass))" }} />
            <p
              className="font-heading text-[11px] uppercase tracking-[0.3em] font-medium"
              style={{ color: "hsl(var(--brass))" }}
            >
              A wardrobe change
            </p>
          </div>
          <h3 className="font-display text-[32px] md:text-[44px] leading-[0.95] tracking-tight text-foreground max-w-[22ch] mb-14">
            The New Aesthetic of Distrust
          </h3>

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ border: "1px solid hsl(var(--brass) / 0.18)" }}
          >
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="p-10 md:p-14 flex flex-col gap-6"
            >
              <p
                className="font-mono text-[10px] uppercase tracking-[0.3em]"
                style={{ color: "hsl(30, 15%, 50%)" }}
              >
                Then · The ancestor
              </p>
              <h4
                className="font-display text-[26px] md:text-[32px] leading-[1.05] tracking-tight"
                style={{ color: "hsl(35, 22%, 80%)" }}
              >
                Old conspiracy culture
              </h4>
              <ul
                className="font-body text-[15px] md:text-[16px] leading-[1.8] space-y-1.5 font-normal"
                style={{ color: "hsl(30, 12%, 60%)" }}
              >
                <li>— Comic Sans on a black background</li>
                <li>— Apocalypse on a Tuesday</li>
                <li>— A clearly visible fringe identity</li>
                <li>— Capital letters. Many of them.</li>
                <li>— A basement, structurally</li>
              </ul>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-10 md:p-14 flex flex-col gap-6 md:border-l"
              style={{ borderColor: "hsl(var(--brass) / 0.18)" }}
            >
              <p
                className="font-mono text-[10px] uppercase tracking-[0.3em]"
                style={{ color: "hsl(var(--brass))" }}
              >
                Now · The upgrade
              </p>
              <h4
                className="font-display text-[26px] md:text-[32px] leading-[1.05] tracking-tight"
                style={{ color: "hsl(35, 25%, 92%)" }}
              >
                Soft distrust culture
              </h4>
              <ul
                className="font-body text-[15px] md:text-[16px] leading-[1.8] space-y-1.5 font-normal"
                style={{ color: "hsl(35, 18%, 75%)" }}
              >
                <li>— A linen shirt and a forty-minute monologue</li>
                <li>— A microphone that costs more than the research</li>
                <li>— A discount code for magnesium</li>
                <li>— Selectively rigorous skepticism</li>
                <li>— A minimalist kitchen, lit beautifully</li>
              </ul>
            </motion.article>
          </div>

          <p
            className="font-display text-[22px] md:text-[28px] leading-[1.25] tracking-tight mt-14 max-w-[44ch] italic font-light"
            style={{ color: "hsl(35, 22%, 82%)" }}
          >
            The modern misinformation ecosystem rarely looks dangerous. It
            looks well moisturised.
          </p>
        </div>

        {/* ─── WHY IT WORKS ─────────────────────────── */}
        <div className="mb-32 md:mb-44">
          <div className="mb-14 max-w-3xl">
            <p
              className="font-heading text-[11px] uppercase tracking-[0.3em] font-medium mb-3"
              style={{ color: "hsl(var(--brass))" }}
            >
              Mechanics
            </p>
            <h3 className="font-display text-[40px] md:text-[64px] leading-[0.9] tracking-tight text-foreground">
              Why It Works
            </h3>
          </div>

          <div style={{ borderTop: "1px solid hsl(var(--brass) / 0.35)" }}>
            {reasons.map((r, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  style={{ borderBottom: "1px solid hsl(var(--brass) / 0.18)" }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 md:py-8 text-left group transition-colors hover:bg-[hsl(var(--brass)/0.03)]"
                  >
                    <span className="flex items-baseline gap-6 md:gap-10">
                      <span
                        className="font-mono text-[11px] tracking-[0.2em]"
                        style={{ color: "hsl(var(--brass))" }}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className="font-display text-[22px] md:text-[28px] tracking-tight leading-[1.1]"
                        style={{ color: "hsl(35, 25%, 92%)" }}
                      >
                        {r.title}
                      </span>
                    </span>
                    <span style={{ color: "hsl(var(--brass))" }}>
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
                      className="pb-8 md:pb-10 pl-12 md:pl-20 pr-10 font-body text-[15px] md:text-[17px] leading-[1.75] max-w-[60ch] font-normal"
                      style={{ color: "hsl(35, 15%, 70%)" }}
                    >
                      {r.body}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── BRIDGE / CTA ─────────────────────────── */}
        <div
          className="pt-16 md:pt-20"
          style={{ borderTop: "1px solid hsl(var(--brass) / 0.35)" }}
        >
          <div className="text-center max-w-[58ch] mx-auto mb-12">
            <p
              className="font-heading text-[11px] uppercase tracking-[0.3em] font-medium mb-6"
              style={{ color: "hsl(var(--brass))" }}
            >
              Continue the field work
            </p>
            <p
              className="font-body text-[16px] md:text-[17px] leading-[1.75] font-normal"
              style={{ color: "hsl(35, 18%, 75%)" }}
            >
              Most of this material rhymes. The same plots, the same
              rhetorical moves, the same calm voice doing the same trick in a
              different kitchen. The{" "}
              <span style={{ color: "hsl(35, 25%, 92%)" }}>NoBull Library</span>{" "}
              is our working map of those recurring patterns — catalogued so
              they stop feeling like fresh insights every time.
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              to="/the-usual-suspects"
              className="group inline-flex items-center gap-4"
            >
              <span
                className="font-display text-[26px] md:text-[36px] leading-none tracking-tight pb-2 transition-colors group-hover:text-[hsl(var(--brass))]"
                style={{
                  color: "hsl(35, 25%, 92%)",
                  borderBottom: "1px solid hsl(var(--brass))",
                }}
              >
                Enter the NoBull Library
              </span>
              <ArrowRight
                className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: "hsl(var(--brass))" }}
              />
            </Link>
          </div>
        </div>

        {/* ─── FOLIO FOOTER ─────────────────────────── */}
        <div
          className="mt-24 md:mt-32 pt-6 flex justify-between items-end font-mono text-[10px] uppercase tracking-[0.25em]"
          style={{
            borderTop: "1px solid hsl(var(--brass) / 0.15)",
            color: "hsl(30, 15%, 40%)",
          }}
        >
          <span>Resonance Labs · Field research</span>
          <span>Ref. No. 992-SD</span>
        </div>
      </div>
    </section>
  );
};

export default SoftDistrustSection;
