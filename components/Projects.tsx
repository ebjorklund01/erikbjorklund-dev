import { Github, ExternalLink } from "lucide-react";
import AnimateIn from "./AnimateIn";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: "AI Chat Interface",
    description:
      "A conversational UI powered by LLM APIs, with streaming responses and a clean message thread layout.",
    tags: ["Next.js", "LangChain", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Flutter Expense Tracker",
    description:
      "Cross-platform budgeting app with animated charts, category breakdowns, and Firebase-backed sync.",
    tags: ["Flutter", "Dart", "Firebase"],
    github: "#",
    demo: "#",
  },
  {
    title: "ML Model Dashboard",
    description:
      "Monitoring tool for deployed ML models — tracks inference latency, input drift, and prediction distributions.",
    tags: ["Python", "FastAPI", "React"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 mb-2">
            Projects
          </h2>
          <span className="block mb-16 w-8 h-px bg-accent" />
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimateIn key={project.title} delay={i * 0.1}>
              <div className="group flex flex-col h-full p-6 border border-stone-200 rounded-2xl bg-white hover:border-accent/40 hover:shadow-sm transition-all duration-300">
                <h3 className="font-serif text-xl font-semibold text-stone-900 mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-stone-100 text-stone-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4 border-t border-stone-100">
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-700 transition-colors"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-700 transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
