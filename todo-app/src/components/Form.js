import React, { useState } from "react";

function Form({ onAddTask }) {
  const [task, setTask] = useState("");
  function formHandle(e) {
    if (!task)
      return alert("Please enter your input field with valid task description");
    e.preventDefault();
    setTask("");

    const newTask = {
      task,
      id: Date.now(),
      completed: false,
    };

    onAddTask(newTask);

    console.log(newTask);
  }
  return (
    <form onSubmit={formHandle}>
      <div className="form">
        <div className="formHandl inputHandle">
          <input
            type="text"
            placeholder={task}
            value={task}
            onChange={(texts) => setTask(texts.target.value)}
          />
        </div>

        <div>
          <button className="formHandl buttonHandle">ADD</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
