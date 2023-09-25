import { Router } from "express";
import Todo from "../models/todo.js";

const todoRouter = Router();

// @route   GET api/todo
// @desc    Get all todos
// @access  Public
todoRouter.get("/", async (req, res) => {
  const todos = await Todo.find({});
  res.json(todos);
});

// @route   POST api/todo
// @desc    Add new todo
// @access  Public
todoRouter.post("/", async (req, res) => {
  const { title } = req.body;
  const todo = await Todo.create({
    title,
  });
  res.json(todo);
});

// @route   PUT api/todo/:id
// @desc    Update todo
// @access  Public
todoRouter.put("/:id", async (req, res) => {
  const { title, completed } = req.body;
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    {
      title,
      completed,
    },
    {
      new: true,
    }
  );
  res.json(todo);
});

// @route   DELETE api/todo/:id
// @desc    Delete todo
// @access  Public
todoRouter.delete("/:id", async (req, res) => {
  await Todo.findByIdAndRemove(req.params.id);
  res.json({ msg: "Todo removed" });
});

export default todoRouter;
