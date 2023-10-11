import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import PackingList from "./PackingList";
export default function App() {
  const [taskList, setTaskList] = useState([]);

  function addTask(task) {
    setTaskList((taskData) => [...taskList, task]);
  }

  return (
    <>
      <Header />
      <Form onAddTask={addTask} />
      <PackingList taskList={taskList} />
    </>
  );
}
