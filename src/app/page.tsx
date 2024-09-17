import CompareBanner from "@/components/CompareBanner";
import Footer from "@/components/Footer";
import Manifestos from "@/components/Manifestos";
import NavBar from "@/components/Navbar";
import PresidentialElection from "@/components/PresidentialElection";
import WinPrediction from "@/components/WinPrediction";

export default function Home() {
  return (
    <>
        <NavBar />
        <div 
        className="bg-[url('../public/cover.png')] bg-cover bg-center min-h-screen flex items-center justify-center"
      >
        <PresidentialElection />
      </div>
      <WinPrediction/>
      <CompareBanner/>
      <Manifestos/>
      <Footer/>
    </>
  );
}
