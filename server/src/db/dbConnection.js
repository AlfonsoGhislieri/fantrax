import mongoose from "mongoose";
import dotenv from "dotenv/config";

const dbConnection = async () => {
  await mongoose.connect(process.env.MONGO_DB_CONN);
  console.log(`Connected to MongoDB!
  Ready State: ${
    mongoose.connection.readyState === 1 ? "Connected" : "Not Connected"
  }`);
};

export default dbConnection;
