import "./App.css";
import Loading from "./Components/Loading/Loading";
import { Todo } from "./Components/Todo/Todo";
import { checkUIVersion, isCurrentUiVersion } from "./api/apiUtils";

console.log("app.js", checkUIVersion());
console.log("app.js", isCurrentUiVersion());

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
