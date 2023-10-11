import React from "react";
import Item from "./Item";

function PackingList({ taskList }) {
  return (
    <div>
      {taskList.map((listItem) => (
        <Item listItem={listItem} />
      ))}
    </div>
  );
}

export default PackingList;
