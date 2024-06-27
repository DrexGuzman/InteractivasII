import '../index.css';
import { InputsLeft } from '../common/InputsLeft';
import { Vinx } from '../common/VinxLogo';
import { UpLoad } from '../common/UpLoad';
import { ButtonBlue } from '../common/ButtonBlue';
import { useModal } from '../hooks/useModal';
import { Cuentanos } from '../components/Cuentanos';

export function FormRegi() {
  const modalCuentanos = useModal();

  return (
    <>
    

      {/*  // Logo  */}
      <div className='bg-blue-2 text-white text-main'>
        <Vinx />
      </div>

   {/*  Form to register */}
      <div className='flex flex-col items-end mx-10 lg:mx-72 xl:mx-96'>
        <h1 className='m-auto font-bold text-4xl mb-[1.562rem] text-blue-3'>
          Formulario de Registro
        </h1>

        <form action="http://localhost/backend-interactivas-II/vinx-app/public/api/user/create" method='POST' encType='multipart/form-data'>
        <UpLoad text='Cargar imagen' />
        <InputsLeft text='Nombre' type={'text'} name={'nombre'} />
        <InputsLeft text='Apellido' type={'text'} name={'apellido'}  />
        <InputsLeft text='carrera' type={'text'} name={'carrera'}  />
        <InputsLeft text='carnet' type={'text'} name={'carnet'}  />
        <InputsLeft text='correo' type={'text'} name={'correo'} />
        <InputsLeft text='Nombre de usuario' type={'text'} name={'usuario'}  />
        <InputsLeft text='Contraseña' type={'password'} name={'contrasena'} />
        <hr className='w-full mb-[1.562rem] border-blue-3' />
        <div className='flex bg-blue-3 font-main font-pesado text-subtitulo justify-center items-center mb-[1rem] text-center rounded-full text-white w-full h-[62px] '>
          
          {/* // Modal to show the form to register */} 
          {modalCuentanos.isOpen && (
              <Cuentanos modalClose={modalCuentanos.closeModal} />
          )}
          <div  onClick={modalCuentanos.openModal} className='focus:outline-none cursor-pointer'><h1>Continuar</h1></div>
        </div>
        </form>

        <a
          className='m-auto text-blue-3 mb-[3.124rem] font-pesado text-subtitulo'
          href='/signup'
        >
          Regresar
        </a>
      </div>
    </>
  );
}
