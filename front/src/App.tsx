import { SiteHeader } from "./components/site/SiteHeader";
import { Hero } from "./components/site/Hero";
import { ServicesSection } from "./components/site/ServicesSection";
import { ProjectsSection } from "./components/site/ProjectsSection";
import { WhyUsSection } from "./components/site/WhyUsSection";
import { ClientsSection } from "./components/site/ClientsSection";
import { CtaSection } from "./components/site/CtaSection";
import { SiteFooter } from "./components/site/SiteFooter";

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ServicesSection />
        <ProjectsSection />
        <WhyUsSection />
        <ClientsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
