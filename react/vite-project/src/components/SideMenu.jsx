import {Filters} from '../assets/Filters.svg';
import {Notify} from '../assets/notify.svg';
import {Course} from '../assets/course.svg';
import{Search} from '../assets/search.svg';

export function SideMenu() {

  return (
      <div className="z-10 absolute top-0 right-[-1000px] w-[40vw] h-[100vh]  bg-black px-[1.188rem]" name="menu">
    <div className="relative justify-star flex p-4">
  <div className="block sm:hidden  absolute bg-yellow-500 text-transparent size-4 rounded-full">
    <a href="#" />
    *
  
  <input
    className="hidden absolute size-8"
    id=""
    name=""
    type="checkbox"
  />
  <img
    alt=""
    className="size-8"
    src={Notify}
  />
  </div>
</div>
<div className="w-full flex justify-center mb-4">
  <img
    alt="User Profile"
    className="relative rounded-full w-20 ring-4 ring-white size-[5rem]"
    src="https://randomuser.me/api/portraits/women/31.jpg"
  />
  <div className="absolute top-[90px] right-[21rem]">
    <button className="rounded-full bg-yellow-500 size-8 text-white text-2xl font-bold">
      +
    </button>
  </div>
</div>
<div className="flex flex-col gap-y-4">
  <ul className="texto text-white text-center">
    <li className="subtitulo-pesado text-white text-center">
      Nombre de usuario
    </li>
    <li>
      Informática y Tecnología Multimedia
    </li>
    <li>
      C52145
    </li>
  </ul>
  <div className="flex flex-col gap-y-4">
    <div className="sm:hidden">
      <form
        action=""
        className="ring-2 ring-white flex sm:h-[3.5rem] h-[2rem] rounded-full"
      >
        <input
          className="focus:outline-none pl-8 w-full text-white texto bg-transparent"
          placeholder="Buscar"
          type="text"
        />
        <input
          className="px-8 lupa w-10"
          type="submit"
          value=""
        />
      </form>
    </div>
    <div className="px-4 justify-between items-center ring-2 ring-white flex sm:h-[3.5rem] h-[2rem] rounded-full sm:hidden">
      <h1 className="texto text-white text-center">
        Aplicar filtros
      </h1>
      <input
        className="hidden absolute size-8 "
        id=""
        name=""
        type="checkbox"
      />
      <img
        alt=""
        className=" size-6"
        src={Filters}
      />
    </div>
    <hr className="sm:hidden w-[90vw] text-white bg-white" />
    
    <div className="px-4 justify-between items-center ring-2 ring-white flex sm:h-[3.5rem] h-[2rem] rounded-full sm:hidden">
      <h1 className="texto text-white text-center">
        Cursos matriculados
      </h1>
      <input
        className="hidden absolute size-8 "
        id=""
        name=""
        type="checkbox"
      />
      <img
        alt=""
        className=" size-6"
        src={Course}
      />
    </div>
    <hr className="w-[90vw] text-white bg-white" />
    <a
      className="px-4 flex justify-center items-center ring-2 ring-white flex sm:h-[3.5rem] h-[2rem] rounded-full texto text-white"
      href="#"
    >
      Progreso de cursos
    </a>
    <a
      className="px-4 flex justify-center items-center ring-2 ring-white flex sm:h-[3.5rem] h-[2rem] rounded-full texto text-white"
      href="#"
    >
      Resumen de actividades
    </a>
    <hr className="w-[90vw] text-white bg-white" />
    <a
      className="texto text-white flex justify-center"
      href="#"
    >
      Cerrar sesion
    </a>
  </div>
</div>
    </div>
  );
}