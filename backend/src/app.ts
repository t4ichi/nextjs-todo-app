import express from "express";
import cors from "cors";
import { todoRoutes } from "./routes/todoRoutes";

const app = express();

app.use(cors());
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
