import { Button } from "@/components/ui/button";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <main className="h-full min-h-screen bg-white dark:bg-[--color-dark-bg] text-[--color-dark-bg] dark:text-white">
        <Header />
        <div className="container mx-auto p-4">
          <h1 className="text-4xl">Welcome to My Portfolio</h1>
          <Button>Click me</Button>
        </div>
      </main>
    </>
  );
}
