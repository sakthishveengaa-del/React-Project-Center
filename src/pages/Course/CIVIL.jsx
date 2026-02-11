import { Link } from "react-router-dom";

export default function CIVIL() {
  const courses = [
    "Structural Engineering",
    "Construction Management",
    "Transportation Engineering",
    "Environmental Engineering",
    "Geotechnical Engineering",
  ];

  return (
    <div className="PTS">
      <h2 className="DH">CIVIL Courses</h2>

      <ul className="UL">
        {courses.map((course, index) => (
          <li className="LI" key={index}>
            <Link to={`/course-register?course=${encodeURIComponent(course)}&dept=CIVIL`}>
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
