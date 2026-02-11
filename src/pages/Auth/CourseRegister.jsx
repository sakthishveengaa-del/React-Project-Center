import { useState } from "react";
import { Link } from "react-router-dom";

import "../CourseRegister.css";

// Courses by department mapping
const coursesByDept = {
  EEE: ["Power Electronics", "Electrical Machines", "Control Systems", "Renewable Energy", "Microprocessor & Microcontroller"],
  MECH: ["Thermal Engineering", "Manufacturing Technology", "Mechanical Design", "Fluid Mechanics", "Robotics & Automation"],
  CIVIL: ["Structural Engineering", "Construction Management", "Transportation Engineering", "Environmental Engineering", "Geotechnical Engineering"],
  IT: ["Web Development", "Mobile App Development", "Data Structures & Algorithms", "Database Management System", "Cloud Computing"],
  PSC: ["Communication Skills", "Leadership Development", "Time Management", "Entrepreneurship Training", "Digital Marketing"],
};

export default function CourseRegister() {
  const [department, setDepartment] = useState("");
  const [course, setCourse] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    mobile: "",
    college: "",
    mode: "Online",
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save registration data to localStorage
    const existing = JSON.parse(localStorage.getItem("courseRegistrations") || "[]");
    localStorage.setItem(
      "courseRegistrations",
      JSON.stringify([...existing, { ...formData, department, course }])
    );

    setSubmitted(true);
  };

  // --- Success Message View ---
  if (submitted) {
    return (
      <div className="register-wrapper">
        <div className="register-card" style={{ textAlign: "center" }}>
          <div className="success-icon" style={{ fontSize: "3rem", color: "#10b981" }}>✓</div>
          <h2 style={{ color: "#10b981" }}>Registration Success</h2>
          <p className="P">
            Your request for the <strong>{course}</strong> course has been successfully received. 
            Our staff will contact you shortly via <strong>{formData.mobile}</strong>.
          </p>

          <div className="nav-buttons">
            <button 
              className="btn-submit" 
              onClick={() => { setSubmitted(false); setCourse(""); }}
              style={{ width: "auto", padding: "10px 20px" }}
            >
              Add Another Person
            </button>
            <Link to="/" className="btn-secondary">Home</Link>
          </div>
        </div>
      </div>
    );
  }

  // --- Main Form View ---
  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h2>Course Register Form</h2>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "20px" }}>
          Join our professional training programs to enhance your skills.
        </p>

        <form onSubmit={handleSubmit} className="register-form">
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <div className="input-group">
            <label style={{ fontSize: "0.8rem", color: "#888", marginLeft: "5px" }}>Date of Birth</label>
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
            placeholder="College/University Name"
            value={formData.college}
            onChange={handleChange}
            required
          />

          {/* Department selection */}
          <select
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
              setCourse(""); // reset course selection when dept changes
            }}
            required
          >
            <option value="">Select Department</option>
            {Object.keys(coursesByDept).map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>

          {/* Course selection */}
          {department && (
            <select 
              value={course} 
              onChange={(e) => setCourse(e.target.value)} 
              required
            >
              <option value="">Select Course</option>
              {coursesByDept[department].map((c, idx) => (
                <option key={idx} value={c}>
                  {c}
                </option>
              ))}
            </select>
          )}

          {/* Training Mode Selection */}
          <div className="radio-container">
            <label className="radio-label">
              <input
                type="radio"
                name="mode"
                value="Online"
                checked={formData.mode === "Online"}
                onChange={handleChange}
              />
              Online
            </label>
            <label className="radio-label" style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                name="mode"
                value="Offline"
                checked={formData.mode === "Offline"}
                onChange={handleChange}
              />
              Offline
            </label>
          </div>

          <button 
            type="submit" 
            className="btn-submit" 
            disabled={!department || !course}
          >
            Submit Registration
          </button>
        </form>

        {/* Navigation buttons */}
        <div className="nav-buttons">
          <Link to="/register-menu" className="btn-secondary">Back to Menu</Link>
          <Link to="/" className="btn-secondary">Home</Link>
        </div>
      </div>
    </div>
  );
}