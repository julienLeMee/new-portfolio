"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Switch } from "@/components/ui/switch";
import Menu from "./Menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Ajout d'un état pour le menu mobile

  // Vérifie la préférence de l'utilisateur et applique le mode correspondant
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const isDarkMode = savedTheme === "dark";
    setIsDarkMode(isDarkMode); // Mise à jour avec l'état initial correct
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  // Désactiver ou réactiver le scroll en fonction de l'état du menu mobile
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"; // Désactiver le scroll
    } else {
      document.body.style.overflow = "auto"; // Réactiver le scroll
    }
  }, [isMobileMenuOpen]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex w-full justify-center border-b border-solid border-transparent px-3 transition-all duration-500 md:items-center md:pt-0 md:px-10 md:transition-none md:h-auto md:text-[--color-pink]">
      <div className="w-full max-w-[1920px] mx-auto py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-base font-bold leading-[1.1] flex gap-2 items-center dark:text-[--color-pink] text-[--color-dark-text]"
        >
          <Image src="/logos/jl.svg" alt="Logo" width={32} height={32} />
          Julien Le Mee
        </Link>

        {/* Menu pour desktop */}
        <div className="hidden md:flex space-x-6">
          <Menu />
        </div>

        {/* Bouton de mode sombre */}
        <div className="flex items-center space-x-4">
          <div className="flex">
            <Switch
              checked={isDarkMode}
              onCheckedChange={toggleDarkMode} // Change le mode sombre quand le switch est basculé
            />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex">
            <button
              className="text-2xl focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}{" "}
              {/* Icone burger ou croix */}
            </button>
          </div>
        </div>
      </div>

      {/* Menu pour mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-0 flex w-full justify-center overflow-hidden border-b border-solid border-transparent px-3 pt-6 transition-all duration-500 md:items-center md:pt-0 md:overflow-auto md:px-10 md:transition-none before:inset-x before:absolute before:top-0 before:z-0 before:h-svh before:w-full before:transform before:bg-[--color-pink] before:transition-transform before:duration-500 md:before:hidden md:max-h-unset z-[100] h-svh max-h-[1920px] text-black before:translate-y-0 md:h-auto md:text-[--color-pink]">
          <div className="absolute inset-x-2 top-0 flex h-[calc(100svh-24px)] flex-col items-center justify-between overflow-hidden md:hidden">
            <div className="flex items-center justify-between w-full py-4 px-1">
              <p className="text-base font-bold leading-[1.1] flex gap-2 items-center">
                <Image
                  src="/logos/jl-2.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                  // className="rotate"
                />
                Julien Le Mee
              </p>

              {/* Menu pour desktop */}
              <div className="hidden md:flex space-x-6">
                <Menu />
              </div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden flex">
                <button
                  className="text-2xl focus:outline-none"
                  onClick={toggleMobileMenu}
                >
                  {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}{" "}
                  {/* Icone burger ou croix */}
                </button>
              </div>
            </div>

            <nav className="flex w-full flex-1 flex-col justify-end gap-y-[8%] pointer-events-auto opacity-100 mb-6">
              <div className="flex w-full flex-col transition-transform duration-500 translate-x-0">
                <p className="pb-1 font-mono text-[10px] uppercase">[Menu]</p>
                <a
                  href="#1"
                  className="border-b border-solid border-b-black text-left flex items-end justify-between gap-x-2 py-2 text-3xl font-bold uppercase leading-[0.8] sm:py-4 sm:text-[40px] transition-transform duration-500 translate-x-0"
                >
                  Menu 1
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#000000"
                  >
                    <path
                      d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#2"
                  className="border-b border-solid border-b-black text-left flex items-end justify-between gap-x-2 py-2 text-3xl font-bold uppercase leading-[0.8] sm:py-4 sm:text-[40px] transition-transform duration-500 translate-x-0"
                >
                  Menu 2
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#000000"
                  >
                    <path
                      d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#3"
                  className="border-b border-solid border-b-black text-left flex items-end justify-between gap-x-2 py-2 text-3xl font-bold uppercase leading-[0.8] sm:py-4 sm:text-[40px] transition-transform duration-500 translate-x-0"
                >
                  Menu 3
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#000000"
                  >
                    <path
                      d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="flex w-full flex-col transition-transform duration-500 translate-x-0">
                <p className="pb-1 font-mono text-[10px] uppercase">
                  [Socials]
                </p>
                <a
                  href="https://www.linkedin.com/in/julien-le-mee/"
                  className="border-b border-solid border-b-black text-left py-2 text-2xl leading-[1.1] sm:py-4 transition-transform duration-500 translate-x-0"
                >
                  Linkedin
                </a>
                <a
                  href="https://github.com/julienLeMee"
                  className="border-b border-solid border-b-black text-left py-2 text-2xl leading-[1.1] sm:py-4 transition-transform duration-500 translate-x-0"
                >
                  Github
                </a>
              </div>
            </nav>
            <div className="flex w-full items-end justify-between py-5 md:hidden transition-transform delay-200 duration-300 translate-y-0">
              <Image
                src="/logos/jl-2.svg"
                alt="Logo"
                width={85}
                height={32}
                className="ui-flex-none ui-fill-black fill-current md:min-w-[180px] lg:min-w-[210px]"
              />
              <small className="whitespace-nowrap text-[13px] font-normal leading-[1.1]">
                ©2024 Julien Le Mee, All right reserved.
              </small>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
