import '../index.css'
import { InputsLeft } from '../common/InputsLeft';
import { ButtonYellow } from '../common/ButtonYellow';
import { Vinx } from '../common/VinxLogo';
import { UpLoad } from '../common/UpLoad';

 export function FormRegi() {

 return (
    <div className=" bg-sky-600 text-white flex   min-h-svh">
    <div className="flex flex-col justify-center items-center m-auto p-8 w-[29rem] ">
        <Vinx titulo="Formulario de Registro" />
        <UpLoad text="Cargar imagen" />

        <InputsLeft text="Nombre" />
        <InputsLeft text="Apellido" />
        <InputsLeft text="Correo" />
        <InputsLeft text="Nombre de usuario" />
        <InputsLeft text="Contraseña" />

      <hr className="w-full" />
      <ButtonYellow text="Continuar" address="#"/>
      <a className='font-semibold' href="singup.html">
        Regresar
      </a>
    </div>
    <a href="singup.html">
    </a>
  </div>
 );
 }