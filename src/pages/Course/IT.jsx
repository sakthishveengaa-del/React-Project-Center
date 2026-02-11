import { Link } from "react-router-dom";

export default function IT() {
  const courses = [
    "Web Development",
    "Mobile App Development",
    "Data Structures & Algorithms",
    "Database Management System",
    "Cloud Computing",
  ];

  return (
    <div className="PTS">
      <h2 className="DH">IT Courses</h2>

      <ul className="UL">
        {courses.map((course, index) => (
          <li className="LI" key={index}>
            <Link to={`/course-register?course=${encodeURIComponent(course)}&dept=IT`}>
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
