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
    {/* // Modal to show the form to register */} 
      {modalCuentanos.isOpen && (
        <>
          <Cuentanos modalClose={modalCuentanos.closeModal} />
        </>
      )}

      {/*  // Logo  */}
      <div className='bg-blue-2 text-white text-main'>
        <Vinx />
      </div>

   {/*  Form to register */}
      <div className='flex flex-col items-end mx-10 lg:mx-72 xl:mx-96'>
        <h1 className='m-auto font-bold text-4xl mb-[1.562rem] text-blue-3'>
          Formulario de Registro
        </h1>
        <UpLoad text='Cargar imagen' />

        <InputsLeft text='Nombre' type={'text'} />
        <InputsLeft text='Apellido' type={'text'} />
        <InputsLeft text='correo' type={'text'} />
        <InputsLeft text='Nombre de usuario' type={'text'} />
        <InputsLeft text='Contraseña' type={'password'} />
        <hr className='w-full mb-[1.562rem] border-blue-3' />
        <div className='flex bg-blue-3 font-main font-pesado text-subtitulo justify-center items-center mb-[1rem] text-center rounded-full text-white w-full h-[62px] '>
          <button onClick={modalCuentanos.openModal} className='focus:outline-none'>
            Continuar
          </button>
        </div>

        <a
          className='m-auto text-blue-3 mb-[3.124rem] font-pesado text-subtitulo'
          href='singup.html'
        >
          Regresar
        </a>
      </div>
    </>
  );
}
