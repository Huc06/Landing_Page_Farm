import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const YOUTUBE_VIDEO_ID = "PClTuU3eCq4";
const THE_VALLEY_URL = "https://www.the-valley.xyz/";

const JourneySection = () => {
  return (
    <section id="journey" className="relative py-14 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-dark to-background" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Begin Your </span>
            <span className="text-glow-cyan text-primary">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Watch the demo. Then enter The Valley.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="card-pixel overflow-hidden glow-border">
            <div className="relative aspect-video bg-surface-darker">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&autoplay=1&mute=1`}
                title="OverGuild Demo"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                  background:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
                }}
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href={THE_VALLEY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pixel inline-flex items-center gap-2 px-8 py-4 text-base"
            >
              Start
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
