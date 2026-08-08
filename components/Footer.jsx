const COLUMNS = [
  {
    heading: "Programs",
    links: ["Data Science", "AI & ML", "Product Management", "Full-Stack Engineering"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Partners", "Contact"],
  },
  {
    heading: "Resources",
    links: ["Case studies", "Guides", "Webinars", "Blog"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 pt-16 pb-8">
      <div className="max-w-content mx-auto container-px">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 font-display font-bold text-white text-lg">
              <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-sm">AC</span>
              Accredian
            </a>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              Custom cohort-based upskilling for enterprise data, AI, and product teams.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="font-display font-semibold text-sm text-white">{col.heading}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/50 hover:text-white/80 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© 2026 Accredian Enterprise Learning. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {["LinkedIn", "Twitter", "YouTube"].map((s) => (
              <a key={s} href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
