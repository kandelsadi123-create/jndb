import Image from "next/image";

const courses = [
  {
    id: "barista-foundation",
    title: "Barista Foundation",
    duration: "4 weeks",
    level: "Beginner",
    summary:
      "Espresso extraction, milk texturing, and the science behind a balanced shot.",
    image: {
      src: "/images/course-foundation.jpg",
      alt: "Espresso machine pulling a shot into a cup",
    },
    outcomes: [
      "Dial in a grinder and hold a recipe",
      "Steam milk to a stable microfoam",
      "Run a clean, fast espresso bar",
    ],
    featured: false,
  },
  {
    id: "latte-art-mastery",
    title: "Latte Art Mastery",
    duration: "6 weeks",
    level: "Intermediate",
    summary:
      "Build a steady pour and a repeatable pattern, from a clean heart to a full rosetta.",
    image: {
      src: "/images/course-latte-art.jpg",
      alt: "Latte art pattern in a white coffee cup",
    },
    outcomes: [
      "Control flow rate and pitcher height",
      "Pour hearts, tulips, and rosettas",
      "Keep symmetry under service pressure",
    ],
    featured: true,
  },
  {
    id: "coffee-shop-management",
    title: "Coffee Shop Management",
    duration: "8 weeks",
    level: "Advanced",
    summary:
      "Costing, supply, menu design, and the operating rhythm of a small cafe.",
    image: {
      src: "/images/course-management.jpg",
      alt: "Cafe interior with tables and seating",
    },
    outcomes: [
      "Build a menu with real margins",
      "Plan stock and supplier terms",
      "Write a launch plan you can fund",
    ],
    featured: false,
  },
];

const stats = [
  { value: "500+", label: "Graduates" },
  { value: "12", label: "Instructors" },
  { value: "98%", label: "Placement" },
  { value: "5 yrs", label: "In Hetauda" },
];

const testimonials = [
  {
    quote:
      "I arrived able to make a decent coffee at home. I left able to run a bar on my own. The difference was the repetition and the honesty of the feedback.",
    name: "Srijana Thapa",
    role: "Owner, Kathmandu cafe",
  },
  {
    quote:
      "The latte art block is taught properly. Every pour is filmed and reviewed, so you can see exactly what your hand did wrong.",
    name: "Bikash Rai",
    role: "Head barista, Pokhara",
  },
  {
    quote:
      "I took the management track as a hobby learner and came out with a costed menu and a plan. That was more than I expected.",
    name: "Anita Shrestha",
    role: "Coffee enthusiast",
  },
];

const starPath =
  "M12 3.2l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9-5.3-2.9-5.3 2.9 1.1-5.9-4.3-4.1 5.9-.8L12 3.2Z";

function Stars() {
  return (
    <div className="flex gap-1 text-brand" aria-label="Rated 5 out of 5">
      {[0, 1, 2, 3, 4].map((index) => (
        <svg
          key={index}
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-current"
          aria-hidden="true"
        >
          <path d={starPath} />
        </svg>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <div id="top">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12">
          <div className="reveal lg:col-span-7">
            <p className="eyebrow">Hetauda, Nepal</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Master the craft
              <br />
              of specialty coffee
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              A working training bar in Hetauda. Small cohorts, real equipment, and
              instructors who have trained across Asia and Europe. Start where you are
              and leave ready for a bar.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#courses" className="btn btn-primary">
                Explore courses
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="#academy" className="btn btn-secondary">
                See the academy
              </a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-serif text-2xl font-semibold text-brand-strong">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="reveal reveal-2 lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden rounded-card border border-border bg-surface-muted">
              <Image
                src="/images/hero-barista.jpg"
                alt="Barista pouring steamed milk into a coffee cup"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded-pill bg-surface-raised/95 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-strong">
                Training bar, Hetauda
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="border-b border-border bg-surface py-16 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Programs</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Three tracks, one standard
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Each track runs in the same training bar, on the same machines you will
              meet in service. Pick the depth you need.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {courses.map((course, index) => (
              <article
                key={course.id}
                id={course.id}
                className={[
                  "surface-card reveal flex flex-col overflow-hidden",
                  index === 1 ? "reveal-2" : "",
                  index === 2 ? "reveal-3" : "",
                  course.featured ? "border-brand shadow-sm" : "",
                ]
                  .join(" ")
                  .trim()}
              >
                <div className="relative aspect-16/10 w-full bg-surface-muted">
                  <Image
                    src={course.image.src}
                    alt={course.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  {course.featured ? (
                    <span className="absolute left-4 top-4 rounded-pill bg-surface-raised/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                      Most enrolled
                    </span>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-pill bg-surface-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-strong">
                      {course.level}
                    </span>
                    <span className="text-xs font-medium text-ink-muted">
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-ink">
                    {course.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {course.summary}
                  </p>

                  <ul className="mt-5 flex flex-col gap-2.5">
                    {course.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-2.5 text-sm text-ink">
                        <svg
                          viewBox="0 0 24 24"
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          aria-hidden="true"
                        >
                          <path d="M4 12.5l5 5L20 6.5" />
                        </svg>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-7">
                    <a
                      href="#visit"
                      className="btn btn-primary w-full"
                      aria-label={`Enroll in ${course.title}`}
                    >
                      Enroll
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Academy */}
      <section
        id="academy"
        className="border-b border-border bg-surface-muted py-16 sm:py-24"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow">The academy</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Good coffee starts
              <br />
              with good people
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              The academy sits inside a working cafe, so every session runs against real
              orders and real time pressure. Class sizes stay small enough that an
              instructor can watch every pour and correct it on the spot.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              You do not need experience to start. You need a willingness to repeat a
              motion until it is consistent, and to taste the result honestly.
            </p>

            <dl className="mt-8 divide-y divide-border border-y border-border">
              <div className="grid gap-1 py-4 sm:grid-cols-3">
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-strong">
                  Morning
                </dt>
                <dd className="text-sm text-ink-muted sm:col-span-2">
                  Practical blocks run before service, when the bar is calm.
                </dd>
              </div>
              <div className="grid gap-1 py-4 sm:grid-cols-3">
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-strong">
                  Evening
                </dt>
                <dd className="text-sm text-ink-muted sm:col-span-2">
                  Cupping and theory sessions for the management track.
                </dd>
              </div>
              <div className="grid gap-1 py-4 sm:grid-cols-3">
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-strong">
                  Class size
                </dt>
                <dd className="text-sm text-ink-muted sm:col-span-2">
                  Eight students maximum, so each bar station stays hands-on.
                </dd>
              </div>
            </dl>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-16/10 overflow-hidden rounded-card border border-border sm:col-span-2">
              <Image
                src="/images/academy-interior.jpg"
                alt="Cafe interior with seating and warm lighting"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-card border border-border">
              <Image
                src="/images/academy-pour.jpg"
                alt="Milk being poured into a cup to form latte art"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-card border border-border">
              <Image
                src="/images/academy-beans.jpg"
                alt="Roasted coffee beans"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="stories" className="bg-surface py-16 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Student stories</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              What graduates say
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <figure
                key={item.name}
                className={[
                  "surface-card reveal flex h-full flex-col p-7",
                  index === 1 ? "reveal-2" : "",
                  index === 2 ? "reveal-3" : "",
                ]
                  .join(" ")
                  .trim()}
              >
                <Stars />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="text-sm font-semibold text-ink">{item.name}</p>
                  <p className="mt-0.5 text-xs text-ink-muted">{item.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="relative mt-14 overflow-hidden rounded-card border border-border">
            <Image
              src="/images/cta-coffee.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-brand-strong/90" />
            <div className="relative flex flex-col items-start justify-between gap-6 p-7 sm:flex-row sm:items-center">
              <div>
                <p className="font-serif text-2xl font-semibold tracking-tight text-on-brand">
                  Next cohort starts soon
                </p>
                <p className="mt-1.5 text-sm text-on-brand/85">
                  Visit the academy in Hetauda, or write to us for dates and fees.
                </p>
              </div>
              <a href="#visit" className="btn btn-secondary bg-surface-raised">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
