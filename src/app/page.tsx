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

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
