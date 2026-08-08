const LOGOS = ["Nimbus", "Cascade", "Fernhill", "Orbital", "Kestrel", "Marrow"];

export default function TrustedBy() {
  return (
    <section className="bg-white border-b border-line py-10">
      <div className="max-w-content mx-auto container-px">
        <p className="text-center text-xs font-mono uppercase tracking-[0.2em] text-muted mb-6">
          Trusted by learning &amp; talent teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {LOGOS.map((name) => (
            <span
              key={name}
              className="font-display font-semibold text-lg text-ink/40 hover:text-ink/70 transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
