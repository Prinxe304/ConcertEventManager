
import { Link, NavLink } from "react-router-dom";
import "./Navi.css";

export default function Navi() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Eventify
        </Link>

        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/find-events" className="nav-link">
              Find Events
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
