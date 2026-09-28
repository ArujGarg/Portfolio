import { portfolio } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-[var(--border)] py-24"
    >
      <div className="grid gap-12 md:grid-cols-[180px_1fr]">
        <div>
  <div className="inline-flex items-center border border-[var(--border-strong)] bg-[var(--background)] px-3 py-2 text-[10px] font-medium tracking-[0.14em] text-[var(--muted)]">
    <span className="mr-2 text-[var(--accent)]">02</span>
    EXPERIENCE
  </div>
</div>

        <div className="space-y-16">
          {portfolio.experience.map((experience) => (
            <article key={`${experience.company}-${experience.role}`}>
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                <div>
                  <h2 className="text-xl font-medium">
                    {experience.company}
                  </h2>

                  <p className="mt-1 text-sm text-[var(--accent)]">
                    {experience.role}
                  </p>
                </div>
                
                <div>
                    <p className="text-xs text-[var(--muted)]">
                        {experience.duration}
                    </p>
                    <p className="text-xs text-[var(--muted)]">
                        {experience.location}
                    </p>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                {experience.description}
              </p>

              <ul className="mt-6 max-w-2xl space-y-3">
                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-6 text-[var(--muted)]"
                  >
                    <span className="text-[var(--accent)]">→</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                <span
                    key={technology}
                    className="border border-[var(--border)] px-2.5 py-1.5 text-[11px] text-[var(--muted)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                    {technology}
                </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}