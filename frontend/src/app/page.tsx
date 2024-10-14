"use client";

import { Title } from "@/components/base/atoms/Title";
import { Todos } from "@/components/domain/todo/molecules/Todos";
import { Todo } from "@/types/api";
import { useState, useEffect } from "react";
import React from "react";
import { css } from "styled-system/css";

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todos`)
      .then((res) => res.json())
      .then((data) => setTodos(data))
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
        <Title>タイトル</Title>
        <Todos todos={todos} />
      </div>
    </div>
  );
};

export default Home;
