export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col px-6 py-20">
      <div className="max-w-4xl mx-auto flex flex-col gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="text-foreground/70 text-base leading-relaxed">
          Have questions, feedback, or need support? Reach out and we`&apos;`ll get back to you as soon as possible.
        </p>

        <div className="mt-10 flex flex-col gap-6 text-left max-w-xl">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@otto.com" className="underline">
              support@otto.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+1234567890" className="underline">
              +1 (234) 567-890
            </a>
          </p>
          <p>
            <strong>Address:</strong> 123 Workforce St., Suite 100, Cityville, Country
          </p>
        </div>
      </div>
    </main>
  );
}
