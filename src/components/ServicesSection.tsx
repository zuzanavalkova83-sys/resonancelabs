import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bubble1 from "@/assets/service-bubble-1.jpg";
import bubble2 from "@/assets/service-bubble-2.jpg";
import bubble3 from "@/assets/service-bubble-3.jpg";
import bubble4 from "@/assets/service-bubble-4.jpg";
import bubble5 from "@/assets/service-bubble-5.jpg";
import decorJellyfish from "@/assets/decor-jellyfish.png";

const services = [
  { name: "Communication Strategies", image: bubble1 },
  { name: "Communication Audits", image: bubble2 },
  { name: "Knowledge Transfer", image: bubble3 },
  { name: "Brand Building", image: bubble4 },
  { name: "Crisis Communication", image: bubble5 },
  { name: "Impact Storytelling", image: bubble2 },
  { name: "Media Trainings", image: bubble1 },
  { name: "Creative Writing Workshops", image: bubble3 },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-28 md:py-40 section-padding bg-cosmic-deep relative overflow-hidden section-divider" ref={ref}>
      {/* Decorative jellyfish */}
      <motion.img
        src={decorJellyfish}
        alt=""
        className="absolute bottom-12 left-8 w-16 md:w-24 opacity-30 pointer-events-none"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl text-foreground mb-4 font-light tracking-wide">
          What We Do to Make Science Matter More
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group glass-card rounded-2xl p-5 flex flex-col items-center text-center hover:border-primary/30 transition-all duration-500 shimmer"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-5 ring-2 ring-border group-hover:ring-primary/40 transition-all duration-500 glow-gold group-hover:shadow-[0_0_30px_hsl(38_60%_65%/0.2)]">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <h3 className="text-base md:text-lg text-foreground group-hover:text-primary transition-colors duration-300 font-medium">
              {service.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
