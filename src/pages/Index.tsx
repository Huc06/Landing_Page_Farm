import Navbar from "@/components/Navbar";
import IntroSection from "@/components/IntroSection";
import JourneySection from "@/components/JourneySection";
import JoinSection from "@/components/JoinSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden scanlines">
      <Navbar />
      <IntroSection />
      <JourneySection />
      <JoinSection />
      <FooterSection />
    </div>
  );
};

export default Index;
