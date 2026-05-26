import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Minus } from "lucide-react";

// Editorial palette — cream, graphite, pale blue, muted steel
const CREAM = "hsl(36, 30%, 95%)";
const CREAM_DEEP = "hsl(34, 22%, 90%)";
const GRAPHITE = "hsl(220, 12%, 18%)";
const GRAPHITE_SOFT = "hsl(220, 10%, 32%)";
const STEEL = "hsl(215, 14%, 48%)";
const STEEL_FAINT = "hsl(215, 18%, 78%)";
const PALE_BLUE = "hsl(212, 32%, 86%)";
const PALE_BLUE_INK = "hsl(212, 30%, 38%)";
const HAIRLINE = "hsl(220, 10%, 80%)";

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
    body: "It uses the same posture and almost none of the work. The aesthetic is indistinguishable on a podcast.",
  },
  {
    title: "Ambiguity survives fact-checking",
    body: "You cannot debunk a vibe. “Something feels off” is unfalsifiable and quietly contagious.",
  },
  {
    title: "Algorithms reward emotional certainty",
    body: "The calm, sure voice wins the watch-time auction. Hesitation gets buried somewhere around the kitchen renovation videos.",
  },
  {
    title: "“Natural” feels morally clean",
    body: "A useful word, because it means absolutely nothing and absolutely everyone agrees they prefer it.",
  },
];

const SoftDistrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden section-padding py-28 md:py-40"
      style={{ backgroundColor: CREAM, color: GRAPHITE }}
    >
      {/* paper grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.035,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* ── HERO ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-10 h-px" style={{ background: HAIRLINE }} />
          <p
            className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-medium"
            style={{ color: STEEL }}
          >
            Field note · 01
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="font-heading font-light tracking-[-0.02em] leading-[1.02] text-[44px] md:text-[64px] lg:text-[76px] max-w-[18ch]"
          style={{ color: GRAPHITE }}
        >
          Welcome to the Era of Soft Distrust
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="font-body mt-8 text-[18px] md:text-[21px] leading-[1.55] max-w-[58ch]"
          style={{ color: GRAPHITE_SOFT }}
        >
          Where skepticism became identity and intellectually respectable bull
          learned to speak in a calm podcast voice.
        </motion.p>

        {/* pull quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 md:mt-20 pl-6 md:pl-8 max-w-[40ch]"
          style={{ borderLeft: `2px solid ${PALE_BLUE_INK}` }}
        >
          <p
            className="font-heading font-light text-[26px] md:text-[34px] leading-[1.2] tracking-[-0.01em]"
            style={{ color: GRAPHITE }}
          >
            “Science is probably fine. The people behind it, less so.”
          </p>
        </motion.blockquote>

        <div
          className="my-20 md:my-28 h-px w-full"
          style={{ background: HAIRLINE }}
        />

        {/* ── EXPLAINER ────────────────────────────────────── */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-4">
            <p
              className="font-heading text-[12px] uppercase tracking-[0.2em]"
              style={{ color: STEEL }}
            >
              The diagnosis
            </p>
            <h3
              className="font-heading font-light text-[28px] md:text-[32px] leading-[1.15] tracking-[-0.01em] mt-4"
              style={{ color: GRAPHITE }}
            >
              Not a conspiracy. A posture.
            </h3>
          </div>

          <div className="md:col-span-8 space-y-5 font-body text-[16px] md:text-[17px] leading-[1.75]" style={{ color: GRAPHITE_SOFT }}>
            <p>
              Soft distrust is the well-mannered cousin of conspiracy. It
              doesn’t reject reality; it just lowers the temperature on it. The
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
              knows what they’re talking about.
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
          className="my-20 md:my-28 h-px w-full"
          style={{ background: HAIRLINE }}
        />

        {/* ── INTELLECTUALLY RESPECTABLE BULL ─────────────── */}
        <div>
          <p
            className="font-heading text-[12px] uppercase tracking-[0.2em]"
            style={{ color: STEEL }}
          >
            Section 02 · A glossary
          </p>
          <h3
            className="font-heading font-light text-[34px] md:text-[44px] leading-[1.05] tracking-[-0.015em] mt-4 max-w-[20ch]"
            style={{ color: GRAPHITE }}
          >
            Intellectually Respectable Bull
          </h3>

          <div
            className="mt-12 grid grid-cols-12 pb-4 text-[11px] uppercase tracking-[0.2em] font-heading"
            style={{ color: STEEL, borderBottom: `1px solid ${HAIRLINE}` }}
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
                style={{ borderBottom: `1px solid ${HAIRLINE}` }}
              >
                <dt
                  className="col-span-12 md:col-span-5 font-heading text-[19px] md:text-[20px] leading-[1.35] tracking-[-0.005em]"
                  style={{ color: GRAPHITE }}
                >
                  {row.line}
                </dt>
                <dd
                  className="col-span-12 md:col-span-7 mt-2 md:mt-0 font-body text-[15px] md:text-[16px] leading-[1.7]"
                  style={{ color: GRAPHITE_SOFT }}
                >
                  {row.gloss}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        <div
          className="my-20 md:my-28 h-px w-full"
          style={{ background: HAIRLINE }}
        />

        {/* ── THE NEW AESTHETIC ───────────────────────────── */}
        <div>
          <p
            className="font-heading text-[12px] uppercase tracking-[0.2em]"
            style={{ color: STEEL }}
          >
            Section 03 · A wardrobe change
          </p>
          <h3
            className="font-heading font-light text-[34px] md:text-[44px] leading-[1.05] tracking-[-0.015em] mt-4 max-w-[22ch]"
            style={{ color: GRAPHITE }}
          >
            The New Aesthetic of Distrust
          </h3>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-10 flex flex-col gap-5"
              style={{
                backgroundColor: CREAM_DEEP,
                border: `1px solid ${HAIRLINE}`,
              }}
            >
              <p
                className="font-heading text-[11px] uppercase tracking-[0.25em]"
                style={{ color: STEEL }}
              >
                Then
              </p>
              <h4
                className="font-heading font-light text-[26px] md:text-[28px] leading-[1.15] tracking-[-0.01em]"
                style={{ color: GRAPHITE }}
              >
                Old conspiracy culture
              </h4>
              <ul
                className="font-body text-[15px] md:text-[16px] leading-[1.7] space-y-1.5"
                style={{ color: GRAPHITE_SOFT }}
              >
                <li>Comic Sans on a black background</li>
                <li>Apocalypse on a Tuesday</li>
                <li>A clearly visible fringe identity</li>
                <li>Capital letters. Many of them. </li>
                <li>A basement, structurally</li>
              </ul>
            </motion.article>

            {/* Card 2 */}
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 md:p-10 flex flex-col gap-5"
              style={{
                backgroundColor: PALE_BLUE,
                border: `1px solid ${HAIRLINE}`,
              }}
            >
              <p
                className="font-heading text-[11px] uppercase tracking-[0.25em]"
                style={{ color: PALE_BLUE_INK }}
              >
                Now
              </p>
              <h4
                className="font-heading font-light text-[26px] md:text-[28px] leading-[1.15] tracking-[-0.01em]"
                style={{ color: GRAPHITE }}
              >
                Soft distrust culture
              </h4>
              <ul
                className="font-body text-[15px] md:text-[16px] leading-[1.7] space-y-1.5"
                style={{ color: GRAPHITE_SOFT }}
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
            className="font-heading font-light text-[22px] md:text-[28px] leading-[1.3] tracking-[-0.01em] mt-12 max-w-[40ch]"
            style={{ color: GRAPHITE }}
          >
            The modern misinformation ecosystem rarely looks dangerous. It
            looks well moisturised.
          </p>
        </div>

        <div
          className="my-20 md:my-28 h-px w-full"
          style={{ background: HAIRLINE }}
        />

        {/* ── WHY IT WORKS ────────────────────────────────── */}
        <div>
          <p
            className="font-heading text-[12px] uppercase tracking-[0.2em]"
            style={{ color: STEEL }}
          >
            Section 04 · Mechanics
          </p>
          <h3
            className="font-heading font-light text-[34px] md:text-[44px] leading-[1.05] tracking-[-0.015em] mt-4 max-w-[22ch]"
            style={{ color: GRAPHITE }}
          >
            Why It Works
          </h3>

          <div className="mt-12" style={{ borderTop: `1px solid ${HAIRLINE}` }}>
            {reasons.map((r, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  style={{ borderBottom: `1px solid ${HAIRLINE}` }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left group"
                  >
                    <span className="flex items-baseline gap-5 md:gap-7">
                      <span
                        className="font-mono text-[12px] tracking-[0.15em]"
                        style={{ color: STEEL_FAINT }}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className="font-heading text-[19px] md:text-[22px] tracking-[-0.005em] font-normal"
                        style={{ color: GRAPHITE }}
                      >
                        {r.title}
                      </span>
                    </span>
                    <span style={{ color: STEEL }}>
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
                      className="pb-6 md:pb-8 pl-10 md:pl-14 pr-10 font-body text-[15px] md:text-[16px] leading-[1.75] max-w-[60ch]"
                      style={{ color: GRAPHITE_SOFT }}
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
          className="my-20 md:my-28 h-px w-full"
          style={{ background: HAIRLINE }}
        />

        {/* ── BRIDGE / CTA ────────────────────────────────── */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-end">
          <div className="md:col-span-8">
            <p
              className="font-heading text-[12px] uppercase tracking-[0.2em]"
              style={{ color: STEEL }}
            >
              Where this goes
            </p>
            <p
              className="mt-5 font-body text-[17px] md:text-[19px] leading-[1.65] max-w-[58ch]"
              style={{ color: GRAPHITE_SOFT }}
            >
              Most of this material rhymes. The same plots, the same rhetorical
              moves, the same calm voice doing the same trick in a different
              kitchen. The{" "}
              <span style={{ color: GRAPHITE }}>NoBull Library</span> is our
              working map of those recurring patterns — the narrative
              instruments soft distrust tends to reach for, catalogued so they
              stop feeling like fresh insights every time.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/the-usual-suspects"
              className="inline-flex items-center gap-3 px-6 py-3.5 font-heading text-[13px] tracking-[0.1em] uppercase font-medium transition-all duration-200 group"
              style={{
                color: CREAM,
                backgroundColor: GRAPHITE,
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