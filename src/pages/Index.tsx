import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Photos from "@/components/Photos";
import Discography from "@/components/Discography";
import Shows from "@/components/Shows";
import Press from "@/components/Press";
import Media from "@/components/Media";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="relative">
    <Header />
    <Hero />
    <About />
    <Media />
    <Photos />
    <Discography />
    <Shows />
    <Press />
    <Contact />
    <Footer />
  </main>
);

export default Index;
