import '../index.css';
import { Inputs } from '../common/Inputs';
import { UpLoad } from '../common/UpLoad'; 
import { ComboBox } from '../common/ComboBox';

/**
 * Component for adding an event.
 * @param {function} closeModal - Function to close the modal.
 * @param {function} addEvent - Function to add the event.
 */
export function ShowEvent({ closeModal, action, titulo, texto, image, hora, cat, fecha, horaFomatted, event, events, tag, estado, curso, fechahora }) {
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const date = new Date(fechahora);
    date.getDate();
    const options = { month: 'long' };
    const month = capitalize(date.toLocaleString('es-ES', options));

    const isPast = estado === 'InProgress' && new Date(fechahora) < new Date();
    console.log(isPast);

    function handleContinue() {
        closeModal();
    }

    return (
        <div className='inset-0 bg-gray-950 bg-opacity-50 fixed z-50'>
            <form action={action}>
            </form>
            <div className="flex overflow-y-auto fixed inset-0 z-50 justify-center items-center w-full  sm:max-h-full ">
                <div className="p-4 max-h-full">
                    <div className=' bg-white ring-1 ring-blue-3 rounded-2xl lg:w-[40vw] w-[80vw] px-8 text-center py-5'>
                        <div className='flex items-center gap-x-5  justify-center'>
                            <h1 className='text-titulo font-bold font-main mb-[0.781rem] text-blue-3'>{titulo}</h1>
                        </div> 

                        <div className='sm:grid sm:grid-cols-2 gap-x-4 '>
                            <div className='flex flex-col'>
                                <h2 className='text-start font-bold text-subtitulo font-main text-blue-3'>{tag}</h2>
                                <h3 className='text-start font-bold text-subtitulo font-main text-blue-3'>Evento de {cat}</h3>
                                <span className='text-start font-bold text-subtitulo font-main text-blue-3'>Estado:  
                                    <span className='font-regular'>
                                        {isPast ? ' No realizado' : " "+ estado}
                                    </span>
                                </span>
                                <span className='text-start font-bold text-subtitulo font-main text-blue-3'>Entrega:  
                                    <span className='font-regular'>
                                        { " "+ date.getDate()} de {month}, {hora}.
                                    </span>
                                </span>
                            </div>

                            <div className='flex justify-center items-center'>
                                <img className='rounded-2xl h-48' src={`http://localhost/backend-interactivas-II/vinx-app/public/storage/images_events/${image}`} alt="" />
                            </div>

                            <div className='col-span-2 mb-[1.562rem]'>
                                <h1 className='font-bold text-left text-blue-3 font-main text-subtitulo mt-[1.562rem]'>Descripcion:</h1>
                                <p className='text-start font-regular text-subtitulo font-main text-blue-3'>{texto}</p>
                            </div>
                        </div>

                        <button onClick={handleContinue} className='flex bg-blue-3 font-main font-pesado text-subtitulo justify-center focus:outline-none items-center mb-[1rem] text-center rounded-full text-white w-full h-[62px]'>
                            Regresar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
