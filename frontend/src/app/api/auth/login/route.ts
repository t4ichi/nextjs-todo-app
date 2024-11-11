// src/app/api/auth/login/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // TODO: 実際の認証ロジックを実装
    if (email === "user@example.com" && password === "password") {
      return NextResponse.json({
        status: 200,
        user: {
          id: "1",
          email: email,
        },
        token: "dummy_token",
      });
    }

    return NextResponse.json(
      { message: "認証に失敗しました" },
      { status: 401 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "サーバーエラーが発生しました" },
      { status: 500 },
    );
  }
}
