import '../index.css';
import { Inputs } from '../common/Inputs';
import { Button } from '../common/Button';
import { LoginGoogle } from '../common/LoginGoogle';
import { Vinx } from '../common/VinxLogo';
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <>
      <div className='bg-blue-2 text-white text-main'>
        <Vinx />
      </div>
        <form action="http://localhost/backend-interactivas-II/vinx-app/public/api/user/auth" method='POST'>
      <div className='flex flex-col items-end mx-10 lg:mx-72 xl:mx-96'>
        <h1 className='m-auto font-bold text-4xl mb-[1.562rem] text-blue-3'>Iniciar sesion</h1>
        <Inputs text="Usuario" type={"text"} name={'usuario'} />
        <Inputs text="Contraseña" type={"password"} name={'contrasena'}/>
        <a className="text-blue-3 mb-[1.562rem] text-sm text-nowrap" href="#">Olvidó su contraseña?</a>
        <Button text="Iniciar Sesion"/>

        <hr className="w-full mb-[1.562rem] border-blue-3" />
        <LoginGoogle />
        <Link className='m-auto text-blue-3 mb-[3.124rem]' to='/signup'>Registrarse</Link>
      </div>
        </form>
    </>
  );
}
