import Masthead from "@/components/Masthead";
import Hero from "@/components/Hero";
import Pipeline from "@/components/Pipeline";
import Integrations from "@/components/Integrations";
import SprintLedger from "@/components/SprintLedger";
import Manifesto from "@/components/Manifesto";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-paper">
      <Masthead />
      <main>
        <Hero />
        <Pipeline />
        <Integrations />
        <SprintLedger />
        <Manifesto />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
