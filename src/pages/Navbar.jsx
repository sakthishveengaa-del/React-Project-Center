import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="SPC">Stackly Project Center</h2>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Menu Links */}
      <ul className={open ? "nav-links open" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        </li>

        <li>
          <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
        </li>

        <li>
          <Link to="/courses" onClick={() => setOpen(false)}>Courses</Link>
        </li>

        <li>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </li>

        <li>
          <Link to="/login-register" onClick={() => setOpen(false)}>Register/Login</Link>
        </li>
      </ul>
    </nav>
  );
}
