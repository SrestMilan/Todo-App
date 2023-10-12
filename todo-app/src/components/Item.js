function Item({ listItem, onDeleteTask, onHandleCompletedTask }) {
  return (
    <>
      <div className="taskItem">
        <input
          type="checkbox"
          value={listItem.completed}
          onChange={() => onHandleCompletedTask(listItem.id)}
        />

        <div className="child child-2">
          <span
            style={listItem.completed ? { textDecoration: "line-through" } : {}}
          >
            {listItem.task}
          </span>
        </div>

        <div className="child child-3">
          <button className="delete" onClick={() => onDeleteTask(listItem.id)}>
            ❌
          </button>
        </div>
      </div>
    </>
  );
}

export default Item;
