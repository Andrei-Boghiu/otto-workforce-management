"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Todo } from "@/types";

interface Props {
  todo: Todo;
  loading: boolean;
  onToggle(id: number, done: boolean): void;
  onDelete(id: number): void;
}

export default function TodoItem({ todo, loading, onToggle, onDelete }: Props) {
  return (
    <Card className="flex items-center justify-between p-4">
      <div>
        <span className={todo.done ? "line-through text-gray-400 font-medium" : "font-medium"}>{todo.title}</span>
        <p className="text-sm text-gray-600">{todo.content}</p>
      </div>

      <div className="flex gap-2">
        <Button size="sm" variant="outline" onClick={() => onToggle(todo.id, todo.done)} disabled={loading}>
          {loading ? "Loading" : todo.done ? "Undo" : "Done"}
        </Button>

        <Button size="sm" variant="destructive" onClick={() => onDelete(todo.id)} disabled={loading}>
          {loading ? "Deleting" : "Delete"}
        </Button>
      </div>
    </Card>
  );
}
