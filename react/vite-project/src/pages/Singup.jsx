import '../index.css'
import { Inputs } from '../common/Inputs';
import { Button } from '../common/Button';
import { LoginGoogle } from '../common/LoginGoogle';
import { Vinx } from '../common/VinxLogo';
import VinxLogo from '../assets/vinxLogo.svg';


 export function Singup() {

 return (
    <div className=" bg-sky-600 text-white flex   min-h-svh">
    <div className="flex flex-col justify-center items-center m-auto p-8 w-[29rem] ">

        <Vinx titulo="Registrarse" />

        
    
        <Button text="Usuario nuevo" address="#"/>
           

      <hr className="w-full" />
      <LoginGoogle/>
      <a href="singup.html">
        Iniciar sesión
      </a>
    </div>
    <a href="singup.html">
    </a>
  </div>
 );
 }