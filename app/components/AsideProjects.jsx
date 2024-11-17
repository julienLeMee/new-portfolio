"use client";

import { useState } from "react";
import SingleProject from "./SingleProject";
import projects from "@/data/projectsData";
import Link from "next/link";
import Footer from "./Footer";

const AsideProjects = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <aside className="glow-section h-full flex sm:flex-row flex-col w-full text-white">
        {/* Colonne des onglets */}
        <div className="w-full grid grid-flow-col md:flex overflow-x-auto auto-cols-max hide-scrollbar md:flex-col md:flex-wrap sm:py-16 py-4 pl-6 md:pl-10 sm:pr-0 pr-10 gap-2 sm:w-1/5 bg-transparent">
          {projects.map((project, index) => (
            <div key={project.id || project.title}>
              {index === projects.length - 1 && (
                <div className="w-4/5 border-t border-white/20 my-4 hidden md:flex">
                  <p className="w-full text-xs text-white/20 mt-2">
                    Others experiences
                  </p>
                </div>
              )}
              <button
                onClick={() => handleTabClick(`tab${index + 1}`)}
                className={`w-fit text-start leading-tight relative inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-sm hover:bg-[white] hover:text-[#181818] ${
                  activeTab === `tab${index + 1}`
                    ? "bg-[#E3AFBE] hover:bg-[#E3AFBE] text-[#181818]"
                    : "bg-[#181818]"
                }`}
              >
                {project.title}
              </button>
            </div>
          ))}
        </div>

        {/* Contenu de l'onglet actif */}
        <div className="w-full sm:w-3/4 px-6 md:px-12 py-16">
          {projects.map((project, index) => {
            if (activeTab === `tab${index + 1}`) {
              return (
                <SingleProject
                  key={project.id || project.title}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  technologies={project.technologies}
                  keyFeatures={project.keyFeatures}
                  link={project.link}
                />
              );
            }
          })}
        </div>

        {/* Colonne des raccourcis */}
        <div className="hidden md:flex sm:flex-col flex-row sm:py-16 py-4 pr-10 sm:pl-0 pl-10 gap-2 sm:w-1/5 w-full bg-transparent">
          {projects.map((project, index) => {
            if (activeTab === `tab${index + 1}`) {
              return (
                <div
                  className="flex flex-col gap-2"
                  key={project.id || project.title}
                >
                  <Link
                    href={project.github}
                    className="group flex items-center gap-2 text-sm dark:text-white dark:hover:text-[--color-pink] text-[--color-dark-text] hover:text-[--color-pink] hover:underline"
                    target="_blank"
                  >
                    <svg
                      width="16px"
                      height="16px"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="currentColor"
                      className="group-hover:logo-rotate"
                    >
                      <path
                        d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    View on Github
                  </Link>
                  <Link
                    key={index}
                    href={project.link}
                    className="group flex items-center gap-2 text-sm dark:text-white dark:hover:text-[--color-pink] text-[--color-dark-text] hover:text-[--color-pink] hover:underline"
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
                      className="group-hover:logo-rotate"
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
            }
          })}
        </div>
      </aside>
      <Footer />
    </>
  );
};

export default AsideProjects;
