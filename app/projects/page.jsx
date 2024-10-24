import AsideProjects from "../components/AsideProjects";
import Header from "../components/Header";

export default function Projects() {
  return (
    <>
      <main className="bg-white dark:bg-background text-[--color-dark-bg] dark:text-[--color-pink]">
        <Header />
        <AsideProjects />
      </main>
    </>
  );
}
