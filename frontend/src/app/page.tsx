"use client";

import { Button } from "@/components/base/atoms/Button";
import { Title } from "@/components/base/atoms/Title";
import { useState, useEffect } from "react";
import React from "react";
import { css } from "styled-system/css";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todos`)
      .then((res) => res.json())
      .then(setTodos)
      .catch((err) => console.error("Failed to fetch todos:", err));
  }, []);

  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <div className={css({ textAlign: "center" })}>
        <Title>Todo</Title>
        <ul>
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={css({
                display: "flex",
              })}
            >
              <input type="checkbox" name="" id="" />
              <li>{todo.title}</li>
              <Button>+</Button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
