import { db } from "@/drizzle";
import { todos } from "@/drizzle/schema";
import { eq, and } from "drizzle-orm";

export async function getTodosByUser(userId: string) {
  return db.select().from(todos).where(eq(todos.owner_id, userId));
}

export async function createTodo(userId: string, title: string, content: string) {
  return db.insert(todos).values({ owner_id: userId, title, content }).returning();
}

export async function updateTodo(
  userId: string,
  id: number,
  data: Partial<{ title: string; content: string; done: boolean }>
) {
  return db
    .update(todos)
    .set(data)
    .where(and(eq(todos.id, id), eq(todos.owner_id, userId))) // <-- combine conditions here
    .returning();
}

export async function deleteTodo(userId: string, id: number) {
  return db
    .delete(todos)
    .where(and(eq(todos.id, id), eq(todos.owner_id, userId))) // <-- combine conditions here
    .returning();
}
