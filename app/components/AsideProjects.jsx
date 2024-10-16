'use client';

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
      <div className="flex flex-col w-1/5 bg-transparent">
        <button
          onClick={() => handleTabClick("tab1")}
          className={`w-fit relative inline-flex items-center justify-center rounded-lg font-sm transition-all duration-200 border border-solid border-black bg-black text-white backdrop-blur-[10px] md:hover:bg-white md:hover:border-white md:hover:text-black text-[15px] h-[44px] px-2 sm:px-6 disabled:opacity-30 my-4 mx-auto ${
            activeTab === "tab1" ? "bg-[#E3AFBE] text-[#181818]" : ""
          }`}
        >
          Discussion 1
        </button>
        <button
          onClick={() => handleTabClick("tab2")}
          className={`w-fit relative inline-flex items-center justify-center rounded-lg font-sm transition-all duration-200 border border-solid border-black bg-black text-white backdrop-blur-[10px] md:hover:bg-white md:hover:border-white md:hover:text-black text-[15px] h-[44px] px-2 sm:px-6 disabled:opacity-30 my-4 mx-auto ${
            activeTab === "tab2" ? "bg-[#E3AFBE] text-[#181818]" : ""
          }`}
        >
          Discussion 2
        </button>
        <button
          onClick={() => handleTabClick("tab3")}
          className={`w-fit relative inline-flex items-center justify-center rounded-lg font-sm transition-all duration-200 border border-solid border-black bg-black text-white backdrop-blur-[10px] md:hover:bg-white md:hover:border-white md:hover:text-black text-[15px] h-[44px] px-2 sm:px-6 disabled:opacity-30 my-4 mx-auto ${
            activeTab === "tab3" ? "bg-[#E3AFBE] text-[#181818]" : ""
          }`}
        >
          Discussion 3
        </button>
      </div>

      {/* Contenu de l'onglet actif */}
      <div className="w-full p-6 bg-black">
        {activeTab === "tab1" && <TabContent1 />}
        {activeTab === "tab2" && <TabContent2 />}
        {activeTab === "tab3" && <TabContent3 />}
      </div>
    </aside>
  );
};

// Contenu pour chaque onglet
const TabContent1 = () => {
  return <div>Contenu de la discussion 1</div>;
};

const TabContent2 = () => {
  return <div>Contenu de la discussion 2</div>;
};

const TabContent3 = () => {
  return <div>Contenu de la discussion 3</div>;
};

export default AsideProjects;
