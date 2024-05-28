import React, { useState } from 'react';
import gear from "../assets/gear.svg";

export const ProfileDropDown = () => {
  //function to verify if the div is open or not
    const [isOpen, setIsOpen] = useState(false);

    const dropDown = () => {
        setIsOpen(!isOpen);
    };
    //function to change status if the checkbox is checked
    const updateProfile = () => {
        setIsOpen(false);
        const checkGear = document.getElementById("checkGear");
        checkGear.checked = false;
    };

    return (
        <div id="profileBox" className={`overflow-y-hidden h-[10rem] flex flex-col rounded-2xl relative py-8 mt-2 transition-all duration-500 ${isOpen ? 'h-[25rem] ring-1 ring-white' : 'h-[7rem]'}`}>
            <div className="flex justify-center">
                <ul className="texto text-white text-center">
                    <li className="subtitulo-pesado text-white text-center">Nombre de usuario</li>
                    <li>Informática y Tecnología Multimedia</li>
                    <li>C52145</li>
                </ul>
                <div className='absolute top-2 right-2'>
                    <input className="size-6 fixed opacity-0 z-20" onChange={dropDown} type="checkbox" id="checkGear"/>
                    <img id="gear" className={`transition-transform duration-500 ${isOpen ? 'rotate-90' : 'rotate-0'}`} src={gear} alt="gear icon" />
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
                <button className="font-bold bg-orange-1 w-full rounded-lg h-8" onClick={updateProfile}>Submit</button>
            </div>
        </div>
    );
};

