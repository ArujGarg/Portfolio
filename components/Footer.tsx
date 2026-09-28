import { portfolio } from "@/data/portfolio";

const links = [
  {
    label: "GitHub",
    href: portfolio.links.github,
  },
  {
    label: "LinkedIn",
    href: portfolio.links.linkedin,
  },
  {
    label: "LeetCode",
    href: portfolio.links.leetcode,
  },
  {
    label: "Resume",
    href: portfolio.links.resume,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-20">
      <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
        <div>
        <div className="inline-flex items-center border border-[var(--border-strong)] bg-[var(--background)] px-3 py-2 text-[10px] font-medium tracking-[0.14em] text-[var(--muted)]">
  <span className="mr-2 text-[var(--accent)]">04</span>
  ELSEWHERE
</div>

          <h2 className="mt-5 text-2xl font-medium">
            Find me around the web.
          </h2>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs">
          {links.map(
            (link) =>
              link.href && (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-[var(--border)] pb-1 text-[var(--muted)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {link.label} ↗
                </a>
              ),
          )}
        </div>
      </div>

      <div className="mt-20 flex flex-col justify-between gap-3 border-t border-[var(--border)] pt-5 text-[10px] text-[var(--muted)] sm:flex-row">
        <span>© {new Date().getFullYear()} {portfolio.name}</span>

        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}