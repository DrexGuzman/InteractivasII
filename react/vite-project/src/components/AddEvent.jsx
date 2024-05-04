import '../index.css'
import { Inputs } from '../common/Inputs';
import { UpLoad } from '../common/UpLoad';  

 export function AddEvent() {

 return (
    
        <div className='bg-sky-600 w-[80vw] px-8'>
        <div className='flex items-center gap-x-5'>
        <Inputs text="Nombre del evento" />
        <UpLoad/>
        </div>
        <div className='grid grid-cols-2'>
        <div>
            <h1>Fecha y hora</h1>
            <input type="date" name="" id="" />
            <input type="time" name="" id="" />
            <h1>Categoria</h1>
            <select name="" id="">
                <option value="Eventos de estudiante"></option>
            </select>
        </div>
        </div>
    </div>
 );
 }