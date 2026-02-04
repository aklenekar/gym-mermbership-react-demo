import { NavLink } from "react-router-dom";

export default function NavigationLink({ routeTo, name }) {
  return (
    <li>
      <NavLink to={routeTo} className="link">
        {name}
      </NavLink>
    </li>
  );
}
