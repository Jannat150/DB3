require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const TaskItem = require("./models/TaskItem");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
app.get("/tasks", async (req, res) => {
    const tasks = await TaskItem.find();
    res.json(tasks);
});

app.post("/tasks", async (req, res) => {
    const newTask = new TaskItem(req.body);
    await newTask.save();
    res.json(newTask);
});

app.delete("/tasks/:id", async (req, res) => {
    await TaskItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
