import Hero from "@/components/Hero";
import APYComparison from "@/components/APYComparison";
import LiquiditySection from "@/components/LiquiditySection";
import SendMoneyInstantSection from "@/components/SendMoneyInstantSection";
import NonCustodialSection from "@/components/NonCustodialSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <APYComparison />
      <LiquiditySection />
      <SendMoneyInstantSection />
      <NonCustodialSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
