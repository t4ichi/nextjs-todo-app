// import { setupServer } from "msw/node";
// import { authHandlers } from "../handlers";

// // 認証用ハンドラーをサーバーに設定
// export const server = setupServer(...authHandlers);

import { setupServer } from "msw/node";
import { handlers } from "../handlers";

export const server = setupServer(...handlers);
