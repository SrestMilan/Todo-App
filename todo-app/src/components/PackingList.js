import React from "react";
import Item from "./Item";

function PackingList({ taskList, onDeleteTask, onHandleCompletedTask }) {
  return (
    <div>
      {taskList.map((listItem) => (
        <Item
          listItem={listItem}
          onDeleteTask={onDeleteTask}
          onHandleCompletedTask={onHandleCompletedTask}
        />
      ))}
    </div>
  );
}

export default PackingList;
