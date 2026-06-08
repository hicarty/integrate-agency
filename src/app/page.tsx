import { AnimatedOrbs } from "@/components/AnimatedOrbs";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { MissionSection } from "@/components/MissionSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedOrbs />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <MissionSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
