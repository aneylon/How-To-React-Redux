import { NavLink } from "react-router";

export const NavBar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <a className="brand-logo">Router Example</a>
      </div>
    </nav>
  );
};
