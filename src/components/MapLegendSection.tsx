import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import iconArmory from "@/assets/icon-armory.png";
import iconTavern from "@/assets/icon-tavern.png";
import iconOracle from "@/assets/icon-oracle.png";

const locations = [
  {
    icon: iconArmory,
    name: "The Armory",
    subtitle: "Tools & Integrations",
    description:
      "Equip yourself with the finest DeFi tools. Connect wallets, swap tokens, and manage assets—all with intuitive drag-and-drop mechanics. No more hunting through endless menus.",
    color: "primary",
    glow: "text-glow-cyan",
  },
  {
    icon: iconTavern,
    name: "The Tavern",
    subtitle: "Community Hub",
    description:
      "Where legends gather. Join guilds, share strategies, and collaborate on quests with fellow adventurers. Social trading, but make it actually social.",
    color: "secondary",
    glow: "text-glow-gold",
  },
  {
    icon: iconOracle,
    name: "The Oracle",
    subtitle: "AI Insights",
    description:
      "Your personal DeFi oracle. Get real-time market insights, risk assessments, and personalized recommendations—all whispered by an AI that speaks human, not spreadsheet.",
    color: "accent",
    glow: "text-glow-magenta",
  },
];

const MapLegendSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-pixel text-[10px] md:text-xs text-muted-foreground mb-4 block">
            MAP LEGEND
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Discover The{" "}
            <span className="text-primary text-glow-cyan">Realm</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every location in The Valley serves a purpose. Explore, unlock, and master each zone.
          </p>
        </motion.div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="card-pixel p-8 h-full transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-primary/20">
                {/* Icon */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 animate-pulse-glow opacity-50 blur-xl bg-gradient-radial from-primary/50 to-transparent" />
                  <img
                    src={location.icon}
                    alt={location.name}
                    className="relative w-full h-full object-contain animate-float"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className={`text-2xl font-bold mb-1 ${location.glow}`}>
                    {location.name}
                  </h3>
                  <span className="font-pixel text-[8px] text-muted-foreground block mb-4">
                    {location.subtitle}
                  </span>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {location.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="mt-6 pt-6 border-t border-border text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-pixel text-[8px] text-primary">
                    [ UNLOCK AT LEVEL 3 ]
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapLegendSection;
