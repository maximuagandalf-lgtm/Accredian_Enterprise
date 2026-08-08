const TESTIMONIALS = [
  {
    quote:
      "Completion rates on our upskilling programs went from an afterthought to something leadership actually tracks. The customization to our stack was the difference.",
    name: "Priya Nair",
    role: "VP Learning & Talent, Nimbus",
  },
  {
    quote:
      "Our analysts were shipping production models by week six. That never happened with off-the-shelf courses we tried before.",
    name: "Daniel Ortiz",
    role: "Head of Data, Cascade",
  },
  {
    quote:
      "The success manager model made this feel like a team we'd hired, not a course we'd bought.",
    name: "Meera Iyer",
    role: "Chief People Officer, Fernhill",
  },
];

function TestimonialCard({ quote, name, role }) {
  return (
    <figure className="rounded-2xl bg-surface border border-line p-7 h-full flex flex-col">
      <blockquote className="text-ink/80 leading-relaxed text-[15px]">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 pt-5 border-t border-line">
        <p className="font-semibold text-sm text-ink">{name}</p>
        <p className="text-xs text-muted mt-0.5">{role}</p>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-28 bg-surface">
      <div className="max-w-content mx-auto container-px">
        <span className="section-eyebrow">Testimonials</span>
        <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-ink max-w-xl">
          What learning leaders say after the first cohort
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
