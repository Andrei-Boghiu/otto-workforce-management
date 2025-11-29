import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ReportsPage() {
  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Reports & Analytics</h1>

      <Card>
        <CardHeader>
          <CardTitle>Workforce History</CardTitle>
          <CardDescription>See some data in regards with something.</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
