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
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 md:py-40 section-padding gradient-cosmic" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-6xl mb-10 text-foreground leading-tight font-light tracking-wide"
        >
          Resonance Labs
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-8 max-w-3xl mx-auto font-light italic"
        >
          When unmoored from context, facts drift, sometimes causing irreparable damage.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base md:text-lg text-muted-foreground leading-relaxed mb-16 max-w-3xl mx-auto"
        >
          Science does not exist in a vacuum; it lives within the myths we inherit and the stories we tell. We recognize why these narratives endure and how they shape our world. Our work is not to fight volume with volume, but to guard the integrity of your message—to find the frequency where complex truths become common ground.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm tracking-widest uppercase text-muted-foreground mb-8"
        >
          As communicators, consultants, writers, or teachers, we have been active in:
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {fields.map((field, i) => {
            const Tag = field.url ? "a" : "span";
            return (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.04 }}
              >
                <Tag
                  {...(field.url ? { href: field.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`inline-block px-4 py-2 rounded-full text-sm glass-card transition-all duration-300 ${
                    field.url
                      ? "hover:border-primary/40 hover:text-primary cursor-pointer"
                      : "text-muted-foreground"
                  }`}
                >
                  {field.name}
                </Tag>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
