import Course from "../assets/courses.svg";

export function Courses() {

  return (
    <div className="  hidden min-[430px]:flex flex-col p-4 bg-sky-600 rounded-3xl">
    <div className="py-2 flex justify-between">
      <h1 className="texto text-white">
        Cursos matriculados
      </h1>
      <img className="size-6"
        alt=""
        src={Course}
      />
    </div>
    <hr className="text-white w-full" />
    <ul className=" mt-2 flex flex-col">
      <li className="m-2 texto text-white ">
        Desarrollo de aplicaciones interactivas II
      </li>
      <li className="m-2 texto text-white ">
        Desarrollo de aplicaciones interactivas II
      </li>
      <li className="m-2 texto text-white ">
        Desarrollo de aplicaciones interactivas II
      </li>
    </ul>
  </div>
  );
}
