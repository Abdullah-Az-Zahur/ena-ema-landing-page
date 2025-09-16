import AboutUs from "@/components/AboutUs/AboutUs";
import Banner from "@/components/Banner/Banner";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";
import Just5Days from "@/components/Just5Days/Just5Days";
import Pricing from "@/components/Pricing/Pricing";
import RealCustomers from "@/components/RealCustomers/RealCustomers";
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
        <div className="bg-[radial-gradient(circle_at_left_top,#16372A_0%,#151E1B_60%)]">
          <Just5Days />
          <AboutUs />
          <FAQ />
        </div>
        <RealCustomers />
      </main>
      <Footer />
    </div>
  );
}
