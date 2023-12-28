import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto bg-[#424040]">
      <Hero />
    </main>
  );
}
