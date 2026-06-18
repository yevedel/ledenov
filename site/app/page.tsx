import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Numbers from "./components/Numbers";
import Advantages from "./components/Advantages";
import Faq from "./components/Faq";
import {
  Logos,
  About,
  Industries,
  Services,
  Process,
  Testimonials,
  Projects,
  BookCall,
} from "./components/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Logos />
      <Numbers />
      <About />
      <Industries />
      <Services />
      <Process />
      <Advantages />
      <Testimonials />
      <Projects />
      <Faq />
      <BookCall />
    </>
  );
}
