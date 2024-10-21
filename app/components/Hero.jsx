"use client";

import React, { useEffect, useState } from "react";
import { heroAnimation } from "../../animations/heroAnimation";
import Loader from "./Loader";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("../components/HeroScene"), {
  ssr: false,
});

export default function Hero() {
  const [loading, setLoading] = useState(true); // État pour le chargement

  useEffect(() => {
    // Simule le chargement de la page
    const timeout = setTimeout(() => {
      setLoading(false); // Désactiver le loader après 3 secondes
    }, 500);

    return () => clearTimeout(timeout); // Nettoyage
  }, []);

  useEffect(() => {
    if (!loading) {
      heroAnimation(); // Lancer l'animation après le chargement
    }
  }, [loading]); // Appeler heroAnimation quand loading devient false

  if (loading) {
    return <Loader />; // Afficher le loader pendant le chargement
  }

  // Contenu une fois que le chargement est terminé
  return (
    <section className="flex flex-1 flex-col px-3 md:px-6 lg:px-10 h-svh justify-center md:justify-end pb-24 pt-[88px]">
      <div className="flex flex-col text-left mx-auto w-full max-w-[1920px] relative z-[1]">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="hero-heading-small min-w-full pb-1 font-mono text-[13px] uppercase">
              [000. Where It All Starts]
            </p>
            <h1 className="hero-heading-large w-full text-[40px] font-bold uppercase leading-[0.8] py-5 md:text-[88px]">
              Hi I'm Julien
              <br />
              full stack
              <br />
              web developer
            </h1>
          </div>
          {/* THREE JS COMPONENT */}
          <HeroScene />
        </div>
        <div className="flex w-full flex-col md:flex-row md:border-b md:border-t md:border-solid md:border-[--color-pink]">
          <div className="hero-paragraph text-xl font-normal leading-[1.1] md:text-[32px] md:leading-[1] border-y border-solid border-[--color-pink] py-5 md:border-y-0 md:border-r md:py-8 w-full">
            <p className="w-full lg:max-w-[70%]">
              I learn and improve every day to take on new challenges.
            </p>
          </div>
          <div className="hero-buttons flex w-full flex-row items-center justify-stretch gap-x-2 py-5 md:w-auto md:pl-10 md:pr-8">
            <a
              href="https://github.com/julienLeMee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="relative w-max inline-flex items-center justify-center rounded-lg font-mono font-medium uppercase transition-all duration-200 bg-[--color-pink] text-black md:hover:bg-white text-[15px] h-[44px] px-2 sm:px-6 disabled:opacity-30">
                Github
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/julien-le-mee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="relative w-max inline-flex items-center justify-center rounded-lg font-mono font-medium uppercase transition-all duration-200 border border-solid border-[--color-pink] bg-transparent backdrop-blur-[10px] md:hover:bg-[--color-pink] md:hover:text-black text-[15px] h-[44px] px-2 sm:px-6 disabled:opacity-30">
                Linkedin
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
