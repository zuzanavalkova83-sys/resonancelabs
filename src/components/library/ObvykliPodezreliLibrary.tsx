import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import paintingTwins from "@/assets/suspects-twins.png.asset.json";
import paintingElderSea from "@/assets/suspects-elder-sea.png.asset.json";
import paintingElderRocks from "@/assets/suspects-elder-rocks.png.asset.json";

const FRAMES: {
  code: string;
  title: string;
  tag: string;
  quote: string;
  body: string;
}[] = [
  {
    code: "F01",
    title: "Experti nám tají pravdu",
    tag: "NEDŮVĚRA",
    quote: "Celou dobu to věděli a veřejnosti to neřekli.",
    body: "Zbaví zjištění kontextu a přerámuje je jako uniklé tajemství. Neříká, že se instituce mýlí — říká, že zamlčují to podstatné.",
  },
  {
    code: "F02",
    title: "Big Pharma a spiknutí elit",
    tag: "ZRADA",
    quote: "Zase jen další penězovod pro mocné.",
    body: "Z každého financování udělá motiv a z konsenzu spiknutí. Instituce tu nejsou omylné, ale rovnou falešné.",
  },
  {
    code: "F03",
    title: "Zahrávání si s přírodou",
    tag: "ČISTOTA",
    quote: "Hrají si na Boha a říkají tomu věda.",
    body: "Cokoli technologického se čte jako přečin proti přirozenému řádu — jako hranice, která se překračovat nemá.",
  },
  {
    code: "F04",
    title: "Děti v ohrožení",
    tag: "OCHRANA",
    quote: "Ublíží to dětem a oni to vědí.",
    body: "Přilepí libovolné zjištění k dětem — a rázem je z něj morálně podminované pole, kde se místo důkazů slyší ochrana a ohrožení.",
  },
  {
    code: "F14",
    title: "Prevenci nám tají, protože léčba vynáší",
    tag: "ZRADA",
    quote: "Kdyby chtěli, abyste byli zdraví, bylo by tohle na titulní straně.",
    body: "Předpokládá, že zdraví je pro systém nevýhodné — a že instituce zamlčují, co je podstatné, protože se jim to hodí.",
  },
  {
    code: "F15",
    title: "Všudypřítomná toxicita",
    tag: "STRACH",
    quote: "Když to detekuje přístroj, může mě to zabít.",
    body: "Povýší detekci na nebezpečí bez ohledu na dávku. Nečte se jako riziko, ale jako znečištění.",
  },
  {
    code: "F17",
    title: "Utajený lék",
    tag: "NADĚJE",
    quote: "Tohohle doktora do 24 hodin zlikvidují za to, že řekl pravdu.",
    body: "Prodává jistotu tam, kde žádná není — a z mlčení institucí dělá důkaz zrady.",
  },
  {
    code: "F22",
    title: "Příroda ví nejlíp",
    tag: "ČISTOTA",
    quote: "Přírodní je vždycky lepší.",
    body: 'Cokoli syntetického je podezřelé, cokoli „přírodního“ automaticky bezpečné. Za tou samozřejmostí je stará hranice mezi čistým a znečištěným.',
  },
  {
    code: "F43",
    title: "Opustili jsme tradice",
    tag: "KŘIVDA",
    quote: "Uměli jsme se léčit. Pak nás moderní medicína přiměla na to zapomenout.",
    body: "Staví intuici a tradici proti metodě jako rovnocenného soupeře. Spor se přitom mění v test příslušnosti: kdo je náš a kdo se zpronevěřil.",
  },
];

type EditorialSection = {
  index: string;
  heading: string;
  body: string;
  painting?: {
    url: string;
    alt: string;
    caption: string;
    filter?: string;
    orientation?: "portrait" | "landscape";
  };
  pullQuote?: string;
};

const EDITORIAL_SECTIONS: EditorialSection[] = [
  {
    index: "01",
    heading: "Čistota a kontaminace",
    body: "Některé příběhy se šíří proto, že v lidech vyvolávají pocit, že cosi překročilo hranici, která se překračovat nemá. Chemikálie, částice, hormony, vakcíny, přídatné látky, rezidua — to vše lze vnímat jako riziko, ale i jako „znečištění“. Proto některé reakce na vědu nejsou záležitostí pravděpodobnosti vedlejších účinků. Kdesi hluboko v nás jde o strach ze znečištění.",
    painting: {
      url: paintingTwins.url,
      alt: "Dvojportrét: čisté a znečištěné čtení téhož článku",
      caption: "„HRANICE, KTEROU SE NEMÁ PŘEKRAČOVAT“, OLEJ NA POCHYBNOSTI, 2026",
      filter: "contrast(1.04) brightness(0.95) saturate(0.85)",
    },
  },
  {
    index: "02",
    heading: "Děti a reprodukce",
    body: "Jakmile se studie dotkne dětí, těhotenství či plodnosti, ocitne se velmi rychle na morálně podminovaném poli. Lidé neslyší jen důkazy: vnímají i téma ochrany, ohrožení, povinnosti, pravidel, dědictví nebo ztráty.",
    pullQuote: "Na toho, kdo je překročí, si dáváme pozor.",
  },
  {
    index: "03",
    heading: "Autorita a zrada",
    body: "Některé příběhy čerpají sílu z podezření, že instituce se nejen mýlí, ale že jsou přímo falešné: zveřejňují, co se jim hodí, zamlčují to, co je podstatné, a uhlazenou mluvou zakrývají riziko pro obyčejné lidi. Nejsou to jen příběhy o nedůvěře. Jsou to příběhy o zradě.",
    painting: {
      url: paintingElderSea.url,
      alt: "Postava rozjímající nad mořem — autorita, která se dívá stranou",
      caption: "„ÚŘAD S VÝHLEDEM NA MOŘE, ODVRÁCENÝ OD PLÁŽE“, OLEJ NA DŮVĚŘE, 2026",
      filter: "contrast(1.04) brightness(0.92) saturate(0.82) hue-rotate(-6deg)",
      orientation: "landscape",
    },
  },
  {
    index: "04",
    heading: "Identita a příslušnost",
    body: "Věda a náš postoj k ní se mohou stát součástí naší identity. Jakmile se to stane, spor se mění v test příslušnosti. Kdo je naivní. Kdo prohlédl. Kdo patří k nám. Společenství bývají v hlídání příslušnosti mnohem zdatnější než ve čtení poznámek pod čarou.",
  },
  {
    index: "05",
    heading: "Moc a ztráta kontroly",
    body: "Některé z nejintenzivnějších reakcí na vědu jsou ve skutečnosti strachem z anonymní moci. Očkovací povinnosti, digitální systémy, zdravotní záznamy, algoritmy, regulace — v tom všem lze číst náznaky, že prostor našeho rozhodování se zužuje nebo se potichu přesouvá jinam. V takovém čtení už věda není informace. Je to nástroj.",
    painting: {
      url: paintingElderRocks.url,
      alt: "Starešina na skalách — postava, které se moc vzdaluje",
      caption: "„OBČAN, KTERÉMU SE ROZHODOVÁNÍ POMALU VZDALUJE“, OLEJ NA REGULACI, 2026",
      filter: "contrast(1.05) brightness(0.94) saturate(0.85)",
    },
    pullQuote: "V takovém čtení už věda není informace. Je to nástroj.",
  },
];

const LEDE_PARAGRAPHS = [
  "Občas to začíná nevinně, jako mírně povýšené divení: proč si lidé neposlechnou tu sympatickou vědkyni, a místo toho předjímají, jak to zase celé dopadne? Copak jsme to zkreslování a podezírání neviděli za pandemie? A nevídáme je čím dál častěji i dnes, kdy se zpochybňuje kdeco od ochrany před sluncem až po očkování proti spalničkám?",
  "Kdo se stýká převážně s vědci, snadno nabude dojmu, že stojí na straně, kde se hromadí veškerá moudrost — a kde končí většina problémů. Jenže tak prosté to není.",
];

const BODY_PARAGRAPHS = [
  "V komunikaci proti sobě nikdy nestojí tábor „chytrých“ a „hloupých“, případně „zlých“ a „hodných“. Řada stereotypů, které vědu provázejí, čerpá sílu ze staré lidské zkušenosti — z představ, jež mezi lidmi kolují mnohem déle, než se kdokoli pustil do nového výzkumu. A některé oblasti těchto zkušeností jsou mimořádně citlivé; zpravidla z dobrých důvodů.",
  "Patří k nim to, čemu se říká tabu. Tabu jako takové je nejspíš univerzální — antropologie a příbuzné obory je z různých stran zkoumají už desítky let a nacházejí je napříč kulturami i dějinami. Co se ovšem liší, je jejich konkrétní obsah: jak přesně se v té které kultuře pojímá takzvaná čistota, jakou strukturu má mít společenská hierarchie, kde leží hranice našeho těla a jak má vypadat svoboda rozhodování o něm. Obecně vzato však platí, že tabu určuje pravidla a normy, řídí náš pocit bezpečí či ohrožení — i když na ně zrovna nemyslíme — a má nás chránit před újmou, ať skutečnou, nebo domnělou, a hlídat naše místo ve skupině.",
  "Jsou to oblasti, o nichž se my lidé neradi přeme. Často o nich vůbec nemluvíme. A na toho, kdo je překročí, si dáváme pozor.",
  "Tabu, jichž se běžně dotýká moderní věda, je celá řada — od čistoty a nebezpečí přes hierarchii, víru, sexualitu a plození až po jídlo, identitu i moc. Pro tuto chvíli se zaměřme na pět okruhů, které se v příbězích o vědě objevují nejčastěji. Nejsou všechny. V angličtině jsem jich shromáždila víc a ještě další přibudou.",
];

/* ── Building blocks ─────────────────────────────────────── */
const PullQuote = ({ text }: { text: string }) => (
  <div className="my-24 sm:my-32 max-w-[42rem] mx-auto text-center">
    <p
      className="font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.15] tracking-wide"
      style={{ color: "hsl(var(--wine))" }}
    >
      „{text}“
    </p>
  </div>
);

const SectionNumeral = ({ n }: { n: string }) => (
  <div
    aria-hidden
    className="font-display leading-none select-none"
    style={{
      color: "hsl(var(--wine) / 0.18)",
      fontSize: "clamp(9rem, 22vw, 18rem)",
      letterSpacing: "-0.02em",
    }}
  >
    {n}
  </div>
);

/* Consistent painting frame — never crops through faces.
   Portrait: 4:5 shape, object-contain, wine-deep bg letterbox.
   Landscape: 3:2 shape, object-contain, wine-deep bg. */
const PaintingFrame = ({
  url,
  alt,
  caption,
  filter,
  orientation = "portrait",
  bg = "hsl(var(--burgundy))",
  captionColor = "hsl(30 12% 52%)",
}: {
  url: string;
  alt: string;
  caption: string;
  filter?: string;
  orientation?: "portrait" | "landscape";
  bg?: string;
  captionColor?: string;
}) => (
  <figure className="flex flex-col w-full">
    <div
      className={
        "relative w-full overflow-hidden " +
        (orientation === "landscape" ? "aspect-[3/2]" : "aspect-[4/5]")
      }
      style={{ background: bg }}
    >
      <img
        src={url}
        alt={alt}
        draggable={false}
        className="absolute inset-0 w-full h-full object-contain"
        style={{ filter }}
      />
    </div>
    <figcaption className="mt-4">
      <p
        className="font-heading text-[10.5px] uppercase tracking-[0.22em] leading-[1.55] max-w-[44ch]"
        style={{ color: captionColor }}
      >
        {caption}
      </p>
    </figcaption>
  </figure>
);

const EditorialSectionBlock = ({ s, i }: { s: EditorialSection; i: number }) => {
  // Alternating rhythm: only count sections that carry a painting.
  const paintingLeft = i % 2 === 1;
  const textCol = (
    <div className="max-w-[40rem]">
      <p
        className="font-mono text-[12px] tracking-[0.28em] mb-5"
        style={{ color: "hsl(var(--wine))" }}
      >
        {s.index}
      </p>
      <div
        className="h-px w-16 mb-6"
        style={{ background: "hsl(var(--wine) / 0.4)" }}
      />
      <h3
        className="font-display text-3xl sm:text-4xl md:text-[2.75rem] tracking-wider leading-[0.95] mb-8"
        style={{ color: "hsl(340 30% 22%)" }}
      >
        {s.heading}
      </h3>
      <p
        className="text-[17px] sm:text-[18px] leading-[1.7]"
        style={{ color: "hsl(30 10% 38%)" }}
      >
        {s.body}
      </p>
    </div>
  );

  // No painting → clean text-only block with subtle numeral marker.
  if (!s.painting) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-2 hidden lg:block">
          <div
            aria-hidden
            className="font-display leading-none select-none"
            style={{
              color: "hsl(var(--wine) / 0.22)",
              fontSize: "clamp(4rem, 8vw, 7rem)",
              letterSpacing: "-0.02em",
            }}
          >
            {s.index}
          </div>
        </div>
        <div className="lg:col-span-10">{textCol}</div>
      </div>
    );
  }

  // Template B — landscape painting spans reading column, text below.
  if (s.painting.orientation === "landscape") {
    return (
      <div className="max-w-[52rem] mx-auto">
        <PaintingFrame
          url={s.painting.url}
          alt={s.painting.alt}
          caption={s.painting.caption}
          filter={s.painting.filter}
          orientation="landscape"
        />
        <div className="mt-12 sm:mt-16">{textCol}</div>
      </div>
    );
  }

  // Template A — portrait, 50/50 split, alternating side.
  const visualCol = (
    <PaintingFrame
      url={s.painting.url}
      alt={s.painting.alt}
      caption={s.painting.caption}
      filter={s.painting.filter}
      orientation="portrait"
    />
  );
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      {paintingLeft ? (
        <>
          <div className="lg:col-span-6 order-2 lg:order-1">{visualCol}</div>
          <div className="lg:col-span-6 order-1 lg:order-2 flex lg:justify-start">{textCol}</div>
        </>
      ) : (
        <>
          <div className="lg:col-span-6 order-1 flex lg:justify-end">{textCol}</div>
          <div className="lg:col-span-6 order-2">{visualCol}</div>
        </>
      )}
    </div>
  );
};

const ObvykliPodezreliLibrary = () => {
  const [noteOpen, setNoteOpen] = useState(false);
  return (
    <section className="relative overflow-hidden">
      {/* ── Hero header — ivory warm ── */}
      <div className="section-ivory-warm editorial-grain relative">
        <div className="relative max-w-[80rem] mx-auto px-6 sm:px-10 lg:px-14 py-28 sm:py-36 lg:py-44">
          <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 max-w-[40rem]">
              <div className="mb-6 inline-flex items-center gap-1 p-1 border" style={{ borderColor: "hsl(var(--wine) / 0.25)", background: "hsl(var(--parchment) / 0.5)" }}>
                <Link
                  to="/the-usual-suspects"
                  className="font-heading text-[10.5px] tracking-[0.22em] uppercase font-medium px-3 py-1.5 transition-colors hover:text-[hsl(var(--wine))]"
                  style={{ color: "hsl(30 10% 45%)" }}
                >
                  EN
                </Link>
                <span
                  aria-current="page"
                  className="font-heading text-[10.5px] tracking-[0.22em] uppercase font-medium px-3 py-1.5"
                  style={{ background: "hsl(var(--wine))", color: "hsl(35 30% 92%)" }}
                >
                  CZ
                </span>
              </div>
              <p
                className="font-heading text-[11px] tracking-[0.22em] uppercase font-medium mb-6"
                style={{ color: "hsl(var(--wine))" }}
              >
                Terénní průvodce · č. 01
              </p>
              <h1
                className="font-display text-6xl sm:text-7xl md:text-8xl tracking-wider leading-[0.88] mb-8"
                style={{ color: "hsl(340 30% 25%)" }}
              >
                Obvyklí podezřelí
                <span
                  className="block font-display text-xl sm:text-2xl md:text-3xl tracking-wider leading-[1] mt-4 italic font-normal"
                  style={{ color: "hsl(340 20% 45%)" }}
                >
                  / The usual suspects
                </span>
              </h1>
              <div className="w-16 h-[1px] mb-10" style={{ background: "hsl(30 15% 70%)" }} />
              <p className="text-xl md:text-[22px] leading-[1.55] max-w-[38ch] mb-6" style={{ color: "hsl(30 10% 38%)" }}>
                Příběhy a stereotypy, které dokáží pohltit váš výzkum dřív, než si ho lidé vůbec stihnou přečíst (pokud je to vůbec napadne). Sleduji je, třídím a zkoumám, odkud se bere panika, skandál, ideologické hádky, nezřízené nadšení nebo prostě jen hluk.
              </p>
              <p className="text-[17px] leading-[1.7] max-w-[38ch]" style={{ color: "hsl(30 10% 55%)" }}>
                Tyhle škatulky nejsou náhodné. Opakují se. To je dobrá zpráva — na zkreslení, které se opakuje, se dá připravit.
              </p>
            </div>
            <figure className="lg:col-span-6 flex flex-col">
              <div className="relative aspect-[3/4] w-full overflow-hidden" style={{ background: "hsl(var(--burgundy))" }}>
                <img
                  src={paintingTwins.url}
                  alt="Dva čtenáři téhož článku"
                  className="w-full h-full object-cover"
                  draggable={false}
                  style={{ filter: "contrast(1.03) brightness(0.96) saturate(0.88)" }}
                />
              </div>
              <figcaption className="mt-5">
                <p
                  className="font-heading text-[10.5px] md:text-[11px] uppercase tracking-[0.28em] leading-[1.55]"
                  style={{ color: "hsl(30 12% 50%)" }}
                >
                  „DVA ČTENÁŘI TÉHOŽ ČLÁNKU DOCHÁZEJÍ K OPAČNÝM ZÁVĚRŮM“, OLEJ NA VODĚ, 2026
                </p>
              </figcaption>
            </figure>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-6 text-[12px] font-mono tracking-[0.15em] uppercase" style={{ color: "hsl(30 10% 58%)" }}>
            <span>5 citlivých bodů</span>
            <span>·</span>
            <span>desítky vzorců</span>
            <span>·</span>
            <span>živý dokument</span>
          </div>
        </div>
      </div>

      {/* ── Editorial note ── */}
      <div className="section-ivory-warm editorial-grain" style={{ borderTop: "1px solid hsl(30 15% 78% / 0.5)" }}>
        <div className="max-w-[80rem] mx-auto px-6 sm:px-10 lg:px-14 py-28 sm:py-36 lg:py-44">
          <div className="max-w-[40rem]">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-8 h-[1px]" style={{ background: "hsl(30 15% 75%)" }} />
              <span className="text-[12px] font-mono tracking-[0.28em] uppercase" style={{ color: "hsl(30 15% 58%)" }}>
                Ediční poznámka
              </span>
            </div>
            <p
              className="font-heading text-[11px] tracking-[0.22em] uppercase font-medium mb-8"
              style={{ color: "hsl(var(--wine))" }}
            >
              Podceňovat veřejnost a její předporozumění tématu je strategická chyba.
            </p>
            <button
              type="button"
              onClick={() => setNoteOpen((v) => !v)}
              aria-expanded={noteOpen}
              aria-controls="edicni-poznamka-content"
              className="group flex items-start gap-6 text-left w-full mb-5 transition-opacity hover:opacity-80"
            >
              <h2
                className="font-display text-4xl sm:text-5xl md:text-6xl tracking-wider leading-[0.95] flex-1"
                style={{ color: "hsl(340 30% 25%)" }}
              >
                Kde se berou příběhy, které křiví vědu
              </h2>
              <ChevronDown
                className="w-8 h-8 mt-3 shrink-0 transition-transform duration-300"
                style={{
                  color: "hsl(var(--wine))",
                  transform: noteOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
                aria-hidden
              />
            </button>
            <p
              className="font-heading text-[11px] tracking-[0.28em] uppercase font-medium"
              style={{ color: "hsl(30 15% 55%)" }}
            >
              {noteOpen ? "Sbalit" : "Rozbalit celou poznámku"}
            </p>
          </div>

          {noteOpen && (
          <div id="edicni-poznamka-content" className="animate-editorial-in mt-16 sm:mt-20">
            {/* Lede */}
            <div className="max-w-[40rem] space-y-7 mb-20 sm:mb-28">
              {LEDE_PARAGRAPHS.map((p, i) => (
                <p
                  key={i}
                  className="text-[20px] sm:text-[22px] leading-[1.6]"
                  style={{ color: "hsl(340 25% 22%)", fontWeight: 400 }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Body prose */}
            <div className="max-w-[40rem] space-y-7 mb-24 sm:mb-32">
              {BODY_PARAGRAPHS.map((p, i) => (
                <p
                  key={i}
                  className="text-[17px] sm:text-[18px] leading-[1.75]"
                  style={{ color: "hsl(30 10% 38%)" }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Five thematic sections, alternating with paintings + pull quotes */}
            <div>
              {EDITORIAL_SECTIONS.map((s, i) => (
                <div key={s.index}>
                  <div className="mb-24 sm:mb-32">
                    <EditorialSectionBlock s={s} i={i} />
                  </div>
                  {s.pullQuote && <PullQuote text={s.pullQuote} />}
                </div>
              ))}
            </div>

            {/* Closing bridge */}
            <div className="max-w-[40rem] mt-16 sm:mt-24 mb-24 sm:mb-32">
              <p className="text-[18px] sm:text-[19px] leading-[1.75]" style={{ color: "hsl(30 10% 42%)" }}>
                Tahle knihovna proto není jen katalogem špatných výkladů. Je to pokus zmapovat hlubší tlaky, které výkladům znovu a znovu dodávají sílu.
              </p>
            </div>

            {/* Coda — full-width moment */}
            <div className="text-center py-16 sm:py-24">
              <div className="h-px w-16 mx-auto mb-14" style={{ background: "hsl(var(--wine) / 0.4)" }} />
              <p
                className="font-display tracking-wider leading-[1.1] mb-6"
                style={{
                  color: "hsl(340 30% 22%)",
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                }}
              >
                Podrobnosti se mění.
              </p>
              <p
                className="font-display tracking-wider leading-[1.1]"
                style={{
                  color: "hsl(var(--wine))",
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                }}
              >
                Háčky ne.
              </p>
              <div className="h-px w-16 mx-auto mt-14" style={{ background: "hsl(var(--wine) / 0.4)" }} />
            </div>
          </div>
          )}
        </div>
      </div>

      {/* ── Full-bleed painting interlude ── */}
      <figure className="relative w-full" style={{ background: "hsl(var(--wine-deep))" }}>
        <div className="relative w-full overflow-hidden" style={{ maxHeight: "78vh" }}>
          <img
            src={paintingElderSea.url}
            alt="Postava rozjímající nad mořem"
            className="w-full h-full object-cover"
            draggable={false}
            style={{
              maxHeight: "78vh",
              filter: "contrast(1.04) brightness(0.92) saturate(0.85) hue-rotate(-10deg)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none mix-blend-color"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--wine-deep) / 0.35), hsl(var(--burgundy) / 0.2) 60%, hsl(var(--wine) / 0.3))",
            }}
          />
        </div>
        <figcaption className="max-w-[80rem] mx-auto px-6 sm:px-10 lg:px-14 py-10">
          <p
            className="font-heading text-[10.5px] md:text-[11px] uppercase tracking-[0.28em] leading-[1.55] max-w-[44ch]"
            style={{ color: "hsl(30 15% 62%)" }}
          >
            „POSTAVA ROZJÍMAJÍCÍ NAD MOŘEM, ZATÍMCO JEJÍ ZJIŠTĚNÍ ODPLOUVÁ“, OLEJ NA PROUDU, 2026
          </p>
        </figcaption>
      </figure>

      {/* ── Frame grid ── */}
      <div style={{ background: "hsl(var(--wine-deep))" }}>
        <div className="max-w-[80rem] mx-auto px-6 sm:px-10 lg:px-14 py-28 sm:py-36 lg:py-44">
          <div className="mb-16 max-w-[40rem]">
            <div className="flex items-center gap-5 mb-5">
              <div className="w-8 h-[1px]" style={{ background: "hsl(var(--wine-glow) / 0.4)" }} />
              <span className="text-[12px] font-mono tracking-[0.28em] uppercase" style={{ color: "hsl(30 15% 60%)" }}>
                {FRAMES.length} vzorců
              </span>
            </div>
            <h2
              className="font-display text-4xl sm:text-5xl md:text-6xl tracking-wider leading-[0.9] mb-6"
              style={{ color: "hsl(35 30% 90%)" }}
            >
              Vzorce
            </h2>
            <p className="text-[17px] leading-[1.7]" style={{ color: "hsl(30 15% 68%)" }}>
              Devět rámců, které se v příbězích o vědě vracejí nejčastěji. Každý má svou emoční signaturu, typickou větu a mechanismus, kterým zjištění přepisuje.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {FRAMES.map((f) => (
              <article
                key={f.code}
                className="p-8 sm:p-9 flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "hsl(var(--wine) / 0.15)",
                  border: "1px solid hsl(var(--wine-glow) / 0.15)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsl(var(--wine) / 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsl(var(--wine) / 0.15)";
                }}
              >
                <div className="flex items-baseline justify-between gap-3 mb-8">
                  <span
                    className="text-[11px] font-mono tracking-[0.28em]"
                    style={{ color: "hsl(30 15% 60%)" }}
                  >
                    {f.code}
                  </span>
                  <span
                    className="text-[10px] font-mono tracking-[0.28em] uppercase px-2 py-1"
                    style={{
                      background: "hsl(var(--wine) / 0.3)",
                      color: "hsl(var(--wine-blush))",
                    }}
                  >
                    {f.tag}
                  </span>
                </div>
                <blockquote
                  className="font-display text-[22px] sm:text-[24px] leading-[1.2] tracking-wide mb-8"
                  style={{
                    color: "hsl(35 30% 92%)",
                    fontStyle: "normal",
                  }}
                >
                  „{f.quote}“
                </blockquote>
                <div className="mt-auto pt-5 border-t" style={{ borderColor: "hsl(var(--wine-glow) / 0.2)" }}>
                  <h3
                    className="text-[13px] font-medium tracking-wide leading-snug mb-3"
                    style={{ color: "hsl(35 25% 80%)" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.7]" style={{ color: "hsl(30 15% 62%)" }}>
                    {f.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* ── Coda ── */}
      <div className="section-ivory-warm">
        <div className="max-w-[80rem] mx-auto px-6 sm:px-10 lg:px-14 py-28 sm:py-36 lg:py-44">
          <hr
            className="border-0 h-px mb-16"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, hsl(30 15% 78% / 0.5) 20%, hsl(30 15% 78% / 0.5) 80%, transparent 100%)",
            }}
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <figure className="lg:col-span-6">
              <div className="relative aspect-[4/5] w-full overflow-hidden" style={{ background: "hsl(var(--burgundy))" }}>
                <img
                  src={paintingElderRocks.url}
                  alt="Starešina důkazů"
                  className="w-full h-full object-cover"
                  draggable={false}
                  style={{ filter: "contrast(1.04) brightness(0.95) saturate(0.85)" }}
                />
              </div>
              <figcaption className="mt-5">
                <p
                  className="font-heading text-[10.5px] md:text-[11px] uppercase tracking-[0.28em] leading-[1.55] max-w-[36ch]"
                  style={{ color: "hsl(30 12% 50%)" }}
                >
                  „STAŘEŠINA DŮKAZŮ, STÁLE ČEKÁ, AŽ SI HO NĚKDO PŘEČTE“, KOMBINOVANÁ TECHNIKA A TRPĚLIVOST, 2026
                </p>
              </figcaption>
            </figure>
            <div className="lg:col-span-6 space-y-6 max-w-[40rem]">
              <p
                className="font-heading text-[11px] tracking-[0.28em] uppercase font-medium"
                style={{ color: "hsl(var(--wine))" }}
              >
                Pracovní dokument
              </p>
              <p className="text-[19px] sm:text-[20px] leading-[1.65]" style={{ color: "hsl(30 10% 38%)" }}>
                Tento přehled není vyčerpávající, jeho{" "}
                <a
                  href="/the-usual-suspects"
                  className="underline underline-offset-4 transition-colors"
                  style={{ color: "hsl(var(--wine))", textDecorationColor: "hsl(var(--wine) / 0.4)" }}
                >
                  anglická verze
                </a>{" "}
                je širší. Mapuje vzorce, které vídám nejčastěji. Nové se objevují pokaždé, když si staré strachy najdou nová témata — jejich vnitřní logika se ale mění jen zřídka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObvykliPodezreliLibrary;