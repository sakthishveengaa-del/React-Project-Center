import { Link } from "react-router-dom";

export default function CourseHome() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Course Departments</h2>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        
        <Link to="/courses/eee">
          <button>EEE</button>
        </Link>

        <Link to="/courses/mech">
          <button>MECH</button>
        </Link>

        <Link to="/courses/civil">
          <button>CIVIL</button>
        </Link>

        <Link to="/courses/it">
          <button>IT</button>
        </Link>

        <Link to="/courses/psc">
          <button>PSC</button>
        </Link>

      </div>
    </div>
  );
}
