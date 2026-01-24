import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

const FooterSection = () => {
  return (
    <footer className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to{" "}
            <span className="text-primary text-glow-cyan">Enter</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join the adventurers who are tired of spreadsheets. 
            Your quest awaits in The Valley.
          </p>
          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>
        </motion.div>

        {/* Footer Links */}
        <div className="border-t border-border pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 border-2 border-primary flex items-center justify-center">
                <span className="font-pixel text-[10px] text-primary text-glow-cyan">OG</span>
              </div>
              <span className="text-xl font-bold">OverGuild</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-200"
              >
                Discord
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-200"
              >
                Twitter
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-200"
              >
                Docs
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-200"
              >
                Blog
              </a>
            </div>

            {/* Copyright */}
            <div className="text-muted-foreground text-sm">
              <span className="font-pixel text-[8px]">© 2025 OVERGUILD</span>
            </div>
          </div>

          {/* Pixel Art Divider */}
          <div className="mt-12 flex justify-center">
            <div className="flex gap-1">
              {[...Array(11)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 ${
                    i === 5
                      ? "bg-primary"
                      : i === 4 || i === 6
                      ? "bg-primary/60"
                      : i === 3 || i === 7
                      ? "bg-primary/30"
                      : "bg-primary/10"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
