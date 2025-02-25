import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main className="bg-neutral-950 text-white relative overflow-hidden">
      <Hero />
      <HowItWorks />
      <Features />
      <CallToAction />
    </main>
  );
}
