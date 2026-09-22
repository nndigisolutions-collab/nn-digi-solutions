import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      <Services />

      <WhyChooseUs />

      <Process />

      <Portfolio />

      <FAQ />

      <Contact />

      <Footer />

<WhatsAppButton />
    </main>
  );
}