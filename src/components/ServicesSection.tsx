import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

/**
 * Editorial glyphs — each service gets a distinct, restrained mark drawn in
 * brass on hairline-bordered tile. Lightweight, no per-card animation.
 */
const GLYPHS = [
  // 0 — single dot
  (s: string) => <circle cx="22" cy="22" r="3" fill={s} />,
  // 1 — concentric rings
  (s: string) => (<>
    <circle cx="22" cy="22" r="11" fill="none" stroke={s} strokeWidth="1" />
    <circle cx="22" cy="22" r="4" fill="none" stroke={s} strokeWidth="1" />
  </>),
  // 2 — arrow east (transfer)
  (s: string) => (<>
    <line x1="10" y1="22" x2="32" y2="22" stroke={s} strokeWidth="1" />
    <polyline points="26,16 32,22 26,28" fill="none" stroke={s} strokeWidth="1" />
  </>),
  // 3 — square outline (brand frame)
  (s: string) => <rect x="11" y="11" width="22" height="22" fill="none" stroke={s} strokeWidth="1" />,
  // 4 — diagonal (crisis / fracture)
  (s: string) => (<>
    <line x1="10" y1="34" x2="34" y2="10" stroke={s} strokeWidth="1" />
    <line x1="14" y1="14" x2="20" y2="14" stroke={s} strokeWidth="1" />
    <line x1="24" y1="30" x2="30" y2="30" stroke={s} strokeWidth="1" />
  </>),
  // 5 — three rising bars (impact)
  (s: string) => (<>
    <line x1="14" y1="30" x2="14" y2="24" stroke={s} strokeWidth="1.5" />
    <line x1="22" y1="30" x2="22" y2="18" stroke={s} strokeWidth="1.5" />
    <line x1="30" y1="30" x2="30" y2="12" stroke={s} strokeWidth="1.5" />
  </>),
  // 6 — concentric arcs (broadcast)
  (s: string) => (<>
    <circle cx="22" cy="22" r="2" fill={s} />
    <path d="M14 22 a 8 8 0 0 1 16 0" fill="none" stroke={s} strokeWidth="1" />
    <path d="M10 22 a 12 12 0 0 1 24 0" fill="none" stroke={s} strokeWidth="1" />
  </>),
  // 7 — pen nib (writing)
  (s: string) => (<>
    <path d="M14 12 L30 28 L22 32 L12 22 Z" fill="none" stroke={s} strokeWidth="1" />
    <line x1="22" y1="32" x2="20" y2="30" stroke={s} strokeWidth="1" />
  </>),
];

const ServiceGlyph = ({ index }: { index: number }) => {
  const Glyph = GLYPHS[index % GLYPHS.length];
  return (
    <div
      className="w-14 h-14 md:w-16 md:h-16 mb-6 flex items-center justify-center"
      style={{
        border: "1px solid hsl(var(--brass) / 0.25)",
        backgroundColor: "hsl(340, 38%, 11% / 0.5)",
      }}
    >
      <svg viewBox="0 0 44 44" className="w-full h-full">
        {Glyph("hsl(var(--brass))")}
      </svg>
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
              className="group flex flex-col items-start text-left p-7 transition-all duration-400"
              style={{
                borderTop: '1px solid hsl(var(--brass) / 0.18)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderTopColor = 'hsl(var(--brass) / 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderTopColor = 'hsl(var(--brass) / 0.18)';
              }}
            >
              <span
                className="font-mono text-[10.5px] tracking-[0.22em] uppercase mb-5"
                style={{ color: "hsl(30, 15%, 50%)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <ServiceGlyph index={i} />

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
