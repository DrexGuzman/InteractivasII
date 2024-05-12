import '../index.css'
import { Inputs } from '../common/Inputs';
import { UpLoad } from '../common/UpLoad'; 
import { ButtonBlue } from '../common/ButtonBlue';
import { ComboBox } from '../common/ComboBox';

 export function AddEvent() {

    function clearDefaultValue(input) {
        if (input.value === input.defaultValue) {
          input.value = '';
        }
      }
    
      function restoreDefaultValue(input) {
        if (input.value === '') {
          input.value = input.defaultValue;
          input.type = 'text';
        }
      }

 return (

    <div className='bg-white ring-1 ring-blue-3 rounded-2xl lg:w-[40vw] w-[80vw] px-8 text-center py-8'>
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
    <ButtonBlue text="Agregar" address="#"/>
    <a className='text-blue-3 mb-[3.124rem] font-bold text-subtitulo' href="singup.html">Regresar</a>
    </div>
    
          
 );
 }
{/* 
//  <div className='bg-white ring-1  ring-blue-3 lg:w-[40vw] w-[80vw] px-8 text-center py-8'>
//           <div className='flex items-center gap-x-5'>
//           <Inputs text="Nombre del evento" type="text" />
//           <UpLoad/>
//           </div>
//           <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-10 '>
//           <div>
//               <h1 className='text-white'>Fecha y hora</h1>
              
//               <div className='flex gap-x-4'>
//               <input className='w-full ring-1 ring-white rounded-lg bg-transparent text-white' type="date" name="" id="" />
//               <input className='w-full ring-1 ring-white rounded-lg bg-transparent text-white' type="time" name="" id="" />
//               </div>

//               <ComboBox title="Etiqueta"/>
              
//               <h1 className='text-white'>Categoria</h1>
//               <select className='w-full ring-1 ring-white rounded-lg bg-transparent text-white' name="" id="">
//                   <option value="Carrera">Carrera</option>
//                   <option value="Curso">Curso</option>
//                   <option value="Universidad">Universidad</option>
//                   <option value="Estudiante">Estudiante</option>
//               </select>
//               <h1 className='text-white'>Etiquetas</h1>
//               <select className='w-full ring-1 ring-white rounded-lg bg-transparent text-white' name="" id="">
//                   <option value="Evento">Evento</option>
//                   <option value="Tarea">Tarea</option>
//                   <option value="Proyecto">Proyecto</option>
//                   <option value="Exposiciones">Exposiciones</option>
//                   <option value="pruebas cortas">Pruebas cortas</option>
//                   <option value="Comunicado">Comunicado</option>
//               </select>
//               <div className='w-1 bg-white'>
//           </div>
//           </div>
          
//           <div>
//               <h1 className='text-white'>Curso</h1>
//               <select className='w-full ring-1 ring-white rounded-lg bg-transparent text-white' name="" id="">
//                   <option value="Carrera">Carrera</option>
//                   <option value="Curso">Curso</option>
//                   <option value="Universidad">Universidad</option>
//                   <option value="Estudiante">Estudiante</option>
//               </select>
//               <h1 className='text-white'>Grupo</h1>
//               <select className='w-full ring-1 ring-white rounded-lg bg-transparent text-white' name="" id="">
//                   <option value="Carrera">Carrera</option>
//                   <option value="Curso">Curso</option>
//                   <option value="Universidad">Universidad</option>
//                   <option value="Estudiante">Estudiante</option>
//               </select>
//               <h1 className='text-white'>Estado</h1>
//               <select className='w-full ring-1 ring-white rounded-lg bg-transparent text-white' name="" id="">
//                   <option value="Evento">Evento</option>
//                   <option value="Tarea">Tarea</option>
//                   <option value="Comunicado">Comunicado</option>
//               </select>
//           </div>
//           </div>
//           <h1 className='text-white'>Descripcion</h1>
//           <textarea className='w-full border-[1px] bg-transparent rounded-lg border-white text-white' name="" id=""></textarea>
//       <ButtonBlue text="Agregar" address="#"/>
//       <button className='text-white font-semibold'>Regresar</button>
//       </div> */}