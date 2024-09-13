import { useState } from "react";

const useTodo = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const getTodo = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to load data");
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };
  const deleteTodo = async () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    });
  };

  return { data, loading, error, getTodo, deleteTodo };
};

export default useTodo;
