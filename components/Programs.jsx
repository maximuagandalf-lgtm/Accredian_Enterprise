const PROGRAMS = [
  {
    tag: "Data Science",
    title: "Applied Data Science for Analysts",
    desc: "From SQL and statistics to production ML — anchored in your team's real datasets.",
    duration: "10 weeks",
  },
  {
    tag: "AI & ML",
    title: "Generative AI for Product Teams",
    desc: "Prompt design, RAG systems, and evaluation, taught through your own product surfaces.",
    duration: "8 weeks",
  },
  {
    tag: "Product",
    title: "Product Management Accelerator",
    desc: "Discovery, roadmapping, and metrics frameworks built around your org's actual cycle.",
    duration: "6 weeks",
  },
  {
    tag: "Engineering",
    title: "Full-Stack Engineering Bootcamp",
    desc: "Modern web architecture and deployment practices mapped to your existing stack.",
    duration: "12 weeks",
  },
];

function ProgramCard({ tag, title, desc, duration }) {
  return (
    <div className="group rounded-2xl bg-white border border-line p-7 hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300">
      <span className="inline-block font-mono text-[11px] uppercase tracking-wider text-accent bg-accent/10 rounded-full px-3 py-1">
        {tag}
      </span>
      <h3 className="mt-5 font-display font-semibold text-xl text-ink leading-snug">
        {title}
      </h3>
      <p className="mt-3 text-sm text-muted leading-relaxed">{desc}</p>
      <div className="mt-6 pt-5 border-t border-line flex items-center justify-between">
        <span className="text-xs text-muted font-mono">{duration}</span>
        <span className="text-sm font-semibold text-accent group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
          Learn more <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </div>
  );
}

export default function Programs() {
  return (
    <section id="programs" className="py-24 lg:py-28 bg-surface">
      <div className="max-w-content mx-auto container-px">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Programs</span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink">
            Learning tracks built for the work your teams already do
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Every program is customized during onboarding — same curriculum
            spine, different examples, tools, and capstones for each cohort.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}
