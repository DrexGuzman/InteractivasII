import Course from "../assets/courses.svg";
import { Link } from "react-router-dom";
export function Courses() {

  return (
    <div className="  hidden sm:flex flex-col p-4 bg-blue-1 rounded-3xl ring-[1px] ring-[#11567D] shadow-md ">
    <div className="py-2 flex justify-between">
      <h1 className="texto  clr-blue-3">
        Cursos matriculados
      </h1>
      <img className="size-6"
        alt=""
        src={Course}
      />
    </div>
    <hr className=" w-full border-[#11567D] " />
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
