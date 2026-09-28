"use client";

import { portfolio } from "@/data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/95">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="navbar-logo"
        >
          AG
        </a>

        <div className="flex items-center gap-5 text-xs">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="navbar-link"
            >
              {item.label}
            </a>
          ))}

          <a
            href={portfolio.links.github}
            target="_blank"
            rel="noreferrer"
            className="navbar-link"
          >
            GitHub ↗
          </a>
        </div>
      </nav>
    </header>
  );
}