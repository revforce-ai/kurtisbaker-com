import { Nav } from "@/app/components/Nav";
import { Hero } from "@/app/components/Hero";
import { Pillars } from "@/app/components/Pillars";
import { Companies } from "@/app/components/Companies";
import { About } from "@/app/components/About";
import { Media } from "@/app/components/Media";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Pillars />
        <Companies />
        <About />
        <Media />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
