import routes from "./routes/routes.js";
import express from "express";
import dbConnection from "./db/dbConnection.js";

dbConnection();

const app = express();

app.use(express.json());
app.use("/api", routes);

export default app;
