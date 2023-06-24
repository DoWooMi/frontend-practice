import { NavLink, useLocation } from "react-router-dom";

export default function NavLinks() {
  const activeStyle = { color: "red" };
  const location = useLocation();

  return (
    <ul>
      <li>
        <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : {})}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          end
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile/1"
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          Profile/1
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          style={location.pathname === "/about" ? activeStyle : {}}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about?name=woom"
          style={location.search === "?name=woom" ? activeStyle : {}}
        >
          About?name=woom
        </NavLink>
      </li>
    </ul>
  );
}
