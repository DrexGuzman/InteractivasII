import VinxLogo from "../assets/vinxLogo.svg";
import Editwhite from "../assets/edit-white.svg";
import Search from "../assets/search.svg";

import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { FiltersDropDown } from "./FiltersDropDown";
import { CoursesDropDown } from "./CoursesDropDown";
import { NoficationDropDrown } from "./NoficationDropDrown";
import { MessagesDropDrown } from "./MessagesDropDown";
import { ProfileDropDown } from "./ProfileDropDown";



export function NavDrawer() {
    const [activeModal, setActiveModal] = useState(null);

  function showMenu(input) {
    const menu = document.getElementsByName("menu")[0];
    const checkboxNav = document.getElementById("checkboxNav");
    if (input.checked) {
      menu.style.display = "block";
      checkboxNav.style.position = "fixed";
      menu.style.right = "0px";
      menu.style.transition="right ease 0.5s";
      checkboxNav.style.zIndex = "30";
    } else {
      checkboxNav.style.position = "absolute";
      menu.style.transition="right ease 0.5s";
      menu.style.right = "-1000px";
      menu.style.display = "hidden";
    }
  }

  const toggleModal = (modalName) => {
    setActiveModal((prev) => (prev === modalName ? null : modalName));
  };

  return (
    <div className="mb-8 relative">
        <input
                  className="opacity-0 absolute  right-4 sm:right-8 top-6  size-[3rem] z-10"
                  onChange={(e) => showMenu(e.target)}
                  id="checkboxNav"
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
          <div className="sm:block hidden  left-0 right-0"><MessagesDropDrown/></div>
              <div className="sm:block hidden  left-0 right-0"><NoficationDropDrown /></div>

          <img
            alt="User Profile"
            className="relative rounded-full  ring-4 ring-white size-[3rem]"
            src="https://randomuser.me/api/portraits/women/31.jpg"
          />
        </div>

          </div>
      </div>

      {/* menu emergente */}

      <div className="fixed top-0 right-[-1000px] z-20 sm:w-[40vw] w-[70vw] h-screen bg-black px-[1.188rem] overflow-y-auto scrollbar-hide   overflow-hidden " name="menu">
      <div className="relative flex justify-between  py-4">
        <div className="flex sm:hidden gap-8 ">
        </div>
        <input className="opacity-0 fixed size-8" id="" name="" type="checkbox" />
        <div className="relative">
        </div>
        <h1 className="absolute right-3 sm:right-8 top-8 text-white text-2xl font-bold cursor-pointer">X</h1>
      </div>

      <div className="w-full flex justify-center mb-4">
        <div className="relative">
          <img alt="User Profile" className="rounded-full w-20 ring-4 ring-white size-[5rem]" src="https://randomuser.me/api/portraits/women/31.jpg" />
          <div className="absolute top-16 right-1 rounded-full bg-yellow-500 size-8 text-white text-2xl font-bold">
          <input className="absolute rounded-full size-8 z-30 opacity-0" type="file" name="" id=""  />
          <img className="absolute top-2 right-2 size-4" src={Editwhite} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">

        <ProfileDropDown />

        <div className="flex flex-col gap-y-4">
          <div className="sm:hidden">
            <form action="" className="bg-blue-1 flex sm:h-[3.5rem] h-[2rem] rounded-full">
              <input className="focus:outline-none pl-8 w-full text-blue-3 texto bg-transparent" placeholder="Buscar" type="text" />
              <input className="px-7 bg-no-repeat bg-center w-10" style={{ backgroundImage: `url(${Search})` }} type="submit" value="" />
            </form>
          </div>

          <div className="sm:hidden block">
            <FiltersDropDown />
          </div>

          <hr className="sm:hidden w-[90vw] text-white bg-white" />

          <div className="sm:hidden block">
            <CoursesDropDown />
          </div>

          <hr className="w-[90vw] text-white bg-white" />
          <Link to='/vinx/progress' className="px-4 flex justify-center items-center bg-blue-1 sm:h-[3.5rem] h-[2rem] rounded-full texto text-blue-3">Progreso de cursos</Link>
          <Link to='/vinx/dailyTask' className="px-4 flex justify-center items-center bg-blue-1 sm:h-[3.5rem] h-[2rem] rounded-full texto text-blue-3">Resumen de actividades</Link>
          <hr className="w-[90vw] text-white bg-white" />
          <Link to='/' className="texto text-white flex justify-center mb-4">Cerrar sesión</Link>
        </div>
      </div>
    </div>
  </div>
    {/* siguiente seccion */}
  </div>
    
  );
}
