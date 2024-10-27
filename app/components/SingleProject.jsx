"use client";

import Link from "next/link";
import { ShinyBadge } from "./ShinyBadge";
import { useEffect } from "react";
import { initGlowAnimation } from "../../animations/glowAnimation";

const SingleProject = ({
    title,
    description,
    imageSrc,
    technologies,
    keyFeatures,
    link,
}) => {
  useEffect(() => {
    const cleanupGlowAnimation = initGlowAnimation();

    return () => {
      cleanupGlowAnimation();
    };
  }, []);

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
      <h3 className="mb-4 pt-10 border-b border-[#787878] font-mono text-[13px] uppercase dark:text-[--color-pink] text-[--color-dark-text]">
        Technologies
      </h3>
      <div className="dark:text-white text-[--color-dark-text] my-8">
        <ul className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <li key={index} className="flex flex-col items-center gap-1">
              <ShinyBadge key={index} text={tech.name} logo={tech.logo} />
            </li>
          ))}
        </ul>
      </div>
      <h3 className="mb-4 pt-6 border-b border-[#787878] font-mono text-[13px] uppercase dark:text-[--color-pink] text-[--color-dark-text]">
        Key Features
      </h3>
      <div className="dark:text-white text-[--color-dark-text] my-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {keyFeatures.map((feature, index) => (
            <li key={feature.text} className="glow-section__card">
              <div className="glow-section__top-layer">
                <img src={feature.icon} alt="" className="w-10 h-10" />
                <span className="glow-section__top-layer-text mt-4 text-lg font-medium">
                  {feature.text}
                </span>
              </div>
              <div className={`glow-section__blob glow-section__blob--${index + 1}`}></div>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={link}
        className="w-fit flex items-center gap-2 text-sm dark:text-white dark:hover:text-[--color-pink] text-[--color-dark-text] hover:text-[--color-pink] hover:underline"
        target="_blank"
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
