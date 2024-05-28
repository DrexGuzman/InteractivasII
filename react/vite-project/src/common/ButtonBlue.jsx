import '../index.css';
import { Link } from 'react-router-dom';

// Button component to navigate to a specified address with a specific style
export function ButtonBlue({text, address, }) {
    return (
            <div className='flex bg-blue-3 font-main font-pesado text-subtitulo justify-center items-center mb-[1rem] text-center rounded-full text-white w-full h-[62px] '>
                <Link to={`/${address}`} className=" focus: outline-none" >{text}</Link>
            </div>
    );
    
}