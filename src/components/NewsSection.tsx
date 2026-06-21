import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import news4 from "@/assets/news-4.jpg";

const newsItems = [
  {
    image: news1,
    caption: "Presenting new frameworks for science communication at the European Research Conference 2025.",
  },
  {
    image: news2,
    caption: "Collaborating with biotech researchers on translating complex findings for public understanding.",
  },
  {
    image: news3,
    caption: "Our latest long-read on the intersection of misinformation and scientific publishing.",
  },
  {
    image: news4,
    caption: "Partnering with IOCB Tech on bridging the gap between research and industry.",
  },
];

const NewsCard = ({ item, index }: { item: typeof newsItems[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="flex flex-col"
    >
      <div
        className="relative overflow-hidden mb-5"
        style={{ borderRadius: "12px" }}
      >
        <img
          src={item.image}
          alt={item.caption}
          className="w-full aspect-[4/3] object-cover hover:scale-[1.03] transition-transform duration-700"
        />
        {/* Subtle vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: "inset 0 0 40px 8px hsl(222, 28%, 6% / 0.35)",
          }}
        />
      </div>

      <p
        className="font-body text-[14px] md:text-[15px] leading-[1.6] font-normal"
        style={{ color: "hsl(215, 15%, 62%)" }}
      >
        {item.caption}
      </p>
    </motion.div>
  );
};

const NewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="news"
      className="py-32 md:py-44 section-padding section-divider"
      ref={ref}
      style={{ backgroundColor: "hsl(222, 28%, 8%)" }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="font-heading text-[34px] md:text-[42px] lg:text-[46px] font-light leading-[1.1] tracking-[-0.02em] text-foreground">
          News
        </h2>
      </motion.div>

      {/* Hairline rule */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mx-auto mb-16 md:mb-20"
        style={{ maxWidth: "80px" }}
      >
        <div
          className="h-px w-full"
          style={{ backgroundColor: "hsl(220, 20%, 30% / 0.4)" }}
        />
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 md:gap-x-10 max-w-6xl mx-auto">
        {newsItems.map((item, i) => (
          <NewsCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
