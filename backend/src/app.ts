import express from "express";
import { todoRoutes } from "./routes/todoRoutes";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);

// Server setup
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
