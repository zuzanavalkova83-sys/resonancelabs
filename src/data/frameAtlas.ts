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
  | "identity-grievance"
  | "one-cause-one-cure"
  | "self-blame"
  | "gender-wedge"
  | "messenger-attacks"
  | "crisis-exploitation"
  | "generational";

export const PATTERN_FAMILIES: Record<PatternFamily, { label: string; description: string }> = {
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
  "one-cause-one-cure": {
    label: "One cause, one cure",
    description:
      "These frames collapse all of disease into a single villain and a single fix. Name one culprit — sugar, seed oils, inflammation — and sell one protocol as salvation. Discipline becomes virtue, and getting sick becomes a failure of will.",
  },
  "self-blame": {
    label: "It's your own fault",
    description:
      "These frames turn illness into a verdict on the patient. Your choices, your character, your unfelt feelings — something you did earned this. It comforts the onlooker and quietly loads the sick with guilt.",
  },
  "gender-wedge": {
    label: "Gender wedge stories",
    description:
      "These frames turn the relationship between men and women into a front. They come in pairs on purpose: the wedge needs both poles, and each pole's excess is the other's best recruitment material. The library maps the wedge; it does not take a side.",
  },
  "messenger-attacks": {
    label: "Attacks on the messenger",
    description:
      "These frames never touch the claim. They price the person: her feelings, her funding, her body, her family, her loyalty. The goal is not to win the argument but to make holding the position too expensive to keep.",
  },
  "crisis-exploitation": {
    label: "Crisis exploitation stories",
    description:
      "These frames attach themselves to a warning. Whatever an institution announces — an outbreak, a drone, a cyber incident — is recast as staged, sold, escalatory, designed, repressive, or aimed at someone at home. They lock in within hours.",
  },
  generational: {
    label: "Generational stories",
    description:
      "These frames turn cohorts into camps. Structural change becomes a generation's character, and solidarity across ages becomes a zero-sum ledger.",
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
  | "Identity"
  | "Virtue"
  | "Blame"
  | "Guilt";

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
  | "turns pain into plot"
  | "turns one substance into the master cause"
  | "reframes a lifestyle as a moral cure"
  | "misreads metabolism as a cure"
  | "converts risk into moral desert"
  | "turns disease into a psychic verdict"
  | "turns a sex difference into a war"
  | "turns a movement into an operation"
  | "turns the person into the argument"
  | "turns a warning into a plot"
  | "turns defence into catastrophe"
  | "turns a generation into a culprit";

export type TerrainTag =
  | "health & medicine"
  | "children & vulnerability"
  | "systems & technology"
  | "science & society"
  | "bodies & nature"
  | "politics & identity"
  | "diet & disease"
  | "diet & discipline"
  | "cancer & metabolism"
  | "bodies & blame"
  | "mind & body";

// ── Per-frame editorial hooks ───────────────────────────────
export interface FrameEditorial {
  hookLine: string; // sharp "how it works"
  hostileClaim: string; // representative hostile quote
  wantsBelief: string; // what it wants you to believe
  clarifyFirst: string; // what to clarify first
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
    wantsBelief:
      "That effective traditional knowledge was deliberately displaced, and modern medicine is colder, more commercial, and less humane.",
    clarifyFirst:
      "Respect for traditional knowledge does not require rejecting modern medicine. The 'displacement' narrative conflates progress with suppression.",
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
    clarifyFirst:
      "The difference between prevention, risk reduction, and treatment — and why proving prevention is hard.",
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
    clarifyFirst:
      "What was actually measured, in what population, and the difference between a hormonal signal and a fertility outcome.",
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
    hookLine:
      "What they call better access and smarter care is really a way to centralise the most intimate data people have.",
    hostileClaim:
      "What they call digital health is really a system for tracking your body, your choices, and your future.",
    wantsBelief:
      "Your medical file is becoming a control panel. Interoperability is just a polite word for centralised monitoring.",
    clarifyFirst: "What the system actually does, who has access, and what governance limits exist.",
    emotion: "Distrust",
    mechanism: "turns data into surveillance",
    terrain: "systems & technology",
    family: "institutional-betrayal",
  },
  "F37:cs": {
    hookLine:
      "Digital health infrastructure is recast as a polite architecture of tracking, profiling, and future control.",
    hostileClaim:
      "What they call digital health is really a system for tracking your body, your choices, and your future.",
    wantsBelief:
      "Your medical file is becoming a control panel. Interoperability is just a polite word for centralised monitoring.",
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
    clarifyFirst:
      "What accelerated approval actually means, what safety data was required, and what monitoring continues after launch.",
    emotion: "Fear",
    mechanism: "turns uncertainty into proof",
    terrain: "health & medicine",
    family: "fear-simplifiers",
  },
  "F38:ib": {
    hookLine: "Regulatory speed is recast as institutional willingness to trade safety for advantage.",
    hostileClaim: "If it reached the public this fast, they clearly did not care what it might do to people.",
    wantsBelief: "Regulators and companies knowingly accepted hidden harm for profit, politics, or prestige.",
    clarifyFirst:
      "What accelerated approval actually means, what safety data was required, and what monitoring continues after launch.",
    emotion: "Distrust",
    mechanism: "turns institutions into conspiracies",
    terrain: "health & medicine",
    family: "institutional-betrayal",
  },
  F39: {
    hookLine:
      "Pregnancy is recast as moral territory, where outside authority claims standing over the body and medical reality becomes secondary.",
    hostileClaim: "Once there is a pregnancy, the body is no longer just yours to decide over.",
    wantsBelief:
      "Pregnancy creates a moral claim stronger than bodily autonomy. Medical judgment can be subordinated to ideology.",
    clarifyFirst:
      "The specific medical context, who makes the decision, and why pregnancy does not suspend the right to informed medical judgment.",
    emotion: "Control",
    mechanism: "turns nature into moral authority",
    terrain: "bodies & nature",
    family: "body-purity",
  },
  F40: {
    hookLine:
      "Contraception is recast as more than a medical choice: as a moral and cultural threat hiding behind the language of freedom and health.",
    hostileClaim: "What they call reproductive freedom is really chemical alienation dressed up as empowerment.",
    wantsBelief: "Contraception is part of moral decline, damaging femininity and serving an anti-family agenda.",
    clarifyFirst:
      "What contraception actually does medically, and how individual health decisions differ from civilisational narratives.",
    emotion: "Disgust",
    mechanism: "turns nature into moral authority",
    terrain: "bodies & nature",
    family: "body-purity",
  },
  F41: {
    hookLine:
      "Advanced cures are imagined as already existing — but reserved for elites while the public is left with second-best medicine.",
    hostileClaim: "They already have the technology to cure this. You're just not meant to access it.",
    wantsBelief:
      "Real cures exist but are withheld. Pharmaceutical systems depend on keeping people chronically ill. Elites have access to a different level of medicine.",
    clarifyFirst:
      "What stage the research is actually at, what evidence exists, and what barriers to access really look like.",
    emotion: "Hope",
    mechanism: "turns early findings into certainty",
    terrain: "health & medicine",
    family: "hope-merchants",
  },
  F42: {
    hookLine: "The illness is recast as a message from the soul, and medicine as a clumsy attempt to shut it up.",
    hostileClaim:
      "The illness is not the real problem. It is your body trying to tell you what your life refuses to face.",
    wantsBelief:
      "Medication is avoidance. Disease persists because the inner issue has not been solved. People who remain ill have somehow failed to resolve the deeper cause.",
    clarifyFirst:
      "The difference between mind-body connections as one factor among many, and the claim that inner conflict is the primary cause requiring moral or spiritual correction rather than medical care.",
    emotion: "Hope",
    mechanism: "turns pain into plot",
    terrain: "bodies & nature",
    family: "hope-merchants",
  },
  F44: {
    hookLine: "Collapses every disease into one dietary villain you must eliminate.",
    hostileClaim: "Sugar — or seed oils, or gluten — is what's really making everyone sick.",
    wantsBelief: "There is one hidden cause behind all illness, and avoiding it keeps you safe.",
    clarifyFirst:
      "Single-cause stories are easy to remember, but disease is multi-factorial. One molecule rarely explains everything, and fear of a single food can crowd out the risk factors that actually matter.",
    emotion: "Control",
    mechanism: "turns one substance into the master cause",
    terrain: "diet & disease",
    family: "one-cause-one-cure",
  },
  F45: {
    hookLine: "Sells one diet or regimen as the fix for everything.",
    hostileClaim: "Go keto, carnivore, or fasting and your body will heal itself.",
    wantsBelief: "One lifestyle law can cure what medicine only manages, and discipline is why you'll be spared.",
    clarifyFirst:
      "Diet matters, but 'one protocol cures all' overpromises. When health becomes a test of willpower, people who get sick anyway are left feeling they simply didn't try hard enough.",
    emotion: "Virtue",
    mechanism: "reframes a lifestyle as a moral cure",
    terrain: "diet & discipline",
    family: "one-cause-one-cure",
  },
  F46: {
    hookLine: "Claims you can starve a tumour by cutting sugar or carbs.",
    hostileClaim: "Cancer feeds on sugar, so keto or fasting will starve it — no need for treatment.",
    wantsBelief: "Disease is simply metabolic, so the right diet can replace medicine.",
    clarifyFirst:
      "Tumour metabolism is a real field of research, but 'sugar feeds cancer, so starve it' is a dangerous oversimplification. Diet is not a substitute for treatment, and delaying care on this belief costs lives.",
    emotion: "Control",
    mechanism: "misreads metabolism as a cure",
    terrain: "cancer & metabolism",
    family: "one-cause-one-cure",
  },
  F47: {
    hookLine: "Treats illness as the just punishment for how someone lived.",
    hostileClaim: "They smoked, ate badly, didn't look after themselves — no wonder they got sick.",
    wantsBelief: "Sick people earned it, so people like me are safe.",
    clarifyFirst:
      "Risk factors are real, but blame is not prevention. Plenty of careful people get sick and plenty of careless ones don't, and shaming patients only isolates them when they most need support.",
    emotion: "Blame",
    mechanism: "converts risk into moral desert",
    terrain: "bodies & blame",
    family: "self-blame",
  },
  F48: {
    hookLine: "Blames cancer on repressed emotions or unhealed trauma.",
    hostileClaim: "Cancer is your body expressing the feelings you never let yourself feel.",
    wantsBelief: "Illness is really psychological, so the right mindset could have prevented it.",
    clarifyFirst:
      "Stress and wellbeing matter, but there is no 'cancer personality,' and trauma does not cause tumours. This story loads the sick with guilt for a disease they did not summon.",
    emotion: "Guilt",
    mechanism: "turns disease into a psychic verdict",
    terrain: "mind & body",
    family: "self-blame",
  },
  F49: {
    hookLine:
      "Turns birth-rate data into a verdict on women's choices. Economics, housing and men's role vanish from the equation.",
    hostileClaim: "Women were told to chase careers, and now there are no children.",
    wantsBelief: "Falling birth rates are the bill for women's ambition, and the fix is women stepping back.",
    clarifyFirst:
      "Fertility tracks housing costs, childcare, job security and partnership patterns for both sexes. Countries with the highest female employment are not the ones with the lowest birth rates.",
    emotion: "Fear",
    mechanism: "turns a sex difference into a war",
    terrain: "bodies & nature",
    family: "gender-wedge",
  },
  F50: {
    hookLine:
      "Turns research on changing family and labour patterns into proof that men have been written off. Every statistic becomes an insult.",
    hostileClaim: "Society has decided it no longer needs men.",
    wantsBelief: "Modern society has quietly decided men are surplus, so every change is an attack.",
    clarifyFirst:
      "Changes in family and labour patterns are shifts in roles, not verdicts on a sex. Most of the data show men and women both adapting, unevenly and under stress.",
    emotion: "Identity",
    mechanism: "turns a sex difference into a war",
    terrain: "politics & identity",
    family: "gender-wedge",
  },
  F51: {
    hookLine:
      "Inflates small, contested mate-preference studies into a master explanation of relationship breakdown, with women's biology as the hidden culprit.",
    hostileClaim: "Hormonal contraception changes who women fall for — that is why marriages fail.",
    wantsBelief: "Women's biology, altered by the pill, is the hidden reason relationships fail.",
    clarifyFirst:
      "A few small studies suggested hormonal contraception might shift mate preferences; larger replication attempts largely failed to confirm it. Relationship breakdown has many well-documented causes; this is not among the established ones.",
    emotion: "Control",
    mechanism: "turns early findings into certainty",
    terrain: "bodies & nature",
    family: "gender-wedge",
  },
  F52: {
    hookLine:
      "Turns endocrinological trend data into a story of civilisational softening, then sells the fix. The male twin of F33.",
    hostileClaim: "Testosterone has fallen one percent a year. No wonder men are weak.",
    wantsBelief: "Men are biologically weakening, and modern life — or modern women — did it.",
    clarifyFirst:
      "Population-level testosterone declines have been reported and are studied; the likely drivers are obesity, sedentary life, sleep and age structure. None of this is evidence of civilisational decline, and none of it is fixed by a supplement.",
    emotion: "Fear",
    mechanism: "turns a sex difference into a war",
    terrain: "bodies & nature",
    family: "gender-wedge",
  },
  F53: {
    hookLine:
      "Turns a domestic social movement into an enemy programme. Any gender-related finding becomes evidence of the import.",
    hostileClaim: "Feminism was imported to break our families.",
    wantsBelief: "Feminism is not a domestic movement but a foreign programme to dismantle families and nations.",
    clarifyFirst:
      "Women's movements in every European country have domestic histories older than any of today's foreign actors. Treating a social movement as an import ends the argument before it starts.",
    emotion: "Identity",
    mechanism: "turns a movement into an operation",
    terrain: "politics & identity",
    family: "gender-wedge",
  },
  F54: {
    hookLine:
      "The mirror of F53. Turns any critique — including reasonable ones — into evidence of hostile influence, which closes the debate and feeds the other pole.",
    hostileClaim: "Anyone questioning feminism is reading from a Kremlin script.",
    wantsBelief: "Any criticism of feminism is hostile influence, so it need not be answered.",
    clarifyFirst:
      "Hostile actors do amplify anti-feminist content — and also benefit when every critic is labelled an agent, because that closes debate and feeds the other pole. Answer the argument; document the amplification separately.",
    emotion: "Identity",
    mechanism: "turns a movement into an operation",
    terrain: "politics & identity",
    family: "gender-wedge",
  },
  F55: {
    hookLine:
      "Dismisses real data on men's outcomes as a political manoeuvre. The dismissal is then screenshotted by the other pole as proof of F50.",
    hostileClaim: "Male suicide, school failure, loneliness — reactionary talking points.",
    wantsBelief: "Men's problems are a political manoeuvre, so the data can be dismissed.",
    clarifyFirst:
      "Male suicide rates, boys' educational outcomes and loneliness measures are real and well documented. Dismissing them does not weaken the other pole — it is its best recruitment material.",
    emotion: "Distrust",
    mechanism: "turns a sex difference into a war",
    terrain: "science & society",
    family: "gender-wedge",
  },
  F56: {
    hookLine:
      "Turns crime statistics into a categorical verdict on half the population. Comforting as a rule of thumb, corrosive as a public claim, and gold for F50.",
    hostileClaim: "The safest assumption is that any man is a danger.",
    wantsBelief: "Statistics justify treating every man as a threat.",
    clarifyFirst:
      "Most violence is committed by a small minority of men; base rates do not license categorical verdicts. The frame comforts as a rule of thumb and corrodes as a public claim.",
    emotion: "Fear",
    mechanism: "turns a sex difference into a war",
    terrain: "politics & identity",
    family: "gender-wedge",
  },
  F57: {
    hookLine:
      "Turns selective statistics on custody, education or hiring into a picture of a state that has switched sides. Every policy becomes evidence.",
    hostileClaim: "Courts, schools, hiring — the whole system runs against men.",
    wantsBelief: "Every institution has switched sides against men.",
    clarifyFirst:
      "Family courts, schools and hiring show mixed and context-specific patterns; some disadvantage men, some women. A rigged-system story needs all of them to point one way, and they do not.",
    emotion: "Control",
    mechanism: "turns a sex difference into a war",
    terrain: "politics & identity",
    family: "gender-wedge",
  },
  F58: {
    hookLine:
      "Sells a single social protocol for every modern ailment. The gender twin of F45. Frequently packaged with Russia as the place where it already works.",
    hostileClaim: "Go back to the natural order and the loneliness, the anxiety and the birth rate fix themselves.",
    wantsBelief: "Loneliness, anxiety and falling births are all cured by restoring traditional roles.",
    clarifyFirst:
      "Countries that promote traditional roles most loudly do not have the best outcomes on any of these measures; Russia has one of the world's highest divorce rates. One social protocol does not treat five different problems.",
    emotion: "Hope",
    mechanism: "reframes a lifestyle as a moral cure",
    terrain: "politics & identity",
    family: "gender-wedge",
  },
  F59: {
    hookLine:
      "Turns a grievance into a total programme of withdrawal and sells it as freedom. The mirror of F58: one social protocol, opposite direction.",
    hostileClaim: "The only rational response is to stop dating men altogether.",
    wantsBelief: "The only rational response to men is total withdrawal, and this is freedom.",
    clarifyFirst:
      "Grievances behind the withdrawal are often real. A total programme sold as liberation is still one social protocol for everything, and it hands the other pole its proof.",
    emotion: "Hope",
    mechanism: "reframes a lifestyle as a moral cure",
    terrain: "politics & identity",
    family: "gender-wedge",
  },
  F77: {
    hookLine:
      "Turns findings on sex differences into an ideological act. The mirror of F21: there, social science is ideology; here, biology is. Both close the paper before reading it.",
    hostileClaim: "Any study that finds a sex difference is patriarchy with a p-value.",
    wantsBelief: "Any finding of a sex difference is ideology and can be dismissed unread.",
    clarifyFirst:
      "Some sex-difference research is weak and some is strong; the field has real methodological debates. Dismissing all of it as patriarchy closes the paper as surely as F21 closes the social sciences.",
    emotion: "Identity",
    mechanism: "turns a sex difference into a war",
    terrain: "science & society",
    family: "gender-wedge",
  },
  F60: {
    hookLine:
      "Recasts a woman's argument as an emotional state. Nothing needs to be refuted, because nothing was said.",
    hostileClaim: "She is not analysing. She is having feelings.",
    wantsBelief: "A woman's argument is a mood and therefore needs no reply.",
    clarifyFirst:
      "An argument is judged on its content. Recasting it as an emotional state is a way of not answering it — and is applied to women at a rate men rarely experience.",
    emotion: "Identity",
    mechanism: "turns the person into the argument",
    terrain: "science & society",
    family: "messenger-attacks",
  },
  F61: {
    hookLine:
      "Replaces the claim with the payroll. Iakimova's Bulgarian epithets — sorosoid, grantoed — are the industrial version.",
    hostileClaim: "Follow the money. Who pays her?",
    wantsBelief: "The speaker is on someone's payroll, so the claim is void.",
    clarifyFirst:
      "Funding is disclosed and can be examined; it does not decide the truth of a claim. 'Grant-fed', 'Soros-paid' and their local variants are propaganda epithets, not evidence.",
    emotion: "Distrust",
    mechanism: "turns the person into the argument",
    terrain: "science & society",
    family: "messenger-attacks",
  },
  F62: {
    hookLine:
      "Makes reproductive status a credential. Works on paediatricians, educators, demographers and politicians alike.",
    hostileClaim: "What does a childless woman know about children's health?",
    wantsBelief: "Only a parent may speak about children, families or fertility.",
    clarifyFirst:
      "Expertise on children's health or demography comes from training and evidence, not from reproductive status. The frame is applied almost exclusively to women.",
    emotion: "Identity",
    mechanism: "turns the person into the argument",
    terrain: "children & vulnerability",
    family: "messenger-attacks",
  },
  F63: {
    hookLine:
      "Replies to the body instead of the claim. Women scientists receive appearance comments at roughly ten times the rate of men.",
    hostileClaim: "Climate Barbie.",
    wantsBelief: "How she looks is a fair reply to what she said.",
    clarifyFirst:
      "Comments on appearance are a reply to nothing. In a Spanish survey of scientists (N=237) women reported them at roughly ten times the rate of men.",
    emotion: "Disgust",
    mechanism: "turns the person into the argument",
    terrain: "science & society",
    family: "messenger-attacks",
  },
  F64: {
    hookLine:
      "Turns visibility itself into the motive. The more the claim travels, the more the frame confirms itself.",
    hostileClaim: "She only says it to be seen.",
    wantsBelief: "Visibility is the motive, so the content is performance.",
    clarifyFirst:
      "Public communication is part of the job of experts and public figures. The frame makes reach itself the evidence against the speaker, so it can never be answered by reaching fewer people.",
    emotion: "Control",
    mechanism: "turns the person into the argument",
    terrain: "science & society",
    family: "messenger-attacks",
  },
  F65: {
    hookLine:
      "Attacks the credential rather than the content. Women are challenged on competence a third more often than men in the same role.",
    hostileClaim: "Where did she even get that degree?",
    wantsBelief: "The credential is doubtful, so the claim is.",
    clarifyFirst:
      "Credentials are checkable and usually checked. The frame is applied to women a third more often than to men in the same roles, which tells you what it is measuring.",
    emotion: "Distrust",
    mechanism: "turns the person into the argument",
    terrain: "science & society",
    family: "messenger-attacks",
  },
  F66: {
    hookLine:
      "Pulls partners, children and past into the argument. The aim is not to win but to make holding the position too expensive.",
    hostileClaim: "Look who she is married to.",
    wantsBelief: "Her partner, family or past decide the claim — and the cost of continuing.",
    clarifyFirst:
      "Private life is not an argument. The aim of the frame is not to win but to make holding a public position too expensive to keep; it works by pulling in people who never entered the debate.",
    emotion: "Fear",
    mechanism: "turns the person into the argument",
    terrain: "politics & identity",
    family: "messenger-attacks",
  },
  F67: {
    hookLine:
      "Recasts internal criticism as betrayal of the group. The frame is symmetrical: it is used by every pole against its own dissenters.",
    hostileClaim: "A woman attacking women. A scientist attacking science.",
    wantsBelief: "Criticism from inside the group is betrayal of the group.",
    clarifyFirst:
      "Internal criticism is how groups correct themselves. The frame is symmetrical: every pole uses it against its own dissenters, and it works because belonging feels like survival.",
    emotion: "Identity",
    mechanism: "turns the person into the argument",
    terrain: "politics & identity",
    family: "messenger-attacks",
  },
  F68: {
    hookLine: "Turns an incident into a false flag. Whoever warned about it becomes the suspect.",
    hostileClaim: "The drone was a provocation approved in Brussels.",
    wantsBelief: "The incident was staged by the people who warned about it.",
    clarifyFirst:
      "False-flag claims arrive within hours, before any investigation, and never require evidence. Ask what would count as proof and note that the claim was made before it could exist.",
    emotion: "Distrust",
    mechanism: "turns a warning into a plot",
    terrain: "politics & identity",
    family: "crisis-exploitation",
  },
  F69: {
    hookLine: "Turns a threat assessment into a sales pitch. Works identically for defence, pharma and public health.",
    hostileClaim: "Every warning is an invoice for the arms industry.",
    wantsBelief: "Every warning is an invoice.",
    clarifyFirst:
      "Warnings and procurement can both be examined separately. The frame merges them so that any threat assessment becomes self-serving by definition — and works identically for defence, pharma and public health.",
    emotion: "Distrust",
    mechanism: "turns a warning into a plot",
    terrain: "politics & identity",
    family: "crisis-exploitation",
  },
  F70: {
    hookLine:
      "Turns any defensive measure into the first step to catastrophe. The only safe option becomes doing nothing.",
    hostileClaim: "Say the word and we are in a nuclear war.",
    wantsBelief: "Any defensive measure is the first step to catastrophe, so doing nothing is the only safe option.",
    clarifyFirst:
      "Escalation is a real strategic question with real analysts. The frame replaces the question with a reflex, so that every response is a countdown and inaction is dressed as peace.",
    emotion: "Fear",
    mechanism: "turns defence into catastrophe",
    terrain: "politics & identity",
    family: "crisis-exploitation",
  },
  F71: {
    hookLine:
      "Turns an outbreak or attack into a pretext designed in advance. The plandemic template, portable to any threat.",
    hostileClaim: "They engineer the threat so they can lock us down.",
    wantsBelief: "The emergency was designed in advance for control.",
    clarifyFirst:
      "Outbreaks and attacks have investigable origins; the plandemic template needs none and fits every threat. Its tell is that it arrives complete, with the cure and the villain already attached.",
    emotion: "Control",
    mechanism: "turns a warning into a plot",
    terrain: "systems & technology",
    family: "crisis-exploitation",
  },
  F72: {
    hookLine:
      "Turns counter-measures into persecution of ordinary people. Regulation of manipulation becomes proof of manipulation.",
    hostileClaim: "'Hybrid threat' is just the new word for censoring patriots.",
    wantsBelief: "Counter-measures against manipulation are persecution of ordinary people.",
    clarifyFirst:
      "Regulating coordinated manipulation and silencing citizens are different things and can be told apart by what they target. The frame needs them confused.",
    emotion: "Identity",
    mechanism: "turns defence into catastrophe",
    terrain: "politics & identity",
    family: "crisis-exploitation",
  },
  F73: {
    hookLine:
      "Turns a warning about external actors into a hunt for internal ones. Migrants, minorities and critics become the threat that was announced.",
    hostileClaim: "The real threat is the fifth column in our own streets.",
    wantsBelief: "The warning about an external actor is really about the enemy next door.",
    clarifyFirst:
      "Hybrid threats are conducted by specific actors and can be described specifically. The frame swaps the actor for a domestic category — migrants, minorities, critics — and turns a warning into a hunt.",
    emotion: "Fear",
    mechanism: "turns a warning into a plot",
    terrain: "politics & identity",
    family: "crisis-exploitation",
  },
  F74: {
    hookLine: "Turns cohort economics into a theft. Structural causes become a generation's character.",
    hostileClaim: "Boomers took the houses, the pensions and the climate.",
    wantsBelief: "One generation took what another was owed.",
    clarifyFirst:
      "Cohort differences in housing, pensions and climate exposure are real and structural. Structure has causes; a generation is not one of them. The frame turns policy into character.",
    emotion: "Fear",
    mechanism: "turns a generation into a culprit",
    terrain: "politics & identity",
    family: "generational",
  },
  F75: {
    hookLine: "Turns mental-health data into a verdict on character. Rising diagnosis becomes falling resilience.",
    hostileClaim: "They cannot handle a hard word. Snowflakes.",
    wantsBelief: "Rising diagnoses prove a generation cannot cope.",
    clarifyFirst:
      "Diagnosis rates rise with awareness, access and changed criteria as well as with prevalence; the research disagreement is real. Character is not one of the variables.",
    emotion: "Identity",
    mechanism: "turns a generation into a culprit",
    terrain: "mind & body",
    family: "generational",
  },
  F76: {
    hookLine:
      "Turns demographic voting patterns into an argument against the franchise. Solidarity between generations becomes zero-sum.",
    hostileClaim: "People who will not live with the consequences decide everything.",
    wantsBelief: "Older voters decide a future they will not live in, so their votes count less.",
    clarifyFirst:
      "Age differences in turnout and preferences are real; they are arguments for participation, not against the franchise. The frame turns a demographic fact into a solidarity-ending one.",
    emotion: "Distrust",
    mechanism: "turns a generation into a culprit",
    terrain: "politics & identity",
    family: "generational",
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
  "Virtue",
  "Blame",
  "Guilt",
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
  "turns one substance into the master cause",
  "reframes a lifestyle as a moral cure",
  "misreads metabolism as a cure",
  "converts risk into moral desert",
  "turns disease into a psychic verdict",
  "turns a sex difference into a war",
  "turns a movement into an operation",
  "turns the person into the argument",
  "turns a warning into a plot",
  "turns defence into catastrophe",
  "turns a generation into a culprit",
];

export const TERRAIN_TAGS: TerrainTag[] = [
  "health & medicine",
  "children & vulnerability",
  "systems & technology",
  "science & society",
  "bodies & nature",
  "politics & identity",
  "diet & disease",
  "diet & discipline",
  "cancer & metabolism",
  "bodies & blame",
  "mind & body",
];

/* ── Fault lines — the fourth axis ───────────────────────────
 * Emotion, distortion and terrain describe what happens to the finding.
 * A fault line describes what happens to the people who accept the story:
 * which existing quarrel it is filed under, and which side it enrols them on.
 */
export type FaultLineId = "FL1" | "FL2" | "FL3" | "FL4" | "FL5" | "FL6" | "FL7" | "FL8" | "FL9";

export interface FaultLine {
  id: FaultLineId;
  label: string;
  short: string;
  labelCs: string;
  poles: [string, string];
}

export const FAULT_LINES: FaultLine[] = [
  {
    id: "FL1",
    label: "Elites vs ordinary people",
    short: "Elites – people",
    labelCs: "Elity – obyčejní lidé",
    poles: ["the people", "the elites"],
  },
  {
    id: "FL2",
    label: "Natural vs chemical/engineered",
    short: "Natural – chemical",
    labelCs: "Přírodní – chemické/umělé",
    poles: ["purity", "contamination"],
  },
  {
    id: "FL3",
    label: "Nation vs Brussels/West/globalists",
    short: "Nation – globalists",
    labelCs: "Národ – Brusel/Západ/globalisté",
    poles: ["sovereignty", "puppets"],
  },
  {
    id: "FL4",
    label: "Parents vs institutions",
    short: "Parents – institutions",
    labelCs: "Rodiče – instituce",
    poles: ["protection", "indoctrination"],
  },
  {
    id: "FL5",
    label: "Us vs newcomers",
    short: "Us – newcomers",
    labelCs: "My – příchozí",
    poles: ["natives", "outsiders"],
  },
  {
    id: "FL6",
    label: "Men vs women",
    short: "Men – women",
    labelCs: "Muži – ženy",
    poles: ["men wronged", "women wronged"],
  },
  {
    id: "FL7",
    label: "Tradition/faith vs progress/secular",
    short: "Tradition – progress",
    labelCs: "Tradice/víra – pokrok/sekulární",
    poles: ["order", "decay"],
  },
  { id: "FL8", label: "Young vs old", short: "Young – old", labelCs: "Mladí – staří", poles: ["future", "experience"] },
  {
    id: "FL9",
    label: "Those who pay vs those who take",
    short: "Payers – takers",
    labelCs: "Ti, kdo platí – ti, kdo berou",
    poles: ["deserving", "undeserving"],
  },
];

export const FAULT_LINE_MAP: Record<FaultLineId, FaultLine> = Object.fromEntries(
  FAULT_LINES.map((f) => [f.id, f]),
) as Record<FaultLineId, FaultLine>;

/* ── Frame extension — fault-line coding + response protocol ─
 * Who the frame attacks (claim / messenger / institution), who typically
 * feeds it (incentive, never attribution), and its paired frame on the
 * opposite pole where one exists.
 */
export type AttackTarget = "claim" | "messenger" | "institution";

export interface FrameExtension {
  faultLines: FaultLineId[];
  pole: string;
  cuiBono: string[];
  target: AttackTarget;
  pair?: string;
  evidence?: string;
}

export const FRAME_EXTENSION: Record<string, FrameExtension> = {
  F01: {
    faultLines: ["FL1"],
    pole: "the people",
    cuiBono: ["political entrepreneurs", "alt-media"],
    target: "institution",
  },
  F02: {
    faultLines: ["FL1", "FL2", "FL3"],
    pole: "the people",
    cuiBono: ["wellness market", "political entrepreneurs", "state proxies"],
    target: "institution",
  },
  F03: {
    faultLines: ["FL2", "FL7"],
    pole: "purity",
    cuiBono: ["wellness market", "religious actors"],
    target: "claim",
  },
  F04: {
    faultLines: ["FL4"],
    pole: "protection",
    cuiBono: ["parent networks", "political entrepreneurs"],
    target: "claim",
  },
  F05: {
    faultLines: ["FL7", "FL3"],
    pole: "order",
    cuiBono: ["political entrepreneurs", "state proxies"],
    target: "claim",
  },
  F06: { faultLines: ["FL1", "FL9"], pole: "the people", cuiBono: ["political entrepreneurs"], target: "institution" },
  F07: {
    faultLines: ["FL1"],
    pole: "the people",
    cuiBono: ["alt-media", "state proxies", "platforms' free-speech lobbying"],
    target: "institution",
  },
  F08: {
    faultLines: ["FL1"],
    pole: "the people",
    cuiBono: ["political entrepreneurs", "state proxies"],
    target: "institution",
  },
  F09: { faultLines: ["FL1"], pole: "the people", cuiBono: ["alt-media", "wellness market"], target: "institution" },
  F14: {
    faultLines: ["FL1", "FL2"],
    pole: "the people",
    cuiBono: ["wellness market", "supplement sellers"],
    target: "institution",
  },
  F15: { faultLines: ["FL2"], pole: "purity", cuiBono: ["wellness market", "clean-living brands"], target: "claim" },
  F16: {
    faultLines: ["FL1"],
    pole: "the people",
    cuiBono: ["political entrepreneurs", "state proxies"],
    target: "institution",
  },
  F17: {
    faultLines: ["FL1", "FL2"],
    pole: "the people",
    cuiBono: ["supplement sellers", "alt-health influencers"],
    target: "institution",
  },
  F18: { faultLines: ["FL2"], pole: "purity", cuiBono: ["wellness market"], target: "claim" },
  F19: {
    faultLines: ["FL3", "FL1"],
    pole: "sovereignty",
    cuiBono: ["state proxies", "political entrepreneurs"],
    target: "institution",
  },
  F20: {
    faultLines: ["FL1", "FL2"],
    pole: "the people",
    cuiBono: ["alt-health influencers", "cults/self-help"],
    target: "institution",
  },
  F21: {
    faultLines: ["FL7", "FL1"],
    pole: "order",
    cuiBono: ["political entrepreneurs", "state proxies"],
    target: "institution",
  },
  F22: {
    faultLines: ["FL1", "FL9"],
    pole: "the people",
    cuiBono: ["political entrepreneurs", "state proxies"],
    target: "institution",
  },
  F23: {
    faultLines: ["FL4", "FL7"],
    pole: "protection",
    cuiBono: ["political entrepreneurs", "religious actors"],
    target: "institution",
  },
  F24: { faultLines: ["FL1"], pole: "the people", cuiBono: ["political entrepreneurs"], target: "institution" },
  F25: {
    faultLines: ["FL3", "FL7"],
    pole: "sovereignty",
    cuiBono: ["state proxies", "political entrepreneurs"],
    target: "claim",
  },
  F26: {
    faultLines: ["FL5", "FL7"],
    pole: "natives",
    cuiBono: ["political entrepreneurs", "state proxies"],
    target: "claim",
  },
  F27: {
    faultLines: ["FL3"],
    pole: "sovereignty",
    cuiBono: ["state proxies", "political entrepreneurs"],
    target: "institution",
  },
  F28: {
    faultLines: ["FL7", "FL6"],
    pole: "order",
    cuiBono: ["political entrepreneurs", "state proxies"],
    target: "claim",
  },
  F29: { faultLines: ["FL1"], pole: "the people", cuiBono: ["political entrepreneurs"], target: "institution" },
  F30: { faultLines: ["FL1"], pole: "the people", cuiBono: ["tech/wellness market"], target: "claim" },
  F31: { faultLines: [], pole: "—", cuiBono: ["media", "wellness market", "institutions' own PR"], target: "claim" },
  F32: { faultLines: ["FL2"], pole: "purity", cuiBono: ["wellness market", "supplement sellers"], target: "claim" },
  F33: {
    faultLines: ["FL2", "FL6"],
    pole: "purity",
    cuiBono: ["wellness market", "political entrepreneurs"],
    target: "claim",
  },
  F34: { faultLines: ["FL1"], pole: "the people", cuiBono: ["alt-media", "state proxies"], target: "institution" },
  F35: { faultLines: ["FL5"], pole: "natives", cuiBono: ["political entrepreneurs", "state proxies"], target: "claim" },
  F37: {
    faultLines: ["FL1", "FL3"],
    pole: "the people",
    cuiBono: ["political entrepreneurs", "state proxies"],
    target: "institution",
  },
  F38: {
    faultLines: ["FL1"],
    pole: "the people",
    cuiBono: ["alt-health influencers", "political entrepreneurs"],
    target: "institution",
  },
  F39: {
    faultLines: ["FL7", "FL6"],
    pole: "order",
    cuiBono: ["religious actors", "political entrepreneurs"],
    target: "claim",
  },
  F40: {
    faultLines: ["FL7", "FL6", "FL2"],
    pole: "order",
    cuiBono: ["religious actors", "wellness market", "state proxies"],
    target: "claim",
  },
  F41: { faultLines: ["FL1"], pole: "the people", cuiBono: ["alt-media", "supplement sellers"], target: "institution" },
  F42: {
    faultLines: ["FL2"],
    pole: "purity",
    cuiBono: ["self-help market", "alt-health influencers"],
    target: "claim",
  },
  F43: {
    faultLines: ["FL2", "FL7"],
    pole: "purity",
    cuiBono: ["wellness market", "identity movements"],
    target: "claim",
  },
  F44: { faultLines: ["FL2"], pole: "purity", cuiBono: ["diet/protocol sellers"], target: "claim" },
  F45: { faultLines: ["FL2"], pole: "purity", cuiBono: ["diet/protocol sellers"], target: "claim" },
  F46: {
    faultLines: ["FL2", "FL1"],
    pole: "purity",
    cuiBono: ["diet/protocol sellers", "alt-health influencers"],
    target: "claim",
  },
  F47: {
    faultLines: ["FL9"],
    pole: "deserving",
    cuiBono: ["political entrepreneurs", "insurers' rhetoric"],
    target: "claim",
  },
  F48: { faultLines: ["FL2"], pole: "purity", cuiBono: ["self-help market"], target: "claim" },
  F49: {
    faultLines: ["FL6", "FL7"],
    pole: "men wronged",
    cuiBono: ["state proxies", "political entrepreneurs", "tradwife content economy"],
    target: "claim",
    pair: "F55",
    evidence:
      "EUvsDisinfo 'Russia – a women's paradise' (child-free propaganda ban, teen-pregnancy payments); SAGE 2026 'Divide and Conquer' narrative 2 (progressive values destroy society)",
  },
  F50: {
    faultLines: ["FL6"],
    pole: "men wronged",
    cuiBono: ["manosphere creators", "engagement-farming accounts"],
    target: "claim",
    pair: "F56",
    evidence: "UN Women 2025 explainer (victimhood narrative, 'gynocentric society'); GNET 2025 'Monetising Misogyny'",
  },
  F51: {
    faultLines: ["FL6", "FL2"],
    pole: "men wronged",
    cuiBono: ["manosphere creators", "wellness market (hormone 'detox')", "religious actors"],
    target: "claim",
    pair: "F40",
    evidence:
      "Circulating manosphere claim built on small OC/mate-preference studies (Roberts et al. 2008; Alvergne & Lummaa 2010); later larger replication attempts largely failed (Jünger et al. 2018). Sibling of F40.",
  },
  F52: {
    faultLines: ["FL6", "FL7", "FL2"],
    pole: "men wronged",
    cuiBono: ["supplement & TRT sellers", "manosphere creators"],
    target: "claim",
    pair: "F33",
    evidence:
      "Population-level decline reported by Travison et al. 2007 (MMAS, ~1%/yr); the civilisational reading is the manosphere's (Dysregulation Nation 2025 on testosterone myths). Twin of F33.",
  },
  F53: {
    faultLines: ["FL7", "FL6", "FL3"],
    pole: "order",
    cuiBono: ["state proxies", "political entrepreneurs", "religious actors"],
    target: "claim",
    pair: "F54",
    evidence:
      "EUvsDisinfo 'Russia – a women's paradise': feminism as 'a harmful foreign influence imported from the West', Duma calls to brand it an 'extremist ideology'; SAGE 2026 'Divide and Conquer' narratives 3 & 8",
  },
  F54: {
    faultLines: ["FL6", "FL3"],
    pole: "women wronged",
    cuiBono: ["engagement-farming accounts", "political entrepreneurs"],
    target: "messenger",
    pair: "F53",
    evidence:
      "Mechanism frame: the wedge needs both poles (Iakimova 2025 on toxic identities). Precedent: the Senate-commissioned New Knowledge and Oxford/Graphika IRA reports (2018) documented personas across the spectrum, incl. Black, LGBT and feminist-coded accounts. State-actor evidence for this pole today is weaker than for F53 — flagged.",
  },
  F55: {
    faultLines: ["FL6"],
    pole: "women wronged",
    cuiBono: ["engagement-farming accounts", "commentary economy"],
    target: "claim",
    pair: "F49",
    evidence:
      "NOW 2025 'male loneliness epidemic' discourse; Frontiers 2025 (antifeminist content feeds off feminist visibility, Banet-Weiser)",
  },
  F56: {
    faultLines: ["FL6"],
    pole: "women wronged",
    cuiBono: ["engagement-farming accounts", "commentary economy"],
    target: "claim",
    pair: "F50",
    evidence:
      "'Man or bear' discourse 2024; heteropessimism literature. NB: GNET 2025 documents engagement farming on the misogynist side only; symmetric evidence is thin. Included on mechanism and case grounds.",
  },
  F57: {
    faultLines: ["FL6", "FL1"],
    pole: "men wronged",
    cuiBono: ["manosphere creators", "political entrepreneurs"],
    target: "institution",
    pair: "F55",
    evidence:
      "UN Women 2025 explainer ('gynocentric society', 'misandry'); UN Women: two-thirds of young men regularly engage with masculinity influencers",
  },
  F58: {
    faultLines: ["FL7", "FL6"],
    pole: "order",
    cuiBono: ["state proxies", "tradwife content economy", "religious actors"],
    target: "claim",
    pair: "F59",
    evidence:
      "EUvsDisinfo 'Russia – a women's paradise'; Carnegie 2025 on the global struggle over gender and family values",
  },
  F59: {
    faultLines: ["FL6"],
    pole: "women wronged",
    cuiBono: ["engagement-farming accounts", "commentary economy"],
    target: "claim",
    pair: "F58",
    evidence: "4B movement coverage (LSE 2025, UCSB 2025)",
  },
  F77: {
    faultLines: ["FL6", "FL7"],
    pole: "women wronged",
    cuiBono: ["commentary economy", "identity movements"],
    target: "claim",
    pair: "F21",
    evidence:
      "Mirror frame to F21 (already in the library); recurring in disputes over evolutionary psychology and neuroscience of sex differences. Included for symmetry; no state-actor evidence.",
  },
  F60: {
    faultLines: ["FL6"],
    pole: "men wronged",
    cuiBono: ["any opponent of the claim"],
    target: "messenger",
    evidence: "EU DisinfoLab gender-based disinformation (women framed as 'emotional/angry/crazy'); ELNET 2026",
  },
  F61: {
    faultLines: ["FL1", "FL3"],
    pole: "the people",
    cuiBono: ["state proxies", "political entrepreneurs"],
    target: "messenger",
    evidence: "Iakimova et al. 2025 (propaganda epithets); Nature 2021 COVID-scientist abuse survey",
  },
  F62: {
    faultLines: ["FL7", "FL6"],
    pole: "order",
    cuiBono: ["political entrepreneurs", "religious actors"],
    target: "messenger",
    evidence: "ELNET 2026 (attacks via motherhood); EU DisinfoLab",
  },
  F63: {
    faultLines: ["FL6"],
    pole: "men wronged",
    cuiBono: ["any opponent of the claim", "engagement-farming accounts"],
    target: "messenger",
    evidence:
      "EU DisinfoLab (McKenna 'Climate Barbie'); JCOM 2026 (Spain, N=237): appearance comments 8.8% of women vs 0.8% of men",
  },
  F64: {
    faultLines: ["FL6", "FL1"],
    pole: "men wronged",
    cuiBono: ["any opponent of the claim"],
    target: "messenger",
    evidence: "ELNET 2026; case material (matchmaking entrepreneur, 2026)",
  },
  F65: {
    faultLines: ["FL1", "FL6"],
    pole: "the people",
    cuiBono: ["any opponent of the claim"],
    target: "messenger",
    evidence:
      "JCOM 2026 (Spain, N=237, self-selected): competence challenged 34.3% of women vs 24.2% of men; 54.9% of women never report",
  },
  F66: {
    faultLines: ["FL3", "FL6"],
    pole: "sovereignty",
    cuiBono: ["state proxies", "political entrepreneurs", "coordinated harassment networks"],
    target: "messenger",
    evidence: "ELNET 2026 (partners and children drawn in, doxxing); OSCE/ODIHR toolkit",
  },
  F67: {
    faultLines: ["FL6", "FL7"],
    pole: "either — group discipline",
    cuiBono: ["identity movements on any pole", "engagement-farming accounts"],
    target: "messenger",
    evidence: "Vrstva tabu 'Identity and group discipline'; case material (matchmaking entrepreneur, 2026)",
  },
  F68: {
    faultLines: ["FL3", "FL1"],
    pole: "sovereignty",
    cuiBono: ["state proxies", "political entrepreneurs"],
    target: "institution",
    evidence: "EDMO 2025 drone incidents (Ukrainian-orchestrated provocation narrative, Romania/Baltics)",
  },
  F69: {
    faultLines: ["FL1", "FL9"],
    pole: "the people",
    cuiBono: ["state proxies", "political entrepreneurs", "alt-media"],
    target: "institution",
    evidence:
      "EDMO 2025 (arms-industry conspiracy after drone crashes; NATO/Baltic governments 'manipulating opinion for gain')",
  },
  F70: {
    faultLines: ["FL3"],
    pole: "sovereignty",
    cuiBono: ["state proxies"],
    target: "institution",
    evidence: "EDMO 2025 (uncontrolled escalation narrative across Telegram, X, TikTok, VK)",
  },
  F71: {
    faultLines: ["FL1", "FL3"],
    pole: "the people",
    cuiBono: ["alt-media", "supplement sellers", "state proxies"],
    target: "institution",
    evidence: "EDMO 2026 hantavirus (plandemic, lab origin, secret vaccines, miracle cures, electoral angle)",
  },
  F72: {
    faultLines: ["FL1", "FL3"],
    pole: "the people",
    cuiBono: ["state proxies", "political entrepreneurs", "platform free-speech lobbying"],
    target: "institution",
    evidence: "Iakimova et al. 2025 (regulation framed as 'censorship'); F07 sibling",
  },
  F73: {
    faultLines: ["FL5", "FL3"],
    pole: "natives",
    cuiBono: ["political entrepreneurs", "state proxies"],
    target: "claim",
    evidence: "SAGE 2026 narrative 5 (migrant sexual threat, fabricated statistics); F35 sibling",
  },
  F74: {
    faultLines: ["FL8", "FL9"],
    pole: "future",
    cuiBono: ["political entrepreneurs", "commentary economy"],
    target: "claim",
    pair: "F75",
    evidence:
      "Duffy, Generations (2021); Protect Democracy 2025 'The Age Divide' (49% of young voters feel unrepresented — the report attributes it to structure, not to a generation, which is exactly what the frame erases)",
  },
  F75: {
    faultLines: ["FL8"],
    pole: "experience",
    cuiBono: ["political entrepreneurs", "commentary economy"],
    target: "claim",
    pair: "F74",
    evidence: "Duffy, Generations (2021); Haidt/Twenge debate on youth mental health data",
  },
  F76: {
    faultLines: ["FL8"],
    pole: "future",
    cuiBono: ["political entrepreneurs"],
    target: "institution",
    evidence:
      "Protect Democracy 2025 'The Age Divide' (Congress median age 65/58; Boomers+Silent 26% of population, 59% of seats)",
  },
};

export const TARGET_LABEL: Record<AttackTarget, string> = {
  claim: "attacks the claim",
  messenger: "attacks the messenger",
  institution: "attacks the institution",
};
