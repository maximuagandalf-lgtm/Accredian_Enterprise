
export default function CTASection() {
  return (
    <section id="contact" className="py-24 lg:py-28 bg-navy-900 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
      <div className="relative max-w-content mx-auto container-px text-center">
        <span className="section-eyebrow text-amber">Get started</span>
        <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-white max-w-2xl mx-auto">
          Let&apos;s design the program your team actually needs
        </h2>
        <p className="mt-4 text-white/65 max-w-xl mx-auto">
          Share your team size and skill goals — we&apos;ll come back with a
          proposed curriculum and cohort timeline within three business days.
        </p>

        <div className="mt-10">
        </div>
      </div>
    </section>
  );
}
