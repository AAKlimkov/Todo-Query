import { useState } from "react";
import { useLazyGetTodoByIdQuery } from "./apiSlice";

const Todo = ({ todo }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [trigger, { data, error, isLoading, isUninitialized }] =
    useLazyGetTodoByIdQuery();
  const handleClick = () => {
    if (!showInfo && isUninitialized) {
      trigger(todo.id);
    }
    setShowInfo(!showInfo);
  };

  return (
    <div>
      <button onClick={() => handleClick()}>{todo.title}</button>
      {showInfo && isLoading && <div>Loading</div>}
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
