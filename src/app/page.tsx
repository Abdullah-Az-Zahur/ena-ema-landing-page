import Banner from "@/components/Banner/Banner";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import Footer from "@/components/Footer/Footer";
import Pricing from "@/components/Pricing/Pricing";
import TrustUs from "@/components/TrustUs/TrustUs";
import TwoLandingPage from "@/components/TwoLandingPage/TwoLandingPage";

export default function Home() {
  return (
    <div className="">
      <main>
        <Banner />
        <TwoLandingPage />
        <TrustUs />
        <CaseStudies />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
