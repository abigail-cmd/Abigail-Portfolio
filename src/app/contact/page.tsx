import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="px-6 py-10 md:px-10 md:py-14 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <section className="border-b border-[var(--border)] pb-10 md:pb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
            Get in touch
          </p>

          <div className="mt-4 grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl">
                Let&apos;s talk.
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-6 text-[var(--muted)] md:text-base">
                Have an opportunity, project idea, question, or just want to
                say hello? I&apos;d love to hear from you.
              </p>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[var(--muted)] lg:ml-auto">
              Open to interesting conversations, collaborations, and
              opportunities to learn, build, and grow.
            </p>
          </div>
        </section>

        {/* Contact area */}
        <section className="grid gap-10 py-10 md:py-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          {/* Contact details */}
          <div>
            <div className="rounded-[1.5rem] bg-[var(--lavender)] p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                Find me
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                    Email
                  </p>

                  <p className="mt-1.5 text-sm">
                    abigailelaho@gmail.com
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                    LinkedIn
                  </p>

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex text-sm transition-colors hover:text-[var(--primary)]"
                  >
                    LinkedIn 
                  </a>
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                    GitHub
                  </p>

                  <a
                    href="https://github.com/abigail-cmd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex text-sm transition-colors hover:text-[var(--primary)]"
                  >
                    github.com/abigail-cmd 
                  </a>
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                    Based in
                  </p>

                  <p className="mt-1.5 text-sm">Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-xs text-xs leading-5 text-[var(--muted)]">
              Whether it&apos;s a project, opportunity, or simply an idea worth
              discussing, feel free to reach out.
            </p>
          </div>

          {/* Contact form */}
          <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 md:p-6">
            <div className="mb-6">
              <p className="text-lg font-semibold tracking-tight">
                Send me a message
              </p>

              <p className="mt-1.5 text-sm leading-5 text-[var(--muted)]">
                Tell me a little about what you have in mind.
              </p>
            </div>

            <form className="space-y-4">
              {/* Name + Email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--muted)]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-2.5 text-sm outline-none transition focus:border-[var(--accent)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--muted)]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-2.5 text-sm outline-none transition focus:border-[var(--accent)]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--muted)]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me a little about what you have in mind..."
                  className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-3 text-sm leading-5 outline-none transition focus:border-[var(--accent)]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                Send message →
              </button>
            </form>
          </div>
        </section>

        {/* Bottom note */}
        <section className="border-t border-[var(--border)] pt-7">
          <div className="flex flex-col gap-3 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>Currently building, learning &amp; exploring.</p>

            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-medium text-[var(--foreground)]"
            >
              Back to home
              <span className="transition-transform duration-200 group-hover:-translate-x-1">
                ←
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}