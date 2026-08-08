const STEPS = [
  {
    number: "01",
    title: "Assess",
    desc: "We audit your team's current skill gaps against your roadmap and tooling in a two-week diagnostic.",
  },
  {
    number: "02",
    title: "Customize",
    desc: "Curriculum, case studies, and capstones are rebuilt around your stack, data, and business context.",
  },
  {
    number: "03",
    title: "Deploy",
    desc: "Cohorts run live with a dedicated success manager tracking completion and skill application on the job.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-28 bg-navy-900">
      <div className="max-w-content mx-auto container-px">
        <span className="section-eyebrow text-amber">How it works</span>
        <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-white max-w-xl">
          From skill gap to shipped capability in three steps
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-10 md:gap-8 relative">
          {STEPS.map((step, idx) => (
            <div key={step.number} className="relative">
              <p className="font-mono text-5xl font-semibold text-white/15">{step.number}</p>
              <h3 className="mt-3 font-display font-semibold text-xl text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">{step.desc}</p>
              {idx < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden md:block absolute top-6 -right-4 w-8 h-px bg-white/20"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
