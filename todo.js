// models/todo.js
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: String,
    price: Number,
  });
  
  // models/todo.js
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;


