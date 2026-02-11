import { Link } from "react-router-dom";

export default function PSC() {
  const courses = [
    "Communication Skills",
    "Leadership Development",
    "Time Management",
    "Entrepreneurship Training",
    "Digital Marketing",
  ];

  return (
    <div className="PTS">
      <h2 className="DH">Professional & Skill Development Courses</h2>

      <ul className="UL">
        {courses.map((course, index) => (
          <li className="LI" key={index}>
            <Link to={`/course-register?course=${encodeURIComponent(course)}&dept=PSC`}>
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
