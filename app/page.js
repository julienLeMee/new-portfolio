import { Button } from "@/components/ui/button";
import Header from "./components/Header";
import { Collapsible } from "./components/Collapsible";
import Hero from "./components/Hero";
import InfiniteSlider from "./components/InfiniteSlider";
import DotBg from "./components/DotBg";
import MagicalCard from "./components/MagicalCard";
import RevealBox from "./components/RevealBox";
import RevealText from "./components/RevealText";
import TextFade from "./components/TextFade";
import { LogoCloud } from "./components/LogoCloud";

export default function Home() {
  return (
    <>
      <main className="h-full min-h-screen bg-white dark:bg-background text-[--color-dark-bg] dark:text-white">
        <Header />
        {/* <RevealBox /> */}
        <Hero />
        <RevealText />
        <DotBg />
        <MagicalCard />
        <TextFade />
        <InfiniteSlider />
        <div className="container mx-auto p-4">
          <Collapsible />
        </div>
        {/* <LogoCloud /> */}
      </main>
    </>
  );
}
