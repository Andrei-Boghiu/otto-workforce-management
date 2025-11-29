import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* HERO */}
      <section className="flex-1 flex items-center justify-center px-6 py-20 text-center">
        <div className="max-w-3xl flex flex-col gap-6">
          <h1 className="text-4xl font-bold tracking-tight">Workforce Management without the Chaos</h1>
          <p className="text-base text-foreground/70 leading-relaxed">
            Otto helps companies keep track of employees, manage availability, monitor days off, and streamline
            operations. Designed for speed, accuracy, and visibility across your entire organization.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Link href="/dashboard" className="px-6 py-3 rounded-md bg-foreground text-background text-sm font-medium">
              Get Started
            </Link>
            <Link href="/pricing" className="px-6 py-3 rounded-md border border-foreground/20 text-sm font-medium">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
      {/* FEATURE PREVIEW */}
      <section className="border-t border-foreground/10 py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-lg">Employee Directory</h3>
            <p className="text-sm text-foreground/70">
              A single, searchable source of truth for all your employee data.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-lg">Availability Tracking</h3>
            <p className="text-sm text-foreground/70">
              Track days off, holidays, sick leave, and shift availability without spreadsheets.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-lg">Team Insights</h3>
            <p className="text-sm text-foreground/70">
              Understand workload, predict shortages, and plan staffing with simple overview dashboards.
            </p>
          </div>
        </div>
      </section>
      {/* CALLOUT */}
      <section className="border-t border-foreground/10 py-20 px-6 bg-foreground/5">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
          <h2 className="text-3xl font-semibold tracking-tight">Built for Fast-Moving Teams</h2>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Otto is designed for companies that value clarity, speed, and operational efficiency. No clutter, no
            complexity—just the tools your organization actually needs.
          </p>

          <div className="flex justify-center pt-4">
            <Link href="/about" className="px-6 py-3 rounded-md bg-foreground text-background text-sm font-medium">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
