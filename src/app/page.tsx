import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import TwoLandingPage from "@/components/TwoLandingPage/TwoLandingPage";

export default function Home() {
  return (
    <div className="">
      <main>
        <div>
          <Banner />
          <TwoLandingPage/>
        </div>
      </main>
      <Footer />
    </div>
  );
}
