const STATS = [
  { value: "40,000+", label: "professionals trained" },
  { value: "120+", label: "enterprise partners" },
  { value: "94%", label: "average completion rate" },
  { value: "4.8 / 5", label: "learner satisfaction" },
];

export default function Stats() {
  return (
    <section id="results" className="py-20 bg-white border-y border-line">
      <div className="max-w-content mx-auto container-px grid grid-cols-2 lg:grid-cols-4 gap-10">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            <p className="font-display font-bold text-3xl sm:text-4xl text-navy-900">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
