import mongoose from "mongoose";

const player = new mongoose.Schema({
  name: "string",
  position: "string",
  value: "number",
  owner: "string",
});

export default mongoose.model("Player", player);
