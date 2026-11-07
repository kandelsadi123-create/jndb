const programLinks = [
  { label: "Barista Foundation", href: "#courses" },
  { label: "Latte Art Mastery", href: "#courses" },
  { label: "Coffee Shop Management", href: "#courses" },
];

const academyLinks = [
  { label: "About the academy", href: "#academy" },
  { label: "Student stories", href: "#stories" },
  { label: "Visit us", href: "#visit" },
];

export default function Footer() {
  return (
    <footer id="visit" className="border-t border-border bg-surface-muted">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-lg font-semibold tracking-tight text-ink">
            J &amp; B Barista Academy
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
            Specialty coffee training in the heart of Hetauda. Small classes, working
            equipment, and instructors who have trained across Asia and Europe.
          </p>
          <address className="mt-6 flex flex-col gap-2 text-sm not-italic text-ink-muted">
            <span>Hetauda, Bagmati Province, Nepal</span>
            <a
              href="mailto:jbaristaacademy@gmail.com"
              className="w-fit text-brand-strong underline decoration-brand-soft underline-offset-4 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Jbaristaacademy@gmail.com
            </a>
            <a
              href="tel:+9779855018029"
              className="w-fit text-brand-strong underline decoration-brand-soft underline-offset-4 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              +977 9855018029
            </a>
          </address>
        </div>

        <nav aria-label="Programs">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-ink">
            Programs
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {programLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-ink-muted transition-colors hover:text-brand-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Academy">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-ink">
            Academy
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {academyLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-ink-muted transition-colors hover:text-brand-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Copyright {new Date().getFullYear()} J &amp; B Barista Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
