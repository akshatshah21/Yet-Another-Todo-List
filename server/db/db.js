const pool = require("./pool");

module.exports = {
  addTodo: async (todo) => {
    let query =
      "INSERT INTO todo (content, done) VALUES ($1, false) RETURNING todo_id, time_of_creation;";
    let params = [todo];
    try {
      let { rows } = await pool.query(query, params);
      return rows[0];
    } catch (err) {
      console.error("[ERR]: IN db.js addTodo()", err);
      return -1;
    }
  },
  getAllTodos: async () => {
    let query = "SELECT * FROM todo ORDER BY time_of_creation DESC;";
    try {
      let { rows } = await pool.query(query);
      return rows;
    } catch (err) {
      console.error("[ERR]: IN db.js getAllTodos()", err);
    }
  },
  toggleTodo: async (todo_id) => {
    let query = "UPDATE todo SET done = NOT done WHERE todo_id=$1;";
    let params = [todo_id];
    try {
      let { rows } = await pool.query(query, params);
      return true;
    } catch (err) {
      console.error("[ERR]: IN db.js toggleTodo()", err);
      return false;
    }
  },
  deleteTodo: async (todo_id) => {
    let query = "DELETE FROM todo WHERE todo_id=$1;";
    let params = [todo_id];
    try {
      let { rows } = await pool.query(query, params);
      return true;
    } catch (err) {
      console.error("[ERR]: IN db.js deleteTodo()", err);
      return false;
    }
  },
};
