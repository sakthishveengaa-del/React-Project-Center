import { Link } from "react-router-dom";

export default function ECE() {
  return (
    <div className="PTS">
      <h2 className="DH">ECE Project Titles</h2>

      <ul className="UL">
        <li className="LI">
          <Link to="/project-register?title=Smart Traffic Control System">
            Smart Traffic Control System
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=IoT Based Weather Monitoring System">
            IoT Based Weather Monitoring System
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=Home Security Alarm System">
            Home Security Alarm System
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=Bluetooth Controlled Robot">
            Bluetooth Controlled Robot
          </Link>
        </li>

        <li className="LI">
          <Link to="/project-register?title=Smart Attendance System Using RFID">
            Smart Attendance System Using RFID
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
