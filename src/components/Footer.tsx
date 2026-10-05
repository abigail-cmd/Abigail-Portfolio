
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-8 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        
        {/* Left */}
        <div>
          <p className="text-sm font-semibold">Abigail Elaho</p>
          <p className="mt-1 text-xs text-[var(--muted)]">
            Building, learning & exploring.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--muted)]">
          <Link
            href="/work"
            className="transition-colors hover:text-[var(--foreground)]"
          >
            Work
          </Link>

          <Link
            href="/about"
            className="transition-colors hover:text-[var(--foreground)]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition-colors hover:text-[var(--foreground)]"
          >
            Contact
          </Link>

          <a
            href="https://github.com/abigail-cmd"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--foreground)]"
          >
            GitHub 
          </a>

          <a
            href="https://www.linkedin.com/in/abigail-elaho-0595492ab/?isSelfProfile=true"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--foreground)]"
          >
            LinkedIn 
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Abigail Elaho
        </p>
      </div>
    </footer>
  );
}