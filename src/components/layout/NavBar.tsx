"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Courses", href: "#courses" },
  { label: "The Academy", href: "#academy" },
  { label: "Stories", href: "#stories" },
  { label: "Visit", href: "#visit" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-pill focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          <span className="flex h-9 w-9 shrink-0 overflow-hidden rounded-full border border-border bg-surface-raised">
            <Image
              src="/icon-192.png"
              alt=""
              width={72}
              height={72}
              priority
              className="h-full w-full object-cover"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-base font-semibold tracking-tight text-ink">
              J &amp; B Barista Academy
            </span>
            <span className="mt-1 text-xs font-medium tracking-wide text-ink-muted">
              Hetauda, Nepal
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-brand-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              {item.label}
            </a>
          ))}
          <a href="#courses" className="btn btn-primary">
            Enroll now
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-card border border-border text-ink transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:hidden"
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-navigation"
        hidden={!menuOpen}
        className="border-t border-border bg-surface px-5 pb-6 pt-2 md:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-card px-3 py-3 text-sm font-medium text-ink transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {item.label}
            </a>
          ))}
          <a href="#courses" onClick={() => setMenuOpen(false)} className="btn btn-primary mt-3">
            Enroll now
          </a>
        </nav>
      </div>
    </header>
  );
}
