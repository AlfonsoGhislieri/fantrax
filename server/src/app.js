import routes from "./routes/routes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import express from "express";
import dbConnection from "./db/dbConnection.js";

dbConnection();

const app = express();
const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);
app.use("/api/users", userRoutes);

export default app;
