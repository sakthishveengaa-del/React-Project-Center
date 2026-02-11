import { Link } from "react-router-dom";

export default function ProjectHome() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Project Titles Departments</h2>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        
        <Link to="/projects/eee">
          <button>EEE</button>
        </Link>

        <Link to="/projects/mech">
          <button>MECH</button>
        </Link>

        <Link to="/projects/civil">
          <button>CIVIL</button>
        </Link>

        <Link to="/projects/ece">
          <button>ECE</button>
        </Link>

        <Link to="/projects/cse">
          <button>CSE</button>
        </Link>

        <Link to="/projects/it">
          <button>IT</button>
        </Link>

      </div>
    </div>
  );
}
