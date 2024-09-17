import ComparisonBubble from "@/components/ComparisonBubble";
import NavBar from "@/components/Navbar";
import PresidentialElection from "@/components/PresidentialElection";
import ChatUi from "./ChatUI";

export default function Home() {
  return (
    <>
      <>
        <NavBar />
        <div className="flex items-center justify-center h-screen w-screen bg-[url('../public/image_fx.png')] bg-cover">
          <div className="max-w-6xl w-full bg-[#111] p-4 rounded-3xl shadow-lg">
            <ChatUi />
          </div>
        </div>
      </>
    </>
  );
}
