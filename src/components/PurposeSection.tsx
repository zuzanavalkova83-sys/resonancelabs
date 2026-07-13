import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import paintingGroup from "@/assets/why-we-exist-group.png.asset.json";
import paintingElder from "@/assets/why-we-exist-elder.png.asset.json";
import paintingHorizon from "@/assets/why-we-exist-horizon.png.asset.json";

const PAINTINGS = [
  {
    src: paintingGroup.url,
    alt: "Group of scientists in discussion",
    caption:
      "\"COMMITTEE FOR DISSEMINATING DOUBT (AFTER THE SEMINAR THAT RAN LONG)\", OIL ON DESPAIR, 2026",
  },
  {
    src: paintingElder.url,
    alt: "Senior scientist with patient expression",
    caption:
      "\"SENIOR RESEARCHER EXPLAINING WHY IT IS ACTUALLY MORE COMPLICATED, OIL ON FIRE, 2026",
  },
  {
    src: paintingHorizon.url,
    alt: "Man staring at the horizon",
    caption:
      "\"MAN WHO 'DID HIS OWN RESEARCH' AND NOW WE ARE GOING TO SUFFER FOR IT\", MIXED MEDIA AND FEELINGS, 2026",
  },
] as const;

const PurposeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="purpose"
      className="py-32 md:py-44 section-padding bg-burgundy-mid"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <p
            className="font-heading text-[11px] tracking-[0.22em] uppercase font-medium mb-5"
            style={{ color: "hsl(var(--brass) / 0.85)" }}
          >
            Position
          </p>
          <h2 className="font-display text-[48px] md:text-[60px] lg:text-[72px] tracking-wider leading-[0.88] text-foreground">
            Why We Exist
          </h2>
        </motion.div>

        {/* Triptych — three paintings side by side, no dividers */}
        <motion.figure
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="mb-16 md:mb-20"
          aria-label="Triptych: why resonance labs exists"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
            {PAINTINGS.map((painting, i) => (
              <motion.div
                key={painting.src}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1,
                  delay: 0.2 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-burgundy">
                  <img
                    src={painting.src}
                    alt={painting.alt}
                    className="w-full h-full object-cover"
                    draggable={false}
                    loading="lazy"
                    style={{
                      filter:
                        "contrast(1.04) brightness(0.94) saturate(0.82) hue-rotate(-14deg)",
                    }}
                  />
                  {/* Cool burgundy wash to bind the triptych into the site palette */}
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-color"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--wine-deep) / 0.30), hsl(var(--burgundy) / 0.18) 60%, hsl(var(--wine) / 0.26))",
                    }}
                  />
                </div>
                <div className="mt-5 md:mt-6 flex flex-col items-center">
                  <div
                    className="h-px w-12 mb-3"
                    style={{ background: "hsl(var(--brass) / 0.35)" }}
                  />
                  <p
                    className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.22em] leading-[1.55] font-normal text-center max-w-[34ch]"
                    style={{ color: "hsl(30, 15%, 60%)" }}
                  >
                    {painting.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.figure>

        {/* Credo — a single line, the strongest one */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-[46ch] mx-auto text-center"
        >
          <p
            className="font-display text-[24px] md:text-[30px] lg:text-[34px] tracking-wide leading-[1.25]"
            style={{ color: 'hsl(35, 22%, 82%)' }}
          >
            We don't work to make science louder. We work to help it stay
            legible, credible, and alive in the world it actually enters.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;
