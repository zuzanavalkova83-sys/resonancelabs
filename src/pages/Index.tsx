import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import PurposeSection from "@/components/PurposeSection";
import ServicesSection from "@/components/ServicesSection";
import NoBullTeaser from "@/components/NoBullTeaser";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <PurposeSection />
      <ServicesSection />
      <NoBullTeaser />
      <FooterSection />
    </div>
  );
};

export default Index;
