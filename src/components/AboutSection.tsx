import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";

/* Slow-drifting ambient orbs to add depth to the flat background */
const AmbientOrbs = () => {
  const orbs = useMemo(() => [
    { x: "10%", y: "15%", size: 350, color: "hsl(348, 45%, 20%)", dur: 20, dx: 5, dy: 3 },
    { x: "70%", y: "55%", size: 420, color: "hsl(340, 38%, 17%)", dur: 25, dx: -4, dy: 4 },
    { x: "45%", y: "80%", size: 300, color: "hsl(30, 18%, 18%)", dur: 28, dx: 3, dy: -3 },
    { x: "80%", y: "10%", size: 280, color: "hsl(340, 42%, 19%)", dur: 22, dx: -3, dy: 4 },
  ], []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: 'blur(80px)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: [0, orb.dx * 10, 0],
            y: [0, orb.dy * 10, 0],
          }}
          transition={{
            duration: orb.dur,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Film grain */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />
    </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {categories.map((cat, catIdx) => (
              <div key={cat.label}>
                <p className="font-heading text-[11px] uppercase tracking-[0.12em] font-medium mb-4" style={{ color: 'hsl(30, 15%, 58%)' }}>
                  {cat.label}
                </p>
                <div
                  className="overflow-hidden"
                  style={{
                    border: '1px solid hsl(340, 22%, 22% / 0.4)',
                    backgroundColor: 'hsl(340, 30%, 12% / 0.4)',
                  }}
                >
                  {cat.fields.map((field, i) => {
                    const Tag = field.url ? "a" : "span";
                    const isLast = i === cat.fields.length - 1;
                    return (
                      <motion.div
                        key={field.name}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.5 + catIdx * 0.1 + i * 0.03 }}
                      >
                        <Tag
                          {...(field.url ? { href: field.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                          className={`flex items-center justify-between px-4 py-2.5 font-body text-[13px] md:text-[14px] tracking-[0.01em] transition-colors duration-200 ${
                            field.url ? "cursor-pointer hover:text-foreground/80" : ""
                          }`}
                          style={{
                            color: 'hsl(30, 12%, 55%)',
                            ...(!isLast ? { borderBottom: '1px solid hsl(340, 22%, 22% / 0.3)' } : {}),
                          }}
                        >
                          {field.name}
                          {field.url && (
                            <span className="text-[11px] opacity-35">↗</span>
                          )}
                        </Tag>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
