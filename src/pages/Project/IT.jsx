import { Link } from "react-router-dom";

export default function IT() {
  return (
    <div className="PTS">
      <h2 className="DH">IT Project Titles</h2>

      <ul className="UL">
        <li className="LI">
          <Link to="/project-register?title=Hospital Management System">
            Hospital Management System
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=Online Food Ordering System">
            Online Food Ordering System
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=Online Banking System">
            Online Banking System
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=E-Learning Platform">
            E-Learning Platform
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=Job Portal Website">
            Job Portal Website
          </Link>
        </li>
      </ul>
      <Link to="/projects">
        <button>Back</button>
      </Link>

      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
