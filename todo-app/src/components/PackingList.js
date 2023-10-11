import React from "react";
import Item from "./Item";

function PackingList({ taskList, onDeleteTask }) {
  return (
    <div>
      {taskList.map((listItem) => (
        <Item listItem={listItem} onDeleteTask={onDeleteTask} />
      ))}
    </div>
  );
}

export default PackingList;
