import express from "express";

const routes = express();

routes.get("/test", (req, res) => {
  return res.json({ message: "Hello from server!" });
});

export default routes;
