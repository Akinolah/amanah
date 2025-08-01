import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesHighlight from "@/components/sections/ServicesHighlight";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesHighlight />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
