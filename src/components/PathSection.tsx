import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const checkpoints = [
  {
    step: "01",
    title: "Mint Your Pass",
    subtitle: "CHECKPOINT 1",
    description:
      "Sign up for the waitlist and receive your unique Adventurer's Pass. This NFT-style pass grants you priority access and tracks your progress.",
    status: "ACTIVE",
    statusColor: "text-primary",
  },
  {
    step: "02",
    title: "Equip Your Loadout",
    subtitle: "CHECKPOINT 2",
    description:
      "Complete your profile through our gamified onboarding. Connect wallets, set preferences, and customize your avatar—all as in-game actions.",
    status: "LOCKED",
    statusColor: "text-muted-foreground",
  },
  {
    step: "03",
    title: "Gates Open",
    subtitle: "CHECKPOINT 3",
    description:
      "Launch day arrives. As a waitlist member, you'll be first through the gates with exclusive founding member perks and early access to all zones.",
    status: "LOCKED",
    statusColor: "text-muted-foreground",
  },
];

const PathSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-surface-dark" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-pixel text-[10px] md:text-xs text-secondary text-glow-gold mb-4 block">
            THE PATH FORWARD
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Your Quest{" "}
            <span className="text-secondary text-glow-gold">Begins</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Three checkpoints stand between you and The Valley. Complete each to unlock your adventure.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-muted transform md:-translate-x-1/2" />

            {checkpoints.map((checkpoint, index) => (
              <motion.div
                key={checkpoint.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center font-pixel text-sm border-2 ${
                      checkpoint.status === "ACTIVE"
                        ? "bg-primary/20 border-primary text-primary text-glow-cyan"
                        : "bg-muted border-border text-muted-foreground"
                    }`}
                  >
                    {checkpoint.step}
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-24 md:ml-0 flex-1 ${
                    index % 2 === 0 ? "md:pr-24" : "md:pl-24"
                  }`}
                >
                  <div className="card-pixel p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-pixel text-[8px] text-muted-foreground">
                        {checkpoint.subtitle}
                      </span>
                      <span
                        className={`font-pixel text-[8px] ${checkpoint.statusColor}`}
                      >
                        {checkpoint.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{checkpoint.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {checkpoint.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathSection;
