'use client'

import Link from "next/link";
import { ShinyBadge } from "./ShinyBadge";

const SingleProject = ({
  title,
  description,
  imageSrc,
  technologies,
  keyFeatures,
  link,
}) => {
  return (
    <div className="pb-20">
      <h2 className="dark:text-white text-[--color-dark-text] text-2xl font-bold">
        {title}
      </h2>
      <img
        src={imageSrc}
        alt={title}
        className="w-full my-4 rounded-lg overflow-hidden aspect-video object-cover max-h-[370px]"
      />
      <h3 className="mb-4 pt-8 border-b border-[#787878] font-mono text-[13px] uppercase dark:text-[--color-pink] text-[--color-dark-text]">
        Overview
      </h3>
      <p className="dark:text-white text-[--color-dark-text] my-2">
        {description}
      </p>
      <h3 className="mb-4 pt-8 border-b border-[#787878] font-mono text-[13px] uppercase dark:text-[--color-pink] text-[--color-dark-text]">
        Technologies
      </h3>
      <div className="dark:text-white text-[--color-dark-text] my-2">
        <ul className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <li key={index} className="flex flex-col items-center gap-1">
              <ShinyBadge key={index} text={tech.name} logo={tech.logo} />
            </li>
          ))}
        </ul>
      </div>
      <h3 className="mb-4 pt-8 border-b border-[#787878] font-mono text-[13px] uppercase dark:text-[--color-pink] text-[--color-dark-text]">
        Key Features
      </h3>
      <div className="dark:text-white text-[--color-dark-text] my-2">
        <ul className="grid grid-cols-3 gap-2">
          {keyFeatures.map((feature) => (
            <li
              key={feature.text}
              className="flex flex-col gap-4 justify-start border border-gray-300 rounded-md shadow-sm p-4"
            >
              <img
                src={feature.icon}
                alt=""
                className="w-10 h-10"
              />
              <span className="mt-4 text-lg font-medium">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={link}
        className="w-fit flex items-center gap-2 pt-8 text-sm dark:text-white dark:hover:text-[--color-pink] text-[--color-dark-text] hover:text-[--color-pink] hover:underline"
      >
        <svg
          width="16px"
          height="16px"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
        >
          <path
            d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        View Project
      </Link>
    </div>
  );
};

export default SingleProject;
