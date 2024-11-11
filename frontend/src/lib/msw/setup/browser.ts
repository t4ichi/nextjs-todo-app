// import { setupWorker } from "msw/browser";
// import { authHandlers } from "../handlers";

// export const worker = setupWorker(...authHandlers);
import { setupWorker } from "msw/browser";
import { handlers } from "../handlers";

export const worker = setupWorker(...handlers);
