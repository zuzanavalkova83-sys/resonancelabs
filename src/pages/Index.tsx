import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import PurposeSection from "@/components/PurposeSection";
import NoBullTeaser from "@/components/NoBullTeaser";
import SoftDistrustSection from "@/components/SoftDistrustSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <NoBullTeaser />
      <SoftDistrustSection />
      <PurposeSection />
      <TeamSection />
      <FooterSection />
    </div>
  );
};

export default Index;
