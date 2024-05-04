import '../index.css'
import { Inputs } from '../common/Inputs';
import { Button } from '../common/Button';
import { LoginGoogle } from '../common/LoginGoogle';
import { Vinx } from '../common/VinxLogo';

 export function Login() {

 return (
    <div className=" bg-sky-600 text-white flex   min-h-svh">
    <div className="flex flex-col justify-center items-center m-auto p-8 w-[29rem] ">

        <Vinx titulo="Iniciar Sesion" />
        <Inputs text="Usuario" />
        <Inputs text="Contraseña" />

      <a
        className="ml-[64%] text-sm text-nowrap"
        href="#"
      >
        Olvidó su contraseña?
      </a>

        <Button text="Iniciar Sesion" address="#" />

      <hr className="w-full" />
      <LoginGoogle/>
      <a href="singup.html">
        Registrarse
      </a>
    </div>
    <a href="singup.html">
    </a>
  </div>
 );
 }