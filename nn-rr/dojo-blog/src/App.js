import BlogDetails from "./BlogDetails";
import { Blogs } from "./Blogs";
import Create from "./Create";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./NotFount";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <Home /> */}
          <Switch>
            <Route path="/" exact>
              <Blogs />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="**/**">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
