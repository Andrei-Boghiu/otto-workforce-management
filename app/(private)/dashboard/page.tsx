import { createClient } from "@/supabase/server";
import Dashboard from "./components/dashboard";

export default async function Page() {
  const supabase = createClient();
  const response = (await supabase).from("todos").select("*").order("created_at", { ascending: false });

  const data = (await response).data;

  return <Dashboard initialTodos={data || []} />;
}
