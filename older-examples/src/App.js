import "./App.css";
import Loading from "./Components/Loading/Loading";
import CacheBuster from "react-cache-buster";
import packageFile from "../package.json";
import { Todo } from "./Components/Todo/Todo";

function App() {
  const isProduction = process.env.NODE_ENV === "production";
  const version = packageFile.version;
  console.log(isProduction, version);

  return (
    <CacheBuster
      currentVersion={version}
      isEnabled={isProduction}
      isVerboseMode={true}
      loadingComponent={<Loading />}
      metaFileDirectory={"."}
    >
      <div className="App">
        <Todo />
      </div>
    </CacheBuster>
  );
}

export default App;
