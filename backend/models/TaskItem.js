const mongoose = require("mongoose");

const TaskItemSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

module.exports = mongoose.model("TaskItem", TaskItemSchema);
