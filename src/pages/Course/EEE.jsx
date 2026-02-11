import { Link } from "react-router-dom";

export default function EEE() {
  const courses = [
    "Power Electronics",
    "Electrical Machines",
    "Control Systems",
    "Renewable Energy",
    "Microprocessor & Microcontroller",
  ];

  return (
    <div className="PTS">
      <h2 className="DH">EEE Courses</h2>

      <ul className="UL">
        {courses.map((course, index) => (
          <li className="LI" key={index}>
            <Link to={`/course-register?course=${encodeURIComponent(course)}&dept=EEE`}>
              {course}
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/courses">
        <button>Back</button>
      </Link>

      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
