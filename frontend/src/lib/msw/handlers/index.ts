import { http, HttpResponse, type RequestHandler } from "msw";

// 動作確認用API
const helloHandler = http.get("https://example.com/hello", () => {
  return HttpResponse.json({
    message: "Hello, world!!!!",
  });
});

export const handlers: RequestHandler[] = [helloHandler];
