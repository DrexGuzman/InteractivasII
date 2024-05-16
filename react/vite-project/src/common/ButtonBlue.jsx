import '../index.css';

export function ButtonBlue({text, address, closeModal}) {
    return (
            <div className='flex bg-blue-3 font-main font-pesado text-subtitulo justify-center items-center mb-[1rem] text-center rounded-full text-white w-full h-[62px] '>
                <button onClick={closeModal} className=" focus: outline-none">{text}</button>
            </div>
    );
}