"use client";

import { useState, useEffect } from "react";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("light"); // État pour le thème

  useEffect(() => {
    // Charger le thème depuis le stockage local ou autre
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.body.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme); // Sauvegarde le thème
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <button onClick={toggleTheme}>Toggle Theme</button> {/* Bouton pour changer de thème */}
        {children}
      </body>
    </html>
  );
}
