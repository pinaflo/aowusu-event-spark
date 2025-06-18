
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { EventTypes } from "@/components/EventTypes";
import { EventPlanningTool } from "@/components/EventPlanningTool";
import { RestaurantSection } from "@/components/RestaurantSection";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <EventTypes />
      <EventPlanningTool />
      <RestaurantSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
