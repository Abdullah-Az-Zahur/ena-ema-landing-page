import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import TrustUs from "@/components/TrustUs/TrustUs";
import TwoLandingPage from "@/components/TwoLandingPage/TwoLandingPage";

export default function Home() {
  return (
    <div className="">
      <main>
        <Banner />
        <TwoLandingPage />
        <TrustUs />
      </main>
      <Footer />
    </div>
  );
}
