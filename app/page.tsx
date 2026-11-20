import Hero from "@/components/Hero";
import PopularDestinations from "@/components/PopularDestinations";
import Tours from "@/components/Tours";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <PopularDestinations />
      <Tours />
      <About />
      <Faq />
      <Contact />
    </main>
  );
}
