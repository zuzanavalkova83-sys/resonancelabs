import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fields = [
  { name: "Tech Transfer", url: "https://iocbtech.cz/about-us" },
  { name: "Biotech" },
  { name: "Pharma", url: "https://www.cb21pharma.com/" },
  { name: "Biology", url: "https://iocbboston.org/" },
  { name: "Biochemistry", url: "https://www.uochb.cz/en" },
  { name: "Chemistry", url: "https://canneff.com/" },
  { name: "Virology", url: "https://www.finmag.cz/technologie/429480-krausslich-touzime-po-odpovedich-jenze-veda-miluje-otazky" },
  { name: "Linguistics", url: "https://www.finmag.cz/firemni-kultura/422164-druha-vlna-pandemie-do-medii-jeste-nedorazila" },
  { name: "Psychology", url: "https://www.novinky.cz/clanek/veda-skoly-kulturni-valky-univerzitam-skodi-se-stevenem-pinkerem-o-ochrane-mensin-a-svobode-vedeckeho-badani-40505116" },
  { name: "Economics", url: "https://www.respekt.cz/rozhovor/strach-politiku-z-vycitek-verejnosti-nas-stahuje-hloubeji-do-krize" },
  { name: "Political Science", url: "https://vikend.hn.cz/c1-65531180-svetlana-alexijevicova-zinkovi-chlapci-kniha-rozhovor" },
  { name: "Philosophy", url: "https://www.marwick.cz/rozhovor/co-zbude-z-cloveka" },
  { name: "Anthropology", url: "https://www.finmag.cz/firemni-kultura/411054-antropologie-bolesti-podle-martina-soukupa" },
  { name: "Philology", url: "https://www.respekt.cz/rozhovor/o-nejvetsim-dramatu-sve-doby-shakespeare-nikdy-nepsal" },
  { name: "Sociology" },
  { name: "Arts", url: "https://archiv.hn.cz/c1-66342840-na-hranici-poznani" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-28 section-padding gradient-cosmic section-divider" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left column — mission statement */}
          <div className="text-left">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.14em] font-medium mb-6"
              style={{ color: 'hsl(215, 20%, 50%)' }}
            >
              Why We Exist
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-[32px] md:text-[40px] lg:text-[46px] font-light leading-[1.08] tracking-[-0.02em] text-foreground mb-7"
            >
              Resonance Labs
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-[18px] md:text-[20px] leading-[1.55] font-normal mb-8"
              style={{ color: 'hsl(215, 18%, 72%)' }}
            >
              Science does not enter public life alone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-5 mb-8 max-w-[52ch]"
            >
              <p
                className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal"
                style={{ color: 'hsl(215, 15%, 55%)' }}
              >
                Once outside the lab, clinic, or institution, it meets emotion, incentives, grievance, distortion, and noise. Careful research can be flattened into panic, miracle, ideology, or nonsense long before it is properly understood.
              </p>
              <p
                className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal"
                style={{ color: 'hsl(215, 15%, 55%)' }}
              >
                Resonance Labs helps scientific and research-led organisations communicate with clarity, judgment, and narrative discipline in contested public space.
              </p>
              <p
                className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal"
                style={{ color: 'hsl(215, 15%, 55%)' }}
              >
                The goal is not to add more noise. It is to help serious ideas survive contact with the world.
              </p>
            </motion.div>

            <motion.a
              href="#services"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="inline-block font-heading text-[14px] tracking-[0.04em] font-medium transition-opacity duration-200 hover:opacity-100"
              style={{ color: 'hsl(32, 55%, 58%)', opacity: 0.8 }}
            >
              Explore services →
            </motion.a>
          </div>

          {/* Right column — disciplines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:pt-12"
          >
            <p
              className="font-heading text-[11px] md:text-[12px] uppercase tracking-[0.14em] font-medium mb-6"
              style={{ color: 'hsl(215, 20%, 42%)' }}
            >
              Fields of practice
            </p>

            <div className="space-y-0">
              {fields.map((field, i) => {
                const Tag = field.url ? "a" : "span";
                return (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.35 + i * 0.03 }}
                  >
                    <Tag
                      {...(field.url ? { href: field.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={`block py-2.5 font-body text-[14px] md:text-[15px] tracking-[0.01em] border-b transition-colors duration-200 ${
                        field.url
                          ? "cursor-pointer hover:text-foreground/90"
                          : ""
                      }`}
                      style={{
                        borderColor: 'hsl(220, 20%, 20% / 0.3)',
                        color: 'hsl(215, 15%, 55%)',
                      }}
                    >
                      <span className="flex items-center justify-between">
                        {field.name}
                        {field.url && (
                          <span
                            className="text-[12px] font-heading tracking-[0.06em] uppercase"
                            style={{ color: 'hsl(215, 15%, 38%)' }}
                          >
                            ↗
                          </span>
                        )}
                      </span>
                    </Tag>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
