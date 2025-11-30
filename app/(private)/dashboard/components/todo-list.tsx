"use client";

import { Todo } from "@/types";
import TodoItem from "./todo-item";

interface Props {
  todos: Todo[];
  deleting: number | null;
  toggling: number | null;
  onToggle(id: number, done: boolean): void;
  onDelete(id: number): void;
}

export default function TodoList({ todos, deleting, toggling, onToggle, onDelete }: Props) {
  if (todos.length === 0) return <p className="text-center text-gray-500">No todos yet.</p>;

  return (
    <div className="space-y-4">
      {todos.map((todo) => {
        const isLoading = deleting === todo.id || toggling === todo.id;

        return <TodoItem key={todo.id} todo={todo} loading={isLoading} onToggle={onToggle} onDelete={onDelete} />;
      })}
    </div>
  );
}
