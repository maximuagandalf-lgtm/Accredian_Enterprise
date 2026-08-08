export default function Hero() {
  return (
    <section id="home" className="relative bg-navy-900 pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* signature: ascending learning-curve line, faint, behind content */}
      <svg
        className="absolute right-0 bottom-0 w-[140%] sm:w-[90%] lg:w-[60%] opacity-[0.18] pointer-events-none"
        viewBox="0 0 600 300"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 280 C 100 260, 150 220, 220 200 C 300 175, 320 120, 400 90 C 460 65, 480 40, 600 10"
          stroke="#6C82FF"
          strokeWidth="2.5"
        />
        <circle cx="600" cy="10" r="6" fill="#FFB020" />
        <circle cx="220" cy="200" r="4" fill="#6C82FF" />
        <circle cx="400" cy="90" r="4" fill="#6C82FF" />
      </svg>

      <div className="relative max-w-content mx-auto container-px grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="section-eyebrow text-amber">Enterprise Learning Partner</span>
          <h1 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-white">
            Turn your workforce into your{" "}
            <span className="text-accent-light">sharpest competitive edge</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
            We design and run cohort-based data, AI, and product upskilling
            programs built around your team&apos;s actual tools, stack, and
            business problems — not generic off-the-shelf content.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-amber hover:bg-amber-dark text-navy-900 font-semibold px-7 py-3.5 transition-colors"
            >
              Book a program consult
            </a>
            <a
              href="#programs"
              className="inline-flex items-center justify-center rounded-full border border-white/25 hover:border-white/50 text-white font-semibold px-7 py-3.5 transition-colors"
            >
              Explore programs
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              ["120+", "enterprise cohorts"],
              ["94%", "completion rate"],
              ["4.8/5", "learner rating"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-mono font-semibold text-2xl text-white">{value}</p>
                <p className="text-xs text-white/55 mt-1 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-navy-800 border border-white/10 p-6 shadow-card">
            <p className="section-eyebrow text-accent-light">Cohort snapshot</p>
            <h3 className="mt-3 font-display font-semibold text-xl text-white">
              Applied AI for Product Teams
            </h3>
            <ul className="mt-5 space-y-3">
              {[
                "8-week cohort, live + async",
                "Capstone on your real product data",
                "Dedicated success manager",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/50">Next cohort</span>
              <span className="font-mono text-sm text-white">Sep 15, 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
