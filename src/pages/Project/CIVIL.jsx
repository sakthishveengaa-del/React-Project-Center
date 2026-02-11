import { Link } from "react-router-dom";

export default function CIVIL() {
  return (
    <div className="PTS">
      <h2 className="DH">CIVIL Project Titles</h2>

      <ul className="UL">
        <li className="LI">
          <Link to="/project-register?title=Smart City Waste Management System">
            Smart City Waste Management System
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=Earthquake Resistant Building Model">
            Earthquake Resistant Building Model
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=Rainwater Harvesting System">
            Rainwater Harvesting System
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=Traffic Signal Automation System">
            Traffic Signal Automation System
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=Smart Parking System">
            Smart Parking System
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
