import AnimateIn from "./AnimateIn";

interface SkillGroup {
  category: string;
  skills: string[];
  learning?: boolean;
}

const groups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Ruby", "Dart", "SQL"],
  },
  {
    category: "AI & LLMs",
    skills: ["OpenAI API", "LLM Integration", "Pydantic", "Firecrawl", "LangChain"],
  },
  {
    category: "Backend & Data",
    skills: ["Ruby on Rails", "GraphQL", "PostgreSQL", "REST APIs"],
  },
  {
    category: "Frontend & Mobile",
    skills: ["React", "Next.js", "Flutter", "Native Android", "Tailwind CSS"],
  },
  {
    category: "ML / Traditional",
    skills: ["PyTorch", "scikit-learn", "Hugging Face"],
    learning: true,
  },
  {
    category: "Tools & Analytics",
    skills: ["Git", "Docker", "Cursor", "Looker", "Amplitude", "Firebase"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 mb-2">
            Skills &amp; Stack
          </h2>
          <span className="block mb-16 w-8 h-px bg-accent" />
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {groups.map((group, i) => (
            <AnimateIn key={group.category} delay={i * 0.08}>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-stone-400">
                    {group.category}
                  </h3>
                  {group.learning && (
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent font-medium">
                      Exploring
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-full text-sm ${
                        group.learning
                          ? "bg-accent/10 text-accent border border-accent/20"
                          : "bg-white text-stone-700 border border-stone-200"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
