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

const EDITORIAL_SECTIONS: { heading: string; body: string }[] = [
  {
    heading: "Čistota a kontaminace",
    body: "Některé příběhy se šíří proto, že v lidech vyvolávají pocit, že cosi překročilo hranici, která se překračovat nemá. Chemikálie, částice, hormony, vakcíny, přídatné látky, rezidua — to vše lze vnímat jako riziko, ale i jako „znečištění“. Proto některé reakce na vědu nejsou záležitostí pravděpodobnosti vedlejších účinků. Kdesi hluboko v nás jde o strach ze znečištění.",
  },
  {
    heading: "Děti a reprodukce",
    body: "Jakmile se studie dotkne dětí, těhotenství či plodnosti, ocitne se velmi rychle na morálně podminovaném poli. Lidé neslyší jen důkazy: vnímají i téma ochrany, ohrožení, povinnosti, pravidel, dědictví nebo ztráty.",
  },
  {
    heading: "Autorita a zrada",
    body: "Některé příběhy čerpají sílu z podezření, že instituce se nejen mýlí, ale že jsou přímo falešné: zveřejňují, co se jim hodí, zamlčují to, co je podstatné, a uhlazenou mluvou zakrývají riziko pro obyčejné lidi. Nejsou to jen příběhy o nedůvěře. Jsou to příběhy o zradě.",
  },
  {
    heading: "Identita a příslušnost",
    body: "Věda a náš postoj k ní se mohou stát součástí naší identity. Jakmile se to stane, spor se mění v test příslušnosti. Kdo je naivní. Kdo prohlédl. Kdo patří k nám. Společenství bývají v hlídání příslušnosti mnohem zdatnější než ve čtení poznámek pod čarou.",
  },
  {
    heading: "Moc a ztráta kontroly",
    body: "Některé z nejintenzivnějších reakcí na vědu jsou ve skutečnosti strachem z anonymní moci. Očkovací povinnosti, digitální systémy, zdravotní záznamy, algoritmy, regulace — v tom všem lze číst náznaky, že prostor našeho rozhodování se zužuje nebo se potichu přesouvá jinam. V takovém čtení už věda není informace. Je to nástroj.",
  },
];

const ObvykliPodezreliLibrary = () => {
  return (
    <section className="relative overflow-hidden">
      {/* ── Hero header — ivory warm ── */}
      <div className="section-ivory-warm editorial-grain relative">
        <div className="relative max-w-[var(--editorial-max)] mx-auto px-6 sm:px-10 py-28 sm:py-36">
          <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <p
                className="font-heading text-[11px] tracking-[0.22em] uppercase font-medium mb-6"
                style={{ color: "hsl(var(--wine))" }}
              >
                Terénní průvodce · č. 01
              </p>
              <h1
                className="font-display text-6xl sm:text-7xl md:text-8xl tracking-wider leading-[0.85] mb-10"
                style={{ color: "hsl(340 30% 25%)" }}
              >
                <span>Obvyklí</span>
                <br />
                <span>podezřelí</span>
              </h1>
              <div className="w-16 h-[1px] mb-8" style={{ background: "hsl(30 15% 70%)" }} />
              <p className="text-xl leading-relaxed max-w-xl mb-5 text-balance" style={{ color: "hsl(30 10% 42%)" }}>
                Příběhy a stereotypy, které dokáží pohltit váš výzkum dřív, než si ho lidé vůbec stihnou přečíst (pokud je to vůbec napadne). Sleduji je, třídím a zkoumám, odkud se bere panika, skandál, ideologické hádky, nezřízené nadšení nebo prostě jen hluk.
              </p>
              <p className="text-base leading-relaxed max-w-xl text-balance" style={{ color: "hsl(30 10% 58%)" }}>
                Tyhle škatulky nejsou náhodné. Opakují se. To je dobrá zpráva — na zkreslení, které se opakuje, se dá připravit.
              </p>
            </div>
            <figure className="lg:col-span-7 flex flex-col">
              <div className="relative aspect-square w-full overflow-hidden" style={{ background: "hsl(var(--burgundy))" }}>
                <img
                  src={paintingTwins.url}
                  alt="Dva čtenáři téhož článku"
                  className="w-full h-full object-cover"
                  draggable={false}
                  style={{ filter: "contrast(1.03) brightness(0.96) saturate(0.88)" }}
                />
              </div>
              <figcaption className="mt-5 flex flex-col items-center text-center">
                <div className="h-px w-10 mb-3" style={{ background: "hsl(var(--wine) / 0.35)" }} />
                <p
                  className="font-heading text-[11px] md:text-[12px] uppercase tracking-[0.22em] leading-[1.55] max-w-[46ch]"
                  style={{ color: "hsl(30 12% 50%)" }}
                >
                  „DVA ČTENÁŘI TÉHOŽ ČLÁNKU DOCHÁZEJÍ K OPAČNÝM ZÁVĚRŮM“, OLEJ NA VODĚ, 2026
                </p>
              </figcaption>
            </figure>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-6 text-[13px] font-mono tracking-wide" style={{ color: "hsl(30 10% 58%)" }}>
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
        <div className="max-w-[var(--editorial-max)] mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-5 mb-8">
              <div className="w-8 h-[1px]" style={{ background: "hsl(30 15% 75%)" }} />
              <span className="text-[12px] font-mono tracking-[0.22em] uppercase" style={{ color: "hsl(30 15% 58%)" }}>
                Ediční poznámka
              </span>
            </div>
            <p
              className="font-heading text-[11px] tracking-[0.22em] uppercase font-medium mb-6"
              style={{ color: "hsl(var(--wine))" }}
            >
              Podceňovat veřejnost a její předporozumění tématu je strategická chyba.
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider leading-[0.9] mb-10"
              style={{ color: "hsl(340 30% 25%)" }}
            >
              Kde se berou příběhy, které křiví vědu
            </h2>
          </div>

          <div className="max-w-xl space-y-6">
            {[
              "Občas to začíná nevinně, jako mírně povýšené divení: proč si lidé neposlechnou tu sympatickou vědkyni, a místo toho předjímají, jak to zase celé dopadne? Copak jsme to zkreslování a podezírání neviděli za pandemie? A nevídáme je čím dál častěji i dnes, kdy se zpochybňuje kdeco od ochrany před sluncem až po očkování proti spalničkám?",
              "Kdo se stýká převážně s vědci, snadno nabude dojmu, že stojí na straně, kde se hromadí veškerá moudrost — a kde končí většina problémů. Jenže tak prosté to není.",
              "V komunikaci proti sobě nikdy nestojí tábor „chytrých“ a „hloupých“, případně „zlých“ a „hodných“. Řada stereotypů, které vědu provázejí, čerpá sílu ze staré lidské zkušenosti — z představ, jež mezi lidmi kolují mnohem déle, než se kdokoli pustil do nového výzkumu. A některé oblasti těchto zkušeností jsou mimořádně citlivé; zpravidla z dobrých důvodů.",
              "Patří k nim to, čemu se říká tabu. Tabu jako takové je nejspíš univerzální — antropologie a příbuzné obory je z různých stran zkoumají už desítky let a nacházejí je napříč kulturami i dějinami. Co se ovšem liší, je jejich konkrétní obsah: jak přesně se v té které kultuře pojímá takzvaná čistota, jakou strukturu má mít společenská hierarchie, kde leží hranice našeho těla a jak má vypadat svoboda rozhodování o něm. Obecně vzato však platí, že tabu určuje pravidla a normy, řídí náš pocit bezpečí či ohrožení — i když na ně zrovna nemyslíme — a má nás chránit před újmou, ať skutečnou, nebo domnělou, a hlídat naše místo ve skupině.",
              "Jsou to oblasti, o nichž se my lidé neradi přeme. Často o nich vůbec nemluvíme. A na toho, kdo je překročí, si dáváme pozor.",
              "Tabu, jichž se běžně dotýká moderní věda, je celá řada — od čistoty a nebezpečí přes hierarchii, víru, sexualitu a plození až po jídlo, identitu i moc. Pro tuto chvíli se zaměřme na pět okruhů, které se v příbězích o vědě objevují nejčastěji. Nejsou všechny. V angličtině jsem jich shromáždila víc a ještě další přibudou.",
            ].map((p, i) => (
              <p key={i} className="text-[15px] leading-[1.85]" style={{ color: "hsl(30 10% 42%)" }}>
                {p}
              </p>
            ))}
          </div>

          <div className="max-w-xl space-y-12 mt-16">
            {EDITORIAL_SECTIONS.map((s) => (
              <div key={s.heading}>
                <h3
                  className="font-display text-xl sm:text-2xl tracking-wider mb-4"
                  style={{ color: "hsl(340 30% 25%)" }}
                >
                  {s.heading}
                </h3>
                <p className="text-[15px] leading-[1.85]" style={{ color: "hsl(30 10% 48%)" }}>
                  {s.body}
                </p>
              </div>
            ))}

            <div className="border-l-[2px] pl-6 py-2 space-y-3" style={{ borderColor: "hsl(var(--wine) / 0.3)" }}>
              <p className="text-[15px] leading-[1.85]" style={{ color: "hsl(30 10% 48%)" }}>
                Tahle knihovna proto není jen katalogem špatných výkladů. Je to pokus zmapovat hlubší tlaky, které výkladům znovu a znovu dodávají sílu.
              </p>
              <p className="text-[15px] leading-[1.85]" style={{ color: "hsl(30 10% 42%)" }}>
                Podrobnosti se mění.
              </p>
              <p className="text-[15px] leading-[1.85]" style={{ color: "hsl(30 10% 42%)" }}>
                Škatulky už máme.
              </p>
            </div>
          </div>
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
      </figure>

      {/* ── Frame grid ── */}
      <div style={{ background: "hsl(var(--wine-deep))" }}>
        <div className="max-w-[var(--editorial-max)] mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <div className="mb-12">
            <div className="flex items-center gap-5 mb-5">
              <div className="w-8 h-[1px]" style={{ background: "hsl(var(--wine-glow) / 0.4)" }} />
              <span className="text-[12px] font-mono tracking-[0.22em] uppercase" style={{ color: "hsl(30 15% 60%)" }}>
                {FRAMES.length} vzorců
              </span>
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider leading-[0.9]"
              style={{ color: "hsl(35 30% 90%)" }}
            >
              Vzorce
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {FRAMES.map((f) => (
              <article
                key={f.code}
                className="p-6 sm:p-7"
                style={{
                  background: "hsl(var(--wine) / 0.15)",
                  border: "1px solid hsl(var(--wine-glow) / 0.15)",
                }}
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span
                    className="text-[11px] font-mono tracking-[0.22em]"
                    style={{ color: "hsl(30 15% 55%)" }}
                  >
                    {f.code}
                  </span>
                  <span
                    className="text-[10px] font-mono tracking-[0.22em] uppercase px-2 py-0.5"
                    style={{
                      background: "hsl(var(--wine) / 0.3)",
                      color: "hsl(var(--wine-blush))",
                    }}
                  >
                    {f.tag}
                  </span>
                </div>
                <h3
                  className="text-[15px] sm:text-base font-medium leading-snug mb-4"
                  style={{ color: "hsl(35 30% 90%)" }}
                >
                  {f.title}
                </h3>
                <blockquote
                  className="border-l-[2px] pl-4 mb-4 text-[13px] leading-relaxed"
                  style={{
                    borderColor: "hsl(var(--wine-glow) / 0.4)",
                    color: "hsl(30 15% 75%)",
                    fontStyle: "normal",
                  }}
                >
                  „{f.quote}“
                </blockquote>
                <p className="text-[13px] leading-relaxed" style={{ color: "hsl(30 15% 60%)" }}>
                  {f.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* ── Coda ── */}
      <div className="section-ivory-warm">
        <div className="max-w-[var(--editorial-max)] mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <hr
            className="border-0 h-px mb-16"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, hsl(30 15% 78% / 0.5) 20%, hsl(30 15% 78% / 0.5) 80%, transparent 100%)",
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
            <figure className="md:col-span-5">
              <div className="relative aspect-square w-full overflow-hidden" style={{ background: "hsl(var(--burgundy))" }}>
                <img
                  src={paintingElderRocks.url}
                  alt="Starešina důkazů"
                  className="w-full h-full object-cover"
                  draggable={false}
                  style={{ filter: "contrast(1.04) brightness(0.95) saturate(0.85)" }}
                />
              </div>
              <figcaption className="mt-5 flex flex-col items-center text-center">
                <div className="h-px w-10 mb-3" style={{ background: "hsl(var(--wine) / 0.35)" }} />
                <p
                  className="font-heading text-[11px] md:text-[12px] uppercase tracking-[0.22em] leading-[1.55] max-w-[36ch]"
                  style={{ color: "hsl(30 12% 50%)" }}
                >
                  „STAŘEŠINA DŮKAZŮ, STÁLE ČEKÁ, AŽ SI HO NĚKDO PŘEČTE“, KOMBINOVANÁ TECHNIKA A TRPĚLIVOST, 2026
                </p>
              </figcaption>
            </figure>
            <div className="md:col-span-7 space-y-6">
              <p
                className="font-heading text-[11px] tracking-[0.22em] uppercase font-medium"
                style={{ color: "hsl(var(--wine))" }}
              >
                Pracovní dokument
              </p>
              <p className="text-lg leading-[1.7] max-w-xl" style={{ color: "hsl(30 10% 42%)" }}>
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