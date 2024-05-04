import '../index.css'
import { Inputs } from '../common/Inputs';
import { UpLoad } from '../common/UpLoad'; 
import { ButtonYellow } from '../common/ButtonYellow'; 

 export function AddEvent() {

 return (
    
          <div className='bg-sky-600 lg:w-[40vw] w-[80vw] px-8 text-center py-8'>
          <div className='flex items-center gap-x-5'>
          <Inputs text="Nombre del evento" />
          <UpLoad/>
          </div>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-10 '>
          <div>
              <h1 className='text-white'>Fecha y hora</h1>
              
              <div className='flex gap-x-4'>
              <input className='w-full ring-1 ring-white rounded-lg bg-transparent text-white' type="date" name="" id="" />
              <input className='w-full ring-1 ring-white rounded-lg bg-transparent text-white' type="time" name="" id="" />
              </div>
              
              <h1 className='text-white'>Categoria</h1>
              <select className='w-full ring-1 ring-white rounded-lg bg-transparent text-white' name="" id="">
                  <option value="Carrera">Carrera</option>
                  <option value="Curso">Curso</option>
                  <option value="Universidad">Universidad</option>
                  <option value="Estudiante">Estudiante</option>
              </select>
              <h1 className='text-white'>Etiquetas</h1>
              <select className='w-full ring-1 ring-white rounded-lg bg-transparent text-white' name="" id="">
                  <option value="Evento">Evento</option>
                  <option value="Tarea">Tarea</option>
                  <option value="Proyecto">Proyecto</option>
                  <option value="Exposiciones">Exposiciones</option>
                  <option value="pruebas cortas">Pruebas cortas</option>
                  <option value="Comunicado">Comunicado</option>
              </select>
              <div className='w-1 bg-white'>
          </div>
          </div>
          
          <div>
              <h1 className='text-white'>Curso</h1>
              <select className='w-full ring-1 ring-white rounded-lg bg-transparent text-white' name="" id="">
                  <option value="Carrera">Carrera</option>
                  <option value="Curso">Curso</option>
                  <option value="Universidad">Universidad</option>
                  <option value="Estudiante">Estudiante</option>
              </select>
              <h1 className='text-white'>Grupo</h1>
              <select className='w-full ring-1 ring-white rounded-lg bg-transparent text-white' name="" id="">
                  <option value="Carrera">Carrera</option>
                  <option value="Curso">Curso</option>
                  <option value="Universidad">Universidad</option>
                  <option value="Estudiante">Estudiante</option>
              </select>
              <h1 className='text-white'>Estado</h1>
              <select className='w-full ring-1 ring-white rounded-lg bg-transparent text-white' name="" id="">
                  <option value="Evento">Evento</option>
                  <option value="Tarea">Tarea</option>
                  <option value="Comunicado">Comunicado</option>
              </select>
          </div>
          </div>
          <h1 className='text-white'>Descripcion</h1>
          <textarea className='w-full border-[1px] bg-transparent rounded-lg border-white text-white' name="" id=""></textarea>
      <ButtonYellow text="Agregar" address="#"/>
      <button className='text-white font-semibold'>Regresar</button>
      </div>
 );
 }