import { Link } from "react-router-dom";

export default function CSE() {
  return (
    <div className="PTS">
      <h2 className="DH">CSE Project Titles</h2>

      <ul className="UL">
        <li className="LI">
          <Link to="/project-register?title=Online Examination System">
            Online Examination System
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=Library Management System">
            Library Management System
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=E-Commerce Website">
            E-Commerce Website
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=Chat Application Using Socket">
            Chat Application Using Socket
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=Student Management System">
            Student Management System
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
