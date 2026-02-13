import { useLocation, Link } from "react-router-dom";

export default function ProjectPDF() {
  const location = useLocation();

  // ✅ Get project title from Register Page
  const registrationData = location.state?.registrationData;
  const projectTitle = registrationData?.projectTitle || "default-project";

  // ✅ Correct PDF Mapping
  const pdfFiles = {
    "Smart Energy Meter": "/pdf/EEE1.pdf",
    "Solar Tracking System": "/pdf/EEE2.pdf",
    "Home Automation Using IoT": "/pdf/EEE3.pdf",
    "Electric Vehicle Charging System": "/pdf/EEE4.pdf",
    "Wireless Power Transmission": "/pdf/EEE5.pdf",

    "Automatic Material Handling Robot": "/pdf/Mech1.pdf",
    "Hydraulic Lift System": "/pdf/Mech2.pdf",
    "Smart Irrigation System": "/pdf/Mech3.pdf",
    "Automated Door System": "/pdf/Mech4.pdf",
    "Solar Powered Water Pump": "/pdf/Mech5.pdf",

    "Smart City Waste Management System": "/pdf/Civil1.pdf",
    "Earthquake Resistant Building Model": "/pdf/CIVIL2.pdf",
    "Rainwater Harvesting System": "/pdf/CIVIL3.pdf",
    "Traffic Signal Automation System": "/pdf/CIVIL4.pdf",
    "Smart Parking System": "/pdf/Civil5.pdf",

    "Smart Traffic Control System": "/pdf/ECE1.pdf",
    "IoT Based Weather Monitoring System": "/pdf/ECE2.pdf",
    "Home Security Alarm System": "/pdf/ECE3.pdf",
    "Bluetooth Controlled Robot": "/pdf/ECE4.pdf",
    "Smart Attendance System Using RFID": "/pdf/ECE5.pdf",

    "Online Examination System": "/pdf/CSE1.pdf",
    "Library Management System": "/pdf/CSE2.pdf",
    "E-Commerce Website": "/pdf/CSE3.pdf",
    "Chat Application Using Socket": "/pdf/CSE4.pdf",
    "Student Management System": "/pdf/CSE5.pdf",

    "Hospital Management System": "/pdf/IT1.pdf",
    "Online Food Ordering System": "/pdf/IT2.pdf",
    "Online Banking System": "/pdf/IT3.pdf",
    "E-Learning Platform": "/pdf/IT4.pdf",
    "Job Portal Website": "/pdf/IT5.pdf",
  };

  const pdfPath = pdfFiles[projectTitle] || "/pdf/default.pdf";

  return (
    <div style={{ padding: "20px" }}>
      <h2>{projectTitle} - PDF</h2>

      {/* Student Details */}
      {registrationData && (
        <div style={{ background: "#f2f2f2", padding: "10px", marginBottom: "10px" }}>
          <p className='P'><b>Name:</b> {registrationData.name}</p>
          <p className='P'><b>Department:</b> {registrationData.department}</p>
          <p className='P'><b>Project Type:</b> {registrationData.projectType}</p>
        </div>
      )}

      {/* PDF Viewer */}
      <iframe
        src={pdfPath}
        width="100%"
        height="600px"
        title={projectTitle}
        style={{ border: "2px solid black" }}
      ></iframe>

      <div style={{ marginTop: "10px" }}>
        <a href={pdfPath} download>
          <button>Download PDF</button>
        </a>

        <Link to="/projects">
          <button style={{ marginLeft: "10px" }}>Back</button>
        </Link>

        <Link to="/">
          <button style={{ marginLeft: "10px" }}>Home</button>
        </Link>
      </div>
    </div>
  );
}
