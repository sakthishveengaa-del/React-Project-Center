import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./CourseRegister"; // Reusing the shared CSS for consistency

// Courses by department mapping
const coursesByDept = {
  EEE: ["Power Electronics", "Electrical Machines", "Control Systems", "Renewable Energy", "Microprocessor & Microcontroller"],
  MECH: ["Thermal Engineering", "Manufacturing Technology", "Mechanical Design", "Fluid Mechanics", "Robotics & Automation"],
  CIVIL: ["Structural Engineering", "Construction Management", "Transportation Engineering", "Environmental Engineering", "Geotechnical Engineering"],
  IT: ["Web Development", "Mobile App Development", "Data Structures & Algorithms", "Database Management System", "Cloud Computing"],
  PSC: ["Communication Skills", "Leadership Development", "Time Management", "Entrepreneurship Training", "Digital Marketing"],
};

export default function CourseRegister() {
  const location = useLocation();

  // State Management
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

  // Sync with URL params (e.g., /course-register?dept=IT&course=Web%20Development)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const dept = params.get("dept") || "";
    const crs = params.get("course") || "";
    if (dept) setDepartment(dept);
    if (crs) setCourse(crs);
  }, [location.search]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save to localStorage
    const registrationData = { ...formData, department, course, date: new Date().toLocaleDateString() };
    const existing = JSON.parse(localStorage.getItem("courseRegistrations") || "[]");
    localStorage.setItem(
      "courseRegistrations",
      JSON.stringify([...existing, registrationData])
    );

    setSubmitted(true);
  };

  // --- Success Message View ---
  if (submitted) {
    return (
      <div className="register-wrapper">
        <div className="register-card" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "3.5rem", color: "#10b981", marginBottom: "1rem" }}>✓</div>
          <h2 style={{ color: "#10b981" }}>Enrollment Successful!</h2>
          <p className="form-subtitle">
            Thank you, <strong>{formData.name}</strong>. You have registered for the <strong>{course}</strong> course. 
            Our team will contact you soon.
          </p>

          <div className="button-group">
            <button 
              className="submit-btn" 
              style={{ width: "auto", padding: "10px 25px" }}
              onClick={() => { setSubmitted(false); setCourse(""); }}
            >
              Add Another Person
            </button>
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
        <h2>Course Register Form</h2>
        <p className="form-subtitle">Fill in the details to join our training program.</p>

        <form onSubmit={handleSubmit} className="register-form">
          {/* Personal Information */}
          <input 
            name="name" 
            placeholder="Student Full Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />

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

          {/* Department Selection - Only shown if not in URL */}
          {!new URLSearchParams(location.search).get("dept") && (
            <select
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setCourse(""); 
              }}
              required
            >
              <option value="">Select Department</option>
              {Object.keys(coursesByDept).map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          )}

          {/* Course Selection - Only shown if not in URL */}
          {department && !new URLSearchParams(location.search).get("course") && (
            <select value={course} onChange={(e) => setCourse(e.target.value)} required>
              <option value="">Select Course</option>
              {coursesByDept[department].map((c, idx) => (
                <option key={idx} value={c}>{c}</option>
              ))}
            </select>
          )}

          {/* Read-only feedback if course is pre-selected */}
          {course && (new URLSearchParams(location.search).get("course") || new URLSearchParams(location.search).get("dept")) && (
             <div className="input-group">
                <label className="input-label">Selected Course</label>
                <input type="text" value={course} readOnly style={{ backgroundColor: "#f8fafc", color: "#64748b" }} />
             </div>
          )}

          {/* Training Mode */}
          <div className="radio-group">
            <label className="radio-label">
              <input type="radio" name="mode" value="Online" checked={formData.mode === "Online"} onChange={handleChange} />
              Online
            </label>
            <label className="radio-label">
              <input type="radio" name="mode" value="Offline" checked={formData.mode === "Offline"} onChange={handleChange} />
              Offline
            </label>
          </div>

          <button type="submit" className="submit-btn" disabled={!department || !course}>
            Enroll Now
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