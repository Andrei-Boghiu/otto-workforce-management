import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function SupportPage() {
  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Customer Support</h1>

      <Card>
        <CardHeader>
          <CardTitle>Help Center</CardTitle>
          <CardDescription>Request help, report bugs, and submit feature requests.</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
