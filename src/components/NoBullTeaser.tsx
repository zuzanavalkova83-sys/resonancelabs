import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
  {
    code: "F22",
    title: "Nature knows best",
    desc: "Frames anything synthetic as suspect and anything 'natural' as automatically safe.",
    tag: "PURITY",
  },
];

const NoBullTeaser = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-32 md:py-44 section-padding relative overflow-hidden bg-ivory-warm"
    >
      {/* Wine accent circle */}
      <div
        className="absolute pointer-events-none hidden md:block"
        style={{
          width: "260px",
          height: "260px",
          top: "8rem",
          right: "-3rem",
          borderRadius: "50%",
          background: "hsl(348, 45%, 28%)",
          boxShadow: "0 20px 60px -10px hsl(348 45% 28% / 0.3)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        {/* Top — copy */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-10 h-px" style={{ background: "hsl(30, 15%, 75%)" }} />
            <p className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-medium" style={{ color: "hsl(30, 15%, 58%)" }}>
              Narrative risk mapping
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-[52px] md:text-[68px] lg:text-[80px] tracking-wider leading-[0.85] mb-6"
            style={{ color: "hsl(340, 30%, 22%)" }}
          >
            The Usual Suspects
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="origin-left mb-8"
            style={{ width: "48px", height: "2px", backgroundColor: "hsl(30, 15%, 72%)" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="font-body text-[18px] md:text-[20px] leading-[1.55] font-normal mb-6"
            style={{ color: "hsl(30, 10%, 42%)" }}
          >
            A working field guide to the recurring ways science gets twisted in public. The raw material for our narrative intelligence work.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal max-w-[54ch]"
            style={{ color: "hsl(30, 8%, 50%)" }}
          >
            We collect and group the familiar plots that keep turning research
            into panic, miracle, scandal, ideology, or noise. The point is
            simple: if the nonsense repeats, we can recognise it faster.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-16"
        >
          {sampleFrames.map((frame, i) => (
            <motion.div
              key={frame.code}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
              className="flex flex-col justify-between p-6"
              style={{
                backgroundColor: "hsl(348, 50%, 18%)",
                border: "1px solid hsl(348, 35%, 28% / 0.3)",
                minHeight: "210px",
              }}
            >
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase mb-4" style={{ color: "hsl(30, 15%, 55%)" }}>
                  {frame.code}
                </p>
                <h3 className="font-heading text-[15px] md:text-[16px] font-medium leading-[1.3] mb-3" style={{ color: "hsl(35, 25%, 88%)" }}>
                  {frame.title}
                </h3>
                <p className="font-body text-[13px] leading-[1.6]" style={{ color: "hsl(30, 15%, 60%)" }}>
                  {frame.desc}
                </p>
              </div>
              <div className="mt-5">
                <span
                  className="inline-block font-mono text-[10px] tracking-[0.15em] uppercase px-2.5 py-1"
                  style={{
                    color: "hsl(30, 12%, 60%)",
                    backgroundColor: "hsl(348, 40%, 22% / 0.4)",
                  }}
                >
                  {frame.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <p className="font-body text-[14px] md:text-[15px] leading-[1.6] max-w-[48ch]" style={{ color: "hsl(30, 8%, 50%)" }}>
            <br />
          </p>

          <Link
            to="/the-usual-suspects"
            className="inline-flex items-center gap-3 px-6 py-3 font-heading text-[13px] tracking-[0.1em] uppercase font-medium transition-all duration-200 hover:brightness-110 group shrink-0"
            style={{
              color: "hsl(35, 25%, 92%)",
              backgroundColor: "hsl(348, 45%, 28%)",
            }}
          >
            Explore the field guide
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NoBullTeaser;
