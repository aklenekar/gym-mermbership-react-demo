import {
  Form,
  NavLink,
  useLoaderData,
} from "react-router-dom";
import "./Navbar.css";
import Logo from "../ui/Logo";

const guestNavBar = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Features",
    link: "/features",
  },
  {
    name: "Pricing",
    link: "/price",
  },
  {
    name: "Trainers",
    link: "/trainers",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const userNavBar = [
  {
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    name: "Classes",
    link: "/classes",
  },
  {
    name: "My Workouts",
    link: "/workouts",
  },
  {
    name: "Progress",
    link: "/progress",
  },
];

export default function Navbar() {
  const token = useLoaderData();

  const navBar = token ? userNavBar : guestNavBar;

  const ctas = token ? (
    <>
      <NavLink to="/profile" className="btn-secondary">
        Profile
      </NavLink>
      <Form action="/logout" method="post" className="inline-form">
        <button className="btn-primary">Logout</button>
      </Form>
    </>
  ) : (
    <>
      <NavLink to="/auth" className="btn-secondary">
        Login
      </NavLink>
      <NavLink to="/signup" className="btn-primary">
        Join Now
      </NavLink>
    </>
  );

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Logo />
        <ul className="menu">
          {navBar.map((item) => {
            return (
              <li key={item.name}>
                <NavLink to={item.link} className="link">
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="cta">{ctas}</div>
      </div>
    </nav>
  );
}
