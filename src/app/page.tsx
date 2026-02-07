import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import BrandStory from "@/components/BrandStory";
import KeyMetrics from "@/components/KeyMetrics";
import SuburbIntelligence from "@/components/SuburbIntelligence";
import Team from "@/components/Team";
import InsightsHub from "@/components/InsightsHub";
import Services from "@/components/Services";
import Newsletter from "@/components/Newsletter";
import AppraisalForm from "@/components/AppraisalForm";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <BrandStory />
      <KeyMetrics />
      <SuburbIntelligence />
      <Team />
      <InsightsHub />
      <Services />
      <Newsletter />
      <AppraisalForm />
    </>
  );
}
