import '../index.css';
import checkW from '../assets/checkWhite.svg';
import checkG from '../assets/CheckGreen.svg';
import Penta from "../assets/penta.svg";
import Ramdom from "../assets/ramdomevent.png";
import EventesMenu from "../assets/eventsMenu.svg";
import { useHandleCheck } from '../hooks/useHandleCheck';
import { useModal } from '../hooks/useModal';
import { AddEvent } from "./AddEvent";
import Delete from "../assets/delete.svg";
import { useUpdateEventState } from '../hooks/useUpdateEventState.js';

// Component of a new event with title, description, image, hour and category
export function Eventos({ titulo, texto, image, hora, cat, fecha, horaFomatted, event, events }) {
    const modalAddEvents = useModal();
    const { isChecked, handleCheck } = useHandleCheck();
    const { updateEvent } = useUpdateEventState();
    console.log(events);
    
    const handleComplete = async () => {
        try {
            await updateEvent(event.eve_id, 16); // Asegúrate de que este ID de evento y usuario sean correctos
    
            // Actualiza solo la propiedad events dentro de data después de la actualización exitosa
            events.setData(prevState => ({
                ...prevState,
                events: prevState.events.map(thisEvent =>
                    thisEvent.eve_id === event.eve_id
                        ? { ...thisEvent, estado: thisEvent.estado === 'Completada' ? 'InProgress' : 'Completada' }
                        : thisEvent
                )
            }));
        } catch (error) {
            console.error('Error updating event status:', error);
        }
    };

    return (
        <>
            {modalAddEvents.isOpen && (
                <>
                    <AddEvent closeModal={modalAddEvents.toggleModal} texto={texto} titulo={titulo} hora={hora} fecha={fecha} />
                </>
            )}
        
            <div className='flex flex-col justify-center relative'>
                <p className="text-blue-3 text-texto sm:text-subtitulo font-main font-pesado">Hour: {event.hora}</p>
                <div className="rounded-2xl min-h-32 ring-1 bg-white ring-[#11567D] relative flex flex-row justify-center items-center py-4 px-8 gap-4">
                    <div className='w-[10rem] items-center justify-start gap-2 hidden sm:flex flex-col'>
                        <button onClick={handleComplete}>
                            <img src={event.estado === "Completada" ? checkG : checkW} alt="" id='img' />
                        </button>
                        <img className='min-w-8' src={Penta} alt="" />
                    </div>
                    <div className='flex flex-col items-center sm:items-start min-w-[135px] w-[70%] '>
                        <h1 className='font-main line-clamp-1 sm:line-clamp-none text-subtitulo font-pesado text-blue-3'>{event.eve_title}</h1>
                        <div className='hidden sm:flex'>
                            <p className='text-blue-3 text-texto font-second sm:line-clamp-2'>{event.eve_description}</p>
                        </div>
                        <div className='items-center justify-between w-full gap-2 flex sm:hidden'>
                            <div className='relative'>
                                <img src={isChecked ? checkG : checkW} alt="" id='img' />
                                <input
                                    className='absolute top-0 left-0 size-9 opacity-0'
                                    type='checkbox'
                                    checked={isChecked}
                                    onChange={handleCheck}
                                />
                            </div>
                            <img className='min-w-8 sm:hidden' src={Penta} alt="" />
                            <div className='flex items-center justify-center min-h-[40px] min-w-[40px] max-h-[40px] max-w-[40px] ring-2 ring-black rounded-full overflow-hidden'>
                                <img className='w-full h-full object-contain' src={event.eve_image ? `http://localhost/backend-interactivas-II/vinx-app/public/storage/images_events/${event.eve_image}` : Ramdom} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='hidden sm:flex items-center justify-center min-h-[70px] min-w-[70px] max-h-[70px] max-w-[70px] ring-2 ring-black rounded-full overflow-hidden'>
                        <img className='w-full h-full object-contain' src={event.eve_image ? `http://localhost/backend-interactivas-II/vinx-app/public/storage/images_events/${event.eve_image}` : Ramdom} alt="" />
                    </div>
                    <div className="group z-10 relative">
                        <button className=" focus:opacity-0 duration-200 ">
                            <img className="size-8 group-focus:opacity-0 duration-200 " alt="" src={EventesMenu} />
                        </button>
                        <div className="absolute hidden rounded-xl opacity-0 group-focus-within:flex group-focus-within:opacity-100 duration-200 right-[-1rem] bottom-[-2.5rem] p-4">
                            <form>
                                <div className='flex flex-col gap-8 items-center justify-center h-full'>
                                    <button onFocusCapture={modalAddEvents.toggleModal} className='hover:scale-125'>
                                        <svg width="22" height="22" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 18H17.5M15 8L18 5L14 1L11 4M15 8L5 18H1V14L11 4M15 8L11 4" stroke="#11567D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button>
                                        <img className="size-7 hover:scale-125" alt="" src={Delete} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
