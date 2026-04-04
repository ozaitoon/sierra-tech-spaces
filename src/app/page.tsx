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

const TerrainScene = dynamic(() => import("@/components/TerrainScene"), { ssr: false });
const DashedLines = dynamic(() => import("@/components/DashedLines"), { ssr: false });
const SpotlightsScene = dynamic(() => import("@/components/SpotlightsScene"), { ssr: false });

function SceneWrapper({
  children,
  scene,
}: {
  children: React.ReactNode;
  scene: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0 opacity-75 pointer-events-none">
        {scene}
      </div>
      {/* Top blend */}
      <div className="absolute top-0 inset-x-0 h-32 z-[1] bg-gradient-to-b from-background to-transparent pointer-events-none" />
      {/* Bottom blend */}
      <div className="absolute bottom-0 inset-x-0 h-32 z-[1] bg-gradient-to-t from-background to-transparent pointer-events-none" />
      <div className="relative z-[2]">
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <SceneWrapper scene={<DashedLines />}>
        <Problem />
      </SceneWrapper>

      <SceneWrapper scene={<TerrainScene />}>
        <Services />
      </SceneWrapper>

      <SceneWrapper scene={<SpotlightsScene />}>
        <HowItWorks />
      </SceneWrapper>

      <SceneWrapper scene={<DashedLines />}>
        <WhySTS />
      </SceneWrapper>

      <SceneWrapper scene={<TerrainScene />}>
        <Industries />
      </SceneWrapper>

      <SceneWrapper scene={<SpotlightsScene />}>
        <Team />
      </SceneWrapper>

      <Contact />
      <Footer />
    </main>
  );
}
