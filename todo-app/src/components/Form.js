import React, { useState } from "react";

function Form() {
  const [task, setTask] = useState("");
  function formHandle(e) {
    e.preventDefault();

    setTask("");
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
