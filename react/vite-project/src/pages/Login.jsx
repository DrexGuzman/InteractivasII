import '../index.css'
import { Inputs } from '../common/Inputs';
import { Button } from '../common/Button';
import { LoginGoogle } from '../common/LoginGoogle';
import { Vinx } from '../common/VinxLogo';

 export function Login() {

 return (
    <div className="text-white flex min-h-svh flex flex-col items-center">
       <Vinx/>
    <div className="flex flex-col max-w-[36rem] 
     ">

       
        <div className='  flex flex-col '>
        <h1 className='font-bold text-4xl text-center mb-3 mt-4 text-blue-3 '>Iniciar sesion</h1>
        <Inputs text="Usuario" />
        <Inputs text="Contraseña" />

      <a
        className="text-blue-3 ml-[64%] mb-[1.562rem] text-sm text-nowrap"
        href="#"
      >
        Olvidó su contraseña?
      </a>

        <Button text="Iniciar Sesion" address="#" />

      <hr className="w-full mb-[1.562rem] border-blue-3" />
      <LoginGoogle/>
      <a className='text-blue-3' href="singup.html">
        Registrarse
      </a>
        </div>
    </div>
    <a href="singup.html">
    </a>
  </div>
 );
 }