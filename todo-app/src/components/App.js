import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import PackingList from "./PackingList";
export default function App() {
  const [taskList, setTaskList] = useState([]);

  // adding task
  function addTask(task) {
    setTaskList((taskList) => [...taskList, task]);
  }

  // deleting task
  function handleDeleteTask(id) {
    setTaskList((taskList) => taskList.filter((task) => task.id !== id));
  }

  // handling completing task
  function handleCompletedTask(id){
    setTaskList((taskList)=>taskList.map((taskPack)=>taskPack.id===id?{...taskPack,

  return (
    <>
      <Header />
      <Form onAddTask={addTask} />
      <PackingList taskList={taskList} onDeleteTask={handleDeleteTask} />
    </>
  );
}
