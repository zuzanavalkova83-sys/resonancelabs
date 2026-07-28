import { useState } from "react";

const SECTIONS = [
  {
    heading: "Purity and contamination",
    body: "Some stories spread because they make people feel that something has crossed a boundary it should not cross. Chemicals, particles, hormones, vaccines, additives, residues: these are often read not just as risks, but as forms of contamination. They are associated with authority we do not get to debate: a person, or an institution, deciding whether our bodies get \"dirty\". Our agency is at stake. What's worse, we might face repercussions.\n\nThis is why some reactions to science are not really about probability and side effects. To some people, on a deep level, they are about violation.",
  },
  {
    heading: "Children and reproduction",
    body: "When a paper touches children, pregnancy, fertility, or reproduction, it enters a morally loaded field very quickly. People do not hear only evidence. They hear protection, danger, duty, inheritance, and loss. Reproductive strategies have social norms, too. Conflicts arise from the difference between what society wants and needs and an individual's right to decide. It enters a moral field. It touches religion. Politics. Asymmetry of power.\n\nAll of that, indeed, does not make all the responses rational. But it does make them a little more predictable.",
  },
  {
    heading: "Authority and betrayal",
    body: "Some narratives draw their power from the suspicion that institutions are not merely wrong, but false. That they publish what suits them, conceal what matters, and speak in polished language while moving ordinary people into positions of risk. Also, who put these institutions in a position of power in the first place? What person, and who chose them? How was this deserved? How come I don't have any influence over these abstract, anonymous decision-making sources that influence my everyday choices?\n\nThese are not just distrust stories. They are betrayal stories.",
  },
  {
    heading: "Identity and group discipline",
    body: "Science can also become raw material for identity. Once that happens, the argument is no longer only about evidence. It becomes a test of belonging.\n\nWho is naive. Who is awake. Who is loyal. Who is \"one of us.\" Communities are often much better at disciplining belonging than at reading methods sections.",
  },
  {
    heading: "Control and loss of agency",
    body: "Some of the most powerful science panics are really panics about power. Mandates, digital systems, public-health infrastructure, medical records, algorithms, regulation: all of these can be read as signs that human agency is being narrowed or quietly transferred elsewhere.\n\nIn this reading, science is no longer information. It becomes an instrument.",
  },
];

const NarrativeBiteLayer = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="section-ivory-warm editorial-grain">
      <div className="max-w-[var(--editorial-max)] mx-auto px-6 sm:px-10 py-16 sm:py-20">
        {/* Collapsed state */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-5 mb-8">
            <div className="w-8 h-[1px]" style={{ background: "hsl(30 15% 75%)" }} />
            <span
              className="text-[12px] font-mono tracking-[0.25em] uppercase"
              style={{ color: "hsl(30 15% 58%)" }}
            >
              Editorial note
            </span>
          </div>

          <h3
            className="font-display text-3xl sm:text-4xl tracking-wider leading-[0.9] mb-6"
            style={{ color: "hsl(340 30% 25%)" }}
          >
            Where these stories get their bite
          </h3>

          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: "hsl(30 10% 42%)" }}
          >
            Not every science panic runs on ignorance alone. Many draw force from
            older human sensitivities: purity, danger, children, fertility,
            betrayal, identity, and control.
          </p>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "hsl(30 10% 55%)" }}
          >
            None of this was invented from scratch. It sits on older work — Mary Douglas on purity and danger, moral foundations research, the inoculation literature on prebunking — pointed at the specific business of getting a finding into public without it being rewritten en route.
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="group flex items-center gap-3 text-[13px] font-mono tracking-[0.15em] uppercase transition-opacity hover:opacity-70"
            style={{ color: "hsl(var(--wine))" }}
          >
            <span>{expanded ? "Close" : "Why these traps work at all"}</span>
            <span
              className="inline-block transition-transform duration-300"
              style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              ↓
            </span>
          </button>
        </div>

        {/* Expanded content */}
        {expanded && (
          <div className="animate-editorial-in mt-16">
            <div className="max-w-xl space-y-14">
              {/* Lead-in */}
              <div className="space-y-5">
                <p
                  className="text-lg leading-[1.8]"
                  style={{ color: "hsl(30 10% 38%)" }}
                >
                  Why do some bad readings of science feel so much stronger than
                  the facts on which they feed?
                </p>
                <p
                  className="text-[15px] leading-[1.85]"
                  style={{ color: "hsl(30 10% 48%)" }}
                >
                  Not always because people are stupid. Not always because someone
                  is lying. And not always because the public has failed to read the
                  paper.
                </p>
                <p
                  className="text-[15px] leading-[1.85]"
                  style={{ color: "hsl(30 10% 48%)" }}
                >
                  Some narratives gain force because they tap into older human
                  experience and sensitivities; in anthropological and other
                  scientific literature, these may fall under the category of
                  taboo. Taboos are culturally universal, although their
                  particular form and substance vary. Taboos persist, however.
                  They travel through time and across continents. They never quite
                  go away, and in some cases, for good reasons. They are supposed
                  to protect us from harm, however real, and guard our place in
                  our social group. Belonging means survival.
                </p>
                <p
                  className="text-[15px] leading-[1.85]"
                  style={{ color: "hsl(30 10% 48%)" }}
                >
                  Taboos are often based around contamination (impurity implies
                  danger), bodily integrity and processes, children, fertility,
                  hierarchy (societal order), betrayal of shared values and
                  symbols, including religion and identity, and the fear of
                  losing agency.
                </p>
                <p
                  className="text-[15px] leading-[1.85]"
                  style={{ color: "hsl(30 10% 48%)" }}
                >
                  In other words, there are areas where we, as humans, don't like
                  to argue. Oftentimes, we don't debate. We are wary of those who
                  trespass.
                </p>
              </div>

              {/* Sections */}
              {SECTIONS.map((s) => (
                <div key={s.heading}>
                  <h4
                    className="font-display text-xl sm:text-2xl tracking-wider mb-4"
                    style={{ color: "hsl(340 30% 25%)" }}
                  >
                    {s.heading}
                  </h4>
                  {s.body.split("\n\n").map((p, i) => (
                    <p
                      key={i}
                      className="text-[15px] leading-[1.85] mb-4 last:mb-0"
                      style={{ color: "hsl(30 10% 48%)" }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              ))}

              {/* Coda */}
              <div
                className="border-l-[2px] pl-6 py-2"
                style={{ borderColor: "hsl(var(--wine) / 0.3)" }}
              >
                <h4
                  className="font-display text-xl tracking-wider mb-3"
                  style={{ color: "hsl(340 30% 25%)" }}
                >
                  Why this matters here
                </h4>
                <p
                  className="text-[15px] leading-[1.85] mb-3"
                  style={{ color: "hsl(30 10% 48%)" }}
                >
                  This is why the library is not just a catalogue of bad takes. It
                  is an attempt to map the deeper pressures that keep giving those
                  takes their force.
                </p>
                <p
                  className="text-[15px] leading-[1.85]"
                  style={{ color: "hsl(30 10% 42%)" }}
                >
                  The details change. The hooks do not.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NarrativeBiteLayer;
