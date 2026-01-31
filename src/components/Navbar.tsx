import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 text-foreground transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="OverGuild logo"
              className="w-8 h-8"
            />
            <span className="text-xl font-bold tracking-tight text-brand-outline">OverGuild</span>
          </div>

          {/* Status Badge */}
          <div className="hidden md:flex items-center gap-4">
            <span className="font-pixel text-[8px] text-muted-foreground">
              STATUS:
            </span>
            <span className="font-pixel text-[8px] text-secondary text-glow-gold flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              BETA ENROLLMENT OPEN
            </span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
