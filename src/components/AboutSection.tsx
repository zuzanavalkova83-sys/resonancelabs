import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fields = [
  { name: "Linguistics", url: "https://www.finmag.cz/firemni-kultura/422164-druha-vlna-pandemie-do-medii-jeste-nedorazila" },
  { name: "Biology", url: "https://iocbboston.org/" },
  { name: "Biochemistry", url: "https://www.uochb.cz/en" },
  { name: "Anthropology", url: "https://www.finmag.cz/firemni-kultura/411054-antropologie-bolesti-podle-martina-soukupa" },
  { name: "Philology", url: "https://www.respekt.cz/rozhovor/o-nejvetsim-dramatu-sve-doby-shakespeare-nikdy-nepsal" },
  { name: "Virology", url: "https://www.finmag.cz/technologie/429480-krausslich-touzime-po-odpovedich-jenze-veda-miluje-otazky" },
  { name: "Political Science", url: "https://vikend.hn.cz/c1-65531180-svetlana-alexijevicova-zinkovi-chlapci-kniha-rozhovor" },
  { name: "Sociology" },
  { name: "Psychology", url: "https://www.novinky.cz/clanek/veda-skoly-kulturni-valky-univerzitam-skodi-se-stevenem-pinkerem-o-ochrane-mensin-a-svobode-vedeckeho-badani-40505116" },
  { name: "Chemistry", url: "https://canneff.com/" },
  { name: "Economics", url: "https://www.respekt.cz/rozhovor/strach-politiku-z-vycitek-verejnosti-nas-stahuje-hloubeji-do-krize" },
  { name: "Philosophy", url: "https://www.marwick.cz/rozhovor/co-zbude-z-cloveka" },
  { name: "Pharma", url: "https://www.cb21pharma.com/" },
  { name: "Arts", url: "https://archiv.hn.cz/c1-66342840-na-hranici-poznani" },
  { name: "Tech Transfer" },
  { name: "Biotech" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 md:py-40 section-padding gradient-cosmic section-divider" ref={ref}>
      <div className="max-w-[58ch] mx-auto text-center">

        {/* Section eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.14em] font-medium mb-10"
          style={{ color: 'hsl(215, 20%, 50%)' }}
        >
          Why We Exist
        </motion.p>

        {/* Headline — slightly smaller than hero to respect hierarchy */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-[36px] md:text-[44px] lg:text-[50px] font-light leading-[1.08] tracking-[-0.02em] text-foreground mb-12"
        >
          Resonance Labs
        </motion.h2>

        {/* Pull-quote — italic, higher contrast, generous spacing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-[19px] md:text-[21px] italic leading-[1.55] font-normal mb-10"
          style={{ color: 'hsl(215, 18%, 72%)' }}
        >
          When unmoored from context, facts drift, sometimes causing irreparable damage.
        </motion.p>

        {/* Hairline divider with micro orange accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mx-auto mb-10"
          style={{ maxWidth: '120px' }}
        >
          <div className="h-px w-full" style={{ backgroundColor: 'hsl(220, 20%, 30% / 0.4)' }} />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full"
            style={{ backgroundColor: 'hsl(32, 55%, 58%)' }}
          />
        </motion.div>

        {/* Body text — split into two paragraphs for rhythm */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="space-y-6 mb-14"
        >
          <p
            className="font-body text-[16px] md:text-[17px] leading-[1.65] font-normal text-left md:text-center"
            style={{ color: 'hsl(215, 15%, 58%)' }}
          >
            Science does not exist in a vacuum; it lives within the myths we inherit and the stories we tell. We recognize why these narratives endure and how they shape our world.
          </p>
          <p
            className="font-body text-[16px] md:text-[17px] leading-[1.65] font-normal text-left md:text-center"
            style={{ color: 'hsl(215, 15%, 58%)' }}
          >
            Our work is not to fight volume with volume, but to guard the integrity of your message—to find the frequency where complex truths become common ground.
          </p>
        </motion.div>

        {/* Discipline label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="font-heading text-[12px] tracking-[0.12em] uppercase font-medium mb-6"
          style={{ color: 'hsl(215, 20%, 46%)' }}
        >
          As communicators, consultants, writers, or teachers, we have been active in:
        </motion.p>

        {/* Discipline chips — catalog tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {fields.map((field, i) => {
            const Tag = field.url ? "a" : "span";
            return (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.55 + i * 0.03 }}
              >
                <Tag
                  {...(field.url ? { href: field.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`inline-block px-3 py-1.5 rounded-full font-body text-[13px] tracking-[0.01em] border transition-colors duration-200 ${
                    field.url
                      ? "cursor-pointer hover:text-foreground/90"
                      : ""
                  }`}
                  style={{
                    borderColor: 'hsl(220, 20%, 25% / 0.35)',
                    backgroundColor: 'hsl(220, 20%, 12% / 0.3)',
                    color: 'hsl(215, 15%, 55%)',
                  }}
                >
                  {field.name}
                </Tag>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Text CTA */}
        <motion.a
          href="#services"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="inline-block font-heading text-[14px] tracking-[0.04em] font-medium transition-opacity duration-200 hover:opacity-100"
          style={{ color: 'hsl(32, 55%, 58%)', opacity: 0.8 }}
        >
          Explore services →
        </motion.a>
      </div>
    </section>
  );
};

export default AboutSection;
