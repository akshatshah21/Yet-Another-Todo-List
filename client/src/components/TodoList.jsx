import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  return props.todos.length !== 0 ? (
    <ul className="collection">
      {props.todos.map((todo) => (
        <Todo
          key={todo.todo_id}
          todo_id={todo.todo_id}
          content={todo.content}
          done={todo.done}
          time_of_creation={todo.time_of_creation}
          onDeleteTodo={props.onDeleteTodo}
        />
      ))}
    </ul>
  ) : (
    <div className="container center-align">
      <img className="" src="/assets/relax.png" alt="relax" width="250vh" />
      <h4>You don't have any tasks!</h4>
    </div>
  );
}

export default TodoList;
