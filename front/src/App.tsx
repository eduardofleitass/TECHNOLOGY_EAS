import { Hero, WhatWeDo, ValuesSection, StatsSection, TeamSection, TestimonialsSection, ContactSection, Footer } from "./components/Landing";
import { SiteHeader } from "./components/SiteHeader";
import { ServicesSection, PartnersSection } from "./components/Services";

export default function App() {
  return (
    <>
      <SiteHeader />
      <div className="app">
        <Hero />
        <WhatWeDo />
        <ServicesSection />
        <ValuesSection />
        <StatsSection />
        <PartnersSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
