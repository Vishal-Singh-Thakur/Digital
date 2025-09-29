import MetaConstant from "@/constants/MetaConstant";
import { NextSeo } from "next-seo";
import HeroSection from "@/components/HeroSection";

import Navigation from "@/layout/navigation";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/layout/footer";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="">
      <NextSeo
        title={MetaConstant?.[0]?.title}
        description={MetaConstant?.[0]?.description}
      />
      <Navigation
        onOpenModal={() => setIsModalOpen(true)}
        scrollToSection={scrollToSection}
      />
      <HeroSection onOpenModal={() => setIsModalOpen(true)} />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <Footer scrollToSection={scrollToSection} />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
