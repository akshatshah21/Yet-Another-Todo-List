const router = require("express").Router();
const db = require("../db/db");
router.use(require("cors")());

router.get("/", async (req, res) => {
  console.log("[GET]: /todo : Get all todos");

  let todos = await db.getAllTodos();
  res.json(todos);
});

router.post("/", async (req, res) => {
  const { content } = req.body;

  console.log(`[POST]: /todo : Todo to be added. Content: ${content}`);

  let todo = await db.addTodo(content);
  if (todo === -1) res.json({ todo_id: -1 });
  else res.json(todo);
});

router.put("/", async (req, res) => {
  console.log(req.body);
  const { todo_id } = req.body;

  console.log(`[PUT]: /todo : Todo ID ${todo_id} to be toggled`);

  let ok = await db.toggleTodo(todo_id);
  res.json({ msg: ok ? "OK" : "ERR" });
});

router.delete("/", async (req, res) => {
  const { todo_id } = req.body;

  console.log(`[DELETE]: /todo : Todo ID ${todo_id} to be deleted`);

  let ok = await db.deleteTodo(todo_id);
  res.json({ msg: ok ? "OK" : "ERR" });
});

module.exports = router;
