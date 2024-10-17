import ProjectCard from "./ProjectCard";
import projects from "@/data/projectsData";

export default function Projects() {
  return (
    <>
      <div id="" className="my-32 px-3 md:px-6 lg:px-10 flex flex-col">
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
