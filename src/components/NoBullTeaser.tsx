import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const sampleFrames = [
  {
    code: "F01",
    title: "Experts are hiding the truth",
    desc: "Strips context from findings and reframes them as leaked secrets.",
    tag: "DISTRUST",
  },
  {
    code: "F04",
    title: "Children under threat",
    desc: "Attaches any finding to children, then dares you to argue.",
    tag: "PROTECTION",
  },
  {
    code: "F15",
    title: "Toxic traces everywhere",
    desc: "Upgrades detection into danger. If instruments can find it, it must be killing us.",
    tag: "FEAR",
  },
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
      {/* Burgundy ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          top: "-150px",
          right: "-100px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, hsl(345, 40%, 18% / 0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        {/* Top — copy */}
        <div className="max-w-2xl mb-16 md:mb-20">
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
            className="font-heading text-[34px] md:text-[44px] lg:text-[52px] font-light leading-[1.04] tracking-[-0.025em] text-foreground mb-3"
          >
            The Usual Suspects
          </motion.h2>

          {/* Burgundy rule */}
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

          {/* Lead */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="font-body text-[18px] md:text-[20px] leading-[1.55] font-normal mb-6"
            style={{ color: "hsl(215, 18%, 72%)" }}
          >
            A field guide to the recurring ways science gets twisted in public.
          </motion.p>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal max-w-[54ch]"
            style={{ color: "hsl(215, 15%, 55%)" }}
          >
            We collect and group the familiar plots that keep turning research
            into panic, miracle, scandal, ideology, or noise. The point is
            simple: if the nonsense repeats, we can learn to recognise it
            faster.
          </motion.p>
        </div>

        {/* Cards — echoing the NoBull frame grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-16"
        >
          {sampleFrames.map((frame, i) => (
            <motion.div
              key={frame.code}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
              className="flex flex-col justify-between p-6 rounded-lg"
              style={{
                backgroundColor: "hsl(345, 20%, 12% / 0.35)",
                border: "1px solid hsl(345, 25%, 22% / 0.25)",
                minHeight: "210px",
              }}
            >
              <div>
                {/* Frame code */}
                <p
                  className="font-mono text-[12px] tracking-[0.12em] uppercase mb-4"
                  style={{ color: "hsl(345, 20%, 45%)" }}
                >
                  {frame.code}
                </p>

                {/* Title */}
                <h3
                  className="font-heading text-[17px] md:text-[18px] font-medium leading-[1.25] tracking-[-0.01em] mb-3"
                  style={{ color: "hsl(215, 15%, 82%)" }}
                >
                  {frame.title}
                </h3>

                {/* Description */}
                <p
                  className="font-body text-[13px] md:text-[14px] leading-[1.6]"
                  style={{ color: "hsl(215, 15%, 50%)" }}
                >
                  {frame.desc}
                </p>
              </div>

              {/* Tag */}
              <div className="mt-5">
                <span
                  className="inline-block font-heading text-[10px] tracking-[0.14em] uppercase px-2.5 py-1 rounded"
                  style={{
                    color: "hsl(215, 15%, 55%)",
                    backgroundColor: "hsl(220, 20%, 15% / 0.6)",
                    border: "1px solid hsl(220, 20%, 22% / 0.3)",
                  }}
                >
                  {frame.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom — bridge line + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <p
            className="font-body text-[14px] md:text-[15px] leading-[1.6] italic max-w-[48ch]"
            style={{ color: "hsl(215, 15%, 45%)" }}
          >
            The library is part of NoBull, a narrative-mapping tool currently
            being developed within Resonance Labs.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-lg font-heading text-[14px] tracking-[0.04em] font-medium transition-all duration-200 hover:brightness-110 group shrink-0"
            style={{
              color: "hsl(32, 55%, 62%)",
              backgroundColor: "hsl(345, 35%, 18% / 0.3)",
              border: "1px solid hsl(345, 30%, 28% / 0.3)",
            }}
          >
            Explore the field guide
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
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
