import Masthead from "@/components/Masthead";
import Hero from "@/components/Hero";
import CapabilityGrid from "@/components/CapabilityGrid";
import GlowIntegrations from "@/components/GlowIntegrations";
import BenchmarkChart from "@/components/BenchmarkChart";
import FeatureSpotlight from "@/components/FeatureSpotlight";
import PrivacyGrid from "@/components/PrivacyGrid";
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
        <GlowIntegrations />
        <BenchmarkChart />
        <FeatureSpotlight />
        <PrivacyGrid />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
