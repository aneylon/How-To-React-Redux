export const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => (
      <div
        className="collection-item"
        key={todo.id}
        onClick={() => deleteTodo(todo.id)}
      >
        {todo.content}
      </div>
    ))
  ) : (
    <p className="center">No Todos left to do!</p>
  );
  return <div className="todos collection">{todoList}</div>;
};
