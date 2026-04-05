// Auto-deploy test
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

const LaserFlow = dynamic(() => import("@/components/LaserFlow"), { ssr: false });
const Particles = dynamic(() => import("@/components/Particles"), { ssr: false });

export default function Home() {
  return (
    <main>
      {/* LaserFlow background behind everything */}
      <div className="fixed inset-0 z-0">
        <LaserFlow
          color="#CF9EFF"
          horizontalBeamOffset={0.0}
          verticalBeamOffset={-0.4}
          horizontalSizing={0.5}
          verticalSizing={25}
          wispDensity={1}
          wispSpeed={17.5}
          wispIntensity={0.9}
          flowSpeed={0.2}
          flowStrength={0.4}
          fogIntensity={0.02}
          fogScale={0.4}
          fogFallSpeed={0}
          decay={1.34}
          falloffStart={1.95}
        />
      </div>

      {/* All content layers on top */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        {/* Particles background for below-hero sections */}
        <div className="absolute inset-0 top-[100vh] z-0 pointer-events-none">
          <div className="sticky top-0 w-full h-screen">
            <Particles
              particleColors={["#a855f7"]}
              particleCount={500}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={200}
              moveParticlesOnHover
              alphaParticles
              disableRotation={false}
              pixelRatio={1}
            />
          </div>
        </div>
        <Services />
        <Problem />
        <Team />
        <HowItWorks />
        <WhySTS />
        <Industries />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
