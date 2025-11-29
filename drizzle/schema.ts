import { pgTable, serial, text, varchar, boolean, timestamp } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }),
  content: text("content"),
  done: boolean("done").default(false),
  owner_id: varchar("owner_id", { length: 36 }), // Supabase user ID
  created_at: timestamp("created_at").defaultNow(),
});
