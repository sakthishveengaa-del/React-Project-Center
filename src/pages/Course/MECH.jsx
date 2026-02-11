import { Link } from "react-router-dom";

export default function MECH() {
  const courses = [
    "Thermal Engineering",
    "Manufacturing Technology",
    "Mechanical Design",
    "Fluid Mechanics",
    "Robotics & Automation",
  ];

  return (
    <div className="PTS">
      <h2 className="DH">MECH Courses</h2>

      <ul className="UL">
        {courses.map((course, index) => (
          <li className="LI" key={index}>
            <Link to={`/course-register?course=${encodeURIComponent(course)}&dept=MECH`}>
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
