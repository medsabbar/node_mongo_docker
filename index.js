import express from "express";
import dotenv from "dotenv";
import todoRouter from "./routes/todo.js";
import getpersonHandler from "./routes/getperson.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/getperson", getpersonHandler);
app.use("/api/todo", todoRouter);

app.listen(5000, () => console.log("Server running on port 5000"));
