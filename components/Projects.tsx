import { portfolio } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-[var(--border)] py-24"
    >
      <div className="grid gap-12 md:grid-cols-[180px_1fr]">
        <div>
  <div className="inline-flex items-center border border-[var(--border-strong)] bg-[var(--background)] px-3 py-2 text-[10px] font-medium tracking-[0.14em] text-[var(--muted)]">
    <span className="mr-2 text-[var(--accent)]">03</span>
    PROJECTS
  </div>
</div>

        <div className="space-y-16">
          {portfolio.projects.map((project, index) => (
            <article
  key={project.name}
  className="group relative border border-[var(--border)] bg-[var(--surface)] p-6 transition-transform duration-200 hover:-translate-y-0.5"
>
    <div className="pointer-events-none absolute -bottom-1.5 -right-1.5 -z-10 h-full w-full border border-[var(--border)]" />
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[var(--muted)]">
                      0{index + 1}
                    </span>

                    <h2 className="text-xl font-medium transition-colors duration-200 group-hover:text-[var(--accent)]">
                      {project.name}
                    </h2>
                  </div>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                    {project.description}
                  </p>
                </div>

                {project.featured && (
                  <span className="hidden shrink-0 text-[10px] uppercase tracking-widest text-[var(--accent)] sm:block">
                    Featured
                  </span>
                )}
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="border border-[var(--border)] px-2.5 py-1.5 text-[11px] text-[var(--muted)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex gap-5 text-xs">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-[var(--border)] pb-1 text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    GitHub ↗
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-[var(--border)] pb-1 text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}