import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const technologies = [
    {
        name: "PHP",
        img: "/logos/php-icon.svg",
    },
    {
        name: "Ruby on Rails",
        img: "/logos/rails.svg",
    },
    {
        name: "WordPress",
        img: "/logos/wordpress.svg",
    },
    {
        name: "Jira",
        img: "/logos/jira.svg",
    },
    {
        name: "Next.js",
        img: "/logos/nextjs.svg",
    },
    {
        name: "Tailwind CSS",
        img: "/logos/tailwindcss.svg",
    },
    {
        name: "Sass",
        img: "/logos/sass.svg",
    },
    {
        name: "JavaScript",
        img: "/logos/javascript.svg",
    },
    {
        name: "Three.js",
        img: "/logos/threejs.svg",
    },
    {
        name: "Git",
        img: "/logos/git.svg",
    },
    {
        name: "GitHub",
        img: "/logos/github-icon.svg",
    },
];

const firstRow = technologies.slice(0, technologies.length / 2);
const secondRow = technologies.slice(technologies.length / 2);

const TechCard = ({ img, name }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export default function InfiniteSlider() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
