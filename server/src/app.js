import routes from "./routes/routes.js";
import express from "express";

const app = express();

app.use(express.json());
app.use("/api", routes);

export default app;
