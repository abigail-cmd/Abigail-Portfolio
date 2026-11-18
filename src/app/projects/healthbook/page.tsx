
import Link from "next/link";

const screenshots = [
  {
    number: "01",
    label: "Patient Portal",
    title: "A starting point for patients seeking care.",
    description:
      "The patient portal provides access to the hospital's appointment services, allowing users to register, log in, and begin exploring available medical specialists.",
    src: "/projects/healthbook/patient-portal.png",
    alt: "HealthBook patient portal screenshot",
    className: "max-h-[560px]",
  },
  {
    number: "02",
    label: "Specialists",
    title: "Making it easier to find the right specialist.",
    description:
      "Patients can browse a pre-populated directory of 20 medical consultants across 12 clinical departments, making it easier to explore available areas of care.",
    src: "/projects/healthbook/specialists.png",
    alt: "HealthBook medical specialists directory",
    className: "max-h-[600px]",
  },
  {
    number: "03",
    label: "Appointment Booking",
    title: "Requesting a consultation in a few steps.",
    description:
      "Patients can select a medical specialist and submit their preferred consultation date and time through the appointment booking process.",
    src: "/projects/healthbook/booking.png",
    alt: "HealthBook appointment booking screen",
    className: "max-h-[600px]",
  },
  {
    number: "04",
    label: "Appointments",
    title: "Keeping track of appointment requests.",
    description:
      "Patients can view their appointment requests and follow their progress through three statuses: Pending, Approved, and Cancelled.",
    src: "/projects/healthbook/appointments.png",
    alt: "HealthBook patient appointment status screen",
    className: "max-h-[560px]",
  },
  {
    number: "05",
    label: "Admin Dashboard",
    title: "Bringing appointment management into one place.",
    description:
      "The administrative dashboard provides an overview of patient booking requests and gives the administrator the ability to approve or cancel appointments.",
    src: "/projects/healthbook/dashboard.png",
    alt: "HealthBook admin dashboard",
    className: "max-h-[600px]",
  },
  {
    number: "06",
    label: "Specialist Management",
    title: "Managing the hospital's specialist directory.",
    description:
      "Administrators can add new hospital specialists or remove existing ones, helping keep the consultant directory manageable.",
    src: "/projects/healthbook/manage-specialists.png",
    alt: "HealthBook specialist management screen",
    className: "max-h-[560px]",
  },
];

const features = [
  "Patient registration and login",
  "Browse medical specialists by department",
  "Pre-populated directory of 20 medical consultants",
  "Appointment requests with preferred dates and times",
  "Appointment status tracking",
  "Admin dashboard for booking management",
  "Approve or cancel patient appointments",
  "Add and remove hospital specialists",
];

const technologies = [
  ["Language", "Python 3"],
  ["Backend", "Flask"],
  ["Database", "SQLite3"],
  ["Templates", "Jinja2"],
  ["Frontend", "HTML5"],
  ["Framework", "Bootstrap 5.3"],
  ["Styling", "Custom CSS"],
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
        {/* PROJECT SCREENSHOT: replace with the actual screenshot */}
        <img
          src={src}
          alt={alt}
          className={`w-auto max-w-full rounded-lg object-contain shadow-sm ${className}`}
        />
      </div>
    </article>
  );
}

export default function HealthBookPage() {
  // Add your actual Render URL here when ready.
  const liveDemoUrl = "https://healthbook-hospital-system.onrender.com/";

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
                02
              </span>
            </div>

            <h1 className="mt-4 max-w-5xl text-[2.8rem] font-semibold leading-[0.96] tracking-[-0.045em] md:text-6xl lg:text-[5rem]">
              HealthBook Hospital Appointment & Management System
            </h1>

            <div className="mt-6 grid gap-5 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <p className="max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
                A web-based hospital appointment booking and clinic management
                portal that connects patients with medical specialists while
                providing administrators with tools to manage appointment
                requests and the hospital's specialist directory.
              </p>

              <div className="flex flex-wrap gap-2 md:justify-end">
                <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs">
                  Python
                </span>
                <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs">
                  Flask
                </span>
                <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs">
                  SQLite
                </span>
                <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs">
                  Bootstrap
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
                Context
              </p>
              <p className="mt-1.5 text-sm font-medium">SIWES project</p>
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Focus
              </p>
              <p className="mt-1.5 text-sm font-medium">
                Hospital management
              </p>
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
            src="/projects/healthbook/hero.png"
            alt="HealthBook Hospital Appointment and Management System interface"
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
                Developed during my Students Industrial Work Experience Scheme
                (SIWES), with a focus on appointment booking and administrative
                management.
              </p>
            </div>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-4xl">
                Simplifying the process of connecting patients with medical
                specialists.
              </h2>

              <div className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)]">
                <p>
                  HealthBook was developed to provide a central platform where
                  patients can create accounts, explore available medical
                  consultants, and request hospital appointments without
                  having to navigate a complicated booking process.
                </p>

                <p>
                  On the administrative side, the system provides tools for
                  reviewing appointment requests, updating their statuses,
                  and managing the hospital's specialist directory.
                </p>

                <p>
                  The application includes 20 pre-populated medical consultants
                  across 12 clinical departments, covering a range of
                  healthcare specialities.
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
                  Two connected portals working together to manage the
                  appointment process.
                </p>
              </div>

              <div>
                <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-[2.6rem]">
                  From finding a specialist to managing an appointment.
                </h2>

                <div className="mt-6 grid gap-3 md:grid-cols-3">
                  {[
                    [
                      "01",
                      "Explore",
                      "Patients register, log in, and browse available medical specialists.",
                    ],
                    [
                      "02",
                      "Request",
                      "Patients select a specialist and submit their preferred consultation date and time.",
                    ],
                    [
                      "03",
                      "Manage",
                      "Administrators review requests, approve or cancel appointments, and manage specialists.",
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
              Exploring the patient experience and administrative side of
              HealthBook.
            </p>
          </div>

          {screenshots.map((screenshot) => (
            <div key={screenshot.number}>
              <ScreenshotFeature {...screenshot} />
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-9 md:px-10 md:py-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 border-t border-[var(--border)] pt-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              What it does
            </p>

            <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-4xl">
              Patient services and administrative tools in one application.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-[var(--muted)]">
              HealthBook brings patient appointment requests, specialist
              browsing, and hospital-side appointment management together in
              one web-based platform.
            </p>
          </div>

          <div className="grid gap-x-8 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="flex gap-3 border-t border-[var(--border)] py-4 first:border-t-0 sm:[&:nth-child(2)]:border-t-0"
              >
                <span className="text-xs font-semibold text-[var(--accent)]">
                  {`0${index + 1}`}
                </span>
                <p className="text-sm leading-6">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL DEPARTMENTS */}
      <section className="px-6 py-9 md:px-10 md:py-12 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 md:p-8 lg:p-10">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                Specialist directory
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-4xl">
                A directory covering different areas of healthcare.
              </h2>

              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                The system comes with 20 pre-populated medical consultants
                distributed across 12 clinical departments.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                "Cardiology",
                "Neurology",
                "Pediatrics",
                "Orthopedics",
                "Mental Health & Therapy",
                "Physiotherapy",
                "General Medicine",
                "Obstetrics & Gynecology",
                "Surgery",
                "Ophthalmology",
                "ENT",
                "Dermatology",
              ].map((department, index) => (
                <div
                  key={department}
                  className="flex items-start gap-2 border-t border-[var(--border)] py-3"
                >
                  <span className="text-[10px] font-semibold text-[var(--accent)]">
                    {`0${index + 1}`}
                  </span>
                  <p className="text-sm leading-5">{department}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES AND LEARNINGS */}
      <section className="px-6 py-9 md:px-10 md:py-12 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 md:p-8 lg:p-10">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                Challenge
              </p>

              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.025em] md:text-3xl">
                Connecting patient requests with administrative control.
              </h2>

              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                One of the key development considerations was creating a
                connected booking process where patients could submit
                appointment requests and administrators could manage those
                requests through clear status updates.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                What I learned
              </p>

              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.025em] md:text-3xl">
                Building an application around different user roles.
              </h2>

              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                Working on HealthBook strengthened my understanding of
                backend development with Python and Flask, database
                integration with SQLite, server-rendered templates, and
                building application workflows that support both patients
                and administrators.
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
                href="https://github.com/abigail-cmd/Healthbook-hospital-system"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4.5 py-2 text-sm font-medium !text-[var(--primary)] transition-transform hover:-translate-y-0.5"
              >
                GitHub
              </a>

              {liveDemoUrl && (
                <a
                  href={liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/30 px-4.5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  Live demo
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-5 flex max-w-7xl flex-col gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs leading-5 text-[var(--muted)]">
            HealthBook is an academic SIWES project demonstrating a
            web-based hospital appointment and clinic management workflow.
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
