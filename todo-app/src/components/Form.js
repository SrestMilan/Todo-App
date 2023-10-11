import React, { useState } from "react";

function Form({ onAddTask }) {
  const [task, setTask] = useState("");
  function formHandle(e) {
    e.preventDefault();

    setTask("");

    const newTask = {
      task,
    };

    onAddTask(newTask);

    console.log(newTask);
  }
  return (
    <form className="form" onSubmit={formHandle}>
      <div>
        <input
          type="text"
          placeholder="add task"
          value={task}
          onChange={(texts) => setTask(texts.target.value)}
        />
        <button>ADD</button>
      </div>
    </form>
  );
}

export default Form;
