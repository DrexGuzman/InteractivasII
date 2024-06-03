import '../index.css';
import { Inputs } from '../common/Inputs';
import { Button } from '../common/Button';
import { LoginGoogle } from '../common/LoginGoogle';
import { Vinx } from '../common/VinxLogo';
import VinxLogo from '../assets/vinxLogo.svg';
import { Link } from 'react-router-dom';

export function Singup() {
  return (
    <>
      <div className='bg-blue-2 text-white text-main'>
        <Vinx/>
      </div>
      <div className='flex flex-col items-end mx-10 lg:mx-72 xl:mx-96'>
        <h1 className='m-auto font-bold text-4xl mb-[1.562rem] text-blue-3 '>Registrarse</h1>
        <div className='flex bg-blue-1 font-main font-bold text-subtitle justify-center items-center mb-4 text-center ring-2 ring-blue-3 rounded-full text-blue-3 w-full h-16'>
            <Link to="/newuser" className="focus:outline-none">Usuario nuevo</Link>
        </div>
        <hr className="w-full mb-[1.562rem] border-blue-3" />
        <LoginGoogle/>
        <a className='m-auto text-blue-3 mb-[3.124rem] ' href="/">Iniciar sesión</a>
      </div>
    </>
  );
}
