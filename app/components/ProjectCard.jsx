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
      className="inline-flex flex-col dark:bg-white bg-[--color-dark-bg] w-[calc(100svw-48px)] max-w-[560px] rounded-3xl p-3 pb-5 md:w-[60lvw] md:max-w-[632px] md:rounded-[32px] md:p-6 lg:w-[40lvw] transition-all hover:bg-[--color-pink] dark:hover:bg-[--color-pink]"
    >
      <div className="relative mb-8 h-[232px] w-full overflow-hidden rounded-2xl md:h-[360px] md:rounded-[20px]">
        <img
          src={imageSrc}
          alt={title}
          className="absolute inset-[-1] size-full object-cover"
        />
      </div>
      <h3 className="mb-6 text-2xl font-semibold leading-[1.1]md:text-[32px] text-white dark:text-black">
        {title}
      </h3>
      <p className="mb-6 flex-1 text-lg font-normal leading-[1.2]md:text-2xl md:leading-[1.1] text-white dark:text-black">
        {description}
      </p>
      <div className="flex flex-wrap gap-1 mb-3">
        {technologies.map((tech, index) => (
          <ShinyBadge
            key={index}
            text={tech.name}
            logo={tech.logo}
          />
        ))}
      </div>
      {/* <span className="text-blue-500 hover:underline">View Project</span> */}
    </a>
  );
}
