import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";

const categories = [
  {
    label: "Industry & Transfer",
    fields: [
      { name: "Tech Transfer", url: "https://iocbtech.cz/about-us" },
      { name: "Biotech" },
      { name: "Pharma", url: "https://www.cb21pharma.com/" },
    ],
  },
  {
    label: "Life Sciences",
    fields: [
      { name: "Biology", url: "https://iocbboston.org/" },
      { name: "Biochemistry", url: "https://www.uochb.cz/en" },
      { name: "Chemistry", url: "https://canneff.com/" },
      { name: "Virology", url: "https://www.finmag.cz/technologie/429480-krausslich-touzime-po-odpovedich-jenze-veda-miluje-otazky" },
    ],
  },
  {
    label: "Humanities & Social Sciences",
    fields: [
      { name: "Linguistics", url: "https://www.finmag.cz/firemni-kultura/422164-druha-vlna-pandemie-do-medii-jeste-nedorazila" },
      { name: "Psychology", url: "https://www.novinky.cz/clanek/veda-skoly-kulturni-valky-univerzitam-skodi-se-stevenem-pinkerem-o-ochrane-mensin-a-svobode-vedeckeho-badani-40505116" },
      { name: "Economics", url: "https://www.respekt.cz/rozhovor/strach-politiku-z-vycitek-verejnosti-nas-stahuje-hloubeji-do-krize" },
      { name: "Political Science", url: "https://vikend.hn.cz/c1-65531180-svetlana-alexijevicova-zinkovi-chlapci-kniha-rozhovor" },
      { name: "Philosophy", url: "https://www.marwick.cz/rozhovor/co-zbude-z-cloveka" },
      { name: "Anthropology", url: "https://www.finmag.cz/firemni-kultura/411054-antropologie-bolesti-podle-martina-soukupa" },
      { name: "Philology", url: "https://www.respekt.cz/rozhovor/o-nejvetsim-dramatu-sve-doby-shakespeare-nikdy-nepsal" },
      { name: "Sociology" },
      { name: "Arts", url: "https://archiv.hn.cz/c1-66342840-na-hranici-poznani" },
    ],
  },
];

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
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 md:py-44 section-padding bg-burgundy-mid overflow-hidden" ref={ref}>
      <AmbientOrbs />
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-10 h-px" style={{ background: 'hsl(30, 15%, 45%)' }} />
          <p className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-medium" style={{ color: 'hsl(30, 15%, 55%)' }}>
            Why We Exist
          </p>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[48px] md:text-[60px] lg:text-[72px] tracking-wider leading-[0.88] text-foreground mb-10"
        >
          Resonance Labs
        </motion.h2>

        {/* Manifesto — two balanced columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 mb-12"
        >
          <div className="space-y-5">
            <p className="font-body text-[17px] md:text-[19px] leading-[1.55] font-normal" style={{ color: 'hsl(35, 20%, 72%)' }}>
              Science does not enter public life alone.
            </p>
            <p className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: 'hsl(30, 12%, 52%)' }}>
              Once outside the lab, clinic, or institution, it meets emotion, incentives, grievance, distortion, and noise. Careful research can be flattened into panic, miracle, ideology, or nonsense long before it is properly understood.
            </p>
          </div>
          <div className="space-y-5">
            <p className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: 'hsl(30, 12%, 52%)' }}>
              Resonance Labs helps scientific and research-led organisations communicate with clarity, judgment, and narrative discipline in contested public space.
            </p>
            <p className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: 'hsl(30, 12%, 52%)' }}>
              The goal is not to add more noise. It is to help serious ideas survive contact with the world.
            </p>
          </div>
        </motion.div>

        {/* Explore link */}
        <motion.a
          href="#services"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="inline-block font-heading text-[13px] tracking-[0.12em] uppercase font-medium transition-opacity duration-200 hover:opacity-100 mb-20"
          style={{ color: 'hsl(30, 15%, 68%)', opacity: 0.8 }}
        >
          Explore services →
        </motion.a>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px w-full origin-left mb-16"
          style={{ background: 'hsl(340, 22%, 22% / 0.4)' }}
        />

        {/* Fields of practice — 3-column grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-px" style={{ background: 'hsl(30, 15%, 40%)' }} />
            <p className="font-heading text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-medium" style={{ color: 'hsl(30, 15%, 50%)' }}>
              Fields of practice
            </p>
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
