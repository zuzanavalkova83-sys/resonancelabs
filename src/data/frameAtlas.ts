/**
 * Editorial metadata for the Usual Suspects atlas.
 * Layered on top of narrativeFrames seed data to add
 * browsing dimensions, editorial hooks, and pattern families.
 */

// ── Pattern families ────────────────────────────────────────
export type PatternFamily =
  | "fear-simplifiers"
  | "hope-merchants"
  | "institutional-betrayal"
  | "body-purity"
  | "control-surveillance"
  | "identity-grievance";

export const PATTERN_FAMILIES: Record<
  PatternFamily,
  { label: string; description: string }
> = {
  "fear-simplifiers": {
    label: "Fear-based simplifiers",
    description:
      "These frames take uncertainty and compress it into dread. Complex findings become existential threats. Nuance is the first casualty.",
  },
  "hope-merchants": {
    label: "Hope merchants",
    description:
      "These frames sell certainty where none exists. Early signals become breakthroughs. Preliminary results become cures. Patience becomes conspiracy.",
  },
  "institutional-betrayal": {
    label: "Institutional betrayal stories",
    description:
      "These frames turn every institution into a suspect. Funding is motive. Consensus is collusion. Process is cover-up.",
  },
  "body-purity": {
    label: "Body purity stories",
    description:
      "These frames treat the body as sacred territory under siege. Anything engineered, injected, or measured becomes contamination.",
  },
  "control-surveillance": {
    label: "Control and surveillance stories",
    description:
      "These frames recast every system, platform, or protocol as a tool of domination. Coordination becomes coercion. Infrastructure becomes imprisonment.",
  },
  "identity-grievance": {
    label: "Identity and grievance stories",
    description:
      "These frames weaponise belonging. Research becomes an attack on a way of life. Evidence becomes ideology. Questions become threats.",
  },
};

// ── Browsing dimensions ─────────────────────────────────────
export type EmotionTag =
  | "Fear"
  | "Hope"
  | "Protection"
  | "Disgust"
  | "Distrust"
  | "Control"
  | "Identity";

export type MechanismTag =
  | "turns uncertainty into proof"
  | "turns care into control"
  | "turns exposure into poisoning"
  | "turns early findings into certainty"
  | "turns institutions into conspiracies"
  | "turns difference into threat"
  | "turns complexity into cover-up"
  | "turns nature into moral authority"
  | "turns commerce into science"
  | "turns data into surveillance"
  | "turns pain into plot";

export type TerrainTag =
  | "health & medicine"
  | "children & vulnerability"
  | "systems & technology"
  | "science & society"
  | "bodies & nature"
  | "politics & identity";

// ── Per-frame editorial hooks ───────────────────────────────
export interface FrameEditorial {
  hookLine: string;           // sharp "how it works"
  hostileClaim: string;       // representative hostile quote
  wantsBelief: string;        // what it wants you to believe
  clarifyFirst: string;       // what to clarify first
  emotion: EmotionTag;
  mechanism: MechanismTag;
  terrain: TerrainTag;
  family: PatternFamily;
}

export const FRAME_EDITORIAL: Record<string, FrameEditorial> = {
  // F43: Traditional healing displacement
  F43: {
    hookLine: "What was once ordinary wisdom is recast as a better medicine we were taught to abandon.",
    hostileClaim: "We already knew how to heal. Then modern medicine taught us to forget.",
    wantsBelief: "That effective traditional knowledge was deliberately displaced, and modern medicine is colder, more commercial, and less humane.",
    clarifyFirst: "Respect for traditional knowledge does not require rejecting modern medicine. The 'displacement' narrative conflates progress with suppression.",
    emotion: "Identity",
    mechanism: "turns nature into moral authority",
    terrain: "bodies & nature",
    family: "body-purity",
  },
  F01: {
    hookLine: "Strips context from findings and reframes them as leaked secrets.",
    hostileClaim: "They knew this all along and never told the public.",
    wantsBelief: "Scientists are gatekeepers, not investigators.",
    clarifyFirst: "What is known, what is unknown, and why the distinction matters.",
    emotion: "Distrust",
    mechanism: "turns institutions into conspiracies",
    terrain: "science & society",
    family: "institutional-betrayal",
  },
  F02: {
    hookLine: "Replaces evidence with motive. If someone profits, the science is suspect.",
    hostileClaim: "This is just another elite pipeline for profit.",
    wantsBelief: "Research exists to serve commercial interests, not truth.",
    clarifyFirst: "Who funded this, what stage it is at, and what oversight exists.",
    emotion: "Distrust",
    mechanism: "turns institutions into conspiracies",
    terrain: "health & medicine",
    family: "institutional-betrayal",
  },
  F03: {
    hookLine: "Turns any engineered intervention into moral violation.",
    hostileClaim: "They are playing God with nature and calling it science.",
    wantsBelief: "Natural is safe. Engineered is dangerous. The line is obvious.",
    clarifyFirst: "What the research actually modifies, and what it leaves untouched.",
    emotion: "Disgust",
    mechanism: "turns nature into moral authority",
    terrain: "bodies & nature",
    family: "body-purity",
  },
  F04: {
    hookLine: "Attaches any finding to children, then dares you to argue.",
    hostileClaim: "This will harm children and they know it.",
    wantsBelief: "If children can be mentioned, children are at risk.",
    clarifyFirst: "Who the study is actually about, and who it is not about.",
    emotion: "Protection",
    mechanism: "turns care into control",
    terrain: "children & vulnerability",
    family: "fear-simplifiers",
  },
  F05: {
    hookLine: "Turns one dataset into evidence of civilisational collapse.",
    hostileClaim: "This proves our society is collapsing.",
    wantsBelief: "A single finding reflects the state of everything.",
    clarifyFirst: "The actual research question and the limits of generalisation.",
    emotion: "Fear",
    mechanism: "turns uncertainty into proof",
    terrain: "politics & identity",
    family: "identity-grievance",
  },
  F06: {
    hookLine: "Reframes curiosity as contempt for ordinary people.",
    hostileClaim: "They waste public money on ideological nonsense.",
    wantsBelief: "If research isn't immediately useful, it's actively wasteful.",
    clarifyFirst: "Why the question matters and what practical value it might eventually have.",
    emotion: "Distrust",
    mechanism: "turns institutions into conspiracies",
    terrain: "science & society",
    family: "institutional-betrayal",
  },
  F07: {
    hookLine: "Recasts correction as suppression. Agreement becomes evidence of enforcement.",
    hostileClaim: "They want to silence anyone asking questions.",
    wantsBelief: "Scientific consensus is enforced, not earned.",
    clarifyFirst: "The difference between evidence-based moderation and suppression of inquiry.",
    emotion: "Control",
    mechanism: "turns care into control",
    terrain: "science & society",
    family: "control-surveillance",
  },
  F08: {
    hookLine: "Turns evidence into a pretext for mandates that haven't been proposed.",
    hostileClaim: "This is about controlling the public, not science.",
    wantsBelief: "Research is always the first step toward coercion.",
    clarifyFirst: "What the study informs versus what it authorises. These are different things.",
    emotion: "Control",
    mechanism: "turns care into control",
    terrain: "science & society",
    family: "control-surveillance",
  },
  F09: {
    hookLine: "Turns peer review into a cartel and citation into conspiracy.",
    hostileClaim: "They all cite each other, fund each other, and call it science.",
    wantsBelief: "Agreement among scientists is proof of coordination, not evidence.",
    clarifyFirst: "How disagreement, replication, and oversight actually work.",
    emotion: "Distrust",
    mechanism: "turns institutions into conspiracies",
    terrain: "science & society",
    family: "institutional-betrayal",
  },
  F14: {
    hookLine: "Turns every treatment study into proof that prevention was sabotaged.",
    hostileClaim: "If they wanted you healthy, this would be front-page news.",
    wantsBelief: "Institutions keep people sick because healthy people aren't profitable.",
    clarifyFirst: "The difference between prevention, risk reduction, and treatment — and why proving prevention is hard.",
    emotion: "Distrust",
    mechanism: "turns institutions into conspiracies",
    terrain: "health & medicine",
    family: "institutional-betrayal",
  },
  F15: {
    hookLine: "Upgrades detection into danger. If instruments can find it, it must be killing you.",
    hostileClaim: "If they can measure it, it must already be poisoning you.",
    wantsBelief: "Any detectable substance is an unacceptable risk.",
    clarifyFirst: "The difference between detection and danger: dose, route, context, and thresholds.",
    emotion: "Fear",
    mechanism: "turns exposure into poisoning",
    terrain: "bodies & nature",
    family: "fear-simplifiers",
  },
  F16: {
    hookLine: "Turns every health database into a surveillance apparatus.",
    hostileClaim: "Today a health app, tomorrow a citizen score.",
    wantsBelief: "Digital health infrastructure is social control in a lab coat.",
    clarifyFirst: "What data is collected, who sees it, and what governance limits exist.",
    emotion: "Control",
    mechanism: "turns data into surveillance",
    terrain: "systems & technology",
    family: "control-surveillance",
  },
  F17: {
    hookLine: "Sells the idea that a cure already exists but powerful people buried it.",
    hostileClaim: "This doctor will be deleted in 24 hours for telling the truth.",
    wantsBelief: "Simple cures exist but are hidden because they threaten profits.",
    clarifyFirst: "What counts as evidence, approval, dosing, and replication.",
    emotion: "Hope",
    mechanism: "turns early findings into certainty",
    terrain: "health & medicine",
    family: "hope-merchants",
  },
  F18: {
    hookLine: "Treats 'natural' as a moral verdict and 'engineered' as contamination.",
    hostileClaim: "Your immune system is perfect until science interferes.",
    wantsBelief: "The body is a self-sufficient system that medicine corrupts.",
    clarifyFirst: "Risk trade-offs between natural exposure and intervention. Neither is automatically safer.",
    emotion: "Disgust",
    mechanism: "turns nature into moral authority",
    terrain: "bodies & nature",
    family: "body-purity",
  },
  F19: {
    hookLine: "Turns coordination between countries into conspiracy between elites.",
    hostileClaim: "Public health is the excuse; global control is the project.",
    wantsBelief: "International health agreements are sovereignty traps.",
    clarifyFirst: "What is voluntary, what is binding, and who holds actual authority.",
    emotion: "Control",
    mechanism: "turns care into control",
    terrain: "systems & technology",
    family: "control-surveillance",
  },
  F20: {
    hookLine: "Casts professional care as chemical management of inconvenient people.",
    hostileClaim: "Psychiatrists want subscribers, not patients.",
    wantsBelief: "Mental health treatment is sedation dressed as science.",
    clarifyFirst: "The difference between symptom relief, long-term care, and evidence-based treatment.",
    emotion: "Distrust",
    mechanism: "turns care into control",
    terrain: "health & medicine",
    family: "institutional-betrayal",
  },
  F21: {
    hookLine: "Turns research on society into political campaigning with charts.",
    hostileClaim: "They call it research, but it is just ideology with charts.",
    wantsBelief: "Social science is activism pretending to be neutral.",
    clarifyFirst: "What was measured, how, and where interpretation begins.",
    emotion: "Identity",
    mechanism: "turns difference into threat",
    terrain: "science & society",
    family: "identity-grievance",
  },
  F22: {
    hookLine: "Turns economic analysis into proof that experts want you poorer.",
    hostileClaim: "This is a blueprint for making you poorer.",
    wantsBelief: "Economic hardship is designed by those who study it.",
    clarifyFirst: "The difference between describing trade-offs and advocating for them.",
    emotion: "Fear",
    mechanism: "turns pain into plot",
    terrain: "politics & identity",
    family: "identity-grievance",
  },
  F23: {
    hookLine: "Reframes education research as state-sponsored reprogramming of children.",
    hostileClaim: "They are not teaching children; they are programming them.",
    wantsBelief: "Education is indoctrination whenever the content is unfamiliar.",
    clarifyFirst: "The educational goal, age group, and practical classroom boundaries.",
    emotion: "Protection",
    mechanism: "turns care into control",
    terrain: "children & vulnerability",
    family: "fear-simplifiers",
  },
  F24: {
    hookLine: "Turns expert advice into unelected governance.",
    hostileClaim: "Experts now think they should govern instead of elected people.",
    wantsBelief: "Evidence-based advice is a power grab by technocrats.",
    clarifyFirst: "The difference between advising and deciding. Who actually holds authority.",
    emotion: "Control",
    mechanism: "turns institutions into conspiracies",
    terrain: "science & society",
    family: "control-surveillance",
  },
  F25: {
    hookLine: "Turns historical research into a weapon aimed at national pride.",
    hostileClaim: "They are rewriting history so you will be ashamed of your own country.",
    wantsBelief: "Historians are saboteurs who manufacture national guilt.",
    clarifyFirst: "The scope of the archive, the period studied, and the research question.",
    emotion: "Identity",
    mechanism: "turns difference into threat",
    terrain: "politics & identity",
    family: "identity-grievance",
  },
  F26: {
    hookLine: "Turns population data into a countdown to national extinction.",
    hostileClaim: "The data prove they are replacing us.",
    wantsBelief: "Demographic change is a coordinated invasion, not a statistical trend.",
    clarifyFirst: "What the numbers actually show, including time horizons and uncertainty.",
    emotion: "Fear",
    mechanism: "turns difference into threat",
    terrain: "politics & identity",
    family: "identity-grievance",
  },
  F27: {
    hookLine: "Turns international collaboration into foreign interference.",
    hostileClaim: "This research was funded by globalist institutions to force their agenda on us.",
    wantsBelief: "Cross-border research serves foreign interests, not truth.",
    clarifyFirst: "Who funded the research, where it was conducted, and what it can and cannot influence.",
    emotion: "Distrust",
    mechanism: "turns institutions into conspiracies",
    terrain: "politics & identity",
    family: "institutional-betrayal",
  },
  F28: {
    hookLine: "Turns research into a battle in a war nobody declared.",
    hostileClaim: "This is not research — it is woke ideology dressed up in statistics.",
    wantsBelief: "Science on values or identity is political combat, not inquiry.",
    clarifyFirst: "What was measured versus what is being interpreted. Method before values language.",
    emotion: "Identity",
    mechanism: "turns difference into threat",
    terrain: "politics & identity",
    family: "identity-grievance",
  },
  F29: {
    hookLine: "Turns anonymised research data into personal surveillance files.",
    hostileClaim: "They used our health data without asking and now they are profiting from it.",
    wantsBelief: "If your data was used, you were exploited.",
    clarifyFirst: "What data was used, how it was anonymised, and what ethics approval exists.",
    emotion: "Control",
    mechanism: "turns data into surveillance",
    terrain: "systems & technology",
    family: "control-surveillance",
  },
  F30: {
    hookLine: "Gives machines the confidence of doctors without the accountability of one.",
    hostileClaim: "This AI doctor diagnosed me in seconds — why do we still need real doctors?",
    wantsBelief: "AI confidence equals clinical competence.",
    clarifyFirst: "Who holds clinical responsibility, and where the boundary between assistance and authority lies.",
    emotion: "Hope",
    mechanism: "turns commerce into science",
    terrain: "systems & technology",
    family: "hope-merchants",
  },
  F31: {
    hookLine: "Strips the caveats from early results and presents them as verdicts.",
    hostileClaim: "Scientists have confirmed it — the study is right here.",
    wantsBelief: "One study equals proof. Uncertainty is a sign of evasion.",
    clarifyFirst: "What stage this evidence is at, and what would be needed to confirm the finding.",
    emotion: "Hope",
    mechanism: "turns early findings into certainty",
    terrain: "science & society",
    family: "hope-merchants",
  },
  F32: {
    hookLine: "Borrows the aesthetics of science to sell things science hasn't validated.",
    hostileClaim: "This natural supplement is clinically proven — doctors don't want you to know.",
    wantsBelief: "Scientific-sounding language is the same as scientific evidence.",
    clarifyFirst: "What the actual evidence base is, and what standard the claim would need to meet.",
    emotion: "Hope",
    mechanism: "turns commerce into science",
    terrain: "health & medicine",
    family: "hope-merchants",
  },
  F33: {
    hookLine: "Turns hormonal measurements into existential reproductive threats.",
    hostileClaim: "They are putting chemicals in everything that are destroying our fertility.",
    wantsBelief: "Your reproductive future is under silent, deliberate attack.",
    clarifyFirst: "What was actually measured, in what population, and the difference between a hormonal signal and a fertility outcome.",
    emotion: "Fear",
    mechanism: "turns exposure into poisoning",
    terrain: "bodies & nature",
    family: "fear-simplifiers",
  },
  F34: {
    hookLine: "Turns the complexity of science into evidence that someone is hiding the truth.",
    hostileClaim: "They keep changing the guidelines on purpose so no one knows what to believe.",
    wantsBelief: "If information is confusing, confusion is the point.",
    clarifyFirst: "Why contradictory findings exist, and how evidence accumulates over time.",
    emotion: "Distrust",
    mechanism: "turns complexity into cover-up",
    terrain: "science & society",
    family: "institutional-betrayal",
  },
  F35: {
    hookLine: "Uses epidemiological language to turn people into biological threats.",
    hostileClaim: "These diseases were under control until they opened the borders.",
    wantsBelief: "Outsiders carry disease. Borders are medicine.",
    clarifyFirst: "What the epidemiological data actually shows versus what is being implied.",
    emotion: "Fear",
    mechanism: "turns difference into threat",
    terrain: "health & medicine",
    family: "fear-simplifiers",
  },
  F37: {
    hookLine: "What they call better access and smarter care is really a way to centralise the most intimate data people have.",
    hostileClaim: "What they call digital health is really a system for tracking your body, your choices, and your future.",
    wantsBelief: "Your medical file is becoming a control panel. Interoperability is just a polite word for centralised monitoring.",
    clarifyFirst: "What the system actually does, who has access, and what governance limits exist.",
    emotion: "Distrust",
    mechanism: "turns data into surveillance",
    terrain: "systems & technology",
    family: "institutional-betrayal",
  },
  "F37:cs": {
    hookLine: "Digital health infrastructure is recast as a polite architecture of tracking, profiling, and future control.",
    hostileClaim: "What they call digital health is really a system for tracking your body, your choices, and your future.",
    wantsBelief: "Your medical file is becoming a control panel. Interoperability is just a polite word for centralised monitoring.",
    clarifyFirst: "What the system actually does, who has access, and what governance limits exist.",
    emotion: "Control",
    mechanism: "turns data into surveillance",
    terrain: "systems & technology",
    family: "control-surveillance",
  },
  F38: {
    hookLine: "If they approved it this fast, they must have decided the side effects were an acceptable price.",
    hostileClaim: "If it reached the public this fast, they clearly did not care what it might do to people.",
    wantsBelief: "Speed means corners were cut. Safety was secondary to profit or politics.",
    clarifyFirst: "What accelerated approval actually means, what safety data was required, and what monitoring continues after launch.",
    emotion: "Fear",
    mechanism: "turns uncertainty into proof",
    terrain: "health & medicine",
    family: "fear-simplifiers",
  },
  "F38:ib": {
    hookLine: "Regulatory speed is recast as institutional willingness to trade safety for advantage.",
    hostileClaim: "If it reached the public this fast, they clearly did not care what it might do to people.",
    wantsBelief: "Regulators and companies knowingly accepted hidden harm for profit, politics, or prestige.",
    clarifyFirst: "What accelerated approval actually means, what safety data was required, and what monitoring continues after launch.",
    emotion: "Distrust",
    mechanism: "turns institutions into conspiracies",
    terrain: "health & medicine",
    family: "institutional-betrayal",
  },
  F39: {
    hookLine: "Pregnancy is recast as moral territory, where outside authority claims standing over the body and medical reality becomes secondary.",
    hostileClaim: "Once there is a pregnancy, the body is no longer just yours to decide over.",
    wantsBelief: "Pregnancy creates a moral claim stronger than bodily autonomy. Medical judgment can be subordinated to ideology.",
    clarifyFirst: "The specific medical context, who makes the decision, and why pregnancy does not suspend the right to informed medical judgment.",
    emotion: "Control",
    mechanism: "turns nature into moral authority",
    terrain: "bodies & nature",
    family: "body-purity",
  },
  F40: {
    hookLine: "Contraception is recast as more than a medical choice: as a moral and cultural threat hiding behind the language of freedom and health.",
    hostileClaim: "What they call reproductive freedom is really chemical alienation dressed up as empowerment.",
    wantsBelief: "Contraception is part of moral decline, damaging femininity and serving an anti-family agenda.",
    clarifyFirst: "What contraception actually does medically, and how individual health decisions differ from civilisational narratives.",
    emotion: "Disgust",
    mechanism: "turns nature into moral authority",
    terrain: "bodies & nature",
    family: "body-purity",
  },
  F41: {
    hookLine: "Advanced cures are imagined as already existing — but reserved for elites while the public is left with second-best medicine.",
    hostileClaim: "They already have the technology to cure this. You're just not meant to access it.",
    wantsBelief: "Real cures exist but are withheld. Pharmaceutical systems depend on keeping people chronically ill. Elites have access to a different level of medicine.",
    clarifyFirst: "What stage the research is actually at, what evidence exists, and what barriers to access really look like.",
    emotion: "Hope",
    mechanism: "turns early findings into certainty",
    terrain: "health & medicine",
    family: "hope-merchants",
  },
  F42: {
    hookLine: "The illness is recast as a message from the soul, and medicine as a clumsy attempt to shut it up.",
    hostileClaim: "The illness is not the real problem. It is your body trying to tell you what your life refuses to face.",
    wantsBelief: "Medication is avoidance. Disease persists because the inner issue has not been solved. People who remain ill have somehow failed to resolve the deeper cause.",
    clarifyFirst: "The difference between mind-body connections as one factor among many, and the claim that inner conflict is the primary cause requiring moral or spiritual correction rather than medical care.",
    emotion: "Hope",
    mechanism: "turns pain into plot",
    terrain: "bodies & nature",
    family: "hope-merchants",
  },
};

// ── Browsing views ──────────────────────────────────────────
export const EMOTION_TAGS: EmotionTag[] = [
  "Fear",
  "Hope",
  "Protection",
  "Disgust",
  "Distrust",
  "Control",
  "Identity",
];

export const MECHANISM_TAGS: MechanismTag[] = [
  "turns uncertainty into proof",
  "turns care into control",
  "turns exposure into poisoning",
  "turns early findings into certainty",
  "turns institutions into conspiracies",
  "turns difference into threat",
  "turns complexity into cover-up",
  "turns nature into moral authority",
  "turns commerce into science",
  "turns data into surveillance",
  "turns pain into plot",
];

export const TERRAIN_TAGS: TerrainTag[] = [
  "health & medicine",
  "children & vulnerability",
  "systems & technology",
  "science & society",
  "bodies & nature",
  "politics & identity",
];
