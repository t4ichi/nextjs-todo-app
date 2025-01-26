module.exports = {
  todo: {
    input: {
      target: "docs/open_api/todo.yml",
    },
    output: {
      target: "frontend/src/gen/endpoints/todo.ts",
      mode: "tags-split",
      client: "react-query",
      schemas: "frontend/src/gen/models",
      override: {
        mutator: {
          path: "frontend/src/lib/customFetch.ts",
          name: "customFetch",
        },
      },
    },
  },
  todoZod: {
    input: {
      target: "docs/open_api/todo.yml",
    },
    output: {
      mode: "tags-split",
      client: "zod",
      target: "frontend/src/gen/endpoints/todo.zod.ts",
      fileExtension: ".zod.ts",
    },
  },
};
