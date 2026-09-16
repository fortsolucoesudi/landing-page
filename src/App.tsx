import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { WhatsAppButton } from "./components/shared/WhatsAppButton";
import { Hero } from "./components/sections/Hero";
import { TrustBar } from "./components/sections/TrustBar";
import { Problem } from "./components/sections/Problem";
import { Solution } from "./components/sections/Solution";
import { Features } from "./components/sections/Features";
import { Benefits } from "./components/sections/Benefits";
import { TargetAudience } from "./components/sections/TargetAudience";
import { Differentiator } from "./components/sections/Differentiator";
import { HowItWorks } from "./components/sections/HowItWorks";
import { MainCTA } from "./components/sections/MainCTA";
import { FAQ } from "./components/sections/FAQ";
import { FinalCTA } from "./components/sections/FinalCTA";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Solution />
        <Features />
        <Benefits />
        <TargetAudience />
        <Differentiator />
        <HowItWorks />
        <MainCTA />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
