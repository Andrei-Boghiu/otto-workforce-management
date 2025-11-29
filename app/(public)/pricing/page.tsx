export default function PricingPage() {
  return (
    <main className="min-h-screen flex flex-col px-6 py-20">
      <div className="max-w-4xl mx-auto flex flex-col gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Pricing Plans</h1>
        <p className="text-foreground/70 text-base leading-relaxed">
          Choose a plan that fits your team size and workflow needs. Otto is designed to scale with your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="p-6 border rounded-lg flex flex-col gap-4">
            <h2 className="font-semibold text-xl">Starter</h2>
            <p className="text-foreground/70 text-sm">Up to 10 employees. Basic tracking and dashboards.</p>
            <p className="text-lg font-bold">$19 / month</p>
          </div>
          <div className="p-6 border rounded-lg flex flex-col gap-4">
            <h2 className="font-semibold text-xl">Pro</h2>
            <p className="text-foreground/70 text-sm">Up to 50 employees. Advanced analytics and team insights.</p>
            <p className="text-lg font-bold">$49 / month</p>
          </div>
          <div className="p-6 border rounded-lg flex flex-col gap-4">
            <h2 className="font-semibold text-xl">Enterprise</h2>
            <p className="text-foreground/70 text-sm">Unlimited employees. Custom integrations and priority support.</p>
            <p className="text-lg font-bold">Contact us</p>
          </div>
        </div>
      </div>
    </main>
  );
}
