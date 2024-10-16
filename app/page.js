import { Button } from "@/components/ui/button";
import Header from "./components/Header";
import { Collapsible } from "./components/Collapsible";
import Hero from "./components/Hero";
import InfiniteSlider from "./components/InfiniteSlider";
import DotBg from "./components/DotBg";
import RevealBox from "./components/RevealBox";
import RevealText from "./components/RevealText";
import TextFade from "./components/TextFade";
import { LogoCloud } from "./components/LogoCloud";
import ButtonSection from "./components/ButtonSection";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ThreeJSComponent from "./components/ThreeJSComponent";
import { ContactForm } from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-background text-[--color-dark-bg] dark:text-[--color-pink]">
        {/* <RevealBox /> */}
        <Hero />
        <RevealText />
        <Projects />
        <ContactForm />
        {/* <DotBg /> */}
        {/* <TextFade /> */}
        {/* <InfiniteSlider />
        <ButtonSection />
        <div className="container mx-auto p-4">
        <Collapsible />
        </div> */}
        {/* <LogoCloud /> */}
      </main>
      <Footer />
    </>
  );
}
