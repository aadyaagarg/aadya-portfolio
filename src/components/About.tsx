import { useEffect, useRef, useState } from "react";
interface Skill {
  name: string;
  level: number;
}
const SKILLS: Skill[] = [
  { name: "Java", level: 90 },
  { name: "Spring Boot", level: 80 },
  { name: "SQL & PostgreSQL", level: 85 },
  { name: "React", level: 70 },
  { name: "JavaScript", level: 80 },
  { name: "TypeScript", level: 60 },
];
const TOOLS = [
  "Git",
  "GitHub",
  "VS Code",
  "IntelliJ IDEA",
  "Postman",
  "Maven",
  "Swagger",
];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-800"
    >
      <p className="font-mono text-sm text-gray-600 mb-3">
        &lt;section id="about"&gt;
      </p>
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-12">
        About <span className="text-teal-400">Me</span>
      </h2>
      <div ref={sectionRef} className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <p className="text-gray-400 leading-relaxed mb-4">
            I'm a Computer Science student specializing in Artificial
            Intelligence with a strong interest in Java Full Stack Development.
            I enjoy building responsive web applications and solving real-world
            problems through clean, scalable, and maintainable code.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            My current focus is on building full-stack web applications using
            Java, Spring Boot, React, and PostgreSQL while continuously
            improving my problem-solving skills through Data Structures and
            Algorithms. I enjoy learning modern technologies and applying best
            practices to create efficient, scalable, and user-friendly
            applications.
          </p>

          <p className="font-mono text-sm text-gray-500 mb-4">// tools i use</p>

          <div className="flex flex-wrap gap-3 mb-8">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-gray-800 bg-gray-900 px-4 py-2 text-sm font-mono text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-400"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-sm text-gray-500 mb-8">// skills</p>
          <div className="space-y-5">
            {SKILLS.map((skill: Skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-sm">{skill.name}</span>
                  <span className="font-mono text-sm text-teal-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-gray-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-teal-400 transition-all duration-1000 ease-out"
                    style={{
                      width: animate ? `${skill.level}%` : "0%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="font-mono text-sm text-gray-600">&lt;/section&gt;</p>
    </section>
  );
}
