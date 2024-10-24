"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Switch } from "@/components/ui/switch";
import Menu from "./Menu";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (!savedTheme) {
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      const isDarkMode = savedTheme === "dark";
      setIsDarkMode(isDarkMode);
      document.documentElement.classList.toggle("dark", isDarkMode);
    }
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false); // Ferme le menu mobile
  };

  return (
    <header className="flex w-full justify-center border-b border-solid border-transparent px-3 transition-all duration-500 md:items-center md:pt-0 md:px-10 md:transition-none md:h-auto md:text-[--color-pink]">
      <div className="w-full max-w-[1920px] mx-auto py-4 flex justify-between items-center z-50">
        <Link
          href="/"
          className="text-base font-bold leading-[1.1] flex gap-2 items-center dark:text-[--color-pink] text-[--color-dark-text]"
        >
          <svg
            width="48px"
            height="48px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="194.75625 -2.799999999999997 110.4875 155.6"
            preserveAspectRatio="xMidYMid"
          >
            <defs>
              <filter id="editing-extrude-glow">
                <feFlood flood-color="#333333" result="flood-1"></feFlood>
                <feMorphology
                  operator="erode"
                  radius="1"
                  in="SourceAlpha"
                  result="erode"
                ></feMorphology>
                <feComposite
                  operator="in"
                  in="flood-1"
                  in2="erode"
                  result="comp1"
                ></feComposite>
                <feConvolveMatrix
                  order="0,0"
                  divisor="1"
                  in="comp1"
                  result="convolve"
                  kernelMatrix=""
                ></feConvolveMatrix>
                <feOffset
                  dx="0"
                  dy="0"
                  in="convolve"
                  result="extrude"
                ></feOffset>
                <feComposite
                  operator="in"
                  in="flood-1"
                  in2="extrude"
                  result="comp-extrude"
                ></feComposite>
                <feFlood
                  flood-color="rgba(20%,20%,20%,0)"
                  result="flood-2"
                ></feFlood>
                <feComposite
                  operator="in"
                  in="flood-2"
                  in2="SourceAlpha"
                  result="comp2"
                ></feComposite>
                <feMorphology
                  operator="dilate"
                  radius="1"
                  in="comp2"
                  result="dilate"
                ></feMorphology>
                <feOffset dx="0" dy="0" in="dilate" result="offset"></feOffset>
                <feGaussianBlur
                  in="offset"
                  stdDeviation="5.8"
                  result="blur"
                ></feGaussianBlur>
                <feComponentTransfer in="blur" result="shadow">
                  <feFuncA type="linear" slope="0.8" intercept="-0.2"></feFuncA>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode in="shadow"></feMergeNode>
                  <feMergeNode in="comp-extrude"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#editing-extrude-glow)">
              <g transform="translate(217.0300076007843, 102.00000190734863)">
                <path
                  d="M5.31-11.25L5.31-11.25L1.47-11.25L1.47-13.50L5.31-13.50L5.31-13.50Q6.97-13.50 8.09-14.75L8.09-14.75L8.09-14.75Q9.22-16 9.22-18.06L9.22-18.06L9.22-51.75L11.47-51.75L11.47-18.06L11.47-18.06Q11.47-15.09 9.69-13.17L9.69-13.17L9.69-13.17Q7.91-11.25 5.31-11.25ZM5.31-6.75L5.31-6.75L1.47-6.75L1.47-9L5.31-9L5.31-9Q8.81-9 11.27-11.66L11.27-11.66L11.27-11.66Q13.72-14.31 13.72-18.06L13.72-18.06L13.72-51.75L15.97-51.75L15.97-18.06L15.97-18.06Q15.97-13.38 12.86-10.06L12.86-10.06L12.86-10.06Q9.75-6.75 5.31-6.75ZM5.31-2.25L5.31-2.25L1.47-2.25L1.47-4.50L5.31-4.50L5.31-4.50Q10.69-4.50 14.45-8.47L14.45-8.47L14.45-8.47Q18.22-12.44 18.22-18.06L18.22-18.06L18.22-51.75L20.47-51.75L20.47-18.06L20.47-18.06Q20.47-13.78 18.45-10.14L18.45-10.14L18.45-10.14Q16.44-6.50 12.94-4.38L12.94-4.38L12.94-4.38Q9.44-2.25 5.31-2.25ZM5.31 2.25L5.31 2.25L1.47 2.25L1.47 0L5.31 0L5.31 0Q8.88 0 12.09-1.44L12.09-1.44L12.09-1.44Q15.31-2.88 17.64-5.30L17.64-5.30L17.64-5.30Q19.97-7.72 21.34-11.06L21.34-11.06L21.34-11.06Q22.72-14.41 22.72-18.06L22.72-18.06L22.72-51.75L24.97-51.75L24.97-18.06L24.97-18.06Q24.97-13.94 23.42-10.19L23.42-10.19L23.42-10.19Q21.88-6.44 19.23-3.70L19.23-3.70L19.23-3.70Q16.59-0.97 12.95 0.64L12.95 0.64L12.95 0.64Q9.31 2.25 5.31 2.25ZM30.72 0L30.72-51.75L32.97-51.75L32.97 0L30.72 0ZM44.22 0L44.22-51.75L46.47-51.75L46.47-11.25L64.47-11.25L64.47-9L46.47-9L46.47-6.75L64.47-6.75L64.47-4.50L46.47-4.50L46.47-2.25L64.47-2.25L64.47 0L44.22 0ZM39.72 0L39.72-51.75L41.97-51.75L41.97 0L39.72 0ZM35.22 0L35.22-51.75L37.47-51.75L37.47 0L35.22 0Z"
                  fill="#e3afbe"
                ></path>
              </g>
            </g>
          </svg>
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
      {/* {isMobileMenuOpen && ( */}
        <div
          className={`fixed inset-x-0 top-0 flex w-full justify-center overflow-hidden border-b border-solid border-transparent px-3 pt-6 bg-[--color-pink] z-[100] text-black h-full transition-transform duration-500 transform ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="absolute inset-x-2 top-0 flex h-[calc(100svh-24px)] flex-col items-center justify-between overflow-hidden md:hidden">
            <div className="flex items-center justify-between w-full py-4 px-1">
              <p className="text-base font-bold leading-[1.1] flex gap-2 items-center">
                <svg
                  width="48px"
                  height="48px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="194.75625 -2.799999999999997 110.4875 155.6"
                  preserveAspectRatio="xMidYMid"
                >
                  <defs>
                    <filter id="editing-extrude-glow">
                      <feFlood flood-color="#333333" result="flood-1"></feFlood>
                      <feMorphology
                        operator="erode"
                        radius="1"
                        in="SourceAlpha"
                        result="erode"
                      ></feMorphology>
                      <feComposite
                        operator="in"
                        in="flood-1"
                        in2="erode"
                        result="comp1"
                      ></feComposite>
                      <feConvolveMatrix
                        order="0,0"
                        divisor="1"
                        in="comp1"
                        result="convolve"
                        kernelMatrix=""
                      ></feConvolveMatrix>
                      <feOffset
                        dx="0"
                        dy="0"
                        in="convolve"
                        result="extrude"
                      ></feOffset>
                      <feComposite
                        operator="in"
                        in="flood-1"
                        in2="extrude"
                        result="comp-extrude"
                      ></feComposite>
                      <feFlood
                        flood-color="rgba(20%,20%,20%,0)"
                        result="flood-2"
                      ></feFlood>
                      <feComposite
                        operator="in"
                        in="flood-2"
                        in2="SourceAlpha"
                        result="comp2"
                      ></feComposite>
                      <feMorphology
                        operator="dilate"
                        radius="1"
                        in="comp2"
                        result="dilate"
                      ></feMorphology>
                      <feOffset
                        dx="0"
                        dy="0"
                        in="dilate"
                        result="offset"
                      ></feOffset>
                      <feGaussianBlur
                        in="offset"
                        stdDeviation="5.8"
                        result="blur"
                      ></feGaussianBlur>
                      <feComponentTransfer in="blur" result="shadow">
                        <feFuncA
                          type="linear"
                          slope="0.8"
                          intercept="-0.2"
                        ></feFuncA>
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode in="shadow"></feMergeNode>
                        <feMergeNode in="comp-extrude"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                      </feMerge>
                    </filter>
                  </defs>
                  <g filter="url(#editing-extrude-glow)">
                    <g transform="translate(217.0300076007843, 102.00000190734863)">
                      <path
                        d="M5.31-11.25L5.31-11.25L1.47-11.25L1.47-13.50L5.31-13.50L5.31-13.50Q6.97-13.50 8.09-14.75L8.09-14.75L8.09-14.75Q9.22-16 9.22-18.06L9.22-18.06L9.22-51.75L11.47-51.75L11.47-18.06L11.47-18.06Q11.47-15.09 9.69-13.17L9.69-13.17L9.69-13.17Q7.91-11.25 5.31-11.25ZM5.31-6.75L5.31-6.75L1.47-6.75L1.47-9L5.31-9L5.31-9Q8.81-9 11.27-11.66L11.27-11.66L11.27-11.66Q13.72-14.31 13.72-18.06L13.72-18.06L13.72-51.75L15.97-51.75L15.97-18.06L15.97-18.06Q15.97-13.38 12.86-10.06L12.86-10.06L12.86-10.06Q9.75-6.75 5.31-6.75ZM5.31-2.25L5.31-2.25L1.47-2.25L1.47-4.50L5.31-4.50L5.31-4.50Q10.69-4.50 14.45-8.47L14.45-8.47L14.45-8.47Q18.22-12.44 18.22-18.06L18.22-18.06L18.22-51.75L20.47-51.75L20.47-18.06L20.47-18.06Q20.47-13.78 18.45-10.14L18.45-10.14L18.45-10.14Q16.44-6.50 12.94-4.38L12.94-4.38L12.94-4.38Q9.44-2.25 5.31-2.25ZM5.31 2.25L5.31 2.25L1.47 2.25L1.47 0L5.31 0L5.31 0Q8.88 0 12.09-1.44L12.09-1.44L12.09-1.44Q15.31-2.88 17.64-5.30L17.64-5.30L17.64-5.30Q19.97-7.72 21.34-11.06L21.34-11.06L21.34-11.06Q22.72-14.41 22.72-18.06L22.72-18.06L22.72-51.75L24.97-51.75L24.97-18.06L24.97-18.06Q24.97-13.94 23.42-10.19L23.42-10.19L23.42-10.19Q21.88-6.44 19.23-3.70L19.23-3.70L19.23-3.70Q16.59-0.97 12.95 0.64L12.95 0.64L12.95 0.64Q9.31 2.25 5.31 2.25ZM30.72 0L30.72-51.75L32.97-51.75L32.97 0L30.72 0ZM44.22 0L44.22-51.75L46.47-51.75L46.47-11.25L64.47-11.25L64.47-9L46.47-9L46.47-6.75L64.47-6.75L64.47-4.50L46.47-4.50L46.47-2.25L64.47-2.25L64.47 0L44.22 0ZM39.72 0L39.72-51.75L41.97-51.75L41.97 0L39.72 0ZM35.22 0L35.22-51.75L37.47-51.75L37.47 0L35.22 0Z"
                        fill="#181818"
                      ></path>
                    </g>
                  </g>
                </svg>
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
                  href="/#selected-projects"
                  className="border-b border-solid border-b-black text-left flex items-end justify-between gap-x-2 py-2 text-3xl font-bold uppercase leading-[0.8] sm:py-4 sm:text-[40px] transition-transform duration-500 translate-x-0"
                  onClick={closeMobileMenu}
                >
                  Selected projects
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
                  href="/projects"
                  className="border-b border-solid border-b-black text-left flex items-end justify-between gap-x-2 py-2 text-3xl font-bold uppercase leading-[0.8] sm:py-4 sm:text-[40px] transition-transform duration-500 translate-x-0"
                  onClick={closeMobileMenu}
                >
                  Projects details
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
                  href="/#lets-get-in-touch"
                  className="border-b border-solid border-b-black text-left flex items-end justify-between gap-x-2 py-2 text-3xl font-bold uppercase leading-[0.8] sm:py-4 sm:text-[40px] transition-transform duration-500 translate-x-0"
                  onClick={closeMobileMenu}
                >
                  Let's get in touch
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
                  target="_blank"
                >
                  Linkedin
                </a>
                <a
                  href="https://github.com/julienLeMee"
                  className="border-b border-solid border-b-black text-left py-2 text-2xl leading-[1.1] sm:py-4 transition-transform duration-500 translate-x-0"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </nav>
            <div className="flex w-full items-end justify-between py-5 md:hidden transition-transform delay-200 duration-300 translate-y-0">
              <svg
                width="48px"
                height="48px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="194.75625 -2.799999999999997 110.4875 155.6"
                preserveAspectRatio="xMidYMid"
              >
                <defs>
                  <filter id="editing-extrude-glow">
                    <feFlood flood-color="#333333" result="flood-1"></feFlood>
                    <feMorphology
                      operator="erode"
                      radius="1"
                      in="SourceAlpha"
                      result="erode"
                    ></feMorphology>
                    <feComposite
                      operator="in"
                      in="flood-1"
                      in2="erode"
                      result="comp1"
                    ></feComposite>
                    <feConvolveMatrix
                      order="0,0"
                      divisor="1"
                      in="comp1"
                      result="convolve"
                      kernelMatrix=""
                    ></feConvolveMatrix>
                    <feOffset
                      dx="0"
                      dy="0"
                      in="convolve"
                      result="extrude"
                    ></feOffset>
                    <feComposite
                      operator="in"
                      in="flood-1"
                      in2="extrude"
                      result="comp-extrude"
                    ></feComposite>
                    <feFlood
                      flood-color="rgba(20%,20%,20%,0)"
                      result="flood-2"
                    ></feFlood>
                    <feComposite
                      operator="in"
                      in="flood-2"
                      in2="SourceAlpha"
                      result="comp2"
                    ></feComposite>
                    <feMorphology
                      operator="dilate"
                      radius="1"
                      in="comp2"
                      result="dilate"
                    ></feMorphology>
                    <feOffset
                      dx="0"
                      dy="0"
                      in="dilate"
                      result="offset"
                    ></feOffset>
                    <feGaussianBlur
                      in="offset"
                      stdDeviation="5.8"
                      result="blur"
                    ></feGaussianBlur>
                    <feComponentTransfer in="blur" result="shadow">
                      <feFuncA
                        type="linear"
                        slope="0.8"
                        intercept="-0.2"
                      ></feFuncA>
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode in="shadow"></feMergeNode>
                      <feMergeNode in="comp-extrude"></feMergeNode>
                      <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                  </filter>
                </defs>
                <g filter="url(#editing-extrude-glow)">
                  <g transform="translate(217.0300076007843, 102.00000190734863)">
                    <path
                      d="M5.31-11.25L5.31-11.25L1.47-11.25L1.47-13.50L5.31-13.50L5.31-13.50Q6.97-13.50 8.09-14.75L8.09-14.75L8.09-14.75Q9.22-16 9.22-18.06L9.22-18.06L9.22-51.75L11.47-51.75L11.47-18.06L11.47-18.06Q11.47-15.09 9.69-13.17L9.69-13.17L9.69-13.17Q7.91-11.25 5.31-11.25ZM5.31-6.75L5.31-6.75L1.47-6.75L1.47-9L5.31-9L5.31-9Q8.81-9 11.27-11.66L11.27-11.66L11.27-11.66Q13.72-14.31 13.72-18.06L13.72-18.06L13.72-51.75L15.97-51.75L15.97-18.06L15.97-18.06Q15.97-13.38 12.86-10.06L12.86-10.06L12.86-10.06Q9.75-6.75 5.31-6.75ZM5.31-2.25L5.31-2.25L1.47-2.25L1.47-4.50L5.31-4.50L5.31-4.50Q10.69-4.50 14.45-8.47L14.45-8.47L14.45-8.47Q18.22-12.44 18.22-18.06L18.22-18.06L18.22-51.75L20.47-51.75L20.47-18.06L20.47-18.06Q20.47-13.78 18.45-10.14L18.45-10.14L18.45-10.14Q16.44-6.50 12.94-4.38L12.94-4.38L12.94-4.38Q9.44-2.25 5.31-2.25ZM5.31 2.25L5.31 2.25L1.47 2.25L1.47 0L5.31 0L5.31 0Q8.88 0 12.09-1.44L12.09-1.44L12.09-1.44Q15.31-2.88 17.64-5.30L17.64-5.30L17.64-5.30Q19.97-7.72 21.34-11.06L21.34-11.06L21.34-11.06Q22.72-14.41 22.72-18.06L22.72-18.06L22.72-51.75L24.97-51.75L24.97-18.06L24.97-18.06Q24.97-13.94 23.42-10.19L23.42-10.19L23.42-10.19Q21.88-6.44 19.23-3.70L19.23-3.70L19.23-3.70Q16.59-0.97 12.95 0.64L12.95 0.64L12.95 0.64Q9.31 2.25 5.31 2.25ZM30.72 0L30.72-51.75L32.97-51.75L32.97 0L30.72 0ZM44.22 0L44.22-51.75L46.47-51.75L46.47-11.25L64.47-11.25L64.47-9L46.47-9L46.47-6.75L64.47-6.75L64.47-4.50L46.47-4.50L46.47-2.25L64.47-2.25L64.47 0L44.22 0ZM39.72 0L39.72-51.75L41.97-51.75L41.97 0L39.72 0ZM35.22 0L35.22-51.75L37.47-51.75L37.47 0L35.22 0Z"
                      fill="#e3afbe"
                    ></path>
                  </g>
                </g>
              </svg>
              <small className="whitespace-nowrap text-[13px] font-normal leading-[1.1]">
                ©2024 Julien Le Mee, All right reserved.
              </small>
            </div>
          </div>
        </div>
      {/* )} */}
    </header>
  );
}
