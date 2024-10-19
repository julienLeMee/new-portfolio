import { ShinyBadge } from "./ShinyBadge";

export default function ProjectCard({
  imageSrc,
  title,
  description,
  technologies,
  link,
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group h-[500px] inline-flex flex-1 hover:flex-[4] flex-col bg-[--color-dark-bg] transition-all duration-300 hover:bg-[--color-pink] dark:hover:bg-[--color-pink] relative before:absolute before:inset-0 before:bg-gradient-to-t before:from-black before:via-transparent before:content-['']"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative mb-4 h-full w-full overflow-hidden"></div>
      <h3 className="mb-6 text-2xl leading-[1.1] md:text-[32px] text-white z-10 transition-all duration-500 ease-in-out custom-rotate uppercase text-[clamp(3rem,5vw,4.5rem)] font-extrabold absolute bottom-0 left-[50px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
        {title}
      </h3>
      <div className="absolute w-3/4 bottom-0 right-0 p-8 text-right text-base opacity-0 transition-opacity duration-300 delay-200 group-hover:opacity-100">
        {/* <p className="hidden text-right text-base group-hover:inline-flex justify-end mb-6 flex-1 font-normal leading-[1.2] md:leading-[1.1] text-white relative z-10 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
          {description}
        </p> */}
        <div className="hidden group-hover:inline-flex justify-end flex-wrap gap-1 mb-3 relative z-10">
          {technologies.map((tech, index) => (
            <ShinyBadge key={index} text={tech.name} logo={tech.logo} />
          ))}
        </div>
      </div>
    </a>
  );
}
