import AnimateIn from "./AnimateIn";

interface Skill {
  name: string;
  exploring?: boolean;
}

interface SkillGroup {
  category: string;
  skills: Skill[];
  learning?: boolean;
}

const groups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Ruby" },
      { name: "Dart" },
      { name: "SQL" },
      { name: "LookML" },
      { name: "C" },
    ],
  },
  {
    category: "AI & LLMs",
    skills: [
      { name: "OpenAI API" },
      { name: "Pydantic" },
      { name: "Firecrawl" },
      { name: "LangChain", exploring: true },
      { name: "LangGraph", exploring: true },
    ],
  },
  {
    category: "Backend & Data",
    skills: [
      { name: "Ruby on Rails" },
      { name: "GraphQL" },
      { name: "PostgreSQL" },
      { name: "REST APIs" },
      { name: "Stripe" },
    ],
  },
  {
    category: "Frontend & Mobile",
    skills: [
      { name: "React" },
      { name: "Next.js", exploring: true },
      { name: "Flutter" },
      { name: "Native Android" },
      { name: "Tailwind CSS", exploring: true },
    ],
  },
  {
    category: "ML / Traditional",
    skills: [
      { name: "PyTorch", exploring: true },
      { name: "scikit-learn", exploring: true },
    ],
  },
  {
    category: "Tools & Analytics",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "AWS" },
      { name: "CircleCI" },
      { name: "Cursor" },
      { name: "Looker" },
      { name: "Amplitude" },
    ],
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
          <span className="block mt-4 mb-6 w-8 h-px bg-accent" />
          <div className="flex items-center gap-6 mb-16">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-white border border-stone-200 inline-block" />
              <span className="text-xs text-stone-400">Proficient</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-accent/10 border border-accent/20 inline-block" />
              <span className="text-xs text-stone-400">Exploring</span>
            </div>
          </div>
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
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-full text-sm ${
                        group.learning || skill.exploring
                          ? "bg-accent/10 text-accent border border-accent/20"
                          : "bg-white text-stone-700 border border-stone-200"
                      }`}
                    >
                      {skill.name}
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
