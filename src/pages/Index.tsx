import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValleyDemoSection from "@/components/ValleyDemoSection";
import ParallaxGallerySection from "@/components/ParallaxGallerySection";
import ScarcitySection from "@/components/ScarcitySection";
import MapLegendSection from "@/components/MapLegendSection";
import PathSection from "@/components/PathSection";
import FooterSection from "@/components/FooterSection";
const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden scanlines">
      <Navbar />
      <HeroSection />
      <ValleyDemoSection />
      <ParallaxGallerySection />
      <ScarcitySection />
      <MapLegendSection />
      <PathSection />
      <FooterSection />
    </div>
  );
};

export default Index;
