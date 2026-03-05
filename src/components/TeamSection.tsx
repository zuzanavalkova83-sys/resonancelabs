import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import teamZuzana from "@/assets/team-zuzana.jpg";
import teamMartin from "@/assets/team-martin.jpg";
import teamMaria from "@/assets/team-maria.jpg";

const team = [
  {
    name: "Zuzana Válková",
    role: "Founder & Science Communications",
    photo: teamZuzana,
    bio: "A journalist by craft, Zuzana has interviewed voices such as Svetlana Alexievich, Azar Nafisi, Steven Pinker or Hans-Georg Kräusslich. Her writing draws on science to add depth to social commentary, bridging the gap between research and narrative. Formerly the spokesperson for the Faculty of Arts at Charles University, she is now a consultant, writer, and lecturer.",
  },
  {
    name: "Martin Paur",
    role: "Creative Director",
    photo: teamMartin,
    bio: "In advertising, he has worked on everything from automobiles to election campaigns, fancy creams to tech. A former creative director at multinational agencies, he works from a simple premise: that while the world of research is unique, it is not exempt from the rules of what moves people.",
  },
  {
    name: "Maria Michopulu",
    role: "Graphic Designer",
    photo: teamMaria,
    bio: "An artist and alumna of Emily Carr University of Art and Design in Vancouver. Maria is a visual artist and graphic designer focusing on visual identity creation. At Resonance Labs, she is responsible for all things of beauty and class. Science is beautiful, and we want it to show.",
  },
];

const TeamCard = ({ member, index }: { member: typeof team[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="flex flex-col"
    >
      {/* Photo — gallery-like with subtle vignette */}
      <div
        className="relative overflow-hidden mb-6"
        style={{ borderRadius: '16px' }}
      >
        <img
          src={member.photo}
          alt={member.name}
          className="w-full aspect-[4/5] object-cover hover:scale-[1.03] transition-transform duration-700"
        />
        {/* Subtle vignette overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 40px 8px hsl(222, 28%, 6% / 0.35)',
          }}
        />
      </div>

      {/* Name */}
      <h3
        className="font-heading text-[18px] md:text-[20px] font-medium tracking-[-0.01em] text-foreground mb-2"
      >
        {member.name}
      </h3>

      {/* Role with orange dot accent */}
      <div className="flex items-center gap-2 mb-4">
        <span
          className="w-[5px] h-[5px] rounded-full shrink-0"
          style={{ backgroundColor: 'hsl(32, 55%, 58%)' }}
        />
        <p
          className="font-heading text-[12px] tracking-[0.12em] uppercase font-medium"
          style={{ color: 'hsl(32, 55%, 58%)' }}
        >
          {member.role}
        </p>
      </div>

      {/* Bio */}
      <p
        className="font-body text-[14px] md:text-[15px] leading-[1.6] font-normal"
        style={{ color: 'hsl(215, 15%, 55%)' }}
      >
        {member.bio}
      </p>
    </motion.div>
  );
};

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-32 md:py-44 section-padding bg-cosmic-deep section-divider" ref={ref}>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <p
          className="font-heading text-[12px] md:text-[13px] uppercase tracking-[0.14em] font-medium mb-6"
          style={{ color: 'hsl(215, 20%, 50%)' }}
        >
          The Team
        </p>
        <h2 className="font-heading text-[34px] md:text-[42px] lg:text-[46px] font-light leading-[1.1] tracking-[-0.02em] text-foreground">
          Our Team
        </h2>
      </motion.div>

      {/* Hairline rule */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mx-auto mb-16 md:mb-20"
        style={{ maxWidth: '80px' }}
      >
        <div className="h-px w-full" style={{ backgroundColor: 'hsl(220, 20%, 30% / 0.4)' }} />
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 md:gap-x-12 md:gap-y-16 max-w-5xl mx-auto">
        {team.map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
