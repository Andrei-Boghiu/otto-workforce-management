"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderIcon } from "lucide-react";

interface Todo {
  id: number;
  title: string;
  content: string;
  done: boolean;
}

export default function DashboardPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/todos");
      setTodos(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async () => {
    await axios.post("/api/todos", { title: newTitle, content: newContent });
    setNewTitle("");
    setNewContent("");
    fetchTodos();
  };

  const toggleDone = async (id: number, done: boolean) => {
    await axios.put("/api/todos", { id, done: !done });
    fetchTodos();
  };

  const deleteTodo = async (id: number) => {
    await axios.delete("/api/todos", { data: { id } });
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">My Todos</h1>

      {/* Add Todo Form */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Add a New Todo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="new-title">Title</Label>
            <Input
              id="new-title"
              placeholder="Enter title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="new-content">Content</Label>
            <Input
              id="new-content"
              placeholder="Enter content"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
            />
          </div>

          <Button onClick={addTodo} className="w-full">
            Add Todo
          </Button>
        </CardContent>
      </Card>

      {/* Todo List */}
      <div className="space-y-4">
        {loading ? (
          <LoaderIcon scale={69} />
        ) : (
          todos.map((todo) => (
            <Card key={todo.id} className="flex items-center justify-between p-4">
              <div>
                <span className={todo.done ? "line-through text-gray-400 font-medium" : "font-medium"}>
                  {todo.title}
                </span>
                <p className="text-sm text-gray-600">{todo.content}</p>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => toggleDone(todo.id, todo.done)}>
                  {todo.done ? "Undo" : "Done"}
                </Button>
                <Button size="sm" variant="destructive" onClick={() => deleteTodo(todo.id)}>
                  Delete
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
