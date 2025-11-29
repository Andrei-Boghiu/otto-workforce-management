import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./ignore/drizzle/migrations", // ignore migrations while still in dev
  dialect: "postgresql",
  entities: {
    roles: { provider: "supabase" },
  },
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
