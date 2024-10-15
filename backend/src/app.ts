import express from "express";
import { todoRoutes } from "./routes/todoRoutes";

const app = express();
app.use(express.json());

app.use("/api/todos", todoRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
