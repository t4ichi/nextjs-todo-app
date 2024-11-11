// src/types/api.ts
export type User = {
  id: string;
  email: string;
  name: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  user: User;
  token: string;
};

// src/mocks/handlers/auth.ts
import { http, HttpResponse } from "msw";

// モックユーザーデータ
const mockUsers: User[] = [
  {
    id: "1",
    email: "user@example.com",
    name: "Test User",
  },
];

export const authHandlers = [
  http.post("/api/auth/login", async ({ request }) => {
    // リクエストボディの取得
    const { email, password } = (await request.json()) as LoginRequest;

    // 簡易的な認証チェック
    if (email === "user@example.com" && password === "password") {
      const user = mockUsers.find((u) => u.email === email);

      if (user) {
        return HttpResponse.json<LoginResponse>(
          {
            user,
            token: "mock-jwt-token",
          },
          { status: 200 },
        );
      }
    }

    // 認証失敗
    return new HttpResponse(
      JSON.stringify({
        message: "Invalid email or password",
      }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }),

  // ユーザー情報取得API
  http.get("/api/auth/me", ({ request }) => {
    const authHeader = request.headers.get("Authorization");

    if (authHeader === "Bearer mock-jwt-token") {
      return HttpResponse.json(mockUsers[0], { status: 200 });
    }

    return new HttpResponse(
      JSON.stringify({
        message: "Unauthorized",
      }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }),
];
