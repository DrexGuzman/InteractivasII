import React, { useState } from 'react';
import gear from "../assets/gear.svg";

export const ProfileDropDown = ({fullname, carreer, carne, user, id}) => {
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
                    <li className="subtitulo-pesado text-white text-center">{fullname}</li>
                    <li>{carreer}</li>
                    <li>{carne}</li>
                </ul>
                <div className='absolute top-2 right-2'>
                    <input className="size-6 fixed opacity-0 z-20" onChange={dropDown} type="checkbox" id="checkGear"/>
                    <img id="gear" className={`transition-transform duration-500 ${isOpen ? 'rotate-90' : 'rotate-0'}`} src={gear} alt="gear icon" />
                </div>
            </div>
            <form action="http://localhost/backend-interactivas-II/vinx-app/public/api/user/changeUserPassword" method='POST'>
            <input type="hidden" value={id} name='id'/>
            <div className="px-4">
                <p className="text-white pt-4">Nombre de usuario:</p>
                <input className="w-full rounded-lg h-8 pt-2 bg-blue-1 px-4 py-1" defaultValue={user} name='user' type="text" />
            </div>
            <div className="px-4">
                <p className="text-white pt-4">Contraseña:</p>
                <input className="w-full rounded-lg h-8 pt-2 bg-blue-1 px-4 py-1" type="password" name='password' />
            </div>
            <div className="px-4">
                <p className="text-white pt-4">Confirma o cambia contraseña:</p>
                <input className="w-full rounded-lg h-8 pt-2 bg-blue-1 px-4 py-1" type="password" name='newpassword' />
            </div>
            <div className="p-4">
                <button className="font-bold bg-orange-1 w-full rounded-lg h-8" onClick={updateProfile}>Submit</button>
            </div>
            </form>
        </div>
    );
};

