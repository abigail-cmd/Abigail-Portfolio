import Link from "next/link";

export default function WorkPage() {
  return (
    <main>
      {/* Page intro */}
      <section className="px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
            Work
          </p>

          <div className="mt-5 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] md:text-7xl">
              Things I&apos;ve built, explored, and learned from.
            </h1>

            <p className="max-w-md text-base leading-7 text-[var(--muted)] md:pb-2">
              A collection of projects and experiments from my journey as I
              continue learning, building, and exploring different areas of
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 pb-20 md:px-10 md:pb-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Project 01 */}
          <article className="border-t border-[var(--border)] py-10 md:py-14">
            <div className="grid gap-10 md:grid-cols-[80px_1fr_1fr] md:gap-8">
              {/* Number */}
              <div>
                <p className="text-xs font-medium tracking-[0.2em] text-[var(--muted)]">
                  01
                </p>
              </div>

              {/* Project information */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Web application
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.025em] md:text-4xl">
                  Nutrition Deficiency Detection System
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
                  A rule-based web application designed to identify potential
                  nutrient deficiencies and provide practical recommendations
                  based on user information.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs">
                    Node.js
                  </span>

                  <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs">
                    Express
                  </span>

                  <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs">
                    SQLite
                  </span>

                  <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs">
                    EJS
                  </span>
                </div>

                <Link
                  href="/projects/nutrition-system"
                  className="mt-8 inline-flex items-center rounded-full border border-[var(--foreground)] px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--card)] hover:shadow-sm"
                >
                  View case study
                </Link>
              </div>

              {/* Project visual */}
              <div className="min-h-[280px] overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--lavender)] p-6 md:min-h-[360px]">
                <div className="flex h-full min-h-[230px] flex-col justify-between rounded-[1.1rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                      Nutrition
                    </span>

                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  </div>

                  <div>
                    <p className="text-3xl font-semibold tracking-tight md:text-4xl">
                      Check your
                    </p>

                    <p className="text-3xl font-semibold tracking-tight text-[var(--primary)] md:text-4xl">
                      nutrition.
                    </p>

                    <div className="mt-6 grid grid-cols-3 gap-2">
                      <div className="h-12 rounded-xl bg-[var(--lavender)]" />
                      <div className="h-12 rounded-xl border border-[var(--border)]" />
                      <div className="h-12 rounded-xl bg-[var(--background)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Coming soon */}
          <article className="border-t border-[var(--border)] py-10 md:py-14">
            <div className="grid gap-8 md:grid-cols-[80px_1fr_1fr] md:gap-8">
              <div>
                <p className="text-xs font-medium tracking-[0.2em] text-[var(--muted)]">
                  02
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Coming soon
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.025em] md:text-4xl">
                  More projects are on the way.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
                  I&apos;m continuing to build, experiment, and explore new
                  ideas. More projects will be added here as they come
                  together.
                </p>
              </div>

              <div className="flex min-h-[220px] items-center justify-center rounded-[1.5rem] border border-dashed border-[var(--border)] bg-[var(--card)]">
                <p className="text-sm text-[var(--muted)]">
                  More coming soon
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-24 md:px-10 md:pb-32 lg:px-16">
        <div className="mx-auto max-w-7xl border-t border-[var(--border)] pt-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
                Keep exploring
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                There&apos;s more to see.
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit rounded-full border border-[var(--foreground)] px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--card)] hover:shadow-sm"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}