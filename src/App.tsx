import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
export default function Appp(){
return (
  <div className="bg-gray-950 min-h-screen text-white">
     <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Contact />
      <Footer />
  </div>
)
}