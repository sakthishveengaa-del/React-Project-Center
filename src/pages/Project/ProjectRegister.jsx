import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "../ProjectRegister.css";

// Department → Project mapping
const projectsByDept = {
  EEE: [
    "Smart Energy Meter",
    "Solar Tracking System",
    "Home Automation Using IoT",
    "Electric Vehicle Charging System",
    "Wireless Power Transmission",
  ],
  MECH: [
    "Automatic Material Handling Robot",
    "Hydraulic Lift System",
    "Smart Irrigation System",
    "Automated Door System",
    "Solar Powered Water Pump",
  ],
  CIVIL: [
    "Smart City Waste Management System",
    "Earthquake Resistant Building Model",
    "Rainwater Harvesting System",
    "Traffic Signal Automation System",
    "Smart Parking System",
  ],
  ECE: [
    "Smart Traffic Control System",
    "IoT Based Weather Monitoring System",
    "Home Security Alarm System",
    "Bluetooth Controlled Robot",
    "Smart Attendance System Using RFID",
  ],
  CSE: [
    "Online Examination System",
    "Library Management System",
    "E-Commerce Website",
    "Chat Application Using Socket",
    "Student Management System",
  ],
  IT: [
    "Hospital Management System",
    "Online Food Ordering System",
    "E-Learning Platform",
    "Job Portal Website",
  ],
};

export default function ProjectRegister() {
  const location = useLocation();
  const navigate = useNavigate();

  // State Management
  const [projectTitle, setProjectTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    mobile: "",
    college: "",
    projectType: "Mini Project",
  });

  // Prefill project title from URL parameters if available
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const title = params.get("title");
    if (title) {
      setProjectTitle(title);
    }
  }, [location.search]);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save registration to localStorage
    const registrationEntry = { 
      ...formData, 
      department, 
      projectTitle,
      registrationDate: new Date().toLocaleDateString() 
    };
    
    const existing = JSON.parse(localStorage.getItem("projectRegistrations") || "[]");
    localStorage.setItem(
      "projectRegistrations",
      JSON.stringify([...existing, registrationEntry])
    );

    // Navigate to PDF page and pass the data via state
    navigate("/project-pdf", { state: { registrationData: registrationEntry } });
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h2>Project Registration</h2>
        <p className="form-subtitle">Fill in the details to enroll in your project training.</p>

        <form onSubmit={handleSubmit} className="register-form">
          {/* Basic Information */}
          <div className="input-group">
            <input 
              name="name" 
              placeholder="Full Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="input-group">
            <label className="input-label">Date of Birth</label>
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
            placeholder="Email Address" 
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
            placeholder="College/University Name" 
            value={formData.college} 
            onChange={handleChange} 
            required 
          />

          {/* Department Selection */}
          <select
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
              // Only reset title if it wasn't pre-filled by URL
              const params = new URLSearchParams(location.search);
              if (!params.get("title")) setProjectTitle("");
            }}
            required
          >
            <option value="">Select Department</option>
            {Object.keys(projectsByDept).map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>

          {/* Project Selection (Conditional) */}
          {!projectTitle && department && (
            <select
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              required
            >
              <option value="">Select Project Title</option>
              {projectsByDept[department].map((proj, idx) => (
                <option key={idx} value={proj}>{proj}</option>
              ))}
            </select>
          )}

          {/* Read-only title if pre-selected */}
          {projectTitle && (
            <div className="input-group">
              <label className="input-label">Selected Project</label>
              <input 
                type="text" 
                value={projectTitle} 
                readOnly 
                className="readonly-input"
              />
            </div>
          )}

          {/* Project Type Selection */}
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

          <button 
            type="submit" 
            className="submit-btn" 
            disabled={!department || !projectTitle}
          >
            Submit Registration
          </button>
        </form>

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