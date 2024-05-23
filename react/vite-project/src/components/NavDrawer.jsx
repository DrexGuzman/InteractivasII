import VinxLogo from "../assets/vinxLogo.svg";
import Notify from "../assets/notify.svg";
import Search from "../assets/search.svg";
import ImgFilter from "../assets/filters.svg";
import Chat from "../assets/chat.svg";
import ImgCourse from "../assets/courses.svg";
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

export function NavDrawer() {

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
        <input
                  className="opacity-0 fixed  right-4 sm:right-10 top-[1.2rem]  size-[3rem] z-10"
                  onChange={(e) => showMenu(e.target)}
                  id="checkbox"
                  name=""
                  type="checkbox"
                />
      <div className="relative bg-blue-2 grid  sm:grid-cols-3 grid-cols-2 py-2 sm:px-8 px-4 sm:gap-x-10 gap-x-28">
      <div className="items-center flex">
        <div className="flex-col justify-center items-center">
        <Link to='/vinx' className="flex items-center justify-center flex-col" >
        <img alt="" className="size-10" src={VinxLogo} />
        <h1 className="subtitulo-pesado text-[20px]  text-white text-center font-semibold">Vinx</h1>
        </Link>
        </div>

      </div>
      <div className="items-center justify-center hidden sm:flex">
        <form
          action=""
          className="flex justify-between h-[2rem] bg-blue-1 rounded-full w-[-webkit-fill-available]"
        >
          <input
            className="flex focus:outline-none pl-4 text-blue-3 texto bg-transparent"
            placeholder="Buscar"
            type="text"
          />
          {/* style={{ backgroundImage: `url(${Search})` }} */}
          <input className=" bg-no-repeat bg-center w-10" style={{ backgroundImage: `url(${Search})` }} type="submit" value="" />
        </form>
      </div>
      <div className="flex sm:justify-between justify-center items-center">
     
                {/* <img alt="" className=" size-8 bg-sky-600" src={HambMenu} /> */}
          <div className="w-full flex justify-end">
        
          
          <div className="flex justify-center items-center gap-12">
                <div className="relative sm:block hidden">
                <div className="bg-amber-500 size-6 rounded-full absolute left-4 bottom-4 font-extrabold">+5</div>
                  <img className="size-8"
                  alt=""
                  src={Chat}
                  />
                </div>

                <div className="relative sm:block hidden">
                  <div className="bg-amber-500 size-6 rounded-full absolute left-4 bottom-4 font-extrabold">+1</div>
                  <img className="size-8"
                  alt=""
                  src={Notify}
                  />
                </div>
          <img
            alt="User Profile"
            className="relative rounded-full  ring-4 ring-white size-[3rem]"
            src="https://randomuser.me/api/portraits/women/31.jpg"
          />
        </div>

          </div>
      </div>

      {/* menu emergente */}

      <div className="z-10 fixed  top-0 right-[-1000px] sm:w-[40vw] w-[70vw] h-[100vh]  bg-black px-[1.188rem]" name="menu">
      <div className="relative flex justify-between sm:justify-end py-4">
        
      <input
      className="opacity-0 absolute size-8 "
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
          className=" bg-blue-1 flex sm:h-[3.5rem] h-[2rem] rounded-full"
        >
          <input
            className="focus:outline-none pl-8 w-full text-blue-3 texto bg-transparent"
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
      <div className="px-4 justify-between items-center bg-blue-1 flex sm:h-[3.5rem] h-[2rem] rounded-full sm:hidden">
        <h1 className="texto text-blue-3 text-center">
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
      
      <div className="px-4 justify-between items-center bg-blue-1 flex sm:h-[3.5rem] h-[2rem] rounded-full sm:hidden">
        <h1 className="texto text-blue-3 text-center">
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
      <Link to='/vinx/progress' className="px-4 flex justify-center items-center bg-blue-1 sm:h-[3.5rem] h-[2rem] rounded-full texto text-blue-3" >Progreso de cursos</Link>

      <Link to='/vinx/dailyTask' className="px-4 flex justify-center items-center bg-blue-1 sm:h-[3.5rem] h-[2rem] rounded-full texto text-blue-3" >Resumen de actividades</Link>
      
      <hr className="w-[90vw] text-white bg-white" />
      <Link to='/' className="texto text-white flex justify-center" >Cerrar sesion</Link>
      
    </div>
  </div>
      </div>
    </div>

    {/* siguiente seccion */}


    </div>
    
  );
}
