import { Link } from "react-router-dom";

export default function LoginRegister() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Login / Register</h2>

      <Link to="/login">
        <button style={{ margin: "10px", padding: "10px 20px" }}>Login</button>
      </Link>

      <Link to="/register-menu">
        <button style={{ margin: "10px", padding: "10px 20px" }}>Register</button>
      </Link>

      <br />

      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
