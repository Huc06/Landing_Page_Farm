import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const ScarcitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlots, setCurrentSlots] = useState(0);
  const totalSlots = 500;
  const claimedSlots = 347;

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setCurrentSlots((prev) => {
            if (prev >= claimedSlots) {
              clearInterval(interval);
              return claimedSlots;
            }
            return prev + Math.ceil((claimedSlots - prev) / 10);
          });
        }, 50);
        return () => clearInterval(interval);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const remainingSlots = totalSlots - claimedSlots;
  const percentage = (claimedSlots / totalSlots) * 100;

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-dark" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Cartridge Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="font-pixel text-[10px] md:text-xs text-glow-magenta px-4 py-2 border-2 border-accent bg-accent/10">
                BETA CARTRIDGE // LIMITED EDITION
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Claim Your{" "}
              <span className="text-secondary text-glow-gold">Player 1</span>{" "}
              Slot
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Only 500 adventurers will be granted early access to The Valley. 
              First players unlock exclusive gear and founding member status.
            </p>
          </div>

          {/* Progress Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="card-pixel p-8 glow-border"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="font-pixel text-[10px] text-primary text-glow-cyan">
                SERVER CAPACITY
              </span>
              <span className="font-pixel text-[10px] text-muted-foreground">
                {currentSlots}/{totalSlots} CLAIMED
              </span>
            </div>

            {/* Progress Bar */}
            <div className="progress-pixel mb-6">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${percentage}%` } : {}}
                transition={{ delay: 0.6, duration: 1.5, ease: "easeOut" }}
                className="progress-pixel-fill"
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-muted/50 rounded">
                <div className="font-pixel text-xl md:text-2xl text-primary text-glow-cyan">
                  {currentSlots}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Claimed
                </div>
              </div>
              <div className="p-4 bg-muted/50 rounded">
                <div className="font-pixel text-xl md:text-2xl text-secondary text-glow-gold">
                  {remainingSlots}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Remaining
                </div>
              </div>
              <div className="p-4 bg-muted/50 rounded">
                <div className="font-pixel text-xl md:text-2xl text-accent text-glow-magenta">
                  Q2
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Launch
                </div>
              </div>
            </div>

            {/* Warning */}
            <div className="mt-6 p-4 border border-destructive/30 bg-destructive/5 rounded text-center">
              <span className="font-pixel text-[8px] text-destructive">
                ⚠ SLOTS ARE NON-TRANSFERABLE
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScarcitySection;
