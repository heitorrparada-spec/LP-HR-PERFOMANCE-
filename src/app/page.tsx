import { ScrollProgress } from "@/components/ui/Shared/ScrollProgress";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Proposal } from "@/components/sections/Proposal";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Included } from "@/components/sections/Included";
import { Differentiator } from "@/components/sections/Differentiator";
import { Proof } from "@/components/sections/Proof";
import { About } from "@/components/sections/About";
import { Team } from "@/components/sections/Team";
import { QuizSection } from "@/components/sections/QuizSection";
import { Plans } from "@/components/sections/Plans";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="bg-offwhite">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Problem />
      <Proposal />
      <HowItWorks />
      <Included />
      <Differentiator />
      <Proof />
      <About />
      <Team />
      <QuizSection />
      <Plans />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
