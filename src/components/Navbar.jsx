import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <h1 className="logo">Shriyanka Reddy</h1>

        <nav className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;