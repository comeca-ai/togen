import TengoHero from "@/components/tengo/TengoHero";
import TengoFeatures from "@/components/tengo/TengoFeatures";
import TengoHowItWorks from "@/components/tengo/TengoHowItWorks";
import TengoUseCases from "@/components/tengo/TengoUseCases";
import TengoPricing from "@/components/tengo/TengoPricing";
import TengoFAQ from "@/components/tengo/TengoFAQ";
import TengoFooter from "@/components/tengo/TengoFooter";
import TengoNav from "@/components/tengo/TengoNav";

const Tengo = () => {
  return (
    <div className="min-h-screen bg-tengo-background">
      <TengoNav />
      <main>
        <TengoHero />
        <TengoFeatures />
        <TengoHowItWorks />
        <TengoUseCases />
        <TengoPricing />
        <TengoFAQ />
      </main>
      <TengoFooter />
    </div>
  );
};

export default Tengo;
