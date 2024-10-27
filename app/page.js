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
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('./components/Scene'), {

    ssr: false,

})

export default function Home() {
  return (
    <>
      {/* <div style={{ position: "relative", overflow: "hidden" }}> */}
        <Header />
        {/* <ThreeJSComponent /> */}
        <main className="bg-white dark:bg-background text-[--color-dark-bg] dark:text-[--color-pink]">
          {/* <RevealBox /> */}
          <Hero />
          <RevealText />
          <Projects />
          <InfiniteSlider />
          <ContactForm />
          <Scene />
          {/* <DotBg /> */}
          {/* <TextFade /> */}
        {/* <ButtonSection /> */}
        {/* <div className="container mx-auto p-4">
        <Collapsible />
        </div> */}
          {/* <LogoCloud /> */}
        </main>
        <Footer />
      {/* </div> */}
    </>
  );
}
