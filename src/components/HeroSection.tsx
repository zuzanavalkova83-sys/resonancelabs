import { motion } from "framer-motion";
import { useGlitch, glitchStyle } from "@/hooks/useGlitch";

const signals = [
  { code: "S01", label: "Narrative Strategy", desc: "Shaping how research enters public conversation." },
  { code: "S02", label: "Distortion Mapping", desc: "Tracking how findings get twisted between lab and headline." },
  { code: "S03", label: "Clarity Under Pressure", desc: "Holding meaning steady when the stakes are high." },
];

const HeroSection = () => {
  const glitch = useGlitch(10000, 600, 3000);

  return (
    <section id="hero" className="relative w-full bg-background min-h-[100vh] pt-16 overflow-hidden">
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          top: '-10%',
          right: '-5%',
          background: 'radial-gradient(circle, hsl(348 45% 18% / 0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          bottom: '10%',
          left: '-5%',
          background: 'radial-gradient(circle, hsl(30 15% 68% / 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 min-h-[calc(100vh-4rem)] flex flex-col justify-center py-20">
        {/* Top marker */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-10 h-px" style={{ backgroundColor: 'hsl(var(--brass))' }} />
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: 'hsl(var(--brass))' }}>
            Strategic Science Communication
          </p>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="font-display text-[72px] md:text-[100px] lg:text-[130px] tracking-wider leading-[0.82] text-foreground mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.span
            animate={{ opacity: [0.92, 1, 0.92] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            Resonance
          </motion.span>
          <br />
          <span className="inline-block" style={glitchStyle(glitch, "subtle")}>
            Labs.
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="origin-left mb-10"
          style={{ width: '48px', height: '1px', backgroundColor: 'hsl(var(--brass) / 0.4)' }}
        />

        {/* Sub-copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="max-w-xl mb-16 md:mb-20"
        >
          <p className="font-heading text-[19px] md:text-[22px] font-medium leading-[1.35] tracking-[-0.01em] text-foreground mb-4">
            Protecting{" "}
            <span className="inline-block" style={glitchStyle(glitch)}>meaning</span>
            {" "}where research meets public life.
          </p>
          <p
            className="font-body text-[15px] md:text-[16px] leading-[1.75] font-normal max-w-[48ch]"
            style={{ color: 'hsl(var(--muted-foreground))' }}
          >
            We help serious ideas survive noise, distortion, and the distance
            between expertise and understanding.
          </p>
        </motion.div>

        {/* Signal cards — editorial grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-px"
          style={{ backgroundColor: 'hsl(var(--border) / 0.3)' }}
        >
          {signals.map((s, i) => (
            <motion.div
              key={s.code}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.08 }}
              className="p-6 md:p-8 flex flex-col justify-between"
              style={{
                backgroundColor: 'hsl(var(--burgundy-mid))',
                minHeight: '160px',
              }}
            >
              <div>
                <p
                  className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4"
                  style={{ color: 'hsl(var(--brass))' }}
                >
                  {s.code}
                </p>
                <h3
                  className="font-heading text-[15px] md:text-[16px] font-medium leading-[1.3] mb-3 text-foreground"
                >
                  {s.label}
                </h3>
              </div>
              <p
                className="font-body text-[13px] leading-[1.6]"
                style={{ color: 'hsl(var(--muted-foreground))' }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
