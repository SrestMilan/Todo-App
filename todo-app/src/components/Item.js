function Item({ listItem, onDeleteTask, onHandleCompletedTask }) {
  return (
    <div className="taskList">
      <li>
        <div className="items">
          <input
            type="checkbox"
            value={listItem.completed}
            onChange={() => onHandleCompletedTask(listItem.id)}
          />
          <span
            style={listItem.completed ? { textDecoration: "line-through" } : {}}
          >
            {listItem.task}
          </span>

          <button className="delete" onClick={() => onDeleteTask(listItem.id)}>
            ❌
          </button>
        </div>
      </li>
    </div>
  );
}

export default Item;
