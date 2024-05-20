import '../index.css';
import { Link } from 'react-router-dom';
export function ButtonBlue({text, address}) {
console.log({text, address})
    return (
            <div className='flex bg-blue-3 font-main font-pesado text-subtitulo justify-center items-center mb-[1rem] text-center rounded-full text-white w-full h-[62px] '>
                <Link to={`/${address}`} className=" focus: outline-none" >{text}</Link>
                
                {/* <button onClick={closeModal} className=" focus: outline-none">{text}</button> */}
                
            </div>
    );
    
}