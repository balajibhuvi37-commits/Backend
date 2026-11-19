
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/">
        🪔 Diwali Memories
      </NavLink>

      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
