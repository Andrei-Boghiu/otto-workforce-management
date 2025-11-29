export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col px-6 py-20">
      <div className="max-w-4xl mx-auto flex flex-col gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">About Otto</h1>
        <p className="text-foreground/70 text-base leading-relaxed">
          Otto is a workforce management tool built to simplify team operations. Our mission is to help companies keep
          track of employees, manage availability, and make data-driven staffing decisions effortlessly.
        </p>

        <div className="mt-10 flex flex-col gap-6 text-left">
          <h2 className="font-semibold text-xl">Our Vision</h2>
          <p className="text-foreground/70 text-sm">
            To be the most intuitive and reliable workforce management platform for businesses of all sizes.
          </p>

          <h2 className="font-semibold text-xl">Our Team</h2>
          <p className="text-foreground/70 text-sm">
            A small team of experienced developers and business specialists dedicated to building a product that
            simplifies workforce management.
          </p>
        </div>
      </div>
    </main>
  );
}
