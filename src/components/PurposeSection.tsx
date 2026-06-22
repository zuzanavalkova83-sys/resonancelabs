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
      "COMMITTEE FOR THE PROMOTION OF DOUBT (AFTER THE SEMINAR THAT RAN LONG), OIL ON CANVAS, 2026",
  },
  {
    src: paintingElder.url,
    alt: "Senior scientist with patient expression",
    caption:
      "SENIOR RESEARCHER EXPLAINING WHY IT IS ACTUALLY MORE COMPLICATED, OIL ON LINEN, 2026",
  },
  {
    src: paintingHorizon.url,
    alt: "Man staring at the horizon",
    caption:
      "MAN WHO READ ONLY THE ABSTRACT AND IS ALREADY FORMING AN OPINION, MIXED MEDIA, 2026",
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
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
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
                <div className="relative aspect-square w-full overflow-hidden bg-burgundy">
                  <img
                    src={painting.src}
                    alt={painting.alt}
                    className="w-full h-full object-contain"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
                <p
                  className="mt-5 md:mt-6 font-heading text-[11px] md:text-[12px] uppercase tracking-[0.18em] leading-[1.55] font-normal text-center"
                  style={{ color: "hsl(var(--ivory-dim))" }}
                >
                  {painting.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.figure>

        {/* Manifesto — two balanced columns of text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24"
        >
          <div className="space-y-5">
            <p className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: 'hsl(30, 12%, 55%)' }}>
              We used to think of science communication mainly as a question of clarity, reach, and public engagement. That is no longer enough.
            </p>
            <p className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: 'hsl(30, 12%, 55%)' }}>
              Research now enters a public space shaped by noise, strategic distortion, grievance, and misplaced certainty. Careful work can be flattened, moralised, politicised, or pulled into stories it was never trying to tell.
            </p>
          </div>

          <div className="space-y-5">
            <p className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: 'hsl(30, 12%, 55%)' }}>
              Resonance Labs exists to help serious ideas survive that contact. The work is about protecting meaning: translating expertise into language people can hear, while reducing the chances that it will be hijacked on the way.
            </p>
            <p className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: 'hsl(35, 15%, 62%)' }}>
              We do not work to make science louder for the sake of it. We work to help it remain legible, credible, and alive in the world it actually enters.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;
