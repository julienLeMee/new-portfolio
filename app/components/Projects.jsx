import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      imageSrc: "/projects/yum-list.jpeg",
      title: "Yum list",
      description: "Progressive Web App. Organize your favorite restaurants, whether they are tested or to discover. Connect with your friends and share your favorite addresses.",
      technologies: [
        { name: "Ruby on rails", logo: "/logos/rails.svg" },
        { name: "Javascript", logo: "/logos/javascript.svg" },
        { name: "Tailwind", logo: "/logos/tailwindcss.svg" },
      ],
      link: "https://link-to-project-one.com",
    },
    {
      imageSrc: "/projects/disney.jpeg",
      title: "Disney Clone",
      description: "Description of project one.",
      technologies: [
        { name: "Next JS", logo: "/logos/nextjs.svg" },
        { name: "Javascript", logo: "/logos/javascript.svg" },
        { name: "Tailwind", logo: "/logos/tailwindcss.svg" },
      ],
      link: "https://link-to-project-one.com",
    },
    {
      imageSrc: "/projects/nike.jpg",
      title: "Nike Clone",
      description: "Description of project one.",
      technologies: [
        { name: "Next JS", logo: "/logos/nextjs.svg" },
        { name: "Javascript", logo: "/logos/javascript.svg" },
        { name: "Tailwind", logo: "/logos/tailwindcss.svg" },
      ],
      link: "https://link-to-project-one.com",
    },
    {
      imageSrc: "/projects/tesla.png",
      title: "Tesla Clone",
      description: "Description of project one.",
      technologies: [
        { name: "Next JS", logo: "/logos/nextjs.svg" },
        { name: "Javascript", logo: "/logos/javascript.svg" },
        { name: "Tailwind", logo: "/logos/tailwindcss.svg" },
      ],
      link: "https://link-to-project-one.com",
    },
    {
      imageSrc: "/projects/star-wars-empire-base.png",
      title: "Star wars Imperial Base",
      description: "Description of project one.",
      technologies: [
        { name: "Three JS", logo: "/logos/threejs.svg" },
        { name: "Javascript", logo: "/logos/javascript.svg" },
        { name: "Tailwind", logo: "/logos/tailwindcss.svg" },
      ],
      link: "https://link-to-project-one.com",
    },
    {
      imageSrc: "/projects/disney.jpeg",
      title: "Disney Clone",
      description: "Description of project one.",
      technologies: [
        { name: "Next JS", logo: "/logos/nextjs.svg" },
        { name: "Javascript", logo: "/logos/javascript.svg" },
        { name: "Tailwind", logo: "/logos/tailwindcss.svg" },
      ],
      link: "https://link-to-project-one.com",
    },
    {
      imageSrc: "/projects/disney.jpeg",
      title: "Disney Clone",
      description: "Description of project one.",
      technologies: [
        { name: "Next JS", logo: "/logos/nextjs.svg" },
        { name: "Javascript", logo: "/logos/javascript.svg" },
        { name: "Tailwind", logo: "/logos/tailwindcss.svg" },
      ],
      link: "https://link-to-project-one.com",
    },
    {
      imageSrc: "/projects/disney.jpeg",
      title: "Disney Clone",
      description: "Description of project one.",
      technologies: [
        { name: "Next JS", logo: "/logos/nextjs.svg" },
        { name: "Javascript", logo: "/logos/javascript.svg" },
        { name: "Tailwind", logo: "/logos/tailwindcss.svg" },
      ],
      link: "https://link-to-project-one.com",
    },
    // Ajoute d'autres projets ici...
  ];

  return (
    <>
      <div className="px-3 md:px-6 lg:px-10 flex flex-col">
        <div className="w-full pb-16">
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
        </div>

        <div className="w-full overflow-x-auto scrollbar-hide lg:pl-[calc(50vw-1000px)]">
          <div className="flex w-max gap-x-3 py-5 md:gap-x-5">
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
