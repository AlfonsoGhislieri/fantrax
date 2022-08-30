import express from "express";
import playerModel from "../models/player.model.js";

const routes = express();

routes.get("/test", async (req, res) => {
  return res.json({ message: "Hello from server!" });
});

routes.post("/addPlayer", async (req, res) => {
  const data = req.body;
  const name = data.name;
  const position = data.position;
  const value = parseInt(data.value);
  const owner = data.owner;

  const test = new playerModel({
    name: name,
    position: position,
    value: value,
    owner: owner,
  });

  res.json(test);
});
export default routes;
