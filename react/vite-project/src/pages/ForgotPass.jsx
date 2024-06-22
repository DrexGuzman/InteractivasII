import { Vinx } from '../common/VinxLogo';
export function ForgotPass() {

    return (
        <div>
            <div className='bg-blue-2 text-white text-main'>
                <Vinx />
            </div>
            <form action="http://localhost/backend-interactivas-II/vinx-app/public/api/user/forgotPassword" method='POST'>
                <div className='flex flex-col items-end mx-10 lg:mx-72 xl:mx-96'>
                    <h1 className='m-auto font-bold text-4xl mb-[1.562rem] text-blue-3'>Recuperar contraseña</h1>
                    <input type='text' name='correo'
                        placeholder='Correo'
                        className="w-full mb-4 h-16 text-center ring-2 ring-blue-3 rounded-full text-blue-3 focus:outline-none text-texto font-regular font-second bg-blue-1"
                    />
                    <button type='submit' className='bg-blue-3 font-main font-pesado text-subtitulo justify-center items-center mb-[1rem] text-center rounded-full text-white w-full h-[62px]'>Enviar</button>
                    <a className='m-auto font-bold text-2xl mb-[1.562rem] text-blue-3' href="/">Regresar</a>
                </div>
                
            </form>
            

        </div>

    );
}