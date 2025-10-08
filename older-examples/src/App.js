import "./App.css";
import Loading from "./Components/Loading/Loading";
import { Todo } from "./Components/Todo/Todo";
import { checkUIVersion } from "./api/apiUtils";

console.log(checkUIVersion());

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
