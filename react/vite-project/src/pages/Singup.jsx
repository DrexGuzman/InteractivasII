import '../index.css';
import { Inputs } from '../common/Inputs';
import { Button } from '../common/Button';
import { LoginGoogle } from '../common/LoginGoogle';
import { Vinx } from '../common/VinxLogo';
import VinxLogo from '../assets/vinxLogo.svg';

export function Singup() {
  return (
    <>
      <div className='bg-blue-2 text-white text-main'>
        <Vinx/>
      </div>
      <div className='flex flex-col items-end mx-10 lg:mx-72 xl:mx-96'>
        <h1 className='m-auto font-bold text-4xl mb-[1.562rem] text-blue-3 '>Registrarse</h1>
        <Button text="Usuario nuevo" address="newuser" />
        <hr className="w-full mb-[1.562rem] border-blue-3" />
        <LoginGoogle/>
        <a className='m-auto text-blue-3 mb-[3.124rem] ' href="#">Iniciar sesión</a>
      </div>
    </>
  );
}
