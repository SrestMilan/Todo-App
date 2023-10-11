function Item({ listItem }) {
  return (
    <div className="taskList">
      <li>
        <div className="items">
          <span>{listItem.task}</span>
          <button className="delete">❌</button>
        </div>
      </li>
    </div>
  );
}

export default Item;
