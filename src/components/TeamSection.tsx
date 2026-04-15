import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import teamZuzana from "@/assets/team-zuzana.jpg";
import teamMartin from "@/assets/team-martin.jpg";
import teamMaria from "@/assets/team-maria.jpg";

const collaborators = [
  {
    name: "Martin Paur",
    role: "Creative Direction",
    photo: teamMartin,
    bio: "Former creative director at multinational agencies. Works from a simple premise: the world of research is unique, but not exempt from the rules of what moves people.",
  },
  {
    name: "Maria Michopulu",
    role: "Design",
    photo: teamMaria,
    bio: "Visual artist and graphic designer, alumna of Emily Carr University of Art and Design. Responsible for visual identity and everything that makes science look as good as it deserves.",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 md:py-32 section-padding bg-cosmic-deep section-divider" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <p
            className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.14em] font-medium mb-6"
            style={{ color: 'hsl(215, 20%, 50%)' }}
          >
            People
          </p>
          <h2 className="font-heading text-[32px] md:text-[40px] lg:text-[46px] font-light leading-[1.08] tracking-[-0.02em] text-foreground">
            Who's behind Resonance Labs
          </h2>
        </motion.div>

        {/* Founder — prominent two-column layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-start mb-20 md:mb-28"
        >
          {/* Founder photo */}
          <div
            className="relative overflow-hidden"
            style={{ borderRadius: '16px' }}
          >
            <img
              src={teamZuzana}
              alt="Zuzana Válková"
              className="w-full aspect-[4/5] object-cover"
              style={{ objectPosition: 'center 20%' }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                borderRadius: '16px',
                boxShadow: 'inset 0 0 50px 10px hsl(222, 28%, 6% / 0.35)',
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                borderRadius: '16px',
                border: '1px solid hsl(220, 20%, 30% / 0.2)',
              }}
            />
          </div>

          {/* Founder text */}
          <div className="flex flex-col justify-center md:py-6">
            <div className="flex items-center gap-2.5 mb-4">
              <span
                className="w-[5px] h-[5px] rounded-full shrink-0"
                style={{ backgroundColor: 'hsl(32, 55%, 58%)' }}
              />
              <p
                className="font-heading text-[11px] md:text-[12px] tracking-[0.12em] uppercase font-medium"
                style={{ color: 'hsl(32, 55%, 58%)' }}
              >
                Founder
              </p>
            </div>

            <h3 className="font-heading text-[26px] md:text-[32px] lg:text-[36px] font-light leading-[1.12] tracking-[-0.02em] text-foreground mb-6">
              Zuzana Válková
            </h3>

            <div className="space-y-5 max-w-[48ch]">
              <p
                className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal"
                style={{ color: 'hsl(215, 15%, 58%)' }}
              >
                Her work sits at the intersection of journalism, science, technology transfer, public commentary, and cultural intuition. She has interviewed voices such as Svetlana Alexievich, Azar Nafisi, Steven Pinker, and Hans-Georg Kräusslich. Zuzana has also worked across pharma, academia, the non-profit sector, FMCG, the arts, and the media, including as spokesperson for the Faculty of Arts at Charles University.
              </p>
              <p
                className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal"
                style={{ color: 'hsl(215, 15%, 58%)' }}
              >
                Over the past fifteen years, she has written for major Czech national outlets, appeared on television and public radio, and spent a great deal of time thinking about what happens when serious ideas meet minds in search of attention.
              </p>
              <p
                className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal"
                style={{ color: 'hsl(215, 15%, 58%)' }}
              >
                She currently consults for IOCB Tech, IOCB Boston, and IOCB Prague, while also running to and fro to the kindergarten.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Divider + collaborators intro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10"
        >
          <div
            className="h-px w-full mb-10"
            style={{ backgroundColor: 'hsl(220, 20%, 20% / 0.3)' }}
          />
          <p
            className="font-body text-[15px] md:text-[16px] leading-[1.6] font-normal max-w-[56ch]"
            style={{ color: 'hsl(215, 15%, 50%)' }}
          >
            Resonance Labs works with a flexible network of collaborators across design, storytelling, and communications.
          </p>
        </motion.div>

        {/* Collaborators — compact row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-3xl">
          {collaborators.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="flex gap-5"
            >
              {/* Small photo */}
              <div
                className="shrink-0 overflow-hidden"
                style={{ borderRadius: '12px', width: '72px', height: '88px' }}
              >
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="min-w-0">
                <h4 className="font-heading text-[16px] md:text-[17px] font-medium tracking-[-0.01em] text-foreground mb-1">
                  {person.name}
                </h4>
                <p
                  className="font-heading text-[11px] tracking-[0.1em] uppercase font-medium mb-2.5"
                  style={{ color: 'hsl(215, 20%, 45%)' }}
                >
                  {person.role}
                </p>
                <p
                  className="font-body text-[13px] md:text-[14px] leading-[1.6] font-normal"
                  style={{ color: 'hsl(215, 15%, 50%)' }}
                >
                  {person.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
