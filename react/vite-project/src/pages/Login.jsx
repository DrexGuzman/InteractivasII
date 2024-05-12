import '../index.css'
import { Inputs } from '../common/Inputs';
import { Button } from '../common/Button';
import { LoginGoogle } from '../common/LoginGoogle';
import { Vinx } from '../common/VinxLogo';

 export function Login() {

 return (

  <>
  <div className='bg-blue-2 text-white text-main'>
  <Vinx/>
  </div>
  <div className='flex flex-col items-end mx-10 lg:mx-72 xl:mx-96'>
    
    <h1 className='m-auto font-bold text-4xl mb-[1.562rem] text-blue-3 '>Iniciar sesion</h1>
    
    <Inputs text="Usuario" type={"text"} />

    <Inputs text="Contraseña" type={"password"} />

    <a className="text-blue-3 mb-[1.562rem] text-sm text-nowrap"href="#">Olvidó su contraseña?</a>

    <Button text="Iniciar Sesion" address="#" />

    <hr className="w-full mb-[1.562rem] border-blue-3" />

    <LoginGoogle/>

    <a className='m-auto text-blue-3 mb-[3.124rem] ' href="singup.html">Registrarse</a>
  </div>
  </>
    
 );
 }
