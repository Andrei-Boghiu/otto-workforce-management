"use client";

import { useState } from "react";
import axios from "axios";
import { Todo } from "@/types";
import AddTodoForm from "./add-todo-form";
import TodoList from "./todo-list";
import { toast } from "sonner";

interface Props {
  initialTodos: Todo[];
}

export default function Dashboard({ initialTodos }: Props) {
  const [todos, setTodos] = useState(initialTodos);
  const [deleting, setDeleting] = useState<number | null>(null);
  const [toggling, setToggling] = useState<number | null>(null);

  const addTodo = (todo: Todo) => {
    setTodos((prev) => [todo, ...prev]);
  };

  const toggleDone = async (id: number, done: boolean) => {
    setToggling(id);
    try {
      const res = await axios.put("/api/todos", { id, done: !done });
      setTodos((prev) => prev.map((t) => (t.id === id ? res.data : t)));
    } catch (error) {
      console.error(error);
      toast.error("Error: unexpected error while toggling the item!");
    } finally {
      setToggling(null);
    }
  };

  const deleteTodo = async (id: number) => {
    setDeleting(id);
    try {
      await axios.delete("/api/todos", { data: { id } });
      setTodos((prev) => prev.filter((t) => t.id !== id));
      toast.success("Item deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Error: unexpected error while trying to delete the item!");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">My Todos</h1>

      <AddTodoForm onAdd={addTodo} />

      <TodoList todos={todos} deleting={deleting} toggling={toggling} onToggle={toggleDone} onDelete={deleteTodo} />
    </div>
  );
}
