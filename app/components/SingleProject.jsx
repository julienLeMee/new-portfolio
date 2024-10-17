import Link from "next/link";

const SingleProject = ({
  title,
  description,
  imageSrc,
  technologies,
  link,
}) => {
  return (
    <div className="pb-20">
      <h2 className="text-2xl font-bold">{title}</h2>
      <img
        src={imageSrc}
        alt={title}
        className="w-full my-4 rounded-lg overflow-hidden aspect-video object-cover max-h-[370px]"
      />
      <h3 className="pt-8 border-b border-[#787878] font-mono text-[13px] uppercase dark:text-[--color-pink] text-[--color-dark-text]">
        Overview
      </h3>
      <p className="my-2">{description}</p>
      <h3 className="pt-8 border-b border-[#787878] font-mono text-[13px] uppercase dark:text-[--color-pink] text-[--color-dark-text]">
        Technologies
      </h3>
      <div className="technologies my-2">
        <ul className="flex gap-2">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="flex flex-col items-center gap-1 p-4 rounded-lg border border-[#787878]"
            >
              <img src={tech.logo} alt={tech.name} className="w-6 h-6" />
              <span>{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={link}
        className="flex items-center gap-2 pt-8 text-sm dark:text-white dark:hover:text-[--color-pink] text-[--color-dark-text] hover:text-[--color-pink] hover:underline"
      >
        <svg
          width="16px"
          height="16px"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
        >
          <path
            d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        View Project
      </Link>
    </div>
  );
};

export default SingleProject;
