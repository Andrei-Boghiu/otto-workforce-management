export default function GlobalLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/50 z-50">
      <div className="w-12 h-12 border-4 border-foreground/20 border-t-foreground rounded-full animate-spin"></div>
    </div>
  );
}
