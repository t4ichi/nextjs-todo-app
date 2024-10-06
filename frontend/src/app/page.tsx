"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/base/atoms/Button";
import React from "react";
import { css } from "../../styled-system/css";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todos`)
      .then((res) => res.json())
      .then(setTodos)
      .catch((err) => console.error("Failed to fetch todos:", err));
  }, []);

  console.log(`todos: ${JSON.stringify(todos)}`);

  return (
    <div>
      <h1>Todos</h1>
      <Button />
      <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        Hello 🐼!
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
