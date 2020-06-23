import React from "react";

function InputField(props) {
  const [content, setContent] = React.useState("");

  function handleChange(event) {
    const { value } = event.target;
    setContent(value);
  }

  let handleSubmit = async () => {
    if (content.trim() !== "") {
      try {
        let res = await fetch("/api/todo", {
          method: "POST",
          body: JSON.stringify({ content }),
          headers: { "Content-Type": "application/json" },
        });

        if (res.ok) {
          let data = await res.json();
          if (data.todo_id === -1) throw Error("[FETCH]: Server returned -1");
          else {
            props.onAdd({
              todo_id: data.todo_id,
              content,
              done: false,
              time_of_creation: data.time_of_creation,
            });
            setContent("");
          }
        } else throw Error("[FETCH]: POST request failed");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="row">
      <div className="input-field col s11">
        <input
          type="text"
          name="content"
          onChange={handleChange}
          value={content}
        />
        <label htmlFor="content">Add a todo!</label>
      </div>
      <div className="col s1">
        <button
          onClick={handleSubmit}
          className="btn-floating btn-large waves-effect waves-light red"
        >
          <i className="material-icons">add</i>
        </button>
      </div>
    </form>
  );
}

export default InputField;
