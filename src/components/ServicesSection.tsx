import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bubble1 from "@/assets/service-bubble-1.jpg";
import bubble2 from "@/assets/service-bubble-2.jpg";
import bubble3 from "@/assets/service-bubble-3.jpg";
import bubble4 from "@/assets/service-bubble-4.jpg";
import bubble5 from "@/assets/service-bubble-5.jpg";

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
    <section
      id="services"
      className="py-32 md:py-44 section-padding section-divider bg-teal-deep"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.14em] font-medium mb-8"
            style={{ color: 'hsl(215, 20%, 50%)' }}
          >
            Services
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-[32px] md:text-[40px] lg:text-[46px] font-light leading-[1.08] tracking-[-0.02em] text-foreground mb-6"
          >
            What We Do to Make Science Matter More
          </motion.h2>

          {/* Hairline divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto"
            style={{ maxWidth: '80px' }}
          >
            <div className="h-px w-full" style={{ backgroundColor: 'hsl(220, 20%, 30% / 0.4)' }} />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full"
              style={{ backgroundColor: 'hsl(32, 55%, 58%)' }}
            />
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
              className="group flex flex-col items-center text-center p-6 rounded-xl transition-all duration-400"
              style={{
                border: '1px solid hsl(170, 20%, 20% / 0.25)',
                backgroundColor: 'hsl(170, 18%, 12% / 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'hsl(32, 55%, 58% / 0.3)';
                e.currentTarget.style.backgroundColor = 'hsl(170, 18%, 14% / 0.35)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'hsl(170, 20%, 20% / 0.25)';
                e.currentTarget.style.backgroundColor = 'hsl(170, 18%, 12% / 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Image circle */}
              <div
                className="w-20 h-20 md:w-[88px] md:h-[88px] rounded-full overflow-hidden mb-5 relative"
                style={{
                  border: '1px solid hsl(220, 20%, 30% / 0.25)',
                }}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                  style={{ filter: 'saturate(0.7) contrast(0.95) brightness(0.9)' }}
                />
                {/* Subtle tint overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, transparent 40%, hsl(170, 30%, 9% / 0.35) 100%)',
                  }}
                />
              </div>

              {/* Service name */}
              <h3
                className="font-heading text-[15px] md:text-[16px] font-medium leading-[1.3] tracking-[-0.01em] transition-colors duration-300"
                style={{ color: 'hsl(215, 15%, 78%)' }}
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
