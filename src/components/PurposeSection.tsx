import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import purposeImage from "@/assets/purpose-stilllife.png";

const PurposeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="purpose"
      className="py-28 md:py-40 section-padding section-divider"
      ref={ref}
      style={{ backgroundColor: 'hsl(222, 28%, 8%)' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">

          {/* Left column — text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-[56ch]"
          >
            {/* Eyebrow */}
            <p
              className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.14em] font-medium mb-8"
              style={{ color: 'hsl(215, 20%, 50%)' }}
            >
              Our Purpose
            </p>

            {/* Headline */}
            <h2
              className="font-heading text-[32px] md:text-[40px] lg:text-[46px] font-light leading-[1.08] tracking-[-0.02em] text-foreground mb-10"
            >
              Why We Exist
            </h2>

            {/* Body paragraphs */}
            <div className="space-y-6">
              <p
                className="font-body text-[16px] md:text-[17px] leading-[1.65] font-normal"
                style={{ color: 'hsl(215, 15%, 62%)' }}
              >
                We used to think of science communication as a delight—perhaps the most intriguing work in the world. Our perspective shifted in light of industrial misinformation and hybrid warfare.
              </p>

              <p
                className="font-body text-[16px] md:text-[17px] leading-[1.65] font-normal"
                style={{ color: 'hsl(215, 15%, 62%)' }}
              >
                We realised that knowledge without consequence is a vulnerability. When research remains isolated from the world it aims to serve, the gap is exploited. Worse, research itself can be twisted and exploited.
              </p>

              <p
                className="font-body text-[16px] md:text-[17px] leading-[1.65] font-normal italic"
                style={{ color: 'hsl(215, 18%, 72%)' }}
              >
                We founded Resonance Labs to bridge that distance: to translate expertise into action and to protect the simple, necessary idea that truth must endure.
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
            <div
              className="relative overflow-hidden w-full"
              style={{ borderRadius: '16px', aspectRatio: '4 / 5' }}
            >
              <img
                src={purposeImage}
                alt="Renaissance-style still life with microscope, open book, fruit bowl, and disco ball — symbolising the intersection of science and culture"
                className="w-full h-full object-cover"
                style={{ borderRadius: '16px', objectPosition: 'center 60%', filter: 'sepia(0.12) saturate(1.1) brightness(0.95)' }}
              />
              {/* Subtle inset vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  borderRadius: '16px',
                  boxShadow: 'inset 0 0 50px 10px hsl(222, 28%, 6% / 0.4)',
                }}
              />
              {/* Hairline border */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  borderRadius: '16px',
                  border: '1px solid hsl(220, 20%, 30% / 0.25)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
