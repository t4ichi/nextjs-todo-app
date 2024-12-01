module.exports = {
  todo: {
    output: {
      target: "frontend/src/app/api/fetchTodos.ts",
      override: {
        mutator: {
          path: "frontend/src/lib/customFetch.ts",
          name: "customFetch"
        }
      }
    },
    input: "docs/open_api/todo.yml"
  }
}