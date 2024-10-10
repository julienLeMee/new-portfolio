import { Button } from "@/components/ui/button";
import Header from "./components/Header";
import { Collapsible } from "./components/Collapsible";
import Hero from "./components/Hero";
import InfiniteSlider from "./components/InfiniteSlider";
import DotBg from "./components/DotBg";
import MagicalCard from "./components/MagicalCard";

export default function Home() {
  return (
    <>
      <main className="h-full min-h-screen bg-white dark:bg-background text-[--color-dark-bg] dark:text-white">
        <Header />
        <Hero />
        <DotBg />
        <MagicalCard />
        <InfiniteSlider />
        <div className="container mx-auto p-4">
          <Collapsible />
        </div>
      </main>
    </>
  );
}
