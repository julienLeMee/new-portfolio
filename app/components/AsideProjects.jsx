"use client";

import { useState } from "react";

const AsideProjects = () => {
  // Gérer l'onglet actif avec useState
  const [activeTab, setActiveTab] = useState("tab1");

  // Fonction pour changer d'onglet
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <aside className="flex h-[calc(100vh-78px)] w-full text-white">
      {/* Colonne des onglets */}
      <div className="flex flex-col py-16 pl-10 gap-2 w-1/5 bg-transparent">
        <button
          onClick={() => handleTabClick("tab1")}
          className={`w-fit leading-tight relative inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-sm  hover:bg-[white] hover:text-[#181818] ${
            activeTab === "tab1" ? "bg-[#E3AFBE] hover:bg-[#E3AFBE] text-[#181818]" : ""
          }`}
        >
          Project 1
        </button>
        <button
          onClick={() => handleTabClick("tab2")}
          className={`w-fit leading-tight relative inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-sm hover:bg-[white] hover:text-[#181818]  ${
            activeTab === "tab2" ? "bg-[#E3AFBE] hover:bg-[#E3AFBE] text-[#181818]" : ""
          }`}
        >
          Project 2
        </button>
        <button
          onClick={() => handleTabClick("tab3")}
          className={`w-fit leading-tight relative inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-sm hover:bg-[white] hover:text-[#181818]  ${
            activeTab === "tab3" ? "bg-[#E3AFBE] hover:bg-[#E3AFBE] text-[#181818]" : ""
          }`}
        >
          Project 3
        </button>
      </div>

      {/* Contenu de l'onglet actif */}
      <div className="w-full px-12 py-16">
        {activeTab === "tab1" && <TabContent1 />}
        {activeTab === "tab2" && <TabContent2 />}
        {activeTab === "tab3" && <TabContent3 />}
      </div>
    </aside>
  );
};

// Contenu pour chaque onglet
const TabContent1 = () => {
  return (
    <div className="flex items-center gap-2 dark:text-[--color-pink] text-[--color-dark-text] text-[13px] uppercase">
      Projects
      <svg
        width="16px"
        height="16px"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="currentColor"
      >
        <path
          d="M9 6L15 12L9 18"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      Project 1
    </div>
  );
};

const TabContent2 = () => {
  return (
    <div className="flex items-center gap-2 dark:text-[--color-pink] text-[--color-dark-text] text-[13px] uppercase">
      Projects
      <svg
        width="16px"
        height="16px"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="currentColor"
      >
        <path
          d="M9 6L15 12L9 18"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      Project 2
    </div>
  );
};

const TabContent3 = () => {
  return (
    <div className="flex items-center gap-2 dark:text-[--color-pink] text-[--color-dark-text] text-[13px] uppercase">
      Projects
      <svg
        width="16px"
        height="16px"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="currentColor"
      >
        <path
          d="M9 6L15 12L9 18"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      Project 3
    </div>
  );
};

export default AsideProjects;
