import Course from "../assets/courses.svg"; // Importing the course icon SVG file.
import { Link } from "react-router-dom"; // Importing Link from react-router-dom for navigation.

// Defining the list of Courses.
export function Courses(events) { 
  return (
    <div className="hidden sm:flex flex-col p-4 bg-blue-1 rounded-3xl ring-[1px] ring-[#11567D] shadow-md"> {/* Container div for the courses list */}
      <div className="py-2 flex justify-between">
        <h1 className="texto clr-blue-3">Cursos matriculados</h1>
        <img className="size-6" alt="" src={Course} />
      </div>
      <hr className="w-full border-[#11567D]" />
      <ul className="mt-2 flex flex-col list-disc pl-8"> {/* List of courses */}
        {!events.eventsList.isLoading && (
              events.eventsList.data.courses.map((course, index) => (
                <li key={index} className="m-2 texto clr-blue-3">
                  <Link to='/vinx/progress'>{course.cour_name}</Link>
                </li>
              ))
            )}
      </ul>
    </div>
  );
}
