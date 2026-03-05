import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import dividerImage from "@/assets/editorial-divider.png";

const EditorialDivider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="relative w-full py-12 md:py-20"
      style={{ backgroundColor: 'hsl(222, 28%, 8%)' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full"
        style={{ height: 'auto' }}
      >
        <img
          src={dividerImage}
          alt=""
          className="w-full h-full object-cover"
          style={{
            objectPosition: 'center 40%',
            filter: 'saturate(0.85) brightness(0.88) sepia(0.08)',
          }}
        />

        {/* Top edge blend */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{
            height: '25%',
            background: 'linear-gradient(to bottom, hsl(222, 28%, 8%) 0%, transparent 100%)',
          }}
        />

        {/* Bottom edge blend */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: '25%',
            background: 'linear-gradient(to top, hsl(222, 28%, 8%) 0%, transparent 100%)',
          }}
        />

        {/* Left edge blend */}
        <div
          className="absolute inset-y-0 left-0 pointer-events-none"
          style={{
            width: '10%',
            background: 'linear-gradient(to right, hsl(222, 28%, 8%) 0%, transparent 100%)',
          }}
        />

        {/* Right edge blend */}
        <div
          className="absolute inset-y-0 right-0 pointer-events-none"
          style={{
            width: '10%',
            background: 'linear-gradient(to left, hsl(222, 28%, 8%) 0%, transparent 100%)',
          }}
        />

        {/* Subtle warm vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, hsl(222, 28%, 8% / 0.4) 100%)',
          }}
        />
      </motion.div>
    </section>
  );
};

export default EditorialDivider;
