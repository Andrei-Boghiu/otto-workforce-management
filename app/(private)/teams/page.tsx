import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function TeamsPage() {
  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Manage Teams & Roles</h1>

      <Card>
        <CardHeader>
          <CardTitle>Manage & Oversee</CardTitle>
          <CardDescription>
            Admins are able to manage teams while users are able to see info about teams and employees.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
