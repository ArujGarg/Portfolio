import { portfolio } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-[var(--border)] py-24"
    >
      <div className="grid gap-12 md:grid-cols-[180px_1fr]">
        {/* Section label */}
      <div>
        <div className="inline-flex items-center border border-[var(--border-strong)] bg-[var(--background)] px-3 py-2 text-[10px] font-medium tracking-[0.14em] text-[var(--muted)]">
            <span className="mr-2 text-[var(--accent)]">01</span>
            ABOUT
        </div>
    </div>

        {/* Content */}
        <div>
          <div className="max-w-2xl space-y-6">
            {portfolio.about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm leading-8 text-[var(--foreground)] md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Interests */}
          <div className="mt-12">
            <p className="mb-5 text-xs uppercase tracking-widest text-[var(--muted)]">
              Interests
            </p>

            <div className="flex flex-wrap gap-3">
              {portfolio.interests.map((interest) => (
                <span
                  key={interest}
                  className="border border-[var(--border)] px-3 py-2 text-xs text-[var(--muted)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}