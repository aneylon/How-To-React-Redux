import { useState } from "react";

export const Todo = () => {
  const [todoItems, addTodo] = useState([]);

  const addNewTodo = (data) => {
    const newTodo = data.get("newTodo");
    if (newTodo !== "" && newTodo !== undefined && newTodo !== null) {
      console.log(newTodo);
      addTodo([...todoItems, newTodo]);
    }
  };
  return (
    <div>
      <h1>Todos :</h1>
      <form action={addNewTodo}>
        <input
          type="text"
          name="newTodo"
          id="newTodo"
          placeholder="new todo item"
        />
        <input type="submit" value="Add new Todo" />
      </form>
      <ul>
        {todoItems.map((item, i) => {
          console.log(item, i);
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
