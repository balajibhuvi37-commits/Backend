import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active" : "inactive"
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/courses"
        className={({ isActive }) =>
          isActive ? "active" : "inactive"
        }
      >
        Courses
      </NavLink>

      <NavLink
        to="/assignments"
        className={({ isActive }) =>
          isActive ? "active" : "inactive"
        }
      >
        Assignments
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? "active" : "inactive"
        }
      >
        Profile
      </NavLink>
    </nav>
  );
};

export default Navbar;