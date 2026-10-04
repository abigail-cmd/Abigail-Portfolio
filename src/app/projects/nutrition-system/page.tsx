import Link from "next/link";

const screenshots = [
  {
    number: "01",
    label: "Assessment",
    title: "A guided assessment instead of a complicated form.",
    description:
      "The assessment is split into clear steps so users can select nutrients, enter personal details, and record their intake without being overwhelmed.",
    src: "/projects/nutrition-system/assessment.png",
    alt: "Nutrition assessment screen",
    className: "max-h-[560px]",
  },
  {
    number: "02",
    label: "Results",
    title: "Clear results people can actually understand.",
    description:
      "Each nutrient receives a four-level classification with explanations and food-based recommendations rather than a simple pass or fail.",
    src: "/projects/nutrition-system/results.png",
    alt: "Nutrition assessment results and recommendations",
    className: "max-h-[600px]",
  },
  {
    number: "03",
    label: "Dashboard",
    title: "A simple view of the data behind the system.",
    description:
      "The admin dashboard brings stored assessments and system information together in one place.",
    src: "/projects/nutrition-system/dashboard.png",
    alt: "Nutrition system admin dashboard",
    className: "max-h-[560px]",
  },
  {
    number: "04",
    label: "Report",
    title: "The assessment can leave the browser too.",
    description:
      "A generated PDF report packages the assessment results and reference information into a format that is easier to save and review.",
    src: "/projects/nutrition-system/report.png",
    alt: "Generated nutrition assessment report",
    className: "max-h-[600px]",
  },
];

const features = [
  "Age- and sex-specific RDA comparison",
  "Deficient, borderline, adequate, and excess classification",
  "BMI and personalized calorie estimation",
  "Food-based recommendations",
  "Charts and visual progress indicators",
  "Downloadable PDF reports",
  "Password-protected admin dashboard",
];

const technologies = [
  ["Runtime", "Node.js"],
  ["Server", "Express.js"],
  ["Views", "EJS"],
  ["Database", "SQLite"],
  ["Styling", "Tailwind CSS + custom CSS"],
  ["Charts", "Chart.js"],
  ["PDF", "PDFKit"],
  ["Auth", "express-session"],
];

function ScreenshotFeature({
  number,
  label,
  title,
  description,
  src,
  alt,
  className,
}: {
  number: string;
  label: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  className: string;
}) {
  return (
    <article className="grid gap-7 border-t border-[var(--border)] py-10 md:grid-cols-[0.72fr_1.28fr] md:gap-10 md:py-12">
      <div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold tracking-[0.18em] text-[var(--muted)]">
            {number}
          </span>
          <span className="h-px w-8 bg-[var(--border)]" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            {label}
          </span>
        </div>

        <h3 className="mt-5 max-w-md text-2xl font-semibold leading-tight tracking-[-0.025em] md:text-3xl">
          {title}
        </h3>

        <p className="mt-4 max-w-md text-sm leading-6 text-[var(--muted)]">
          {description}
        </p>
      </div>

      <div className="flex min-h-[250px] items-center justify-center overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--card)] p-4 md:min-h-[350px] md:p-6">
        {/* PROJECT SCREENSHOT: keep the real screenshot here */}
        <img
          src={src}
          alt={alt}
          className={`w-auto max-w-full rounded-lg object-contain shadow-sm ${className}`}
        />
      </div>
    </article>
  );
}

export default function NutritionSystemPage() {
  return (
    <main>
      {/* HERO */}
      <section className="px-6 pb-10 pt-12 md:px-10 md:pb-12 md:pt-16 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/work"
            className="inline-flex items-center text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            ← Back to work
          </Link>

          <div className="mt-7 max-w-6xl md:mt-8">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                Case study
              </span>
              <span className="rounded-full bg-[var(--lavender)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                01
              </span>
            </div>

            <h1 className="mt-4 max-w-5xl text-[2.8rem] font-semibold leading-[0.96] tracking-[-0.045em] md:text-6xl lg:text-[5rem]">
              Nutrition Deficiency Detection System
            </h1>

            <div className="mt-6 grid gap-5 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <p className="max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
                A rule-based web application that evaluates daily nutrient
                intake against age- and sex-specific standards, then turns the
                result into clear classifications and practical food-based
                recommendations.
              </p>

              <div className="flex flex-wrap gap-2 md:justify-end">
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
            </div>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[var(--border)] pt-6 sm:grid-cols-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Type
              </p>
              <p className="mt-1.5 text-sm font-medium">Web application</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Approach
              </p>
              <p className="mt-1.5 text-sm font-medium">Rule-based system</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Focus
              </p>
              <p className="mt-1.5 text-sm font-medium">Nutrition screening</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Status
              </p>
              <p className="mt-1.5 text-sm font-medium">Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* HERO SCREENSHOT */}
      <section className="px-6 pb-12 md:px-10 md:pb-14 lg:px-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-3 md:p-5">
          {/* PROJECT SCREENSHOT: main/strongest screenshot */}
          <img
            src="/projects/nutrition-system/hero.png"
            alt="Nutrition Deficiency Detection System main interface"
            className="mx-auto max-h-[600px] w-auto max-w-full rounded-xl object-contain shadow-sm"
          />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-6 pb-12 md:px-10 md:pb-14 lg:px-16">
        <div className="mx-auto max-w-7xl border-t border-[var(--border)] pt-7 md:pt-8">
          <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                Overview
              </p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--muted)]">
                Built as a final-year project, with a focus on transparency,
                usability, and practical output.
              </p>
            </div>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-4xl">
                Turning a set of nutritional rules into something people can
                actually use.
              </h2>

              <div className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)]">
                <p>
                  The system compares a person&apos;s reported nutrient intake
                  against age- and sex-specific Recommended Dietary Allowance
                  standards rather than using one flat value for everyone.
                </p>
                <p>
                  Instead of returning raw numbers alone, it translates the
                  comparison into understandable statuses, explanations, and
                  food-based recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM FLOW */}
      <section className="px-6 pb-12 md:px-10 md:pb-14 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[1.5rem] bg-[var(--lavender)] p-5 md:p-8 lg:p-10">
            <div className="grid gap-7 md:grid-cols-[0.7fr_1.3fr] md:gap-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  How it works
                </p>
                <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--primary)]/70">
                  A deliberately simple flow from user input to an
                  interpretable assessment.
                </p>
              </div>

              <div>
                <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-[2.6rem]">
                  From user information to useful recommendations.
                </h2>

                <div className="mt-6 grid gap-3 md:grid-cols-3">
                  {[
                    [
                      "01",
                      "Collect",
                      "Choose nutrients and enter personal details and intake.",
                    ],
                    [
                      "02",
                      "Evaluate",
                      "Apply RDA rules, BMI and calorie calculations.",
                    ],
                    [
                      "03",
                      "Explain",
                      "Return statuses, recommendations and visual results.",
                    ],
                  ].map(([number, title, description]) => (
                    <div
                      key={number}
                      className="rounded-2xl bg-[var(--card)] p-5"
                    >
                      <p className="text-xs font-semibold tracking-[0.18em] text-[var(--accent)]">
                        {number}
                      </p>
                      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="px-6 pb-8 md:px-10 md:pb-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-1 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                Inside the product
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] md:text-4xl">
                A closer look.
              </h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm leading-6 text-[var(--muted)] md:block">
              The real interface, from assessment through reporting.
            </p>
          </div>

          {screenshots.map((screenshot) => (
            <div key={screenshot.number}>
              <ScreenshotFeature {...screenshot} />
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES + DETAILS */}
      <section className="px-6 py-9 md:px-10 md:py-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 border-t border-[var(--border)] pt-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              What it does
            </p>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-4xl">
              More than a deficiency checker.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-[var(--muted)]">
              The system combines assessment, interpretation, education, and
              reporting into one lightweight application.
            </p>
          </div>

          <div className="grid gap-x-8 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="flex gap-3 border-t border-[var(--border)] py-4 first:border-t-0 sm:[&:nth-child(2)]:border-t-0"
              >
                <span className="text-xs font-semibold text-[var(--accent)]">
                  {index < 9 ? `0${index + 1}` : index + 1}
                </span>
                <p className="text-sm leading-6">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="px-6 py-9 md:px-10 md:py-12 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 md:p-8 lg:p-10">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                Challenge
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.025em] md:text-3xl">
                Building around clear rules without making the experience feel
                complicated.
              </h2>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                One of the main challenges was translating nutritional rules
                into consistent system logic while keeping the final output
                understandable for a non-technical user.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                What I learned
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.025em] md:text-3xl">
                Good logic is only half the job.
              </h2>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                The project pushed me to think about validation, modular
                backend logic, database structure, user flow, visual
                communication, and how technical decisions affect the final
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="px-6 py-9 md:px-10 md:py-12 lg:px-16">
        <div className="mx-auto max-w-7xl border-t border-[var(--border)] pt-10">
          <div className="grid gap-7 md:grid-cols-[0.7fr_1.3fr] md:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                Built with
              </p>
            </div>

            <div className="grid grid-cols-2 border-t border-l border-[var(--border)] sm:grid-cols-4">
              {technologies.map(([label, value]) => (
                <div
                  key={label}
                  className="border-b border-r border-[var(--border)] p-4 md:p-5"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LINKS / CTA */}
      <section className="px-6 pb-12 pt-6 md:px-10 md:pb-16 md:pt-8 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-[var(--primary)] p-6 text-white md:p-8 lg:p-9">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                Explore the project
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-[2.6rem]">
                Want to see the project for yourself?
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/abigail-cmd/-Main-Nutrient-Deficiency-Detector-"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4.5 py-2 text-sm font-medium !text-[var(--primary)] transition-transform hover:-translate-y-0.5"
              >
                GitHub ↗
              </a>
              <a
                href="https://main-nutrient-deficiency-detector.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-4.5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Live demo ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-5 flex max-w-7xl flex-col gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs leading-5 text-[var(--muted)]">
            This system is a rule-based educational and self-assessment tool.
            It does not replace professional medical or dietetic advice, and
            reference food amounts are approximate.
          </p>

          <Link
            href="/work"
            className="text-sm font-medium transition-transform hover:translate-x-1"
          >
            ← Back to all work
          </Link>
        </div>
      </section>
    </main>
  );
}
