import express from "express";
import userModel from "../models/user.model.js";

const routes = express();

routes.post("/authenticate_user", async (req, res) => {
  const result = await userModel.find({ access_token: req.body.access_token });

  if (result.length >= 1) {
    return res.json(result[0]);
  } else {
    return res.status(400).send({ message: "Invalid access token" });
  }
});

export default routes;
