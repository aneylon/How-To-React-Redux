import { useState } from "react";
import { Todos } from "./Todos";
import AddForm from "./AddForm";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "things one" },
    { id: 2, content: "things two" },
    { id: 3, content: "things three" },
  ]);
  const deleteTodo = (id) => {
    console.log({ id });
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const addTodo = (todo) => {
    console.log(todo);
    todo.id = todos[todos.length - 1].id + 1;
    setTodos([...todos, todo]);
  };
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">ToDo!</h1>
      <AddForm addTodo={addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
