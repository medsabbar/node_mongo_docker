import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import todoRouter from "./routes/todo.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/todo", todoRouter);
// Connect to DB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB().then(() => {
  app.listen(5000, () => console.log("Server running on port 5000"));
});
