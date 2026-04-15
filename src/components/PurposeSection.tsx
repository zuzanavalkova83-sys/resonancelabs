import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import purposeImage from "@/assets/purpose-stilllife.png";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">

          {/* Left column — text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-px" style={{ background: 'hsl(30, 15%, 45%)' }} />
              <p className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-medium" style={{ color: 'hsl(30, 15%, 55%)' }}>
                Our Purpose
              </p>
            </div>

            <h2 className="font-display text-[48px] md:text-[60px] lg:text-[72px] tracking-wider leading-[0.88] text-foreground mb-10">
              Why We Exist
            </h2>

            <div className="space-y-5">
              <p className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: 'hsl(30, 12%, 55%)' }}>
                We used to think of science communication mainly as a question of clarity, reach, and public engagement. That is no longer enough.
              </p>
              <p className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: 'hsl(30, 12%, 55%)' }}>
                Research now enters a public space shaped by noise, strategic distortion, grievance, and misplaced certainty. Careful work can be flattened, moralised, politicised, or pulled into stories it was never trying to tell.
              </p>
              <p className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: 'hsl(30, 12%, 55%)' }}>
                Resonance Labs exists to help serious ideas survive that contact. The work is about protecting meaning: translating expertise into language people can hear, while reducing the chances that it will be hijacked on the way.
              </p>
              <p className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: 'hsl(35, 15%, 62%)' }}>
                We do not work to make science louder for the sake of it. We work to help it remain legible, credible, and alive in the world it actually enters.
              </p>
            </div>
          </motion.div>

          {/* Right column — illustration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative overflow-hidden w-full" style={{ maxHeight: '520px' }}>
              <img
                src={purposeImage}
                alt="Renaissance-style still life with microscope, open book, fruit bowl, and disco ball"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 60%', filter: 'sepia(0.15) saturate(1.05) brightness(0.92)' }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 50px 10px hsl(340, 40%, 8% / 0.4)' }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ border: '1px solid hsl(30, 12%, 30% / 0.2)' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
