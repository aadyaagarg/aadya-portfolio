import { Link as LinkedinIcon, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { PORTFOLIO } from "../data/constants";

const NAV_LINKS = ["Home", "Portfolio", "Services", "About", "Contact"];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="border-b border-gray-800 sticky top-0 z-50 bg-gray-950">
      <div className="flex items-center justify-between mx-auto px-6 h-20 max-w-6xl">
        <a
          href="#home"
          className=" flex items-center gap-2 font-mono text-lg font-bold text-white"
        >
          <span className="font-mono text-teal-400">&lt;A/&gt;</span>
          {PORTFOLIO.name}
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`font-mono text-sm transition-all duration-300 hover:font-bold ${
                link === "Home"
                  ? "text-teal-400 hover:text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link === "Home" ? `<${link}>` : link}
            </a>
          ))}
        </nav>
        <div className="hidden items-center lg:flex gap-6">
          <a
            href={PORTFOLIO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-teal-400"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <a
            href={PORTFOLIO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-teal-400"
          >
            <FaGithub size={16} />
            Github
          </a>
          <a
            href="#contact"
            className="h-10 w-10 flex justify-center items-center border rounded-full border-teal-400 text-teal-400 bg-teal-400/10 transition-all duration-300 hover:bg-teal-400 hover:text-gray-950"
          >
            <Mail size={18} />
          </a>
        </div>
        <button
          type="button"
          className="lg:hidden text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {menuOpen && (
        <div className="flex flex-col gap-5 border-t border-gray-800 px-6 py-6 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={`font-mono text-sm transition-all duration-300 hover:font-bold ${
                link === "Home"
                  ? "text-teal-400 hover:text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link === "Home" ? `<${link}>` : link}
            </a>
          ))}
          <div className="flex items-center gap-5 border-t border-gray-800 pt-4">
            <a
              href={PORTFOLIO.links.linkedin}
              className="text-gray-400 transition-all duration-300 hover:text-teal-400"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={PORTFOLIO.links.github}
              className="text-gray-400 transition-all duration-300 hover:text-teal-400"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="#contact"
              className="text-teal-400 transition-all duration-300 hover:text-teal-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
