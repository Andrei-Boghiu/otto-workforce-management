export default function AvailabilityPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Availability</h1>
      <p className="text-foreground/70">
        Manage your team’s availability, view upcoming days off, and plan shifts efficiently.
      </p>

      {/* Example availability table */}
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-left border border-foreground/10 rounded-md">
          <thead className="bg-foreground/5">
            <tr>
              <th className="px-4 py-2">Employee</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Upcoming Days Off</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-foreground/10">
              <td className="px-4 py-2">Alice Johnson</td>
              <td className="px-4 py-2">Available</td>
              <td className="px-4 py-2">Mar 3 - Mar 5</td>
            </tr>
            <tr className="border-t border-foreground/10">
              <td className="px-4 py-2">Bob Smith</td>
              <td className="px-4 py-2">Unavailable</td>
              <td className="px-4 py-2">Mar 1 - Mar 2</td>
            </tr>
            <tr className="border-t border-foreground/10">
              <td className="px-4 py-2">Charlie Lee</td>
              <td className="px-4 py-2">Available</td>
              <td className="px-4 py-2">No upcoming days off</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
