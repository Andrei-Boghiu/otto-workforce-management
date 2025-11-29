import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function TimeOffRequestsPage() {
  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Time off Requests</h1>

      <Card>
        <CardHeader>
          <CardTitle>Pending Requests</CardTitle>
          <CardDescription>Admins are able to manage pending requests.</CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Requests</CardTitle>
          <CardDescription>Users are able to manage their own requests.</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
