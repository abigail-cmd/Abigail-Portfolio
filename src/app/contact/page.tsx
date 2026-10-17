
"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Your message couldn't be sent. Please try again."
        );
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Message sent successfully! Thank you for reaching out.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="px-6 py-10 md:px-10 md:py-14 lg:px-16">
      <div className="mx-auto max-w-6xl">
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

        <section className="grid gap-10 py-10 md:py-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
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
                  <a
                    href="mailto:abigailelaho@gmail.com"
                    className="mt-1.5 inline-flex break-all text-sm transition-colors hover:text-[var(--primary)]"
                  >
                    abigailelaho@gmail.com
                  </a>
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

          <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 md:p-6">
            <div className="mb-6">
              <p className="text-lg font-semibold tracking-tight">
                Send me a message
              </p>
              <p className="mt-1.5 text-sm leading-5 text-[var(--muted)]">
                Tell me a little about what you have in mind.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                    autoComplete="name"
                    maxLength={100}
                    required
                    disabled={isSending}
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-2.5 text-sm outline-none transition focus:border-[var(--accent)] disabled:opacity-60"
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
                    autoComplete="email"
                    maxLength={254}
                    required
                    disabled={isSending}
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-2.5 text-sm outline-none transition focus:border-[var(--accent)] disabled:opacity-60"
                  />
                </div>
              </div>

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
                  maxLength={5000}
                  required
                  disabled={isSending}
                  className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-3 text-sm leading-5 outline-none transition focus:border-[var(--accent)] disabled:opacity-60"
                />
              </div>

              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl px-3.5 py-3 text-sm ${
                    status.type === "success"
                      ? "bg-[var(--lavender)] text-[var(--primary)]"
                      : "border border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="w-full rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? "Sending..." : "Send message →"}
              </button>
            </form>
          </div>
        </section>

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
