import { useState } from "react";
import { Todos } from "./Todos";

function App() {
  const [todos, addTodos] = useState([
    { id: 1, content: "things one" },
    { id: 2, content: "things two" },
    { id: 3, content: "things three" },
  ]);
  const deleteTodo = (id) => {
    console.log({ id });
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    addTodos(updatedTodos);
  };
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">ToDo!</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
