import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


// Department and project mapping
const projectsByDept = {
  EEE: ["Smart Energy Meter", "Solar Tracking System", "Home Automation Using IoT", "Electric Vehicle Charging System", "Wireless Power Transmission"],
  MECH: ["Automatic Material Handling Robot", "Hydraulic Lift System", "Smart Irrigation System", "Automated Door System", "Solar Powered Water Pump"],
  CIVIL: ["Smart City Waste Management System", "Earthquake Resistant Building Model", "Rainwater Harvesting System", "Traffic Signal Automation System", "Smart Parking System"],
  ECE: ["Smart Traffic Control System", "IoT Based Weather Monitoring System", "Home Security Alarm System", "Bluetooth Controlled Robot", "Smart Attendance System Using RFID"],
  CSE: ["Online Examination System", "Library Management System", "E-Commerce Website", "Chat Application Using Socket", "Student Management System"],
  IT: ["Hospital Management System", "Online Food Ordering System", "Online Banking System", "E-Learning Platform", "Job Portal Website"],
};

export default function ProjectRegister() {
  const navigate = useNavigate();

  const [department, setDepartment] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    mobile: "",
    college: "",
    projectType: "Mini Project",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save registration to localStorage
    const existing = JSON.parse(localStorage.getItem("projectRegistrations") || "[]");
    localStorage.setItem(
      "projectRegistrations",
      JSON.stringify([...existing, { ...formData, department, projectTitle }])
    );

    setSubmitted(true); // show success message
  };

  // --- Success View ---
  if (submitted) {
    return (
      <div className="register-wrapper">
        <div className="register-card" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#10b981" }}>Registration Successful!</h2>
          <p className="P">Your request has been successfully received. Our staff will contact you shortly regarding the <strong>{projectTitle}</strong> project.</p>

          <div className="button-group">
            <Link to={`/projects/${department.toLowerCase()}`}>
              <button className="submit-btn">Add Another Person</button>
            </Link>
            <Link to="/">
              <button className="secondary-btn">Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // --- Form View ---
  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h2>Project Register Form</h2>

        <form onSubmit={handleSubmit} className="register-form">
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <div className="input-group">
            <label className="input-label" style={{ fontSize: '0.8rem', color: '#6b7280' }}>Date of Birth</label>
            <input
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <input
            name="email"
            type="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <input
            name="college"
            placeholder="College Name"
            value={formData.college}
            onChange={handleChange}
            required
          />

          {/* Department selection */}
          <select
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
              setProjectTitle(""); // reset project title
            }}
            required
          >
            <option value="">Select Department</option>
            {Object.keys(projectsByDept).map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>

          {/* Project selection */}
          {department && (
            <select
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              required
            >
              <option value="">Select Project Title</option>
              {projectsByDept[department].map((proj, idx) => (
                <option key={idx} value={proj}>
                  {proj}
                </option>
              ))}
            </select>
          )}

          {/* Project Type */}
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="projectType"
                value="Mini Project"
                checked={formData.projectType === "Mini Project"}
                onChange={handleChange}
              />
              Mini Project
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="projectType"
                value="Main Project"
                checked={formData.projectType === "Main Project"}
                onChange={handleChange}
              />
              Main Project
            </label>
          </div>

          <button type="submit" className="submit-btn" disabled={!department || !projectTitle}>
            Submit
          </button>
        </form>

        {/* Navigation */}
        <div className="button-group">
          <Link to="/register-menu">
            <button className="secondary-btn">Back to Menu</button>
          </Link>
          <Link to="/">
            <button className="secondary-btn">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}