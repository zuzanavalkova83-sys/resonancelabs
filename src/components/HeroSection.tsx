import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import heroBanner from "@/assets/hero-banner.jpg";
import decorJellyfish from "@/assets/decor-jellyfish.png";
import decorRocket from "@/assets/decor-rocket.png";
import decorButterfly from "@/assets/decor-butterfly.png";

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section id="hero" className="relative w-full overflow-hidden">
      {/* Hero image — full natural height */}
      <div className="relative w-full">
        <motion.img
          src={heroBanner}
          alt="Resonance Labs cosmic illustration with rocket, planets, butterflies and jellyfish"
          className="w-full h-auto block"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
        {/* Subtle bottom fade only */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

        {/* Interactive rotating meteorite */}
        <motion.div
          className="absolute pointer-events-none"
          style={{ top: "18%", left: "12%" }}
          animate={{
            rotate: 360,
            x: mousePos.x * 12,
            y: mousePos.y * 8,
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            x: { duration: 0.6, ease: "easeOut" },
            y: { duration: 0.6, ease: "easeOut" },
          }}
        >
          <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-amber-700 via-stone-500 to-stone-700 shadow-[0_0_20px_rgba(180,140,80,0.4)] opacity-80" 
            style={{
              borderRadius: "42% 58% 55% 45% / 48% 52% 48% 52%",
            }}
          />
        </motion.div>

        {/* Interactive butterfly */}
        <motion.img
          src={decorButterfly}
          alt=""
          className="absolute w-12 md:w-20 pointer-events-none opacity-80"
          style={{ top: "30%", right: "15%" }}
          animate={{
            y: [0, -15, 5, -8, 0],
            x: [0, 10, -5, 8, 0],
            rotate: [0, 5, -3, 4, 0],
            scaleX: [1, 0.85, 1, 0.9, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating jellyfish */}
        <motion.img
          src={decorJellyfish}
          alt=""
          className="absolute w-14 md:w-24 pointer-events-none opacity-60"
          style={{ bottom: "25%", right: "8%" }}
          animate={{
            y: [0, -10, 0],
            x: mousePos.x * 6,
          }}
          transition={{
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 0.8, ease: "easeOut" },
          }}
        />

        {/* Small floating rocket */}
        <motion.img
          src={decorRocket}
          alt=""
          className="absolute w-10 md:w-16 pointer-events-none opacity-50"
          style={{ bottom: "30%", left: "6%" }}
          animate={{
            y: [0, -8, 0],
            x: mousePos.x * -4,
          }}
          transition={{
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
            x: { duration: 0.8, ease: "easeOut" },
          }}
        />
      </div>

      {/* Title overlay at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-12 md:pb-20 section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl leading-[1.1] mb-6 text-foreground font-light tracking-wide">
            Science,{" "}
            <span className="gradient-gold-text font-normal italic">Amplified.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
            In an age defined by the industrial production of noise, we protect your voice.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
