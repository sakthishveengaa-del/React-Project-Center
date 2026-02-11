import { Link } from "react-router-dom";

export default function RegisterMenu() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Register Options</h2>

      <Link to="/project-register">
        <button style={{ margin: "10px", padding: "10px 20px" }}>
          Project Register Form
        </button>
      </Link>

      <Link to="/course-register">
        <button style={{ margin: "10px", padding: "10px 20px" }}>
          Course Register Form
        </button>
      </Link>

      <br />
      <Link to="/">
        <button style={{ marginTop: "20px" }}>Home</button>
      </Link>

      <Link to="/login-register">
        <button style={{ marginTop: "20px" }}>Back</button>
      </Link>
    </div>
  );
}
