import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // Ensure your CSS is imported

export default function Dashboard() {
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState([]);
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (!loggedIn) {
      navigate("/login");
      return;
    }

    const projects = JSON.parse(localStorage.getItem("projectRegistrations") || "[]");
    const courses = JSON.parse(localStorage.getItem("courseRegistrations") || "[]");

    setProjectData(projects);
    setCourseData(courses);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const handleClearData = () => {
    if (window.confirm("Are you sure you want to clear all data? This cannot be undone.")) {
      localStorage.removeItem("projectRegistrations");
      localStorage.removeItem("courseRegistrations");
      setProjectData([]);
      setCourseData([]);
      alert("All Registration Data Cleared!");
    }
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <h2>Admin Dashboard</h2>
        <div className="dashboard-actions">
          <button onClick={handleLogout} className="secondary-btn">Logout</button>
          <button onClick={handleClearData} className="danger-btn">Clear All Data</button>
        </div>
      </div>

      <section className="dashboard-section">
        <h3>Project Registrations</h3>
        <div className="table-responsive">
          {projectData.length === 0 ? (
            <p className="empty-msg">No project registrations yet.</p>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>College</th>
                  <th>Dept</th>
                  <th>Title</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {projectData.map((p, i) => (
                  <tr key={i}>
                    <td>{p.name}</td>
                    <td>{p.email}</td>
                    <td>{p.mobile}</td>
                    <td>{p.college}</td>
                    <td>{p.department}</td>
                    <td>{p.projectTitle}</td>
                    <td><span className={`badge ${p.type}`}>{p.projectType}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>

      <section className="dashboard-section">
        <h3>Course Registrations</h3>
        <div className="table-responsive">
          {courseData.length === 0 ? (
            <p className="empty-msg">No course registrations yet.</p>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>College</th>
                  <th>Course</th>
                  <th>Mode</th>
                </tr>
              </thead>
              <tbody>
                {courseData.map((c, i) => (
                  <tr key={i}>
                    <td>{c.name}</td>
                    <td>{c.email}</td>
                    <td>{c.mobile}</td>
                    <td>{c.college}</td>
                    <td>{c.course || c.courseName}</td>
                    <td><span className={`badge ${c.mode}`}>{c.mode}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </div>
  );
}
