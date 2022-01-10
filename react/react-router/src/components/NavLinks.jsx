import { NavLink } from "react-router-dom";

const activeStyle = { color: "green" };

export default function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? "green" : "" })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          style={({ isActive }) => ({ color: isActive ? "green" : "" })}
        >
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile/1"
          style={({ isActive }) => ({ color: isActive ? "green" : "" })}
        >
          Profile_1
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          isActive={(match, location) => {
            console.log(location);
          }}
          style={({ isActive }) => ({ color: isActive ? "green" : "" })}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about?name=test"
          style={({ isActive }) => ({ color: isActive ? "green" : "" })}
        >
          About Test
        </NavLink>
      </li>
    </ul>
  );
}
