import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import DepartmentSection from "@/components/sections/DepartmentSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DoctorsSection from "@/components/sections/DoctorsSection";
import WhyTrustSection from "@/components/sections/WhyTrustSection";
import GallerySection from "@/components/sections/GallerySection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FinalCTA from "@/components/sections/FinalCTA";
import FAQSection from "@/components/sections/FAQSection";
import UTMTracker from "@/components/UTMTracker";

export default function HomePage() {
  return (
    <>
      <UTMTracker />
      <HeroSection />
      <TrustBar />
      <DepartmentSection />
      <AboutSection />
      <ServicesSection />
      <DoctorsSection />
      <WhyTrustSection />
      <GallerySection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
