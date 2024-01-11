import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import MyApp from "./_app";
import ReactGA from "react-ga";

const TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
ReactGA.initialize(TRACKING_ID);

export default function Home() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <main className="flex min-h-screen flex-col container mx-auto bg-[#424040]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <EmailSection />
      <Footer />
    </main>
  );
}
