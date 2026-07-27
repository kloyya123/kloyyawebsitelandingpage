import Masthead from "@/components/Masthead";
import Hero from "@/components/Hero";
import CapabilityGrid from "@/components/CapabilityGrid";
import BenchmarkChart from "@/components/BenchmarkChart";
import FeatureSpotlight from "@/components/FeatureSpotlight";
import AppShowcase from "@/components/AppShowcase";
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
        <BenchmarkChart />
        <FeatureSpotlight />
        <AppShowcase />
        <PrivacyGrid />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
