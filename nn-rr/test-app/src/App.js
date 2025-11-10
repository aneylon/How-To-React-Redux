import { useState } from "react";
import Ninjas from "./components/Ninjas";
import AddNinja from "./components/AddNinja";

function App() {
  // state = {
  //   ninjas: [
  //     { name: "one", age: 123, belt: "asdf", id: 1 },
  //     { name: "two", age: 321, belt: "fdas", id: 2 },
  //     { name: "one", age: 456, belt: "qwer", id: 3 },
  //   ],
  // };

  const addNinja = (data) => {
    data.id = ninjas[ninjas.length - 1].id + 1;
    setNinjas([...ninjas, data]);
  };

  const deleteNinja = (id) => {
    let filtered = ninjas.filter((ninja) => ninja.id !== id);
    setNinjas(filtered);
  };

  const [ninjas, setNinjas] = useState([
    { name: "one", age: 123, belt: "asdf", id: 1 },
    { name: "two", age: 321, belt: "fdas", id: 2 },
    { name: "three", age: 456, belt: "qwer", id: 3 },
  ]);

  return (
    <div className="App">
      <h1>APP!</h1>
      <p>Let's App it UP!!!</p>
      <Ninjas ninjas={ninjas} deleteNinja={deleteNinja} />
      <AddNinja AddNinja={addNinja} />
    </div>
  );
}

export default App;
