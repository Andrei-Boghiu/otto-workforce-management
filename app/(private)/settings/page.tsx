import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">User Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Update your personal info.</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
