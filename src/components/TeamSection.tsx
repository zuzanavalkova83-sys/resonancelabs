import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import mariaPhoto from "@/assets/maria-michopulu.jpg.asset.json";
import { Plus, Minus } from "lucide-react";

const collaborators = [];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showCredit, setShowCredit] = useState(false);

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
          <p
            className="font-heading text-[11px] tracking-[0.22em] uppercase font-medium mb-5"
            style={{ color: "hsl(340, 40%, 35%)" }}
          >
            Principal
          </p>
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
              src={mariaPhoto.url}
              alt="Zuzana Válková"
              className="w-full aspect-[3/4] object-cover"
              style={{ objectPosition: "center 18%" }}
            />

            {/* Expandable photo credit */}
            <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4">
              <button
                onClick={() => setShowCredit((v) => !v)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm font-heading text-[10px] tracking-[0.12em] uppercase transition-all duration-200"
                style={{
                  background: showCredit ? "hsl(340 30% 14% / 0.85)" : "hsl(340 30% 10% / 0.55)",
                  color: "hsl(35, 20%, 82%)",
                  backdropFilter: "blur(4px)",
                }}
                aria-label="Photo credit"
                aria-expanded={showCredit}
              >
                <span>Photo</span>
                {showCredit ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
              </button>

              {showCredit && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full right-0 mb-2 px-3 py-2 rounded-sm whitespace-nowrap font-body text-[12px] leading-[1.5]"
                  style={{
                    background: "hsl(340 30% 14% / 0.92)",
                    color: "hsl(35, 20%, 82%)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  Photo: Maria Michopulu
                </motion.div>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center md:py-6">

            <h3 className="font-display text-[32px] md:text-[40px] lg:text-[48px] tracking-wider leading-[0.9] mb-5" style={{ color: "hsl(340, 30%, 22%)" }}>
              Zuzana Válková
            </h3>

            <div className="flex items-center gap-4 mb-6">
              <a
                href="mailto:zuzana.valkova83@gmail.com"
                className="font-heading text-[11px] tracking-[0.12em] uppercase font-medium hover:opacity-80 transition-opacity"
                style={{ color: "hsl(340, 40%, 35%)" }}
              >
                Get in touch
              </a>
              <span className="w-px h-3" style={{ backgroundColor: "hsl(30, 12%, 75%)" }} />
              <a
                href="https://www.linkedin.com/in/zuzana-valkova-science-comms"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="hsl(340, 40%, 35%)"/>
                </svg>
              </a>
            </div>

            <div className="space-y-5 max-w-[48ch]">
              <p className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: "hsl(30, 8%, 38%)" }}>
                Her work as science comms strategist sits at the intersection of journalism, science, technology transfer, public commentary, and cultural intuition. She has interviewed voices such as Svetlana Alexievich, Azar Nafisi, Steven Pinker, and Hans-Georg Kräusslich. Zuzana has also worked across pharma, academia, the non-profit sector, FMCG, the arts, and the media, including as spokesperson for the Faculty of Arts at Charles University.
              </p>
              <p className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: "hsl(30, 8%, 38%)" }}>
                Over the past fifteen years she has written for
                Hospodářské noviny, Deník N, Respekt, Seznam Zprávy, ČRo Plus
                and others, and appeared on Czech television and public radio —
                spending a great deal of time thinking about what happens when
                serious ideas meet minds in search of attention.
              </p>
              <p className="font-body text-[15px] md:text-[16px] leading-[1.7] font-normal" style={{ color: "hsl(30, 8%, 38%)" }}>
                She currently consults for IOCB Tech, IOCB Boston, and IOCB Prague, while also running to and fro to the kindergarten.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TeamSection;
