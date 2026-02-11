import { Link } from "react-router-dom";

export default function EEE() {
  return (
    <div className="PTS">
      <h2 className="DH">EEE Project Titles</h2>

      <ul className="UL">
        <li className="LI">
          <Link to="/project-register?title=Smart Energy Meter">
            Smart Energy Meter
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=Solar Tracking System">
            Solar Tracking System
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=Home Automation Using IoT">
            Home Automation Using IoT
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=Electric Vehicle Charging System">
            Electric Vehicle Charging System
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=Wireless Power Transmission">
            Wireless Power Transmission
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
