import routes from "./routes/routes.js";
import userRoutes from "./routes/userRoutes.js";
import express from "express";
import dbConnection from "./db/dbConnection.js";

dbConnection();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);
app.use("/api/users", userRoutes);

export default app;
