import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Discography from "@/components/Discography";
import Shows from "@/components/Shows";
import Media from "@/components/Media";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="relative">
    <Header />
    <Hero />
    <About />
    <Media />
    <Discography />
    <Shows />
    <Contact />
    <Footer />
  </main>
);

export default Index;
