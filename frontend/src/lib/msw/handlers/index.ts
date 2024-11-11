import { http, HttpResponse, type RequestHandler } from "msw";

const helloHandler = http.get("https://example.com/hello", () => {
  return HttpResponse.json({
    message: "Hello, world!",
  });
});
export const handlers: RequestHandler[] = [helloHandler];

// import { http, HttpResponse } from "msw";

// export type User = {
//   id: string;
//   email: string;
//   name: string;
// };

// export type LoginRequest = {
//   email: string;
//   password: string;
// };

// export type LoginResponse = {
//   user: User;
//   token: string;
// };

// // モックユーザーデータ
// const mockUsers: User[] = [
//   {
//     id: "1",
//     email: "user@example.com",
//     name: "Test User",
//   },
// ];

// export const authHandlers = [
//   http.post("/api/auth/login", async ({ request }) => {
//     // リクエストボディの取得
//     const { email, password } = (await request.json()) as LoginRequest;

//     // バリデーション
//     if (!email || !password) {
//       return HttpResponse.json(
//         { message: "メールアドレスとパスワードは必須です" },
//         { status: 400 }
//       );
//     }

//     // ユーザー検索
//     const user = mockUsers.find((u) => u.email === email);

//     if (!user) {
//       return HttpResponse.json(
//         { message: "ユーザーが見つかりません" },
//         { status: 401 }
//       );
//     }

//     // 実際のアプリケーションではパスワードのハッシュ比較を行う
//     // ここではデモ用に簡易的な判定
//     if (password !== "password") {
//       return HttpResponse.json(
//         { message: "パスワードが正しくありません" },
//         { status: 401 }
//       );
//     }

//     // 認証成功
//     const response: LoginResponse = {
//       user,
//       token: "mock-jwt-token", // 実際のアプリケーションではJWTトークンを生成
//     };

//     return HttpResponse.json(response, { status: 200 });
//   }),

//   // ユーザー情報取得API
//   http.get("/api/auth/me", ({ request }) => {
//     const authHeader = request.headers.get("Authorization");

//     if (authHeader === "Bearer mock-jwt-token") {
//       return HttpResponse.json(mockUsers[0], { status: 200 });
//     }

//     return new HttpResponse(
//       JSON.stringify({
//         message: "Unauthorized",
//       }),
//       {
//         status: 401,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   }),
// ];
