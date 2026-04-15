import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useGlitch, glitchStyle } from "@/hooks/useGlitch";

const services = [
  { name: "Communication Strategies" },
  { name: "Communication Audits" },
  { name: "Knowledge Transfer" },
  { name: "Brand Building" },
  { name: "Crisis Communication" },
  { name: "Impact Storytelling" },
  { name: "Media Trainings" },
  { name: "Creative Writing Workshops" },
];

const GlitchCircle = ({ delay }: { delay: number }) => {
  const glitch = useGlitch(6000 + delay * 800, 500, 2000 + delay * 600);

  return (
    <div className="w-20 h-20 md:w-[88px] md:h-[88px] rounded-full relative mb-5 flex items-center justify-center overflow-hidden">
      {/* Base circle */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at 35% 35%, hsl(340 55% 45% / 0.6), hsl(348 50% 28% / 0.8))',
          border: '1px solid hsl(340 45% 40% / 0.3)',
        }}
      />
      {/* Chromatic split layers */}
      {glitch && (
        <>
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0] }}
            transition={{ duration: 0.15, repeat: 3, repeatDelay: 0.05 }}
            style={{
              background: 'radial-gradient(circle at 40% 40%, hsl(340 80% 55% / 0.5), transparent 70%)',
              transform: 'translate(3px, -1px)',
              mixBlendMode: 'screen',
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 0.12, repeat: 2, repeatDelay: 0.08 }}
            style={{
              background: 'radial-gradient(circle at 40% 40%, hsl(180 70% 50% / 0.4), transparent 70%)',
              transform: 'translate(-3px, 1px)',
              mixBlendMode: 'screen',
            }}
          />
        </>
      )}
      {/* Breathing pulse */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4 + delay * 0.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: 'radial-gradient(circle, hsl(340 60% 50% / 0.25), transparent 70%)',
        }}
      />
      {/* Inner glow dot */}
      <div
        className="w-2 h-2 rounded-full relative z-10"
        style={{
          background: 'hsl(340 55% 65%)',
          boxShadow: '0 0 12px 4px hsl(340 55% 50% / 0.4)',
        }}
      />
    </div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="py-32 md:py-44 section-padding bg-background"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-medium mb-8"
            style={{ color: 'hsl(30, 15%, 55%)' }}
          >
            Services
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[48px] md:text-[60px] lg:text-[72px] tracking-wider leading-[0.88] text-foreground mb-6"
          >
            What We Do
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto"
            style={{ maxWidth: '80px' }}
          >
            <div className="h-px w-full" style={{ backgroundColor: 'hsl(30, 15%, 40% / 0.4)' }} />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full"
              style={{ backgroundColor: 'hsl(30, 15%, 68%)' }}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
              className="group flex flex-col items-center text-center p-6 transition-all duration-400"
              style={{
                border: '1px solid hsl(340, 22%, 22% / 0.3)',
                backgroundColor: 'hsl(340, 30%, 13% / 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'hsl(30, 15%, 55% / 0.3)';
                e.currentTarget.style.backgroundColor = 'hsl(340, 30%, 15% / 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'hsl(340, 22%, 22% / 0.3)';
                e.currentTarget.style.backgroundColor = 'hsl(340, 30%, 13% / 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <GlitchCircle delay={i} />

              <h3
                className="font-heading text-[15px] md:text-[16px] font-medium leading-[1.3] tracking-[-0.01em] transition-colors duration-300"
                style={{ color: 'hsl(35, 20%, 78%)' }}
              >
                {service.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
