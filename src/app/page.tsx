import NavBar from "@/components/Navbar";
import PresidentialElection from "@/components/PresidentialElection";

export default function Home() {
  return (
    <>
       <>
      <NavBar />
      <div 
        className="bg-[url('../public/cover.png')] bg-cover bg-center min-h-screen flex items-center justify-center"
      >
        <PresidentialElection />
      </div>
    </>
    </>
  );
}
