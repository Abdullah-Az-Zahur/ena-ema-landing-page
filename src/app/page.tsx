import AboutUs from "@/components/AboutUs/AboutUs";
import Banner from "@/components/Banner/Banner";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import Footer from "@/components/Footer/Footer";
import Just5Days from "@/components/Just5Days/Just5Days";
import Pricing from "@/components/Pricing/Pricing";
import TrustUs from "@/components/TrustUs/TrustUs";
import TwoLandingPage from "@/components/TwoLandingPage/TwoLandingPage";

export default function Home() {
  return (
    <div className="">
      <main>
        <Banner />
        <div className="bg-[#151E1B]">
          <TwoLandingPage />
          <TrustUs />
        </div>
        <div className="max-w-[1200px] mx-auto">
          <CaseStudies />
          <Pricing />
        </div>
        <div className="bg-[#151E1B]">
          <div className="max-w-[1200px] mx-auto">
            <Just5Days />
            <AboutUs/>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
