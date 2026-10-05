import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* INTRO + PHOTO */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-24 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          {/* Intro text */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              About me
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-7xl">
              A developer who likes making things{" "}
              <span className="text-[var(--primary)]">useful.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg">
              I&apos;m Abigail Elaho, a Computer Science graduate and
              developer interested in building practical, thoughtful digital
              solutions that solve real problems.
            </p>
          </div>

          {/* PHOTO */}
          <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[var(--lavender)]">
              <Image
                src="/about/abigail.jpeg"
                alt="Abigail Elaho"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.15em] shadow-sm">
              AE · Lagos
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEXT */}
      <section className="border-y border-[var(--border)]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.7fr_1.3fr]">
          <div className="border-b border-[var(--border)] px-6 py-8 md:px-10 lg:border-b-0 lg:border-r lg:px-16 lg:py-12">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              A little context
            </p>
          </div>

          <div className="px-6 py-10 md:px-10 md:py-12 lg:px-16">
            <div className="max-w-2xl space-y-6">
              <p className="text-lg leading-8 md:text-xl">
                I enjoy taking an idea and turning it into something people
                can actually interact with. For me, good digital work is not
                just about making something function. It should also feel
                clear, intentional and easy to use.
              </p>

              <p className="leading-7 text-[var(--muted)]">
                My background in Computer Science has given me a foundation
                across web development, problem solving and software
                development. I&apos;m particularly interested in the space
                where technology, creativity and real-world problems meet.
              </p>

              <p className="leading-7 text-[var(--muted)]">
                I&apos;m also still growing. I&apos;m exploring different
                areas of technology, building projects, learning new tools and
                looking for opportunities where I can keep improving while
                creating useful things.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION + CURRENT FOCUS */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="grid gap-5 md:grid-cols-2">
          {/* Education */}
          <article className="rounded-3xl bg-[var(--card)] p-7 md:p-9">
            <div className="flex items-start justify-between gap-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                Education
              </p>

              <span className="text-2xl text-[var(--primary)]">✦</span>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Computer Science
              </h2>

              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Bachelor&apos;s degree in Computer Science
              </p>

              <p className="mt-6 text-sm font-medium">Caleb University</p>
            </div>
          </article>

          {/* Current focus */}
          <article className="rounded-3xl bg-[var(--lavender)] p-7 md:p-9">
            <div className="flex items-start justify-between gap-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                Right now
              </p>

              <span className="text-2xl text-[var(--primary)]">↗</span>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Building &amp; exploring
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-[var(--muted)]">
                Building projects, sharpening my development skills and
                exploring new areas and opportunities beyond what I already
                know.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-16">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Toolkit
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Things I work with.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">
              A growing toolkit built around creating responsive, practical
              web experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 border-l border-t border-[var(--border)] sm:grid-cols-3 lg:grid-cols-5">
            {[
              "HTML & CSS",
              "JavaScript",
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "SQLite",
              "Git & GitHub",
              "Responsive Design",
              "TypeScript",
            ].map((skill) => (
              <div
                key={skill}
                className="flex min-h-24 items-center border-b border-r border-[var(--border)] px-5 py-6"
              >
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEYOND CODE */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="rounded-3xl bg-[var(--primary)] p-8 text-white md:p-12 lg:p-14">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                Beyond code
              </p>
            </div>

            <div>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                I like things that are simple, cool and well put together.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 md:text-base">
                That mindset follows me outside development too. I appreciate
                thoughtful details, clean presentation and creative ideas,
                especially when they make something feel more enjoyable to
                use or experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-24 lg:px-16">
        <div className="rounded-3xl bg-[var(--lavender)] px-7 py-12 md:px-12 md:py-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                What&apos;s next?
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
                Let&apos;s build something interesting.
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit rounded-full border border-[var(--foreground)] px-6 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-1 hover:bg-[var(--card)] hover:shadow-sm"
            >
              Get in touch ↗
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}