import Course from "../assets/courses.svg";
import { Link } from "react-router-dom";
export function CoursesDropDown() {

  function dropDown(input) {
    const coursesBox = document.getElementById("coursesBox");
    if (input.checked) {
      
      coursesBox.style.height = "20rem";
      coursesBox.style.transition = "height 0.5s";
    } else {
      coursesBox.style.height = "2rem";
      coursesBox.style.transition = "height 0.5s";
    }
  }

  return (
    <div id="coursesBox" className=" h-[2rem] overflow-hidden lg-[1440px]:flex flex-col py-1 px-2 bg-blue-1 rounded-3xl ring-[1px] ring-[#11567D] shadow-md ">
    <div className="flex justify-between">
      <h1 className="texto  clr-blue-3">
        Cursos matriculados
      </h1>
      <div className='relative'>
        <input onChange={(e) => dropDown(e.target)}
          className="absolute opacity-0 size-5"
          id="applyFilters"
          name=""
          type="checkbox"
        />
        <img
          alt=""
          className=" size-5"
          src={Course}
        />
        </div>
    </div>
    <hr className=" w-full border-[#11567D] mt-1" />
    <ul className=" mt-2 flex flex-col list-disc pl-8">
      <li className="m-2 texto   clr-blue-3">
       <Link to='progress' > Desarrollo de aplicaciones interactivas II</Link>
      </li>
      <li className="m-2 texto  clr-blue-3">
      <Link to='progress' > Desarrollo de aplicaciones interactivas II</Link>
      </li>
      <li className="m-2 texto clr-blue-3 ">
      <Link to='progress' > Desarrollo de aplicaciones interactivas II</Link>
      </li>
    </ul>
  </div>
  );
}
