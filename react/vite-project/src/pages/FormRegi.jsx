import '../index.css'
import { InputsLeft } from '../common/InputsLeft';
import { Vinx } from '../common/VinxLogo';
import { UpLoad } from '../common/UpLoad';
import { ButtonBlue } from '../common/ButtonBlue';

 export function FormRegi({closeModal}) {

 return (
  <>
  <div className='bg-blue-2 text-white text-main'>
  <Vinx/>
  </div>
  <div className='flex flex-col items-end mx-10 lg:mx-72 xl:mx-96'>
    
    <h1 className='m-auto font-bold text-4xl mb-[1.562rem] text-blue-3 '>Formulario de Registro</h1>
    <UpLoad text="Cargar imagen" />
    
    <InputsLeft text="Nombre" type={"text"}/>
    <InputsLeft text="Apellido" type={"text"}/>
    <InputsLeft text="correo" type={"text"}/>
    <InputsLeft text="Nombre de usuario" type={"text"}/>
    <InputsLeft text="Contraseña" type={"password"}/>
    <hr className="w-full mb-[1.562rem] border-blue-3" />
    <ButtonBlue closeModal={closeModal} text="Continuar"  address="" />

    

    <a className='m-auto text-blue-3 mb-[3.124rem] font-pesado text-subtitulo' href="singup.html">Regresar</a>
  </div>
  </>
 );
 }

//  <div className=" bg-sky-600 text-white flex   min-h-svh">
//     <div className="flex flex-col justify-center items-center m-auto p-8 w-[29rem] ">
//         <Vinx titulo="Formulario de Registro" />
//         <UpLoad text="Cargar imagen" />

//         <InputsLeft text="Nombre" />
//         <InputsLeft text="Apellido" />
//         <InputsLeft text="Correo" />
//         <InputsLeft text="Nombre de usuario" />
//         <InputsLeft text="Contraseña" />

//       <hr className="w-full" />
//       <ButtonYellow text="Continuar" address="#"/>
//       <a className='font-semibold' href="singup.html">
//         Regresar
//       </a>
//     </div>
//     <a href="singup.html">
//     </a>
//   </div>