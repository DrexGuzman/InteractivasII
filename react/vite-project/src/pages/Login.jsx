import '../index.css';
import React, { useState, useEffect } from 'react';
import { Inputs } from '../common/Inputs';
import { Button } from '../common/Button';
import { LoginGoogle } from '../common/LoginGoogle';
import { Vinx } from '../common/VinxLogo';
import { Link } from 'react-router-dom';
import { set } from 'date-fns';

export function Login() {

  
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const[error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost/backend-interactivas-II/vinx-app/public/api/user/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: user,
        password: password,
      }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Almacenar el token en localStorage
        localStorage.setItem('token', data.token);
        // Redireccionar a principal
        window.location.href = 'http://localhost:5173/vinx';
      } else {
        
        setError('Usuario o contraseña incorrectos');
        document.getElementsByName('usuario')[0].value='';
        document.getElementsByName('contrasena')[0].value='';
      }
    })
    .catch(error => console.error('Error al iniciar sesión:', error));
};

  return (
    <>
      <div className='bg-blue-2 text-white text-main'>
        <Vinx />
      </div>
        {/* <form action="http://localhost/backend-interactivas-II/vinx-app/public/api/user/auth" method='POST'> */}
        <form onSubmit={handleSubmit}>
      <div className='flex flex-col items-end mx-10 lg:mx-72 xl:mx-96'>
        <h1 className='m-auto font-bold text-4xl mb-[1.562rem] text-blue-3'>Iniciar sesion</h1>
        <h1 className='m-auto text-red-600'>{error}</h1>

        <input type='text' name='usuario' 
          placeholder='Usuario'
          className="w-full mb-4 h-16 text-center ring-2 ring-blue-3 rounded-full text-blue-3 focus:outline-none text-texto font-regular font-second bg-blue-1"
          onChange={(e) => setUser(e.target.value)}
        />
        <input type='password' name='contrasena' 
          placeholder='Contraseña'
          className="w-full mb-4 h-16 text-center ring-2 ring-blue-3 rounded-full text-blue-3 focus:outline-none text-texto font-regular font-second bg-blue-1"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* <Inputs text="Contraseña" type={"password"} name={'contrasena'} onChange={(e) => setPassword(e.target.value)}/> */}
        <a className="text-blue-3 mb-[1.562rem] text-sm text-nowrap" href="/forgotpass">Olvidó su contraseña?</a>
        <Button text="Iniciar Sesion"/>

        <hr className="w-full mb-[1.562rem] border-blue-3" />
        <LoginGoogle />
        <Link className='m-auto text-blue-3 mb-[3.124rem]' to='/signup'>Registrarse</Link>
      </div>
        </form>
    </>
  );
}
