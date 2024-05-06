import VinxLogo from "../assets/vinxLogo.svg";
import Notify from "../assets/notify.svg";
import Search from "../assets/search.svg";
import ImgFilter from "../assets/filters.svg";
import ImgCourse from "../assets/courses.svg";
import React, { useState, useEffect } from 'react';

export function NavDrawer() {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
      
    }, 6);

    return () => clearInterval(intervalId);
  }, []); // Run once on component mount
  
  function showMenu(input) {
    const menu = document.getElementsByName("menu")[0];
    const checkbox = document.getElementById("checkbox");
    if (input.checked) {
      menu.style.display = "block";
      checkbox.style.position = "absolute";
      menu.style.right = "0px";
      menu.style.transition="right ease 0.5s";
      checkbox.style.zIndex = "20";
    } else {
      menu.style.transition="right ease 0.5s";
      menu.style.right = "-1000px";
      menu.style.display = "hidden";
    }
  }

  return (
    <div className="mb-8">
      <div className="relative bg-sky-600 grid sm:grid-cols-3 grid-cols-2 py-2 sm:px-8 px-4 sm:gap-x-10 gap-x-28">
      <div className="items-center flex">
        <div className="flex-col">
        <a href="#">
          <img alt="" className="size-10" src={VinxLogo} />
        </a>
        <h1 className="subtitulo-pesado text-white">Vinx</h1>
        </div>

        <div className="ml-20 text-white font-bold text-2xl">{currentTime.toLocaleTimeString()}</div>
      </div>
      <div className="items-center justify-center hidden sm:flex">
        <form
          action=""
          className="ring-2 ring-white flex justify-between h-[2rem] bg-sky-600 rounded-full w-[-webkit-fill-available]"
        >
          <input
            className="flex focus:outline-none pl-4 text-white texto bg-transparent"
            placeholder="Buscar"
            type="text"
          />
          {/* style={{ backgroundImage: `url(${Search})` }} */}
          <input className=" bg-no-repeat bg-center w-10" style={{ backgroundImage: `url(${Search})` }} type="submit" value="" />
        </form>
      </div>
      <div className="flex sm:justify-between justify-center items-center">
      <div className="relative sm:block hidden">
      <div className="bg-amber-500 size-3 rounded-full absolute left-4"></div>
    <img className="size-8"
      alt=""
      src={Notify}
    />
    </div>
                {/* <img alt="" className=" size-8 bg-sky-600" src={HambMenu} /> */}
          <div className="w-full flex justify-end">
          <input
                  className="opacity-0 absolute size-[3rem] z-10"
                  onChange={(e) => showMenu(e.target)}
                  id="checkbox"
                  name=""
                  type="checkbox"
                />
          <img
            alt="User Profile"
            className="relative rounded-full  ring-4 ring-white size-[3rem]"
            src="https://randomuser.me/api/portraits/women/31.jpg"
          />
        </div>
      </div>

      {/* menu emergente */}

      <div className="z-10 absolute top-0 right-[-1000px] sm:w-[40vw] w-[70vw] h-[100vh]  bg-black px-[1.188rem]" name="menu">
      <div className="relative flex justify-between sm:justify-end py-4">
        
      <input
      className="opacity-0 absolute size-8"
      id=""
      name=""
      type="checkbox"
    />
    <div className="relative">
      <div className="sm:hidden bg-amber-500 size-3 rounded-full absolute top-4 left-3"></div>
    <img className="mt-5 sm:hidden"
      alt=""
      src={Notify}
    />
    </div>
    <h1 className="absolute right-3 sm:right-8 top-8 text-white text-2xl font-bold">X</h1>
  </div>

  
  <div className="w-full flex justify-center mb-4">
    <div className="relative">
    <img
      alt="User Profile"
      className="rounded-full w-20 ring-4 ring-white size-[5rem]"
      src="https://randomuser.me/api/portraits/women/31.jpg"
    />
    <button className="absolute top-16 right-1 rounded-full bg-yellow-500 size-8 text-white text-2xl font-bold">
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
            className="px-7 bg-no-repeat bg-center w-10" style={{ backgroundImage: `url(${Search})` }}
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
          src={ImgFilter}
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
          className="size-6"
          src={ImgCourse}
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
    </div>

    {/* siguiente seccion */}


    </div>
    
  );
}
