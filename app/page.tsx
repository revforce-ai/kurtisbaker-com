import { Nav } from "@/app/components/Nav";
import { Hero } from "@/app/components/Hero";
import { LogoMarquee } from "@/app/components/LogoMarquee";
import { Credentials } from "@/app/components/Credentials";
import { Pillars } from "@/app/components/Pillars";
import { Companies } from "@/app/components/Companies";
import { About } from "@/app/components/About";
import { Media } from "@/app/components/Media";
import { Faq } from "@/app/components/Faq";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content" className="flex-1">
        <Hero />
        <LogoMarquee />
        <Credentials />
        <Pillars />
        <Companies />
        <About />
        <Media />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
