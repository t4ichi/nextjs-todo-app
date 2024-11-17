import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import request from "supertest";
import express from "express";

// Prismaのモックを最初に設定
vi.mock("@prisma/client", () => {
  const mockPrisma = {
    todo: {
      findMany: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      findUnique: vi.fn(),
    },
  };
  return { PrismaClient: vi.fn(() => mockPrisma) };
});

// モックを設定した後でPrismaClientとコントローラーをインポート
import { PrismaClient } from "@prisma/client";
import { todoRoutes } from "../src/routes/todoRoutes";

const prisma = new PrismaClient();

// Expressアプリケーションのセットアップ
const app = express();
app.use(express.json());
app.use("/api/todos", todoRoutes);

describe("TODOのAPIテスト", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("GET /api/todos", () => {
    it("全てのTODOを取得できること", async () => {
      const mockTodos = [
        { id: 1, title: "テストTODO 1", completed: false },
        { id: 2, title: "テストTODO 2", completed: true },
      ];

      // @ts-ignore
      prisma.todo.findMany.mockResolvedValue(mockTodos);

      const response = await request(app).get("/api/todos");

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockTodos);
      // @ts-ignore
      expect(prisma.todo.findMany).toHaveBeenCalled();
    });

    it("データベースエラーが発生した場合、500エラーを返すこと", async () => {
      // @ts-ignore
      prisma.todo.findMany.mockRejectedValue(new Error("データベースエラー"));

      const response = await request(app).get("/api/todos");

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: "Failed to fetch todos" });
    });
  });

  describe("POST /api/todos", () => {
    it("新しいTODOを作成できること", async () => {
      const newTodo = {
        title: "新しいTODO",
      };

      const createdTodo = {
        id: 1,
        title: "新しいTODO",
        completed: false,
      };

      // @ts-ignore
      prisma.todo.create.mockResolvedValue(createdTodo);

      const response = await request(app).post("/api/todos").send(newTodo);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(createdTodo);
      // @ts-ignore
      expect(prisma.todo.create).toHaveBeenCalledWith({
        data: {
          title: newTodo.title,
          completed: false,
        },
      });
    });

    it("タイトルが未入力の場合、400エラーを返すこと", async () => {
      const response = await request(app)
        .post("/api/todos")
        .send({ completed: false });

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ error: "Title is required" });
    });

    it("データベースエラーが発生した場合、500エラーを返すこと", async () => {
      // @ts-ignore
      prisma.todo.create.mockRejectedValue(new Error("データベースエラー"));

      const response = await request(app)
        .post("/api/todos")
        .send({ title: "テストTODO" });

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: "Failed to create todo" });
    });
  });

  describe("PUT /api/todos/:id", () => {
    it("TODOを更新できること", async () => {
      const updatedTodo = {
        id: 1,
        title: "更新後のTODO",
        completed: true,
      };

      // @ts-ignore
      prisma.todo.update.mockResolvedValue(updatedTodo);

      const response = await request(app)
        .put("/api/todos/1")
        .send({ title: "更新後のTODO", completed: true });

      expect(response.status).toBe(200);
      expect(response.body).toEqual(updatedTodo);
      // @ts-ignore
      expect(prisma.todo.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: {
          title: "更新後のTODO",
          completed: true,
        },
      });
    });

    it("更新データが未入力の場合、400エラーを返すこと", async () => {
      const response = await request(app).put("/api/todos/1").send({});

      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        error: "Title or completed status is required",
      });
    });

    it("データベースエラーが発生した場合、500エラーを返すこと", async () => {
      // @ts-ignore
      prisma.todo.update.mockRejectedValue(new Error("データベースエラー"));

      const response = await request(app)
        .put("/api/todos/1")
        .send({ title: "更新後のTODO" });

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: "Failed to update todo" });
    });
  });

  describe("PUT /api/todos/delete/:id", () => {
    it("TODOを論理削除できること", async () => {
      const targetTodo = {
        id: 1,
        title: "テストTODO",
        completed: false,
        deletedAt: null,
      };

      // @ts-ignore
      prisma.todo.findUnique.mockResolvedValue(targetTodo);

      // @ts-ignore
      prisma.todo.update.mockResolvedValue({
        ...targetTodo,
        deletedAt: new Date(),
      });

      const response = await request(app).put("/api/todos/delete/1");

      expect(response.status).toBe(204);
      // @ts-ignore
      expect(prisma.todo.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      // @ts-ignore
      expect(prisma.todo.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: {
          deletedAt: expect.any(Date),
        },
      });
    });

    it("存在しないTODOの削除を試みた場合、404エラーを返すこと", async () => {
      // @ts-ignore
      prisma.todo.findUnique.mockResolvedValue(null);

      const response = await request(app).put("/api/todos/delete/999");

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: "Todo not found" });
    });

    it("既に削除済みのTODOを削除しようとした場合、400エラーを返すこと", async () => {
      const deletedTodo = {
        id: 1,
        title: "テストTODO",
        completed: false,
        deletedAt: new Date(),
      };

      // @ts-ignore
      prisma.todo.findUnique.mockResolvedValue(deletedTodo);

      const response = await request(app).put("/api/todos/delete/1");

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ error: "Todo is already deleted" });
    });

    it("データベースエラーが発生した場合、500エラーを返すこと", async () => {
      // @ts-ignore
      prisma.todo.findUnique.mockRejectedValue(new Error("データベースエラー"));

      const response = await request(app).put("/api/todos/delete/1");

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: "Failed to delete todo" });
    });
  });
});
