import Link from "next/link";

type ProjectCardProps = {
  number: string;
  title: string;
  description: string;
  technologies: string;
  href: string;
};

export default function ProjectCard({
  number,
  title,
  description,
  technologies,
  href,
}: ProjectCardProps) {
  return (
    <article className="group border-t border-[var(--border)] py-8 md:py-10">
      <div className="grid gap-8 md:grid-cols-[80px_1fr_1.2fr] md:items-start">
        
        <p className="text-xs font-medium tracking-[0.2em] text-[var(--muted)]">
          {number}
        </p>

        <div>
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
            {description}
          </p>
        </div>

        <div className="flex flex-col items-start gap-5 md:items-end">
          <p className="text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
            {technologies}
          </p>

          <Link
            href={href}
            className="text-sm font-medium transition-all duration-200 hover:translate-x-1"
          >
            View project →
          </Link>
        </div>

      </div>
    </article>
  );
}