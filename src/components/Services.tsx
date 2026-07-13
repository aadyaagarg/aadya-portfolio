import { type LucideIcon, Code2, Database, Server, Globe } from "lucide-react";
interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
}
const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Creating complete web applications by integrating modern frontend technologies with robust backend systems.",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Developing RESTful APIs and scalable backend services with Java and Spring Boot.",
  },
  {
    icon: Database,
    title: "Database Design",
    desc: "Designing and managing relational databases using PostgreSQL and MySQL.",
  },
  {
    icon: Globe,
    title: "Frontend Development",
    desc: "Building responsive and interactive user interfaces using React, TypeScript, and Tailwind CSS.",
  },
];
export function Services() {
  return (
    <section
      id="services"
      className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-800"
    >
      <p className="font-mono text-sm text-gray-600 mb-3">
        &lt;section id="services"&gt;
      </p>
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-12">
        What I <span className="text-teal-400">Do</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service: Service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-teal-400 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-lg bg-teal-400/10 flex items-center justify-center text-teal-400 mb-6">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          );
        })}
      </div>
      <p className="font-mono text-sm text-gray-600 mt-4">&lt;/section&gt;</p>
    </section>
  );
}
