function Item({ listItem }) {
  return (
    <div className="taskList">
      <p>{listItem.task}</p>
    </div>
  );
}

export default Item;
