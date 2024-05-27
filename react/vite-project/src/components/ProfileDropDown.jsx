import React, { useState } from 'react';
import gear from "../assets/gear.svg";

export const ProfileDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropDown = () => {
    setIsOpen(!isOpen);
  };

  const updateProfile = () => {
    setIsOpen(false);
    const checkGear = document.getElementById("checkGear");
    checkGear.checked = false;
  }

  return (
    <div id="profileBox" className={`overflow-y-hidden sm:h-[7rem] h-[10rem] flex flex-col rounded-2xl relative py-2 mt-2 transition-all duration-500 ${isOpen ? 'sm:h-96 h-[27rem] ring-1 ring-white' : 'sm:h-[7rem] h-[10rem]'}`}>
      <div className="flex justify-center px-4">
        <ul className="texto text-white text-center">
          <li className="subtitulo-pesado text-white text-center">Nombre de usuario</li>
          <li>Informática y Tecnología Multimedia</li>
          <li>C52145</li>
        </ul>
        <div>
          <input className="absolute size-6 sm:top-4 sm:right-5 right-2 top-4 opacity-0 z-20" onChange={dropDown} type="checkbox" id="checkGear"/>
          <img id="gear" className={`absolute sm:top-4 sm:right-5 right-2 top-4 transition-transform duration-500 ${isOpen ? 'rotate-90' : 'rotate-0'}`} src={gear} alt="gear icon" />
        </div>
      </div>
      <div className="px-4">
        <p className="text-white pt-4">Nombre de usuario:</p>
        <input className="w-full rounded-lg h-8 pt-2 bg-blue-1 px-4 py-1" type="text" />
      </div>
      <div className="px-4">
        <p className="text-white pt-4">Contraseña:</p>
        <input className="w-full rounded-lg h-8 pt-2 bg-blue-1 px-4 py-1" type="password" />
      </div>
      <div className="px-4">
        <p className="text-white pt-4">Nueva contraseña:</p>
        <input className="w-full rounded-lg h-8 pt-2 bg-blue-1 px-4 py-1" type="password" />
      </div>
      <div className="p-4">
        <button className="font-bold bg-orange-1 w-full rounded-lg h-8 pt-2" onClick={updateProfile}>Submit</button>
      </div>
    </div>
  );
};
