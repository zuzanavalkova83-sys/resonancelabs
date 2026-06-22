import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useGlitch, glitchStyle } from "@/hooks/useGlitch";

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

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const glitch = useGlitch(12000, 500, 5000);

  return (
    <section id="about" className="relative py-32 md:py-44 section-padding bg-burgundy-mid overflow-hidden" ref={ref}>
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">

        {/* Header row */}

        {/* Title — with breathing opacity */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[48px] md:text-[60px] lg:text-[72px] tracking-wider leading-[0.88] text-foreground mb-10"
        >
          <motion.span
            animate={isInView ? { opacity: [0.88, 1, 0.88] } : {}}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            Resonance
          </motion.span>{" "}
          <span className="inline-block" style={glitchStyle(glitch, "subtle")}>
            Labs
          </span>
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
              Resonance Labs is a narrative intelligence practice for scientific and research-led organisations. We do narrative risk mapping in contested public space, so serious work can travel without being rewritten en route.
            </p>
            <p className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: 'hsl(30, 12%, 52%)' }}>
              <br />
            </p>
          </div>
        </motion.div>

        {/* Explore link removed per request */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-20"
        />

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px w-full origin-left mb-16"
          style={{ background: 'hsl(340, 22%, 22% / 0.4)' }}
        />

        {/* Fields of practice — editorial numbered index */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
        >

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-16">
            {categories.map((cat, catIdx) => {
              const isWrap = cat.fields.length > 5;
              return (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.5 + catIdx * 0.1 }}
                >
                  <h3
                    className="font-display text-[20px] md:text-[23px] tracking-wider leading-[0.95] text-foreground pb-5 mb-8 border-b whitespace-nowrap"
                    style={{ borderColor: 'hsl(var(--brass) / 0.2)' }}
                  >
                    {cat.label}
                  </h3>

                  {isWrap ? (
                    <div className="flex flex-wrap gap-x-5 gap-y-3 font-body text-[15px] md:text-[16px] leading-[1.7]">
                      {cat.fields.map((field) => {
                        const Tag = field.url ? "a" : "span";
                        return (
                          <Tag
                            key={field.name}
                            {...(field.url ? { href: field.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                            className={`inline-flex items-center gap-1 transition-colors duration-300 ${
                              field.url ? "hover:text-[hsl(var(--brass))]" : ""
                            }`}
                            style={{ color: 'hsl(35, 20%, 72%)' }}
                          >
                            {field.name}
                            {field.url && <span className="text-[10px] opacity-40">↗</span>}
                          </Tag>
                        );
                      })}
                    </div>
                  ) : (
                    <ul className="space-y-3">
                      {cat.fields.map((field) => {
                        const Tag = field.url ? "a" : "span";
                        return (
                          <li key={field.name}>
                            <Tag
                              {...(field.url ? { href: field.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                              className={`group/link flex items-center justify-between font-body text-[15px] md:text-[16px] leading-[1.7] py-0.5 transition-colors duration-300 ${
                                field.url ? "hover:text-[hsl(var(--brass))]" : ""
                              }`}
                              style={{ color: 'hsl(35, 20%, 72%)' }}
                            >
                              <span>{field.name}</span>
                              {field.url && (
                                <span className="text-[12px] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">
                                  ↗
                                </span>
                              )}
                            </Tag>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
