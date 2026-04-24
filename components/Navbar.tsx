"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 100;
          const bottom = top + el.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (section: string) =>
    active === section
      ? "text-emerald-700 font-bold"
      : "text-gray-600 hover:text-emerald-700";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="font-bold text-lg text-gray-900">
          Mahamadou Tandjigora
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          <a href="#home" className={linkClass("home")}>
            Accueil
          </a>

          <a href="#about" className={linkClass("about")}>
            À propos
          </a>

          <a href="#skills" className={linkClass("skills")}>
            Compétences
          </a>

          <a href="#projects" className={linkClass("projects")}>
            Projets
          </a>

          <a href="#contact" className={linkClass("contact")}>
            Contact
          </a>

        </div>

        <a
          href="/cv-mahamadou-tandjigora.pdf"
          download
          className="hidden md:block bg-emerald-700 text-white px-5 py-2 rounded-lg hover:bg-emerald-800"
        >
          Télécharger CV
        </a>
      </div>
    </nav>
  );
}