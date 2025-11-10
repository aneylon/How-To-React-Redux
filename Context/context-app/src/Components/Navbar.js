import React, { Component } from "react";
import { ThemeContext } from "../Context/ThemeContext";

class Navbar extends Component {
  // static contextType = ThemeContext;
  render() {
    console.log(this.context);
    // const { isLightTheme, light, dark } = this.context;
    // const theme = isLightTheme ? light : dark;
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
      // <nav style={{ background: theme.ui, color: theme.syntax }}>
      //   <h1>Context App</h1>
      //   <ul>
      //     <li>Home</li>
      //     <li>About</li>
      //     <li>Contact</li>
      //   </ul>
      // </nav>
    );
  }
}

export default Navbar;
