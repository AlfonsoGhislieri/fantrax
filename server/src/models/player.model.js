import mongoose from "mongoose";

const player = new Mongoose.Schema(
  { name: "string", position: "string", value: "number", owner: "string" },
  { strict: false }
);

export default Mongoose.model("Player", player);
