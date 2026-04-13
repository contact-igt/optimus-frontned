import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DoctorsSection from "@/components/sections/DoctorsSection";
import GallerySection from "@/components/sections/GallerySection";
import WhyTrustSection from "@/components/sections/WhyTrustSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import UTMTracker from "@/components/UTMTracker";

export default function HomePage() {
  return (
    <>
      <UTMTracker />
        <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DoctorsSection />
      <GallerySection />
      <WhyTrustSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
