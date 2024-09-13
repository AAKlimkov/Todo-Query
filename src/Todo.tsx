import { useState } from "react";
import useTodo from "./useTodo";

const Todo = ({ todo }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { data, loading, error, getTodo, deleteTodo } = useTodo(todo.id);
  const handleClick = () => {
    if (!showInfo) {
      getTodo();
      setShowInfo(true);
    } else {
      setShowInfo(false);
    }
  };
  const handleDelete = () => {
    deleteTodo();
  };
  return (
    <div>
      <button onClick={() => handleClick()}>{todo.title}</button>
      <button onClick={() => handleDelete()}>delete</button>
      {showInfo && loading && <div>Loading</div>}
      {showInfo && error && <div>{error}</div>}
      {showInfo && data && (
        <div>
          <p>{data.title}</p>
        </div>
      )}
    </div>
  );
};

export default Todo;
