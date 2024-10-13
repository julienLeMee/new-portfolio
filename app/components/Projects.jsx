import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      imageSrc: "/path-to-image1.jpg",
      title: "Project One",
      description: "Description of project one.",
      technologies: ["React", "Node.js", "Tailwind CSS"],
      link: "https://link-to-project-one.com",
    },
    {
      imageSrc: "/path-to-image2.jpg",
      title: "Project Two",
      description: "Description of project two.",
      technologies: ["Next.js", "Express", "MongoDB"],
      link: "https://link-to-project-two.com",
    },
    {
      imageSrc: "/path-to-image1.jpg",
      title: "Project One",
      description: "Description of project one.",
      technologies: ["React", "Node.js", "Tailwind CSS"],
      link: "https://link-to-project-one.com",
    },
    {
      imageSrc: "/path-to-image2.jpg",
      title: "Project Two",
      description: "Description of project two.",
      technologies: ["Next.js", "Express", "MongoDB"],
      link: "https://link-to-project-two.com",
    },
    {
      imageSrc: "/path-to-image1.jpg",
      title: "Project One",
      description: "Description of project one.",
      technologies: ["React", "Node.js", "Tailwind CSS"],
      link: "https://link-to-project-one.com",
    },
    {
      imageSrc: "/path-to-image2.jpg",
      title: "Project Two",
      description: "Description of project two.",
      technologies: ["Next.js", "Express", "MongoDB"],
      link: "https://link-to-project-two.com",
    },
    // Ajoute d'autres projets ici...
  ];

  return (
    <>
      <div className="px-3 md:px-6 lg:px-10 flex flex-col">
        <p className="max-w-[1920px] min-w-full pb-1 font-mono text-[13px] uppercase">
          [002. Selected Works]
        </p>
        <h2 className="w-full text-[40px] font-bold uppercase leading-[0.8] py-6 md:pb-10 md:text-[80px]">
          Tailored Experiences
        </h2>
        <p className="max-w-[550px] text-2xl font-normal leading-[1.1] text-pink md:text-[32px] md:leading-[1] w-full">
          Bringing custom web solutions to life, designed to meet your unique
          needs.
        </p>

        <div className="w-full overflow-x-auto scrollbar-hide lg:pl-[calc(50vw-1000px)]">
          <div className="flex w-max gap-x-3 py-5 md:gap-x-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                imageSrc={project.imageSrc}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
