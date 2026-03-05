import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import teamZuzana from "@/assets/team-zuzana.jpg";
import teamMartin from "@/assets/team-martin.jpg";
import teamIna from "@/assets/team-ina.jpg";
import teamMaria from "@/assets/team-maria.jpg";

const team = [
  {
    name: "Zuzana Válková",
    role: "Head of Development",
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
    name: "Ina Palacká",
    role: "Comms Director",
    photo: teamIna,
    bio: "A scholar who has spent a decade nurturing the voices of fellow academics and bringing their research into the spotlight. Former researcher and science journalist at Český rozhlas, who translates complex concepts into accessible narratives without sacrificing their intellectual integrity.",
  },
  {
    name: "Maria Michopulu",
    role: "Graphic Designer",
    photo: teamMaria,
    bio: "An artist and alumna of Emily Carr University of Art and Design in Vancouver. Maria is a visual artist and graphic designer focusing on visual identity creation. At Resonance Labs, she is responsible for all things of beauty and class. Science is beautiful, and we want it to show.",
  },
];

const TeamCard = ({ member, index }: { member: typeof team[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl glass-card">
        <div className="aspect-[3/4] overflow-hidden">
          <motion.img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          {/* Gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"
            animate={{ opacity: hovered ? 1 : 0.6 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-serif text-2xl text-foreground mb-1">{member.name}</h3>
          <p className="text-sm tracking-widest uppercase text-primary mb-3">{member.role}</p>
          <motion.p
            className="text-sm text-foreground/70 leading-relaxed"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: hovered ? 1 : 0, height: hovered ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
          >
            {member.bio}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-28 md:py-40 section-padding bg-cosmic-deep" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
          We draw from the sensibilities of journalism, art, advertising and science.
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground">Our Team</h2>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {team.map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
