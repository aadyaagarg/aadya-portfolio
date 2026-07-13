import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PORTFOLIO } from "../data/constants";
export function Footer() {
  return (
    <footer className="border-t border-gray-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row">
        <a
          href="#home"
          className="flex items-center gap-2 text-lg font-bold font-mono text-white"
        >
          <span className="font-mono text-teal-400">&lt;A/&gt;</span>
          Aadya Garg
        </a>
        <div className="text-center">
          <p className="font-mono text-xs text-gray-500">
            &lt;!-- © {new Date().getFullYear()} Aadya Garg. Built with React,
            TypeScript & Tailwind CSS --&gt;
          </p>

          <p className="mt-2 font-mono text-xs text-gray-700">
            // Thanks for stopping by 👋
          </p>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={PORTFOLIO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-teal-400"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href={PORTFOLIO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-teal-400"
          >
            <FaGithub size={18} />
          </a>

          <a
            href={`mailto:${PORTFOLIO.email}`}
            aria-label="Email"
            className="text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-teal-400"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
