"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="border-b border-[var(--border)] bg-[var(--background)]">
      <nav className="mx-auto max-w-7xl px-6 py-4 md:px-10 md:py-5">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--foreground)] text-sm font-bold">
              AE
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-tight">
                Abigail Elaho
              </p>

              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Developer · Digital Builder
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/work"
              className="text-sm transition-colors hover:text-[var(--primary)]"
            >
              Work
            </Link>

            <Link
              href="/about"
              className="text-sm transition-colors hover:text-[var(--primary)]"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-sm transition-colors hover:text-[var(--primary)]"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-[var(--foreground)] px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--muted)] hover:bg-[var(--card)] hover:shadow-sm"
            >
              {/* Let&apos;s connect ↗ */}
              Let&apos;s connect <span className="arrow-text">↗</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-lg md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="border-t border-[var(--border)] pt-5 md:hidden">
            <div className="flex flex-col gap-1">
              <Link
                href="/work"
                onClick={closeMenu}
                className="rounded-xl px-3 py-3 text-sm transition-colors hover:bg-[var(--card)]"
              >
                Work
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className="rounded-xl px-3 py-3 text-sm transition-colors hover:bg-[var(--card)]"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="rounded-xl px-3 py-3 text-sm transition-colors hover:bg-[var(--card)]"
              >
                Contact
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-3 rounded-full border border-[var(--foreground)] px-5 py-3 text-center text-sm font-medium"
              >
                {/* Let&apos;s connect ↗ */}
                Let&apos;s connect <span className="arrow-text">↗</span>
              </Link>
              
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}


// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <header className="border-b border-[var(--border)] bg-[var(--background)]">
//       <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 md:py-5">
//         {/* Brand */}
//         <Link href="/" className="flex items-center gap-3">
//           <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--foreground)] text-sm font-bold">
//             AE
//           </div>

//           <div className="hidden sm:block">
//             <p className="text-sm font-semibold tracking-tight">
//               Abigail Elaho
//             </p>

//             <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
//               Developer · Digital Builder
//             </p>
//           </div>
//         </Link>

//         {/* Desktop navigation */}
//         <div className="hidden items-center gap-8 md:flex">
//           <Link
//             href="/work"
//             className="text-sm transition-colors hover:text-[var(--primary)]"
//           >
//             Work
//           </Link>

//           <Link
//             href="/about"
//             className="text-sm transition-colors hover:text-[var(--primary)]"
//           >
//             About
//           </Link>

//           <Link
//             href="/contact"
//             className="text-sm transition-colors hover:text-[var(--primary)]"
//           >
//             Contact
//           </Link>
//         </div>

//         {/* CTA */}
//         <Link
//           href="/contact"
//           className="rounded-full border border-[var(--foreground)] px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--muted)] hover:bg-[var(--card)] hover:shadow-sm"
//         >
//           Let&apos;s connect ↗
//         </Link>
//       </nav>
//     </header>
//   );
// }