import mongoose from "mongoose";

const user = new mongoose.Schema({
  name: "string",
  access_token: "string",
});

export default mongoose.model("User", user);
