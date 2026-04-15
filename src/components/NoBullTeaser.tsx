import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const NoBullTeaser = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-28 md:py-40 section-padding"
      style={{ backgroundColor: "hsl(222, 28%, 7%)" }}
    >
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
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

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="font-heading text-[32px] md:text-[42px] lg:text-[48px] font-light leading-[1.08] tracking-[-0.02em] text-foreground mb-6"
        >
          The Usual Suspects
        </motion.h2>

        {/* Lead line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="font-body text-[18px] md:text-[20px] leading-[1.55] font-normal mb-10"
          style={{ color: "hsl(215, 18%, 72%)" }}
        >
          A field guide to the recurring ways science gets twisted in public.
        </motion.p>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="space-y-5 mb-12 max-w-[54ch] mx-auto"
        >
          <p
            className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal"
            style={{ color: "hsl(215, 15%, 55%)" }}
          >
            We collect and group the familiar plots that keep turning research
            into panic, miracle, scandal, ideology, or noise. The point is
            simple: if the nonsense repeats, we can learn to recognise it
            faster.
          </p>
          <p
            className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal italic"
            style={{ color: "hsl(215, 15%, 50%)" }}
          >
            The library is part of NoBull, a narrative-mapping tool currently
            being developed within Resonance Labs.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="inline-flex items-center gap-2 font-heading text-[14px] tracking-[0.04em] font-medium transition-opacity duration-200 hover:opacity-100"
          style={{ color: "hsl(32, 55%, 58%)", opacity: 0.85 }}
        >
          Explore the field guide
          <ArrowRight className="w-4 h-4" />
        </motion.a>
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
