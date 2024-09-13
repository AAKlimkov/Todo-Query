import Todo from "./Todo";
import useFetch from "./useFetch";

const Todos = () => {
  const { data, loading, error } = useFetch();

  if (loading) return <div> Loading</div>;
  if (error) return <div> {error}</div>;

  return (
    <div>
      <ul>
        {data.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default Todos;
