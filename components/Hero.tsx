import Image from "next/image";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-65px)] items-center">
      <div className="flex w-full flex-col-reverse items-start justify-between gap-12 py-20 md:flex-row md:items-center md:py-24">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm text-[var(--muted)]">
            {portfolio.location}
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
            {portfolio.name}
          </h1>

          <p className="mt-5 text-sm text-[var(--accent)] md:text-base">
            {portfolio.role}
          </p>

          <p className="mt-8 max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
            {portfolio.bio}
          </p>

          <div className="mt-8 flex flex-wrap gap-5 text-xs">
            {portfolio.links.github && (
              <a
                href={portfolio.links.github}
                target="_blank"
                rel="noreferrer"
                className="border-b border-[var(--muted)] pb-1 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                GitHub ↗
              </a>
            )}

            {portfolio.links.linkedin && (
              <a
                href={portfolio.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="border-b border-[var(--muted)] pb-1 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                LinkedIn ↗
              </a>
            )}

            {portfolio.links.leetcode && (
              <a
                href={portfolio.links.leetcode}
                target="_blank"
                rel="noreferrer"
                className="border-b border-[var(--muted)] pb-1 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                LeetCode ↗
              </a>
            )}

            {portfolio.links.resume && (
              <a
                href={portfolio.links.resume}
                target="_blank"
                rel="noreferrer"
                className="border-b border-[var(--muted)] pb-1 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Resume ↗
              </a>
            )}
          </div>
        </div>

     <div className="relative h-32 w-32 shrink-0 overflow-hidden border border-[var(--border-strong)] shadow-[4px_4px_0_var(--border)] md:h-36 md:w-36">
          <Image
            src={portfolio.photo}
            alt={portfolio.name}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}