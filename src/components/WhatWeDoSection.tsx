import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    code: "01",
    title: "Narrative risk audit",
    body:
      "Before you publish, we map how a paper, abstract, or press release could be misread, oversimplified, or weaponised — and draft the lines to say first.",
  },
  {
    code: "02",
    title: "Training & workshops",
    body:
      "We prepare researchers and communication teams to recognise the recurring traps and respond without sounding defensive or robotic.",
  },
  {
    code: "03",
    title: "Rapid response",
    body:
      "When a story is already spreading, we help you read the distortion and decide what — and whether — to say.",
  },
];

const WhatWeDoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="what-we-do"
      ref={ref}
      className="relative py-32 md:py-44 section-padding bg-background overflow-hidden"
    >
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-heading text-[11px] tracking-[0.22em] uppercase font-medium mb-5"
          style={{ color: "hsl(var(--brass) / 0.85)" }}
        >
          Services
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[48px] md:text-[60px] lg:text-[72px] tracking-wider leading-[0.88] text-foreground mb-16 md:mb-20"
        >
          What we do
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0">
          {services.map((s, i) => (
            <motion.div
              key={s.code}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="relative py-10 md:py-12 px-0 md:px-8 lg:px-10"
              style={{
                borderTop: "1px solid hsl(var(--brass) / 0.2)",
                borderLeft:
                  i > 0 ? "1px solid hsl(var(--brass) / 0.12)" : undefined,
              }}
            >
              <span
                className="font-mono text-[11px] tracking-[0.22em] uppercase block mb-6"
                style={{ color: "hsl(30, 15%, 50%)" }}
              >
                {s.code} ·
              </span>
              <h3
                className="font-display text-[24px] md:text-[28px] tracking-wider leading-[1.05] mb-5 text-foreground"
              >
                {s.title}
              </h3>
              <p
                className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal max-w-[38ch]"
                style={{ color: "hsl(30, 12%, 55%)" }}
              >
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;