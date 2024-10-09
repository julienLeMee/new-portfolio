import { Button } from "@/components/ui/button";
import Header from "./components/Header";
import { Collapsible } from "./components/Collapsible";

export default function Home() {
  return (
    <>
      <main className="h-full min-h-screen bg-white dark:bg-[--color-dark-bg] text-[--color-dark-bg] dark:text-white">
        <Header />
        <div className="container mx-auto p-4">
          <Collapsible />
        </div>
      </main>
    </>
  );
}
