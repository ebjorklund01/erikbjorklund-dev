import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react";
import AnimateIn from "./AnimateIn";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/ebjorklund01",
    icon: Github,
    display: "github.com/ebjorklund01",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/erik-bjorklund-355263140",
    icon: Linkedin,
    display: "linkedin.com/in/erik-bjorklund",
  },
  {
    label: "Twitter / X",
    href: "https://x.com/theebjorklund",
    icon: Twitter,
    display: "x.com/theebjorklund",
  },
  {
    label: "Email",
    href: "mailto:ebjorklund034@gmail.com",
    icon: Mail,
    display: "ebjorklund034@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 mb-2">
            Let&rsquo;s Connect
          </h2>
          <span className="block mb-6 w-8 h-px bg-accent" />
          <p className="text-stone-500 text-base sm:text-lg leading-relaxed max-w-md mb-14">
            I&rsquo;m always open to conversations about AI, engineering, and
            new opportunities.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <a
            href="/Erik-Bjorklund-Full-Stack-Engineer.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-3 mb-10 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            <Download size={16} />
            Download Resume
          </a>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
          {links.map(({ label, href, icon: Icon, display }, i) => (
            <AnimateIn key={label} delay={i * 0.08}>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-5 py-4 border border-stone-200 rounded-xl bg-white hover:border-accent/50 hover:bg-stone-50 transition-all duration-200 group"
              >
                <span className="shrink-0 text-stone-400 group-hover:text-accent transition-colors">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-400 mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm text-stone-700 font-medium">{display}</p>
                </div>
              </a>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
