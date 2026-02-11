import { useParams, Link } from "react-router-dom";

export default function ProjectList() {
  const { dept } = useParams(); // Get dept from URL

  // All projects by department
  const projects = {
    eee: [
      "Smart Energy Meter",
      "Solar Tracking System",
      "Home Automation Using IoT",
      "Electric Vehicle Charging System",
      "Wireless Power Transmission",
    ],
    mech: [
      "Automatic Material Handling Robot",
      "Hydraulic Lift System",
      "Smart Irrigation System",
      "Automated Door System",
      "Solar Powered Water Pump",
    ],
    civil: [
      "Smart City Waste Management System",
      "Earthquake Resistant Building Model",
      "Rainwater Harvesting System",
      "Traffic Signal Automation System",
      "Smart Parking System",
    ],
    ece: [
      "Smart Traffic Control System",
      "IoT Based Weather Monitoring System",
      "Home Security Alarm System",
      "Bluetooth Controlled Robot",
      "Smart Attendance System Using RFID",
    ],
    cse: [
      "Online Examination System",
      "Library Management System",
      "E-Commerce Website",
      "Chat Application Using Socket",
      "Student Management System",
    ],
    it: [
      "Hospital Management System",
      "Online Food Ordering System",
      "Online Banking System",
      "E-Learning Platform",
      "Job Portal Website",
    ],
  };

  // Get projects of this department
  const deptProjects = projects[dept] || [];

  return (
    <div style={{ padding: "20px" }}>
      <h2>
        {dept ? dept.toUpperCase() : "Department"} Project Titles
      </h2>

      <ul>
        {deptProjects.map((title, index) => (
          <li key={index}>
            <Link to={`/project-register?title=${encodeURIComponent(title)}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/projects">
        <button>Back to Departments</button>
      </Link>
    </div>
  );
}
