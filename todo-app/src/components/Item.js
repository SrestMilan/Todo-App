function Item({ listItem, onDeleteTask }) {
  return (
    <div className="taskList">
      <li>
        <div className="items">
          <span>{listItem.task}</span>
          <button className="delete" onClick={() => onDeleteTask(listItem.id)}>
            ❌
          </button>
        </div>
      </li>
    </div>
  );
}

export default Item;
