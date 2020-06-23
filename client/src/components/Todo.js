import React from "react";
import TimeAgo from "timeago-react";

function Todo(props) {
  const [done, toggle] = React.useState(props.done);

  let handleCheck = async (todo_id) => {
    let res = await fetch("/todo", {
      method: "PUT",
      body: JSON.stringify({ todo_id }),
      headers: { "Content-Type": "application/json" },
    });
    let { msg } = await res.json();
    if (msg === "OK") {
      toggle(!done);
    } else {
      console.error("[FETCH]: PUT request failed, could not toggle todo");
    }
  };

  let handleDelete = async (todo_id) => {
    let res = await fetch("/todo", {
      method: "DELETE",
      body: JSON.stringify({ todo_id }),
      headers: { "Content-Type": "application/json" },
    });
    let { msg } = await res.json();
    if (msg === "OK") {
      props.onDeleteTodo(todo_id);
    } else {
      console.error("[FETCH]: DELETE request failed");
    }
  };

  return (
    <li className="collection-item row">
      <div>
        <label className="col s10">
          <input
            type="checkbox"
            checked={done}
            // Note this. This is what makes the checkbox a controlled component. For a checkbox, the value attribute does not matter
            onChange={() => {
              handleCheck(props.todo_id);
            }}
          />
          <span
            className={("flow-text", done ? "grey-text" : "black-text")}
            style={{ textDecoration: done && "line-through" }}
          >
            {props.content}
          </span>
        </label>
        <div className="col s2 right-align">
          <button
            className="btn-flat waves-effect waves-light"
            onClick={() => {
              handleDelete(props.todo_id);
            }}
          >
            <i className="material-icons">close</i>
          </button>
        </div>
      </div>

      <small>
        <TimeAgo datetime={props.time_of_creation} opts={{ minInterval: 60 }} />
      </small>
    </li>
  );
}

export default Todo;
