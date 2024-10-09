"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Switch } from "@/components/ui/switch";
import Menu from "./Menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Ajout d'un état pour le menu mobile

  // Vérifie la préférence de l'utilisateur et applique le mode correspondant
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

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
    <nav className="bg-white dark:bg-[--color-dark-bg] shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JL</AvatarFallback>
        </Avatar>


        {/* Menu pour desktop */}
        <div className="hidden md:flex space-x-6">
            <Menu />
          {/* <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-300">About</Link>
          <Link href="/services" className="hover:text-gray-600 dark:hover:text-gray-300">Services</Link>
          <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-300">Contact</Link> */}
        </div>


        {/* Bouton de mode sombre */}
        <div className="flex items-center space-x-4">
            <div className="hidden md:flex ">
                <Switch
                    checked={isDarkMode}
                    onCheckedChange={toggleDarkMode} // Change le mode sombre quand le switch est basculé
                />
            </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              className="text-2xl focus:outline-none"
              onClick={toggleMobileMenu} // Ajout de l'événement au clic
            >
              {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />} {/* Icone burger ou croix */}
            </button>
          </div>
        </div>
      </div>

      {/* Menu pour mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="space-y-4 px-4 pb-4">
            <li>
              <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-600 dark:hover:text-gray-300">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-300">Contact</Link>
            </li>
            <Switch
                checked={isDarkMode}
                onCheckedChange={toggleDarkMode} // Change le mode sombre quand le switch est basculé
            />
          </ul>
        </div>
      )}
    </nav>
  );
};
