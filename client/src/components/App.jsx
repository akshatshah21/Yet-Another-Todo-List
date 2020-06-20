import React from "react";
import TodoList from "./TodoList";
import InputField from "./InputField";

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5000/todo").then((res) => {
      res.json().then((data) => {
        console.log(data);
        setTodos(data);
      });
    });
  }, []);

  function addTodo(todo) {
    setTodos((prev) => [todo, ...prev]);
  }

  function deleteTodo(todo_id) {
    setTodos((prev) => prev.filter((todo) => todo.todo_id !== todo_id));
  }

  return (
    <div className="container">
      <h1 className="center-align">Hello Akshat!</h1>
      <h6 className="center-align">Here are your tasks</h6>
      <InputField onAdd={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
