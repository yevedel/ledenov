import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Numbers from "./components/Numbers";
import Advantages from "./components/Advantages";
import FeaturedCase from "./components/FeaturedCase";
import Faq from "./components/Faq";
import {
  Logos,
  About,
  Outcomes,
  Industries,
  Services,
  Process,
  Loyalty,
  Testimonials,
  Projects,
  AuditOffer,
  BookCall,
} from "./components/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Loyalty />
      <Logos />
      <Numbers />
      <About />
      <Outcomes />
      <Industries />
      <Services />
      <Process />
      <Advantages />
      <FeaturedCase />
      <Testimonials />
      <Projects />
      <AuditOffer />
      <Faq />
      <BookCall />
    </>
  );
}
