import Masthead from "@/components/Masthead";
import Hero from "@/components/Hero";
import CapabilityGrid from "@/components/CapabilityGrid";
import AgentFlow from "@/components/AgentFlow";
import FeatureSpotlight from "@/components/FeatureSpotlight";
import AnalysisLedger from "@/components/AnalysisLedger";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-paper">
      <Masthead />
      <main>
        <Hero />
        <CapabilityGrid />
        <AgentFlow />
        <FeatureSpotlight />
        <AnalysisLedger />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
