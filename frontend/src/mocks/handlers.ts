import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("https://example.com/auth/login", async () => {
    return HttpResponse.json({
      token: "mock-jwt-token",
      user: {
        id: 1,
        email: "user@example.com",
        name: "Test User",
      },
    });
  }),

  // EXAMPLE
  // const response = await fetch("https://example.com/auth/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     email: "user@example.com",
  //     password: "password",
  //   }),
  // });

  http.get("https://example.com/hello", () => {
    return HttpResponse.json({
      message: "Hello World",
    });
  }),
];
