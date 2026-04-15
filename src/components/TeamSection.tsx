import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import teamZuzana from "@/assets/team-zuzana.jpg";

const collaborators = [
  {
    name: "Martin Paur",
    role: "Creative Direction",
    bio: "Former creative director at multinational agencies. Works from a simple premise: the world of research is unique, but not exempt from the rules of what moves people.",
  },
  {
    name: "Maria Michopulu",
    role: "Design",
    bio: "Visual artist and graphic designer, alumna of Emily Carr University of Art and Design. Responsible for visual identity and everything that makes science look as good as it deserves.",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="team"
      className="py-32 md:py-44 section-padding"
      ref={ref}
      style={{ backgroundColor: "hsl(35, 30%, 92%)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px" style={{ background: "hsl(30, 12%, 75%)" }} />
            <p className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-medium" style={{ color: "hsl(30, 10%, 55%)" }}>
              People
            </p>
          </div>
          <h2 className="font-display text-[48px] md:text-[60px] lg:text-[72px] tracking-wider leading-[0.88]" style={{ color: "hsl(340, 30%, 22%)" }}>
            Who's behind Resonance Labs
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-start mb-20 md:mb-28"
        >
          <div className="relative overflow-hidden" style={{ borderRadius: "4px" }}>
            <img
              src={teamZuzana}
              alt="Zuzana Válková"
              className="w-full aspect-[4/5] object-cover"
              style={{ objectPosition: "center 20%" }}
            />
          </div>

          <div className="flex flex-col justify-center md:py-6">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-[5px] h-[5px] rounded-full shrink-0" style={{ backgroundColor: "hsl(340, 40%, 35%)" }} />
              <p className="font-heading text-[11px] md:text-[12px] tracking-[0.15em] uppercase font-medium" style={{ color: "hsl(340, 40%, 35%)" }}>
                Founder
              </p>
            </div>

            <h3 className="font-display text-[32px] md:text-[40px] lg:text-[48px] tracking-wider leading-[0.9] mb-6" style={{ color: "hsl(340, 30%, 22%)" }}>
              Zuzana Válková
            </h3>

            <div className="space-y-5 max-w-[48ch]">
              <p className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: "hsl(30, 8%, 38%)" }}>
                Her work sits at the intersection of journalism, science, technology transfer, public commentary, and cultural intuition. She has interviewed voices such as Svetlana Alexievich, Azar Nafisi, Steven Pinker, and Hans-Georg Kräusslich. Zuzana has also worked across pharma, academia, the non-profit sector, FMCG, the arts, and the media, including as spokesperson for the Faculty of Arts at Charles University.
              </p>
              <p className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: "hsl(30, 8%, 38%)" }}>
                Over the past fifteen years, she has written for major Czech national outlets, appeared on television and public radio, and spent a great deal of time thinking about what happens when serious ideas meet minds in search of attention.
              </p>
              <p className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: "hsl(30, 8%, 38%)" }}>
                She currently consults for IOCB Tech, IOCB Boston, and IOCB Prague, while also running to and fro to the kindergarten.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10"
        >
          <div className="h-px w-full mb-10" style={{ backgroundColor: "hsl(30, 12%, 78%)" }} />
          <p className="font-body text-[15px] md:text-[16px] leading-[1.6] font-normal max-w-[56ch]" style={{ color: "hsl(30, 8%, 48%)" }}>
            Resonance Labs works with a flexible network of collaborators across design, storytelling, and communications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-3xl">
          {collaborators.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            >
              <h4 className="font-heading text-[16px] md:text-[17px] font-medium tracking-[-0.01em] mb-1" style={{ color: "hsl(340, 25%, 20%)" }}>
                {person.name}
              </h4>
              <p className="font-heading text-[11px] tracking-[0.12em] uppercase font-medium mb-2.5" style={{ color: "hsl(30, 10%, 55%)" }}>
                {person.role}
              </p>
              <p className="font-body text-[13px] md:text-[14px] leading-[1.6] font-normal" style={{ color: "hsl(30, 8%, 48%)" }}>
                {person.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
