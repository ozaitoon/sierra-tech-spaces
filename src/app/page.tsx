import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhySTS from "@/components/WhySTS";
import Industries from "@/components/Industries";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const FullPageScene = dynamic(() => import("@/components/FullPageScene"), { ssr: false });

export default function Home() {
  return (
    <main>
      {/* One single Three.js canvas behind EVERYTHING — no seams */}
      <FullPageScene />

      {/* All content layers on top */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Problem />
        <Services />
        <HowItWorks />
        <WhySTS />
        <Industries />
        <Team />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
