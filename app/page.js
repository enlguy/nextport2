import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto bg-gradient-to-b from bg-medblue to bg-lgtblue">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <EmailSection />
      <Footer />
    </main>
  );
}
