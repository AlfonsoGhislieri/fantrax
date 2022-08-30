import express from "express";
import PlayerModel from "../models/player.model.js";

const routes = express();

routes.get("/test", (req, res) => {
  return res.json({ message: "Hello from server!" });
});

export default routes;
