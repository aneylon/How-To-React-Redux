import { Component } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    );
  }
}

export default App;
