import { Link } from 'react-router-dom';
import '../index.css';

export function Button({text, address}) {
    return (
            <div className='flex bg-blue-1 font-main font-pesado text-subtitulo justify-center items-center mb-[1.562rem] text-center ring-2 ring-blue-3 rounded-full text-blue-3 w-full h-[62px] '>
                <Link to={`/${address}`} className=" focus: outline-none" >{text}</Link>
            </div>
    );
}