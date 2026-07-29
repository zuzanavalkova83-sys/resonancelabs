import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useGlitch, glitchStyle } from "@/hooks/useGlitch";
import { narrativeFrames, NarrativeFrame } from "@/data/narrativeFrames";
import NarrativeBiteLayer from "@/components/library/NarrativeBiteLayer";
import paintingTwins from "@/assets/suspects-twins.png.asset.json";
import paintingElderSea from "@/assets/suspects-elder-sea.png.asset.json";
import paintingElderRocks from "@/assets/suspects-elder-rocks.png.asset.json";
import {
  FRAME_EDITORIAL,
  PATTERN_FAMILIES,
  EMOTION_TAGS,
  MECHANISM_TAGS,
  TERRAIN_TAGS,
  type FrameEditorial,
  type PatternFamily,
} from "@/data/frameAtlas";

/* Consistent painting frame — never crops through faces. */
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
  <figure className="flex flex-col w-full items-center">
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
    <figcaption className="mt-4 text-center">
      <p
        className="font-heading text-[10.5px] uppercase tracking-[0.22em] leading-[1.55] max-w-[44ch]"
        style={{ color: captionColor }}
      >
        {caption}
      </p>
    </figcaption>
  </figure>
);

type BrowseMode = "family" | "emotion" | "mechanism" | "terrain";
const editorialFor = (id: string): FrameEditorial | undefined =>
  FRAME_EDITORIAL[id];
const frameMap = new Map(narrativeFrames.map((f) => [f.id, f]));

// Resolve virtual editorial IDs (e.g. "F37:cs") back to the base frame
const resolveFrameId = (id: string): string => id.split(":")[0];

function groupBy<K extends string>(
  key: (e: FrameEditorial) => K,
  labelMap?: Record<K, { label: string; description: string }>
): { key: K; label: string; description?: string; ids: string[] }[] {
  const groups = new Map<K, string[]>();
  for (const [id, ed] of Object.entries(FRAME_EDITORIAL)) {
    const k = key(ed);
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k)!.push(id);
  }
  return Array.from(groups.entries()).map(([k, ids]) => ({
    key: k,
    label: labelMap?.[k]?.label ?? k,
    description: labelMap?.[k]?.description,
    ids,
  }));
}

/* ── Alternating sub-section palettes ──────────────────────── */
const SECTION_THEMES = [
  {
    bg: "hsl(var(--wine-deep))",
    heading: "hsl(35 30% 90%)",
    body: "hsl(30 15% 70%)",
    meta: "hsl(30 15% 55%)",
    tileBg: "hsl(var(--wine) / 0.15)",
    tileBorder: "hsl(var(--wine-glow) / 0.15)",
    tileActiveBg: "hsl(var(--wine))",
    tileActiveBorder: "hsl(var(--wine-glow) / 0.4)",
    tileText: "hsl(35 25% 85%)",
    tileTextMuted: "hsl(30 15% 60%)",
    divider: "hsl(var(--wine-glow) / 0.15)",
    quoteBorder: "hsl(var(--wine-glow) / 0.4)",
    tagBg: "hsl(var(--wine) / 0.25)",
    mode: "dark" as const,
  },
  {
    bg: "hsl(var(--ivory-warm))",
    heading: "hsl(340 30% 22%)",
    body: "hsl(30 10% 42%)",
    meta: "hsl(30 15% 58%)",
    tileBg: "hsl(var(--parchment) / 0.7)",
    tileBorder: "hsl(30 15% 78% / 0.5)",
    tileActiveBg: "hsl(var(--wine-deep))",
    tileActiveBorder: "hsl(var(--wine-glow) / 0.35)",
    tileText: "hsl(340 25% 25%)",
    tileTextMuted: "hsl(30 10% 52%)",
    divider: "hsl(30 15% 78% / 0.5)",
    quoteBorder: "hsl(var(--wine) / 0.35)",
    tagBg: "hsl(30 15% 82%)",
    mode: "light" as const,
  },
] as const;

/* ── Detail Panel ──────────────────────────────────────────── */
const FrameDetail = ({
  frame,
  onClose,
}: {
  frame: NarrativeFrame;
  onClose: () => void;
}) => {
  const ed = editorialFor(frame.id);
  if (!ed) return null;

  return (
    <div
      className="animate-editorial-in"
      style={{
        background: "hsl(var(--wine-deep))",
        color: "hsl(35 25% 88%)",
      }}
    >
      <div className="p-8 sm:p-12 md:p-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-10">
          <div className="flex items-center gap-5">
            <span
              className="text-[13px] font-mono tracking-[0.2em]"
              style={{ color: "hsl(30 20% 60%)" }}
            >
              {frame.id}
            </span>
            <div className="w-8 h-px" style={{ background: "hsl(30 20% 40%)" }} />
            <span
              className="text-[12px] font-mono tracking-[0.15em] uppercase"
              style={{ color: "hsl(30 15% 55%)" }}
            >
              {ed.terrain}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[13px] font-mono tracking-[0.15em] uppercase transition-opacity hover:opacity-60"
            style={{ color: "hsl(30 20% 60%)" }}
          >
            Close ×
          </button>
        </div>

        <h3
          className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wider leading-[0.95] mb-8"
          style={{ color: "hsl(35 30% 90%)" }}
        >
          {frame.frameName}
        </h3>

        <p
          className="text-lg sm:text-xl leading-relaxed max-w-2xl mb-12"
          style={{ color: "hsl(30 15% 70%)" }}
        >
          {ed.hookLine}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div className="space-y-10">
            <div
              className="border-l-[2px] pl-6 py-3"
              style={{ borderColor: "hsl(var(--wine-glow) / 0.5)" }}
            >
              <p className="text-[12px] font-mono tracking-[0.2em] uppercase mb-3" style={{ color: "hsl(30 15% 55%)" }}>
                What it sounds like
              </p>
              <p className="text-base leading-relaxed" style={{ color: "hsl(30 15% 75%)" }}>
                "{ed.hostileClaim}"
              </p>
            </div>
            <div>
              <p className="text-[12px] font-mono tracking-[0.2em] uppercase mb-3" style={{ color: "hsl(30 15% 55%)" }}>
                What it wants you to believe
              </p>
              <p className="text-[15px] leading-[1.8]" style={{ color: "hsl(30 15% 72%)" }}>
                {ed.wantsBelief}
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <p className="text-[12px] font-mono tracking-[0.2em] uppercase mb-3" style={{ color: "hsl(30 15% 55%)" }}>
                What to clarify first
              </p>
              <p className="text-[15px] leading-[1.8]" style={{ color: "hsl(30 15% 72%)" }}>
                {ed.clarifyFirst}
              </p>
            </div>
            {frame.typicalTopics.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {frame.typicalTopics.map((t) => (
                  <span key={t} className="text-[12px] px-3 py-1 tracking-wide" style={{ background: "hsl(var(--wine) / 0.25)", color: "hsl(30 15% 70%)" }}>
                    {t}
                  </span>
                ))}
              </div>
            )}
            <div className="flex flex-wrap gap-3 text-[11px] tracking-[0.15em] font-mono" style={{ color: "hsl(30 10% 50%)" }}>
              <span>{ed.emotion}</span><span>·</span><span>{ed.mechanism}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Tile ───────────────────────────────────────────────────── */
const FrameTile = ({
  frame,
  editorialId,
  isActive,
  onClick,
  theme,
}: {
  frame: NarrativeFrame;
  editorialId?: string;
  isActive: boolean;
  onClick: () => void;
  theme: typeof SECTION_THEMES[number];
}) => {
  const ed = editorialFor(editorialId ?? frame.id);
  if (!ed) return null;

  const isDarkActive = isActive; // active always goes dark (wine-deep)

  return (
    <button
      onClick={onClick}
      className="w-full text-left p-8 sm:p-9 transition-all duration-300 group relative flex flex-col hover:-translate-y-1"
      style={{
        background: isDarkActive ? theme.tileActiveBg : theme.tileBg,
        border: "1px solid",
        borderColor: isDarkActive ? theme.tileActiveBorder : theme.tileBorder,
      }}
    >
      <div className="flex items-baseline justify-between gap-3 mb-8">
        <span
          className="text-[11px] font-mono tracking-[0.28em] block"
          style={{ color: isDarkActive ? "hsl(30 15% 55%)" : theme.tileTextMuted }}
        >
          {frame.id}
        </span>
        <span
          className="text-[10px] font-mono tracking-[0.28em] uppercase px-2 py-1"
          style={{
            background: isDarkActive ? "hsl(var(--wine) / 0.3)" : theme.tagBg,
            color: isDarkActive ? "hsl(var(--wine-blush))" : theme.tileTextMuted,
          }}
        >
          {ed.emotion}
        </span>
      </div>

      <blockquote
        className="font-display text-[20px] sm:text-[22px] leading-[1.2] tracking-wide mb-8"
        style={{
          color: isDarkActive ? "hsl(35 30% 92%)" : theme.tileText,
          fontStyle: "normal",
        }}
      >
        "{ed.hostileClaim}"
      </blockquote>

      <div
        className="mt-auto pt-5 border-t"
        style={{
          borderColor: isDarkActive ? "hsl(var(--wine-glow) / 0.25)" : "hsl(30 15% 78% / 0.5)",
        }}
      >
        <h4
          className="text-[13px] font-medium tracking-wide leading-snug mb-3"
          style={{ color: isDarkActive ? "hsl(35 25% 82%)" : theme.tileText }}
        >
          {frame.frameName}
        </h4>
        <p
          className="text-[13.5px] leading-[1.7] line-clamp-3"
          style={{ color: isDarkActive ? "hsl(30 15% 60%)" : theme.tileTextMuted }}
        >
          {ed.hookLine}
        </p>
      </div>
    </button>
  );
};

/* ── Sub-section (one family group) ────────────────────────── */
/* ── Carousel ──────────────────────────────────────────────── */
const FrameCarousel = ({
  frames,
  activeId,
  onSelect,
  theme,
  label,
}: {
  frames: (NarrativeFrame & { _editorialId?: string })[];
  activeId: string | null;
  onSelect: (id: string | null) => void;
  theme: typeof SECTION_THEMES[number];
  label: string;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const total = frames.length;

  const scrollToIndex = useCallback((i: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(total - 1, i));
    const child = container.children[clamped] as HTMLElement | undefined;
    if (!child) return;
    container.scrollTo({
      left: child.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });
    setIndex(clamped);
  }, [total]);

  const onScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const children = Array.from(container.children) as HTMLElement[];
    const base = container.scrollLeft + container.offsetLeft;
    let closest = 0;
    let min = Infinity;
    children.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - base);
      if (d < min) {
        min = d;
        closest = i;
      }
    });
    if (closest !== index) setIndex(closest);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollToIndex(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollToIndex(index - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      scrollToIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      scrollToIndex(total - 1);
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        onScroll={onScroll}
        onKeyDown={onKey}
        tabIndex={0}
        role="region"
        aria-label={`${label} — frame carousel`}
        className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory gap-6 sm:gap-8 pb-2 focus:outline-none scroll-smooth pr-16 sm:pr-24"
      >
        {frames.map((f) => {
          const eid = f._editorialId ?? f.id;
          return (
            <div
              key={eid}
              className="snap-start shrink-0 basis-[86%] sm:basis-[62%] md:basis-[46%] lg:basis-[34%]"
            >
              <FrameTile
                frame={f}
                editorialId={eid}
                isActive={activeId === eid}
                onClick={() => onSelect(activeId === eid ? null : eid)}
                theme={theme}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        <span
          className="font-mono text-[12px] tracking-[0.22em]"
          style={{ color: theme.meta }}
          aria-live="polite"
        >
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollToIndex(index - 1)}
            disabled={index === 0}
            aria-label="Previous frame"
            className="w-10 h-10 flex items-center justify-center transition-opacity disabled:opacity-25 hover:opacity-80"
            style={{
              border: `1px solid ${theme.divider}`,
              color: theme.body,
              background: "transparent",
            }}
          >
            <span aria-hidden="true" className="text-[18px] leading-none">‹</span>
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(index + 1)}
            disabled={index >= total - 1}
            aria-label="Next frame"
            className="w-10 h-10 flex items-center justify-center transition-opacity disabled:opacity-25 hover:opacity-80"
            style={{
              border: `1px solid ${theme.divider}`,
              color: theme.body,
              background: "transparent",
            }}
          >
            <span aria-hidden="true" className="text-[18px] leading-none">›</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const FamilySubSection = ({
  label,
  description,
  ids,
  activeId,
  onSelect,
  themeIndex,
}: {
  label: string;
  description?: string;
  ids: string[];
  activeId: string | null;
  onSelect: (id: string | null) => void;
  themeIndex: number;
}) => {
  const frames = ids
    .map((id) => {
      const baseId = resolveFrameId(id);
      const frame = frameMap.get(baseId);
      return frame ? { ...frame, _editorialId: id } : null;
    })
    .filter((f): f is NarrativeFrame & { _editorialId: string } => !!f);
  if (frames.length === 0) return null;

  const theme = SECTION_THEMES[themeIndex % 2];
  const activeFrame = activeId ? frameMap.get(resolveFrameId(activeId)) : null;
  const isInThisGroup = activeId ? ids.includes(activeId) : false;

  return (
    <div
      className="relative"
      style={{ background: theme.bg }}
    >
      <div className="max-w-[var(--editorial-max)] mx-auto px-6 sm:px-10 py-20 sm:py-28">
        {/* Header */}
        <div className="mb-16 max-w-[40rem]">
          <div className="flex items-center gap-5 mb-5">
            <div className="w-8 h-[1px]" style={{ background: theme.divider }} />
            <span className="text-[12px] font-mono tracking-[0.28em] uppercase" style={{ color: theme.meta }}>
              {frames.length} {frames.length === 1 ? "frame" : "frames"}
            </span>
          </div>
          <h3
            className="font-display text-4xl sm:text-5xl md:text-6xl tracking-wider leading-[0.9] mb-6"
            style={{ color: theme.heading }}
          >
            {label}
          </h3>
          {description && (
            <p className="text-[17px] leading-[1.7]" style={{ color: theme.body }}>
              {description}
            </p>
          )}
        </div>

        {/* Carousel */}
        <FrameCarousel
          frames={frames}
          activeId={activeId}
          onSelect={onSelect}
          theme={theme}
          label={label}
        />

        {/* Detail */}
        {isInThisGroup && activeFrame && (
          <div className="mt-5">
            <FrameDetail frame={activeFrame} onClose={() => onSelect(null)} />
          </div>
        )}
      </div>
    </div>
  );
};

/* ── Non-family group (emotion/mechanism/terrain views) ───── */
const GenericGroupSection = ({
  label,
  description,
  ids,
  activeId,
  onSelect,
}: {
  label: string;
  description?: string;
  ids: string[];
  activeId: string | null;
  onSelect: (id: string | null) => void;
}) => {
  const frames = ids
    .map((id) => frameMap.get(id))
    .filter((f): f is NarrativeFrame => !!f);
  if (frames.length === 0) return null;

  const theme = SECTION_THEMES[1]; // light
  const activeFrame = activeId ? frameMap.get(activeId) : null;
  const isInThisGroup = activeId ? ids.includes(activeId) : false;

  return (
    <div className="mb-20">
      <div className="flex items-baseline gap-5 mb-3">
        <h3 className="font-display text-2xl sm:text-3xl tracking-wider" style={{ color: theme.heading }}>
          {label}
        </h3>
        <span className="text-sm font-mono" style={{ color: theme.meta }}>{frames.length}</span>
      </div>
      {description && (
        <p className="text-[15px] leading-relaxed mb-8 max-w-xl" style={{ color: theme.body }}>
          {description}
        </p>
      )}
      <FrameCarousel
        frames={frames}
        activeId={activeId}
        onSelect={onSelect}
        theme={theme}
        label={label}
      />
      {isInThisGroup && activeFrame && (
        <div className="mt-5">
          <FrameDetail frame={activeFrame} onClose={() => onSelect(null)} />
        </div>
      )}
    </div>
  );
};

const MODES: { key: BrowseMode; label: string }[] = [
  { key: "family", label: "Pattern families" },
  { key: "emotion", label: "By emotion" },
  { key: "mechanism", label: "By distortion" },
  { key: "terrain", label: "By terrain" },
];

function getGroups(mode: BrowseMode) {
  switch (mode) {
    case "family":
      return groupBy((e) => e.family, PATTERN_FAMILIES);
    case "emotion":
      return EMOTION_TAGS.map((tag) => ({
        key: tag,
        label: tag,
        description: undefined,
        ids: Object.entries(FRAME_EDITORIAL).filter(([, e]) => e.emotion === tag).map(([id]) => id),
      })).filter((g) => g.ids.length > 0);
    case "mechanism":
      return MECHANISM_TAGS.map((tag) => ({
        key: tag,
        label: tag.charAt(0).toUpperCase() + tag.slice(1),
        description: undefined,
        ids: Object.entries(FRAME_EDITORIAL).filter(([, e]) => e.mechanism === tag).map(([id]) => id),
      })).filter((g) => g.ids.length > 0);
    case "terrain":
      return TERRAIN_TAGS.map((tag) => ({
        key: tag,
        label: tag.charAt(0).toUpperCase() + tag.slice(1),
        description: undefined,
        ids: Object.entries(FRAME_EDITORIAL).filter(([, e]) => e.terrain === tag).map(([id]) => id),
      })).filter((g) => g.ids.length > 0);
  }
}

const UsualSuspects = () => {
  const [mode, setMode] = useState<BrowseMode>("family");
  const [activeId, setActiveId] = useState<string | null>(null);
  const groups = getGroups(mode);
  const glitch = useGlitch(10000, 700, 4000);

  const handleModeChange = (m: BrowseMode) => {
    setMode(m);
    setActiveId(null);
  };

  return (
    <section className="relative overflow-hidden">
      {/* ── Hero header — ivory warm ── */}
      <div className="section-ivory-warm editorial-grain relative">
        <div className="relative max-w-[80rem] mx-auto px-6 sm:px-10 lg:px-14 pt-28 sm:pt-36 lg:pt-44 pb-12 sm:pb-16 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 max-w-[40rem]">
              <div className="mb-6 inline-flex items-center gap-1 p-1 border" style={{ borderColor: "hsl(var(--wine) / 0.25)", background: "hsl(var(--parchment) / 0.5)" }}>
                <span
                  aria-current="page"
                  className="font-heading text-[10.5px] tracking-[0.22em] uppercase font-medium px-3 py-1.5"
                  style={{ background: "hsl(var(--wine))", color: "hsl(35 30% 92%)" }}
                >
                  EN
                </span>
                <Link
                  to="/obvykli-podezreli"
                  className="font-heading text-[10.5px] tracking-[0.22em] uppercase font-medium px-3 py-1.5 transition-colors hover:text-[hsl(var(--wine))]"
                  style={{ color: "hsl(30 10% 45%)" }}
                >
                  CZ
                </Link>
              </div>
              <p
                className="font-heading text-[11px] tracking-[0.22em] uppercase font-medium mb-6"
                style={{ color: "hsl(var(--wine))" }}
              >
                Living Field Guide · No. 01
              </p>
              <h2
                className="font-display text-6xl sm:text-7xl md:text-8xl tracking-wider leading-[0.88] mb-8"
                style={{ color: "hsl(340 30% 25%)" }}
              >
                <span>The usual</span>
                <br />
                <span className="inline-block relative" style={glitchStyle(glitch, "strong")}>
                  suspects
                </span>
                <span
                  className="block font-display text-2xl sm:text-3xl md:text-4xl tracking-wider leading-[1] mt-4 italic"
                  style={{ color: "hsl(340 20% 45%)" }}
                >
                  / Obvyklí podezřelí
                </span>
              </h2>
              <div className="w-16 h-[1px] mb-10" style={{ background: "hsl(30 15% 70%)" }} />
              <p className="text-xl md:text-[22px] leading-[1.55] max-w-[38ch] mb-6" style={{ color: "hsl(30 10% 38%)" }}>
                These are the recurring storylines used to twist science in public. We track them, group them, and study how they turn research into panic, miracle, scandal, ideology, or noise.
              </p>
              <p className="text-[15px] md:text-[16px] leading-[1.7] max-w-[38ch]" style={{ color: "hsl(30 10% 55%)" }}>
                Resonance Labs is a narrative intelligence practice for scientific and research-led organisations. This library is the raw material. Compiled and kept up to date by Zuzana Válková, science communications strategist, in Prague.
              </p>
            </div>
            <div className="lg:col-span-6">
              <PaintingFrame
                url={paintingTwins.url}
                alt="Two women, twin portraits in opposing fields of red and blue"
                caption='"TWO READERS OF THE SAME PAPER, ARRIVING AT OPPOSITE CONCLUSIONS", OIL ON DISAGREEMENT, 2026'
                filter="contrast(1.03) brightness(0.96) saturate(0.88)"
                orientation="portrait"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ── Stats band — dark oxblood, full content width ── */}
      <div className="relative overflow-hidden" style={{ background: "hsl(var(--wine-deep))" }}>
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n2)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
        <div className="relative max-w-[80rem] mx-auto px-6 sm:px-10 lg:px-14 py-14 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-8">
              <div className="grid grid-cols-3 gap-6 sm:gap-10">
                {[
                  { n: narrativeFrames.length, l: "Frames" },
                  { n: Object.keys(PATTERN_FAMILIES).length, l: "Families" },
                  { n: EMOTION_TAGS.length, l: "Triggers" },
                ].map((s) => (
                  <div key={s.l} className="flex flex-col">
                    <span
                      className="font-display leading-none text-[64px] sm:text-[88px] md:text-[104px] tracking-wider"
                      style={{ color: "hsl(35 30% 92%)" }}
                    >
                      {s.n}
                    </span>
                    <span
                      className="mt-3 font-mono text-[11px] tracking-[0.28em] uppercase"
                      style={{ color: "hsl(var(--wine-blush))" }}
                    >
                      {s.l}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col lg:items-end gap-4">
              <p
                className="font-heading text-[11px] tracking-[0.22em] uppercase font-medium lg:text-right"
                style={{ color: "hsl(var(--wine-blush))" }}
              >
                Watch these frames go to work on a real abstract
              </p>
              <div className="flex flex-col sm:flex-row gap-3 lg:justify-end w-full">
                <a
                  href="https://nobullforscience.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 font-heading text-[11.5px] tracking-[0.15em] uppercase font-medium transition-colors duration-200 hover:brightness-125"
                  style={{
                    color: "hsl(30 15% 82%)",
                    border: "1px solid hsl(var(--wine-glow) / 0.4)",
                  }}
                >
                  General edition
                  <span className="text-[14px]" aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://nobull-metabolism-demo.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 font-heading text-[11.5px] tracking-[0.15em] uppercase font-medium transition-colors duration-200 hover:brightness-125"
                  style={{
                    color: "hsl(30 15% 82%)",
                    border: "1px solid hsl(var(--wine-glow) / 0.4)",
                  }}
                >
                  Oncology & metabolism edition
                  <span className="text-[14px]" aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Filter tabs — full content width on parchment ── */}
      <div className="section-ivory-warm">
        <div className="max-w-[80rem] mx-auto px-6 sm:px-10 lg:px-14 py-6 sm:py-7" style={{ borderBottom: "1px solid hsl(30 15% 78% / 0.5)" }}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {MODES.map((m) => (
              <button
                key={m.key}
                onClick={() => handleModeChange(m.key)}
                className="text-[12px] px-5 py-3 transition-all duration-200 tracking-[0.15em] uppercase text-center"
                style={
                  mode === m.key
                    ? { background: "hsl(var(--wine))", color: "hsl(35 25% 92%)", fontWeight: 500 }
                    : {
                        color: "hsl(30 10% 45%)",
                        border: "1px solid hsl(30 15% 78% / 0.6)",
                        background: "transparent",
                      }
                }
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Working document + editorial note, side by side ── */}
      <div className="section-ivory-warm editorial-grain">
        <div className="max-w-[80rem] mx-auto px-6 sm:px-10 lg:px-14 py-20 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <p
                className="font-heading text-[11px] tracking-[0.28em] uppercase font-medium mb-5"
                style={{ color: "hsl(var(--wine))" }}
              >
                A working document
              </p>
              <p className="text-[17px] md:text-[18px] leading-[1.65] mb-5" style={{ color: "hsl(30 10% 38%)" }}>
                This atlas is not exhaustive. It maps the recurring patterns we see most often. New frames emerge when old fears find new topics — but the underlying logic rarely changes.
              </p>
              <p className="text-[15px] md:text-[16px] leading-[1.75]" style={{ color: "hsl(30 10% 55%)" }}>
                The details change. The hooks do not. We keep watching.
              </p>
            </div>
            <div>
              <NarrativeBiteLayer />
            </div>
          </div>
        </div>
      </div>

      {/* ── Painting interlude — landscape card, contained, no cropping through faces ── */}
      <div style={{ background: "hsl(var(--wine-deep))" }}>
        <div className="max-w-[var(--editorial-max)] mx-auto px-6 sm:px-10 py-24 sm:py-32">
          <PaintingFrame
            url={paintingElderSea.url}
            alt="Elder figure contemplating the sea under an orange sky"
            caption='"MAN WATCHING HIS FINDING DRIFT OUT TO SEA, JUST AS HE FEARED IT WOULD", OIL ON DRIFT, 2026'
            filter="contrast(1.04) brightness(0.92) saturate(0.85) hue-rotate(-10deg)"
            orientation="landscape"
            bg="hsl(var(--wine-deep))"
            captionColor="hsl(30 15% 62%)"
          />
        </div>
      </div>

      {/* ── Family view: alternating full-width sub-sections ── */}
      {mode === "family" && (
        <div>
          {groups.map((group, i) => (
            <FamilySubSection
              key={group.key}
              label={group.label}
              description={group.description}
              ids={group.ids}
              activeId={activeId}
              onSelect={setActiveId}
              themeIndex={i}
            />
          ))}
        </div>
      )}

      {/* ── Other views: standard grid inside ivory ── */}
      {mode !== "family" && (
        <div className="section-ivory-warm editorial-grain">
          <div className="max-w-[var(--editorial-max)] mx-auto px-6 sm:px-10 py-20 sm:py-28">
            {groups.map((group) => (
              <GenericGroupSection
                key={group.key}
                label={group.label}
                description={group.description}
                ids={group.ids}
                activeId={activeId}
                onSelect={setActiveId}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── Painting centrepiece — before CTA ── */}
      <div className="section-ivory-warm">
        <div className="max-w-[68rem] mx-auto px-6 sm:px-10 lg:px-14 py-28 sm:py-36 lg:py-44">
          <PaintingFrame
            url={paintingElderRocks.url}
            alt="Elder figure seated on red rocks under a deep blue sky"
            caption='"ELDER STATESMAN OF EVIDENCE, STILL WAITING TO BE READ", MIXED MEDIA AND PATIENCE, 2026'
            filter="contrast(1.04) brightness(0.95) saturate(0.85)"
            orientation="landscape"
          />
        </div>
      </div>

      {/* ── CTA ─── */}
      <section className="py-32 md:py-48 section-padding relative overflow-hidden" style={{ background: "hsl(var(--wine-deep))" }}>
        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: "500px",
            height: "500px",
            bottom: "-20%",
            left: "10%",
            background: "radial-gradient(circle, hsl(var(--wine) / 0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative">
          <p
            className="font-heading text-[11px] tracking-[0.28em] uppercase font-medium mb-8"
            style={{ color: "hsl(var(--wine-blush))" }}
          >
            For institutions, experts, and teams
          </p>
          <h2
            className="font-display text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] tracking-wider leading-[0.9] mb-10"
            style={{ color: "hsl(35 30% 92%)" }}
          >
            Help me make this ready for real life.
          </h2>
          <p className="text-[18px] md:text-[19px] leading-[1.7] mb-4 max-w-[40rem] mx-auto" style={{ color: "hsl(30 15% 72%)" }}>
            This library is not a finished product and will always benefit from data I cannot gather myself. It is a working instrument, and it only gets sharper through practice — institutions working on misinformation, individual experts, scientific teams, health communicators.
          </p>
          <p className="text-[18px] md:text-[19px] leading-[1.7] mb-10 max-w-[40rem] mx-auto" style={{ color: "hsl(30 15% 72%)" }}>
            If it walks straight past the pattern that actually haunts your field, that is the most useful thing you could tell me. My goal is change and, ideally, impact on actual science communication practice.
          </p>
          <p className="text-[15px] md:text-[16px] leading-[1.7] mb-10 max-w-[40rem] mx-auto" style={{ color: "hsl(30 15% 55%)" }}>
            (And my children not living in an idiocracy. Thank you.)
          </p>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="mailto:hello@resonancelabs.com"
              className="inline-flex items-center gap-3 px-10 py-4 font-heading text-[13px] tracking-[0.15em] uppercase font-medium transition-all duration-200 hover:brightness-110 group"
              style={{
                color: "hsl(35 30% 95%)",
                backgroundColor: "hsl(var(--wine))",
                boxShadow: "0 8px 32px -12px hsl(var(--wine) / 0.6)",
              }}
            >
              Talk to us
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 font-heading text-[13px] tracking-[0.15em] uppercase font-normal transition-colors duration-200 hover:brightness-125"
              style={{
                color: "hsl(30 15% 72%)",
                border: "1px solid hsl(var(--wine-glow) / 0.4)",
              }}
            >
              Back to Resonance Labs
            </Link>
          </div>
        </div>
      </section>

    </section>
  );
};

export default UsualSuspects;
