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
      className="h-[700px] inline-flex flex-1 hover:flex-[4] flex-col bg-[--color-dark-bg] transition-all duration-300 hover:bg-[--color-pink] dark:hover:bg-[--color-pink] relative"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative mb-4 h-full w-full overflow-hidden">
      </div>
      <h3 className="mb-6 text-2xl font-semibold leading-[1.1] md:text-[32px] text-white dark:text-black relative z-10">
        {title}
      </h3>
      <p className="hidden mb-6 flex-1 text-lg font-normal leading-[1.2] md:text-2xl md:leading-[1.1] text-white dark:text-black relative z-10">
        {description}
      </p>
      <div className="flex flex-wrap gap-1 mb-3 relative z-10">
        {technologies.map((tech, index) => (
          <ShinyBadge key={index} text={tech.name} logo={tech.logo} />
        ))}
      </div>
    </a>
  );
}
