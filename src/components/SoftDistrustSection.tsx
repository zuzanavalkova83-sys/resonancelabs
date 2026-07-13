import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import twinsPainting from "@/assets/soft-distrust-twins.png.asset.json";

const SoftDistrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Painting — large, museum-mounted */}
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.05 }}
            className="lg:col-span-7 relative"
          >
            <div
              className="relative overflow-hidden"
              style={{
                boxShadow:
                  "0 30px 80px -30px hsl(340, 50%, 4% / 0.8), 0 0 0 1px hsl(var(--brass) / 0.12)",
              }}
            >
              <img
                src={twinsPainting.url}
                alt="Two women in white blouses against a navy and terracotta ground — oil painting evoking the calm posture of soft distrust."
                className="w-full h-auto block"
                style={{
                  filter:
                    "contrast(1.04) brightness(0.94) saturate(0.82) hue-rotate(-14deg)",
                }}
              />
              {/* Burgundy wash to bind the painting into the site palette */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-color"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--wine-deep) / 0.32), hsl(var(--burgundy) / 0.18) 60%, hsl(var(--wine) / 0.28))",
                }}
              />
              {/* Subtle vignette at the bottom for editorial weight */}
              <div
                className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent, hsl(340, 45%, 6% / 0.45))",
                }}
              />
              {/* Film grain */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                  backgroundSize: "128px 128px",
                }}
              />
            </div>

            {/* Museum label */}
            <figcaption className="mt-5 max-w-[34ch]">
              <div
                className="h-px w-12 mb-3"
                style={{ background: "hsl(var(--brass) / 0.35)" }}
              />
              <p
                className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.22em] leading-[1.55] font-normal"
                style={{ color: "hsl(30, 15%, 60%)" }}
              >
                "TWO WOMEN AGREEING TO DISAGREE, GENTLY, OVER HERBAL TEA", OIL ON RESTRAINT, 2026
              </p>
            </figcaption>
          </motion.figure>

          {/* Headline + intro */}
          <div className="lg:col-span-5 lg:pt-6">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-[11px] tracking-[0.22em] uppercase font-medium mb-5"
              style={{ color: "hsl(var(--brass) / 0.85)" }}
            >
              Case in Point
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-display text-[44px] md:text-[56px] lg:text-[60px] tracking-wider leading-[0.9] text-foreground max-w-[14ch] mb-8"
            >
              Welcome to the Era of Soft Distrust
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="space-y-6"
            >
              <p
                className="font-body text-[17px] md:text-[19px] leading-[1.55] font-normal"
                style={{ color: "hsl(35, 20%, 72%)" }}
              >
                Scepticism has become an identity, and intellectually
                respectable nonsense has learned to speak in a calm podcast
                voice.
              </p>
              <p
                className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal"
                style={{ color: "hsl(30, 12%, 52%)" }}
              >
                It doesn't reject reality — it just lowers the temperature on
                it, until it's no longer clear that anyone knows anything at
                all.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px w-full origin-left my-20 md:my-28"
          style={{ background: "hsl(340, 22%, 22% / 0.4)" }}
        />



        {/* ─── WARDROBE: THEN / NOW ─────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative -mx-6 md:-mx-12 lg:-mx-20 xl:-mx-32 px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-20 overflow-hidden"
          style={{ backgroundColor: "hsl(340, 38%, 12%)" }}
        >
          {/* Deep burgundy wash with a single restrained red ember in the corner */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(160deg, hsl(340, 42%, 14%) 0%, hsl(340, 45%, 10%) 60%, hsl(348, 50%, 12%) 100%)",
            }}
          />
          {/* Soft red ember, top-left — accent only */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-15%",
              left: "-8%",
              width: "55%",
              height: "60%",
              background:
                "radial-gradient(ellipse at center, hsl(var(--signal-red) / 0.18), transparent 65%)",
              filter: "blur(90px)",
            }}
          />
          {/* Cool burgundy pool, bottom-right */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "-25%",
              right: "-15%",
              width: "70%",
              height: "65%",
              background:
                "radial-gradient(ellipse at center, hsl(340, 50%, 8% / 0.85), transparent 65%)",
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

          {/* Hairline brass border to frame the band as an editorial pull */}
          <div className="absolute inset-x-0 top-0 h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--brass) / 0.3), transparent)" }} />
          <div className="absolute inset-x-0 bottom-0 h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--brass) / 0.3), transparent)" }} />

          <div className="relative text-ivory">
            
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


        {/* ─── BRIDGE / CTA ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-12 gap-10 md:gap-14 items-end"
        >
          <div className="md:col-span-8">
            
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
