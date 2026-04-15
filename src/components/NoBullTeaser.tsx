import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const sampleFrames = [
  "Children under threat",
  "Hidden cure / miracle claim",
  "AI medical pseudo-authority",
];

const NoBullTeaser = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-28 md:py-40 section-padding relative overflow-hidden"
      style={{ backgroundColor: "hsl(222, 28%, 7%)" }}
    >
      {/* Burgundy accent — partial circle, top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "380px",
          height: "380px",
          top: "-120px",
          right: "-80px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, hsl(345, 40%, 22% / 0.18) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 lg:gap-20 items-start">
          {/* Left — copy column */}
          <div>
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.14em] font-medium mb-8"
              style={{ color: "hsl(215, 20%, 50%)" }}
            >
              Building NoBull
            </motion.p>

            {/* Heading — editorial weight */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="font-heading text-[34px] md:text-[44px] lg:text-[52px] font-light leading-[1.04] tracking-[-0.025em] text-foreground mb-3"
            >
              The Usual Suspects
            </motion.h2>

            {/* Burgundy underline accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="origin-left mb-8"
              style={{
                width: "48px",
                height: "2px",
                backgroundColor: "hsl(345, 40%, 35%)",
              }}
            />

            {/* Lead line */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="font-body text-[18px] md:text-[20px] leading-[1.55] font-normal mb-10"
              style={{ color: "hsl(215, 18%, 72%)" }}
            >
              A field guide to the recurring ways science gets twisted in
              public.
            </motion.p>

            {/* Body */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="space-y-5 mb-12 max-w-[54ch]"
            >
              <p
                className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal"
                style={{ color: "hsl(215, 15%, 55%)" }}
              >
                We collect and group the familiar plots that keep turning
                research into panic, miracle, scandal, ideology, or noise. The
                point is simple: if the nonsense repeats, we can learn to
                recognise it faster.
              </p>
              <p
                className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal italic"
                style={{ color: "hsl(215, 15%, 50%)" }}
              >
                The library is part of NoBull, a narrative-mapping tool
                currently being developed within Resonance Labs.
              </p>
            </motion.div>

            {/* CTA — panel treatment */}
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-lg font-heading text-[14px] tracking-[0.04em] font-medium transition-all duration-200 hover:brightness-110 group"
              style={{
                color: "hsl(32, 55%, 62%)",
                backgroundColor: "hsl(345, 35%, 18% / 0.25)",
                border: "1px solid hsl(345, 30%, 30% / 0.3)",
              }}
            >
              Explore the field guide
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </motion.a>
          </div>

          {/* Right — frame teaser cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-3 pt-14"
          >
            <p
              className="font-heading text-[10px] uppercase tracking-[0.14em] font-medium mb-2"
              style={{ color: "hsl(215, 20%, 38%)" }}
            >
              From the library
            </p>

            {sampleFrames.map((frame, i) => (
              <motion.div
                key={frame}
                initial={{ opacity: 0, x: 12 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className="px-4 py-3.5 rounded-lg"
                style={{
                  backgroundColor: "hsl(220, 22%, 10% / 0.6)",
                  border: "1px solid hsl(345, 30%, 25% / 0.2)",
                }}
              >
                <div className="flex items-center gap-3">
                  {/* Burgundy dot */}
                  <span
                    className="w-[6px] h-[6px] rounded-full shrink-0"
                    style={{ backgroundColor: "hsl(345, 40%, 40%)" }}
                  />
                  <span
                    className="font-heading text-[13px] md:text-[14px] tracking-[-0.01em] font-medium"
                    style={{ color: "hsl(215, 15%, 65%)" }}
                  >
                    {frame}
                  </span>
                </div>
              </motion.div>
            ))}

            <p
              className="font-body text-[12px] mt-2 italic"
              style={{ color: "hsl(215, 15%, 38%)" }}
            >
              … and more being catalogued
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom hairline */}
      <div
        className="max-w-6xl mx-auto mt-28 md:mt-40 h-px"
        style={{ backgroundColor: "hsl(220, 20%, 20% / 0.3)" }}
      />
    </section>
  );
};

export default NoBullTeaser;
