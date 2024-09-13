import { useState } from "react";
import { useQuery } from "react-query";

const Todo = ({ todo }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`).then(
      (response) => response.json()
    )
  );

  const handleClick = () => {
    if (!showInfo) {
      setShowInfo(true);
    } else {
      setShowInfo(false);
    }
  };

  return (
    <div>
      <button onClick={() => handleClick()}>{todo.title}</button>
      {showInfo && isLoading && <div>Loading</div>}
      {showInfo && error && <div>{error.message}</div>}
      {showInfo && data && (
        <div>
          <p>{data.title}</p>
        </div>
      )}
    </div>
  );
};

export default Todo;
