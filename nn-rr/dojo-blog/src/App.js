import { Blogs } from "./Blogs";
// import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <Home /> */}
        <Blogs />
      </div>
    </div>
  );
}

export default App;
