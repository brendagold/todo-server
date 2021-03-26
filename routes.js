const express = require("express");
const routes = express.Router();

const TodoController = require("./controllers/TodoController");

routes.get("/", (req, res) => {
  res.send("Hello from Todo app");
});

routes.post("/addtodo", TodoController.store);
routes.post("/updatetodo/:Id", TodoController.updateTodo)
routes.get("/todos", TodoController.getTodos)
routes.delete("/deletetodo/:Id", TodoController.delete)

module.exports = routes;
