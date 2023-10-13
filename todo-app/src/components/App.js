import React, { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import PackingList from "./PackingList";
export default function App() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    localStorage.setItem("taskItem", JSON.stringify(taskList));
  }, [taskList]);

  // adding task
  function addTask(task) {
    setTaskList((taskList) => [...taskList, task]);
  }

  // deleting task
  function handleDeleteTask(id) {
    setTaskList((taskList) => taskList.filter((task) => task.id !== id));
  }

  // handling completing task
  function handleCompletedItems(id) {
    setTaskList((taskList) =>
      taskList.map((taskCompleted) =>
        taskCompleted.id === id
          ? { ...taskCompleted, completed: !taskCompleted.completed }
          : taskCompleted
      )
    );
  }
  return (
    <>
      <Header />
      <Form onAddTask={addTask} />
      <PackingList
        taskList={taskList}
        onDeleteTask={handleDeleteTask}
        onHandleCompletedTask={handleCompletedItems}
      />
    </>
  );
}
