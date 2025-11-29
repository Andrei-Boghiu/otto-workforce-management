export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-foreground/70">
        Welcome to your Otto dashboard. Here you can see a summary of your team’s activity, upcoming days off, and key
        metrics about employee availability.
      </p>

      {/* Example metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <div className="p-4 bg-background border border-foreground/10 rounded-md">
          <h2 className="font-semibold text-lg">Employees</h2>
          <p className="text-foreground/70 mt-1">Total employees: 42</p>
        </div>

        <div className="p-4 bg-background border border-foreground/10 rounded-md">
          <h2 className="font-semibold text-lg">Upcoming Days Off</h2>
          <p className="text-foreground/70 mt-1">Next 7 days: 5 days off</p>
        </div>

        <div className="p-4 bg-background border border-foreground/10 rounded-md">
          <h2 className="font-semibold text-lg">Team Availability</h2>
          <p className="text-foreground/70 mt-1">Currently available: 36 employees</p>
        </div>
      </div>
    </div>
  );
}
