import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Context
import { RegistrationProvider } from "./context/RegistrationContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Project Pages
import ProjectHome from "./pages/Project/ProjectHome";
import EEEProject from "./pages/Project/EEE";
import MECHProject from "./pages/Project/MECH";
import CIVILProject from "./pages/Project/CIVIL";
import ECEProject from "./pages/Project/ECE";
import CSEProject from "./pages/Project/CSE";
import ITProject from "./pages/Project/IT";
import ProjectList from "./pages/Project/ProjectList";
import ProjectRegister from "./pages/Project/ProjectRegister";
import ProjectPDF from "./pages/Project/ProjectPDF";

// Course Pages
import CourseHome from "./pages/Course/CourseHome";
import EEECourse from "./pages/Course/EEE";
import MECHCourse from "./pages/Course/MECH";
import CIVILCourse from "./pages/Course/CIVIL";
import ITCourse from "./pages/Course/IT";
import PSCCourse from "./pages/Course/PSC";
import CourseRegister from "./pages/Course/CourseRegister";

// Auth Pages
import RegisterMenu from "./pages/Auth/RegisterMenu";
import ProjectRegisterAuth from "./pages/Auth/ProjectRegister";
import CourseRegisterAuth from "./pages/Auth/CourseRegister";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Auth/Dashboard";
import LoginRegister from "./pages/Auth/LoginRegister";

// Layout Components
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <RegistrationProvider>
      <Router>

        {/* ✅ Navbar Always Top */}
        <Navbar />

        {/* ✅ Main Routes */}
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Register */}
          <Route path="/login-register" element={<LoginRegister />} />
          <Route path="/register-menu" element={<RegisterMenu />} />
          <Route path="/register-menu/project" element={<ProjectRegisterAuth />} />
          <Route path="/register-menu/course" element={<CourseRegisterAuth />} />

          {/* Projects */}
          <Route path="/projects" element={<ProjectHome />} />
          <Route path="/projects/eee" element={<EEEProject />} />
          <Route path="/projects/mech" element={<MECHProject />} />
          <Route path="/projects/civil" element={<CIVILProject />} />
          <Route path="/projects/ece" element={<ECEProject />} />
          <Route path="/projects/cse" element={<CSEProject />} />
          <Route path="/projects/it" element={<ITProject />} />
          <Route path="/project-list/:dept" element={<ProjectList />} />
          <Route path="/project-register" element={<ProjectRegister />} />
          <Route path="/project-pdf" element={<ProjectPDF />} />

          {/* Courses */}
          <Route path="/courses" element={<CourseHome />} />
          <Route path="/courses/eee" element={<EEECourse />} />
          <Route path="/courses/mech" element={<MECHCourse />} />
          <Route path="/courses/civil" element={<CIVILCourse />} />
          <Route path="/courses/it" element={<ITCourse />} />
          <Route path="/courses/psc" element={<PSCCourse />} />
          <Route path="/course-register" element={<CourseRegister />} />

          {/* Login */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        {/* ✅ Footer Always Bottom */}
        <Footer />

      </Router>
    </RegistrationProvider>
  );
}
