import { Link } from "react-router-dom";

export default function MECH() {
  return (
    <div className="PTS">
      <h2>MECH Project Titles</h2>

      <ul className="UL">
        <li className="LI">
          <Link to="/project-register?title=Automatic Material Handling Robot">
            Automatic Material Handling Robot
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=Hydraulic Lift System">
            Hydraulic Lift System
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=Smart Irrigation System">
            Smart Irrigation System
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=Automated Door System">
            Automated Door System
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=Solar Powered Water Pump">
            Solar Powered Water Pump
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
