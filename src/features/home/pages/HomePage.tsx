import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/features/home/components/HeroSection";
import ServicesHighlight from "@/components/sections/ServicesHighlight";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesHighlight />
      <TestimonialsSection />
    </MainLayout>
  );
};

export default HomePage;