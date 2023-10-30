import React from "react";
import HeroSection from "./Hero/HeroSection";
import StatsSection from "./Stats/StatSection";
import TestimonialCompany from "./Testimonial-company/TestimonialSection";
import FeatureSection from "./Feature/FeatureSection";
import ServiceSection from "./Service/ServiceSection";
import BenefitSection from "./Benefits/BenefitSection";
import CompanyFeatured from "./Company/CompanyFeatured";
import PricingSection from "./Pricing/PricingSection";
import Faq from "./Faq/FaqSection";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="idk__14">
      <HeroSection />
      <CompanyFeatured />
      <BenefitSection />
      <StatsSection />
      <FeatureSection />
      <TestimonialCompany />
      <ServiceSection />
      <PricingSection />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
