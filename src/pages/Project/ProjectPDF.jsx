import { useLocation, Link } from "react-router-dom";

export default function ProjectPDF() {
  const location = useLocation();
  const projectTitle = location.state?.projectTitle || "default-project";

  // Mapping project title to PDF file path
  const pdfFiles = {
    "Smart Energy Meter": "../public/pdf/EEE1.pdf",
    "Solar Tracking System": "../public/pdf/EEE2.pdf",
    "Home Automation Using IoT": "../public/pdf/EEE3.pdf",
    "Electric Vehicle Charging System": "../public/pdf/EEE4.pdf",
    "Wireless Power Transmission": "../public/pdf/EEE5.pdf",

    "Automatic Material Handling Robot": "../public/pdf/MECH1.pdf",
    "Hydraulic Lift System": "../public/pdf/MECH2.pdf",
    "Smart Irrigation System": "../public/pdf/MECH3.pdf",
    "Automated Door System": "../public/pdf/MECH4.pdf",
    "Solar Powered Water Pump": "../public/pdf/MECH5.pdf",

    "Smart City Waste Management System": "../public/pdf/CIVIL1.pdf",
    "Earthquake Resistant Building Model": "../public/pdf/CIVIL2.pdf",
    "Rainwater Harvesting System": "../public/pdf/CIVIL3.pdf",
    "Traffic Signal Automation System": "../public/pdf/CIVIL4.pdf",
    "Smart Parking System": "../public/pdf/CIVIL5.pdf",

    "Smart Traffic Control System": "../public/pdf/ECE1.pdf",
    "IoT Based Weather Monitoring System": "../public/pdf/ECE2.pdf",
    "Home Security Alarm System": "../public/pdf/ECE3.pdf",
    "Bluetooth Controlled Robot": "../public/pdf/ECE4.pdf",
    "Smart Attendance System Using RFID": "../public/pdf/ECE5.pdf",

    "Online Examination System": "../public/pdf/CSE1.pdf",
    "Library Management System": "../public/pdf/CSE2.pdf",
    "E-Commerce Website": "../public/pdf/CSE3.pdf",
    "Chat Application Using Socket": "../public/pdf/CSE4.pdf",
    "Student Management System": "../public/pdf/CSE5.pdf",

    "Hospital Management System": "../public/pdf/IT1.pdf",
    "Online Food Ordering System": "../public/pdf/IT2.pdf",
    "Online Banking System": "../public/pdf/IT3.pdf",
    "E-Learning Platform": "../public/pdf/IT4.pdf",
    "Job Portal Website": "../public/pdf/IT5.pdf",
  };

  const pdfPath = pdfFiles[projectTitle] || "/pdf/default.pdf";

  return (
    <div style={{ padding: "20px" }}>
      <h2>{projectTitle} - PDF</h2>

      <iframe
        src={pdfPath}
        width="100%"
        height="600px"
        title={projectTitle}
      ></iframe>

      <div style={{ marginTop: "10px" }}>
        <a href={pdfPath} download>
          <button>Download PDF</button>
        </a>
        <Link to="/projects">
          <button style={{ marginLeft: "10px" }}>Back to Departments</button>
        </Link>
        <Link to="/">
          <button style={{ marginLeft: "10px" }}>Home</button>
        </Link>
      </div>
    </div>
  );
}
