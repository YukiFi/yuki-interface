import Hero from "@/components/Hero";
import CategoryReframe from "@/components/CategoryReframe";
import SendMoney from "@/components/SendMoney";
import EasyDeposit from "@/components/EasyDeposit";
import CoreDifferentiator from "@/components/CoreDifferentiator";
import UnderTheHood from "@/components/UnderTheHood";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryReframe />
      <SendMoney />
      <EasyDeposit />
      <CoreDifferentiator />
      <UnderTheHood />
      <FAQ />
      <FinalCTA />
    </>
  );
}
