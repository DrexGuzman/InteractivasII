import '../index.css';
import { Inputs } from '../common/Inputs';
import { UpLoad } from '../common/UpLoad'; 
import { ComboBox } from '../common/ComboBox';

/**
 * Component for adding an event.
 * @param {function} closeModal - Function to close the modal.
 * @param {function} addEvent - Function to add the event.
 */
export function AddEvent({ closeModal, addEvent }) {

    /**
     * Clears the default value of an input.
     * @param {object} input - The input element.
     */
    function clearDefaultValue(input) {
        if (input.value === input.defaultValue) {
            input.value = '';
        }
    }

    /**
     * Restores the default value of an input.
     * @param {object} input - The input element.
     */
    function restoreDefaultValue(input) {
        if (input.value === '') {
            input.value = input.defaultValue;
            input.type = 'text';
        }
    }

    /**
     * Handles the continue button click.
     * Calls the addEvent function and closes the modal.
     */
    function handleContinue() {
        addEvent();
        closeModal();
    }

    return (
        <div className='inset-0 bg-gray-950 bg-opacity-50 fixed z-50'>
            <div className="flex overflow-y-auto fixed inset-0 z-50 justify-center items-center w-full  sm:max-h-full ">
                <div className="p-4 max-h-full">
                    <div className=' bg-white ring-1 ring-blue-3 rounded-2xl lg:w-[40vw] w-[80vw] px-8 text-center py-5'>
                        <div className='flex items-center gap-x-5'>
                            <Inputs text="Nombre del evento" type="text" />
                            <UpLoad/>
                        </div>

                        <div className='sm:grid sm:grid-cols-2 gap-x-4 p'>
                            <div>
                                <h1 className='text-blue-3 font-main text-subtitulo mb-[1rem]'>Fecha y hora</h1>
                        
                                <div className='flex gap-x-4'>
                                    <input className='w-full mb-[1.562rem] h-[62px] text-center ring-[0.031rem] ring-blue-3 rounded-full text-blue-3 focus: outline-none text-blue-3 font-bold  text-texto font-regular font-second bg-blue-1' type="date" name="" id="" />
                                    <input className='w-full mb-[1.562rem] h-[62px] text-center ring-[0.031rem] ring-blue-3 rounded-full text-blue-3 focus: outline-none text-blue-3 font-bold  text-texto font-regular font-second bg-blue-1' type="time" name="" id="" />
                                </div>
                            </div>

                            <ComboBox title="Etiqueta"/>
                            <ComboBox title="Curso"/>
                            <ComboBox title="Categoria"/>
                            <ComboBox title="Estado"/>
                            <ComboBox title="Grupo"/>

                            <div className='col-span-2 mb-[1.562rem]'>
                                <h1 className='font-bold text-left text-blue-3 font-main text-subtitulo mb-[1.562rem]'>Descripcion</h1>
                                <textarea className='w-full h-24 bg-blue-1 rounded-2xl p-4 ring-[0.031rem] ring-blue-3 text-blue-3 mb-[1.562rem]' name="" id="" defaultValue="Añade una hermosa descripción <3"
                                    onBlur={(e) => restoreDefaultValue(e.target)}
                                    onFocus={(e) => clearDefaultValue(e.target)}></textarea>
                            </div>
                        </div>
                     
                        <button onClick={handleContinue}  className='flex bg-blue-3 font-main font-pesado text-subtitulo justify-center focus:outline-none items-center mb-[1rem] text-center rounded-full text-white w-full h-[62px] '>Guardar Evento</button>    
                        
                        <a  onClick={closeModal} className='text-blue-3 mb-[3.124rem] font-bold text-subtitulo cursor-pointer' >Regresar</a>
                    </div>
                </div>
            </div>
        </div>
    );
}