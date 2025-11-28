"use client";

import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export default function EmployeesPage() {
  const [notes, setNotes] = useState<string[] | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("notes").select();
      setNotes(data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Employees Page</h1>
      <div>
        <pre>{JSON.stringify(notes, null, 2)}</pre>;
      </div>
    </div>
  );
}
