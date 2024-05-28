import '../index.css';
import checkW from '../assets/checkWhite.svg';
import checkG from '../assets/CheckGreen.svg';
import Check from "../assets/evenready.svg";
import Penta from "../assets/penta.svg";
import Ramdom from "../assets/ramdomevent.png";
import EventesMenu from "../assets/eventsMenu.svg";
import { useHandleCheck } from '../hooks/useHandleCheck';
import { useModal } from '../hooks/useModal';
import { AddEvent } from "./AddEvent";
import Delete from "../assets/delete.svg";

//Component of a new event with title, description, image, hour and category
export function Eventos({ titulo, texto, image, hora, cat}) {
    const modalAddEvents = useModal();
    const {isChecked, handleCheck} = useHandleCheck();

    return (
        <>
        {modalAddEvents.isOpen && (
          <>
            <AddEvent closeModal={modalAddEvents.toggleModal}   />
          </>
        )}
        
        <div className='flex flex-col justify-center relative'>
            <p className="text-blue-3 text-texto sm:text-subtitulo font-main font-pesado">Hora: 5:00pm</p>
            <div className="rounded-2xl min-h-32 ring-1 bg-white ring-[#11567D] relative flex flex-row justify-center items-center py-4 px-8 gap-4">
                <div className='w-[10rem] items-center justify-start gap-2 hidden sm:flex flex-col'>
                    
                <div className='relative'>
                    {/* Change the image if input is checked or unchecked for normal views*/}
                <img src={isChecked ? checkG : checkW} alt="" id='img'/>
                <input
                className='absolute top-0 left-0 size-9 opacity-0'
                type='checkbox'
                checked={isChecked}
                onChange={handleCheck}
                />
                </div>
                   
                    <img className='min-w-8' src={Penta} alt="" />
                </div>
                <div className='flex flex-col items-center sm:items-start min-w-[135px]'>
                        <h1 className='font-main line-clamp-1 sm:line-clamp-none text-subtitulo font-pesado text-blue-3'>{titulo}</h1>
                    <div className='hidden sm:flex'>
                    <p className='text-blue-3 text-texto font-second sm:line-clamp-2'>{texto}</p>
                    </div>
                    <div className='items-center justify-between w-full gap-2 flex sm:hidden'>
                    
                        <div className='relative'>
                            {/* Change the image if input is checked or unchecked for mobile*/}
                            <img src={isChecked ? checkG : checkW} alt="" id='img'/>
                            <input
                            className='absolute top-0 left-0 size-9 opacity-0'
                            type='checkbox'
                            checked={isChecked}
                            onChange={handleCheck}
                            />
                            </div>  
                        <img className='min-w-8 sm:hidden' src={Penta} alt="" />
                        <img className='block size-12' src={Ramdom} alt="" />
                    
                    
                </div>
                </div>
               {/* Shows and hide delete and modify event option white the 3 dots images is clicked*/}
                <img className='hidden sm:block' src={Ramdom} alt="" />
                
                <button className="group relative sm:z-10">
                    <img className="size-8 group-focus:opacity-0 duration-200" alt="" src={EventesMenu} />
                    <div className="absolute opacity-0 group-focus:opacity-100 duration-200 w-[12rem] h-[4rem] top-[-1rem] right-[-6.5rem]">
                            <div className='flex flex-col gap-8 items-center justify-center h-full'>
                                <button onFocusCapture={modalAddEvents.toggleModal} className='hover:scale-125'>
                                    <svg width="22" height="22" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18H17.5M15 8L18 5L14 1L11 4M15 8L5 18H1V14L11 4M15 8L11 4" stroke="#11567D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                                <button>
                                <img className="size-7 hover:scale-125" alt="" src={Delete} />
                                </button>
                            </div>
                        </div>
                </button>
               
            </div>
        </div>
        </>
    );
}
