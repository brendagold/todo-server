const Todo = require("../models/TodoModel");

module.exports = {
  async store(req, res) {
    try {
      const { title } = req.body;

      if (title == "") {
        return res.status(400).message("please enter a title")
      } else {
        const todo = await Todo.create({
        title,
      });
      const allTodos = await Todo.find({}).sort({ _id: -1 });

      return res.status(201).json(allTodos);
      }

      
    } catch (error) {
      throw Error(`Error while adding Todo : ${error}`);
    }
  },

  async getTodos(req, res) {
    try {
      const todos = await Todo.find({}).sort({ _id: -1 });

      if (todos) {
        return res.status(200).json(todos);
      }
    } catch (error) {
      return res.status(400).json({ message: "We do not have any todos yet" });
    }
  },

  async updateTodo(req, res) {
    const { Id } = req.params;

    try {
      const { completed } = req.body;
      const todoUpdate = await Todo.findById(Id);

      todoUpdate.completed = !todoUpdate.completed;

      await todoUpdate.save();

      const allTodos = await Todo.find({}).sort({ _id: -1 });

      return res.status(201).json(allTodos);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async delete(req, res) {
    const { Id } = req.params;
    try {
      const todoDelete = await Todo.findByIdAndDelete(Id);


      const allTodos = await Todo.find({}).sort({ _id: -1 });

      return res.status(204).json(allTodos);
      //return res.status(204).send();
    } catch (error) {
      return res.status(400).json({
        message: "Todo does not exist!",
      });
    }
  },
};
