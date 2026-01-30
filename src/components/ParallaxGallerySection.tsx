import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import screenshotInventory from "@/assets/screenshot-inventory.png";
import screenshotMap from "@/assets/screenshot-map.png";
import screenshotTavern from "@/assets/screenshot-tavern.png";
import screenshotTrading from "@/assets/screenshot-trading.png";

const screenshots = [
  {
    src: screenshotInventory,
    title: "The Sanctum",
    subtitle: "Your Personal Vault",
    offset: 0,
  },
  {
    src: screenshotMap,
    title: "World Map",
    subtitle: "Explore The Realm",
    offset: 100,
  },
  {
    src: screenshotTavern,
    title: "The Tavern",
    subtitle: "Meet Fellow Adventurers",
    offset: 200,
  },
  {
    src: screenshotTrading,
    title: "Trading Post",
    subtitle: "DeFi Made Simple",
    offset: 300,
  },
];

const ParallaxGallerySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-surface-darker" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-pixel text-[10px] md:text-xs text-accent text-glow-magenta mb-4 block">
            SNEAK PEEK
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Inside{" "}
            <span className="text-primary text-glow-cyan">The Valley</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Discover the immersive world awaiting you. Each zone offers unique experiences.
          </p>
        </motion.div>

        {/* Parallax Gallery */}
        <div className="relative max-w-5xl mx-auto">
          <div className="space-y-[-60px] md:space-y-[-100px]">
            {screenshots.map((screenshot, index) => (
              <ParallaxCard
                key={screenshot.title}
                screenshot={screenshot}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ParallaxCardProps {
  screenshot: {
    src: string;
    title: string;
    subtitle: string;
    offset: number;
  };
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

const ParallaxCard = ({ screenshot, index, scrollYProgress }: ParallaxCardProps) => {
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [screenshot.offset, -screenshot.offset]
  );

  const rotation = index % 2 === 0 ? -3 : 3;
  const xOffset = index % 2 === 0 ? -20 : 20;

  return (
    <motion.div
      style={{ y }}
      initial={{ opacity: 0, y: 80, rotate: rotation * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="relative group"
    >
      <div
        className="relative mx-auto"
        style={{
          transform: `translateX(${xOffset}px)`,
          maxWidth: `calc(100% - ${index * 20}px)`,
          zIndex: screenshots.length - index,
        }}
      >
        {/* Card Frame */}
        <div className="card-pixel overflow-hidden transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-2xl group-hover:shadow-primary/30">
          {/* Decorative Top Bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-secondary/80" />
              <div className="w-3 h-3 rounded-full bg-primary/80" />
            </div>
            <span className="font-pixel text-[8px] text-muted-foreground ml-2">
              {screenshot.subtitle}
            </span>
          </div>

          {/* Screenshot Image */}
          <div className="relative aspect-video overflow-hidden">
            <img
              src={screenshot.src}
              alt={screenshot.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl font-bold text-glow-cyan">
                {screenshot.title}
              </h3>
              <p className="text-sm text-foreground/80">{screenshot.subtitle}</p>
            </div>

            {/* Scanlines Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div
                className="w-full h-full"
                style={{
                  background:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <div
          className="absolute -inset-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
          style={{
            background: `radial-gradient(ellipse at center, hsl(var(--primary) / 0.3), transparent 70%)`,
          }}
        />
      </div>
    </motion.div>
  );
};

export default ParallaxGallerySection;
