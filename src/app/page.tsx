import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-[calc(100vh-85px)] px-6 py-8 md:px-10 md:py-10 lg:px-16 lg:py-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left side */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
              Computer Science Graduate · Developer
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Building digital experiences that feel{" "}
              <span className="italic">thoughtful.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg">
              Hi, I&apos;m Abigail — a Computer Science graduate and developer
              interested in building practical, thoughtful digital solutions
              that solve real problems.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="rounded-full border border-[var(--foreground)] bg-[var(--card)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-md"
              >
                View selected work →
              </Link>

              <Link
                href="/about"
                className="group flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-[var(--muted)] transition-all duration-200 hover:text-[var(--foreground)]"
              >
                About me
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right side visual */}
          <div className="relative hidden min-h-[440px] lg:block">
            <div className="absolute inset-8 rounded-[2.5rem] border border-[var(--border)] bg-[var(--card)]" />

            {/* Decorative shape */}
            <div className="absolute right-8 top-10 h-32 w-32 rounded-full bg-[var(--lavender)]" />

            <div className="absolute bottom-10 left-0 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Currently
              </p>

              <p className="mt-2 max-w-[180px] text-lg font-medium leading-snug">
                Building, learning & exploring.
              </p>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Based in
              </p>

              <p className="mt-2 text-lg font-medium">Lagos, Nigeria</p>
            </div>

            <div className="absolute bottom-8 right-12 text-7xl font-semibold tracking-[-0.08em] text-[var(--foreground)]">
              AE
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="px-6 py-14 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
                Selected work
              </p>

              <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
                A few things I&apos;ve built.
              </h2>
            </div>

            <Link
              href="/work"
              className="hidden text-sm font-medium text-[var(--muted)] transition hover:text-[var(--foreground)] md:block"
            >
              View all work →
            </Link>
          </div>

          <div>
            <ProjectCard
              number="01"
              title="Nutrition Deficiency Detection System"
              description="A rule-based web application designed to identify potential nutrient deficiencies and provide practical recommendations based on user information."
              technologies="Node.js · Express · SQLite"
              href="/projects/nutrition-system"
            />

            <ProjectCard
              number="02"
              title="More projects coming soon"
              description="More experiments, interfaces and projects will be added here as I continue building and exploring different areas of technology."
              technologies="React · Next.js · Web"
              href="/work"
            />
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="px-6 py-14 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl border-t border-[var(--border)] pt-8">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
            {/* Section label */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
                A little about me
              </p>
            </div>

            {/* Main content */}
            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">
                I&apos;m a developer who enjoys turning ideas into things
                people can actually use.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
                I&apos;m interested in web development, but I&apos;m also
                exploring other areas of technology and creative work. I enjoy
                learning, experimenting with new ideas, and finding different
                ways to bring things to life.
              </p>

              <Link
                href="/about"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-medium"
              >
                More about me
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 py-14 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl border-t border-[var(--border)] pt-8">
          <div className="grid gap-9 md:grid-cols-[0.7fr_1.3fr]">
            {/* Section label */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
                Tools &amp; skills
              </p>

              <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--muted)]">
                Technologies I&apos;ve worked with and continue to explore.
              </p>
            </div>

            {/* Skills */}
            <div>
              <div className="grid grid-cols-2 border-l border-t border-[var(--border)] sm:grid-cols-3">
                <div className="border-b border-r border-[var(--border)] p-4">
                  <p className="text-sm font-medium">HTML &amp; CSS</p>
                </div>

                <div className="border-b border-r border-[var(--border)] p-4">
                  <p className="text-sm font-medium">JavaScript</p>
                </div>

                <div className="border-b border-[var(--border)] p-4">
                  <p className="text-sm font-medium">React</p>
                </div>

                <div className="border-b border-r border-[var(--border)] p-4">
                  <p className="text-sm font-medium">Next.js</p>
                </div>

                <div className="border-b border-r border-[var(--border)] p-4">
                  <p className="text-sm font-medium">Node.js</p>
                </div>

                <div className="border-b border-[var(--border)] p-4">
                  <p className="text-sm font-medium">Express</p>
                </div>

                <div className="border-r border-[var(--border)] p-4">
                  <p className="text-sm font-medium">SQLite</p>
                </div>

                <div className="border-r border-[var(--border)] p-4">
                  <p className="text-sm font-medium">Git &amp; GitHub</p>
                </div>

                <div className="p-4">
                  <p className="text-sm font-medium">Responsive Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND CODE */}
      <section className="px-6 py-14 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl border-t border-[var(--border)] pt-8">
          <div className="grid gap-9 md:grid-cols-[0.7fr_1.3fr]">
            {/* Left */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
                Beyond the code
              </p>
            </div>

            {/* Right */}
            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">
                I like things that are simple, thoughtful, and just a little
                different.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
                I&apos;m naturally drawn to clean design, creative ideas, and
                things that feel well put together. I enjoy paying attention
                to the little details, whether I&apos;m building something,
                exploring a new idea, or figuring out how to make something
                feel just right.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                    Creative
                  </p>

                  <p className="mt-2 text-sm leading-6">
                    I like experimenting with ideas and finding simple ways to
                    make things interesting.
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--border)] bg-[var(--lavender)] p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                    Curious
                  </p>

                  <p className="mt-2 text-sm leading-6">
                    I&apos;m always interested in learning something new and
                    seeing where it takes me.
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                    Detail-minded
                  </p>

                  <p className="mt-2 text-sm leading-6">
                    I care about the small things that make a finished idea
                    feel complete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-14 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--lavender)] px-6 py-11 md:px-12 md:py-16">
            {/* Decorative shapes */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--card)] opacity-70" />

            <div className="absolute -bottom-20 left-1/3 h-48 w-48 rounded-full border border-[var(--accent)] opacity-30" />

            {/* Content */}
            <div className="relative max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
                Let&apos;s connect
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-[0.98] tracking-[-0.04em] md:text-6xl">
                Have an idea, opportunity, or just want to say hi?
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg">
                I&apos;m always open to interesting conversations, creative
                collaborations, and opportunities to keep learning and
                building.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-3 rounded-full border border-[var(--foreground)] bg-[var(--card)] px-6 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                Get in touch
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}