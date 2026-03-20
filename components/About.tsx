import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-16 items-start">
        <AnimateIn>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 leading-snug">
            About
            <br />
            Me
          </h2>
          <span className="block mt-4 mb-8 w-8 h-px bg-accent" />
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden">
            <Image
              src="/headshot.jpg"
              alt="Erik Bjorklund"
              fill
              className="object-cover object-[50%_30%]"
              sizes="192px"
              priority
            />
          </div>
        </AnimateIn>

        <div className="space-y-6 text-stone-600 leading-relaxed text-base sm:text-lg">
          <AnimateIn delay={0.1}>
            <p>
              My path into software is unconventional. I studied Biomedical
              Engineering at UW-Madison, focusing on bio-instrumentation, which
              is all about translating the body&rsquo;s mechanical and
              electrical signals into data that computers can process. Between
              programming microcontrollers for Brain-Computer Interface research
              and my undergraduate CS coursework, I realized software was what
              I wanted to do.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p>
              My first professional role at Orthogonal brought those worlds
              together. I built mobile apps for BLE-connected medical devices,
              working under strict regulatory standards (QMS) while shipping
              real products. That&rsquo;s where I picked up Flutter, which has
              since become one of my strongest tools.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <p>
              At the PGA of America, I grew from a mobile engineer into a
              full-stack tech lead on a Ruby on Rails platform. I led Stripe
              integration projects, including a new subscription service that
              unlocked $14K in monthly recurring revenue. I authored technical
              specs and built dashboards in Looker and Amplitude to keep the
              team grounded in real product data. Recently, I developed a
              production AI pipeline using Firecrawl, Pydantic, and the OpenAI
              API to scrape partner job sites into structured data, then
              uploaded to Salesforce. That project crystallized where I&rsquo;m most excited
              to go next: building production-grade AI systems, while continuing
              to grow as a full-stack engineer.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <p>
              I&rsquo;m an eager learner, and I love building as a team.
              There&rsquo;s something uniquely satisfying about shipping great
              work through genuine collaboration, the kind where engineers and
              non-technical stakeholders are actually in sync. I&rsquo;m
              looking for a team where I can bring my unusual background and
              curiosity to the AI engineering problems that matter most right
              now.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
