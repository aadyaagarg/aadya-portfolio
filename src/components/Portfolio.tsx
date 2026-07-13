import { ExternalLink, GitFork } from "lucide-react";
interface Project {
  title: string;
  type: string;
  desc: string;
  tags: string[];
  github: string;
  live: string;
}
const PROJECTS: Project[] = [
  {
    title: "Job Application Tracker",
    type: "Full Stack Web App",
    desc: "A web application that helps users organize job applications, track application status, manage interview schedules, and monitor progress throughout the hiring process.",
    tags: ["React", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/aadyaagarg/job-application-tracker-api",
    live: "",
  },
  {
    title: "Habit Tracker",
    type: "Productivity App",
    desc: "A responsive habit tracking application with weekly progress visualization, streak tracking, local data persistence, and an intuitive user interface for building daily habits.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/aadyaagarg/habit-tracker",
    live: "",
  },
  {
    title: "E-Commerce Website",
    type: "Full Stack E-Commerce",
    desc: "An online shopping platform featuring product browsing, category filtering, shopping cart, secure authentication, order management, and a responsive user experience.",
    tags: ["React", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/aadyaagarg/ecom-site",
    live: "",
  },
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-800"
    >
      <p className="font-mono text-sm text-gray-600 mb-3">
        &lt;section id="portfolio"&gt;
      </p>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold">
          My <span className="text-teal-400">Portfolio</span>
        </h2>
        <p className="font-mono text-sm text-gray-500">
          // a few recent builds
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {PROJECTS.map((project: Project) => (
          <article
            key={project.title}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-teal-400 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="font-mono text-xs text-gray-500">
                {project.type}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                >
                  <GitFork
                    size={20}
                    className="text-gray-600 transition-colors hover:text-teal-400"
                  />
                </a>
                <a
                  href={project.live}
                  // target="_blank"
                  // rel="noopener noreferrer"
                  aria-label="Live Demo"
                >
                  <ExternalLink
                    size={20}
                    className="text-gray-600 transition-colors hover:text-teal-400"
                  />
                </a>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <p className="font-mono text-sm text-gray-600 mt-4">&lt;/section&gt;</p>
    </section>
  );
}
