import { PrivateHeader } from "@/components/private-header";
import { PrivateSidebar } from "@/components/private-sidebar";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <PrivateHeader />

      <div className="flex flex-1">
        <PrivateSidebar />

        <div className="flex-1 p-6 bg-background">{children}</div>
      </div>
    </div>
  );
}
