"use client";

import { useState } from "react";
import axios from "axios";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderIcon } from "lucide-react";
import { Todo } from "@/types";
import { toast } from "sonner";

interface Props {
  onAdd(todo: Todo): void;
}

export default function AddTodoForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const addTodo = async () => {
    if (!title || !content) return;
    setLoading(true);

    try {
      const res = await axios.post("/api/todos", { title, content });
      onAdd(res.data);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error(error);
      toast.error("Error: unexpected error while adding an item!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Add a New Todo</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="new-title">Title</Label>
          <Input id="new-title" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="new-content">Content</Label>
          <Input
            id="new-content"
            placeholder="Enter content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <Button onClick={addTodo} className="w-full" disabled={loading}>
          {loading ? <LoaderIcon className="animate-spin h-4 w-4 mr-2 inline" /> : null}
          Add Todo
        </Button>
      </CardContent>
    </Card>
  );
}
