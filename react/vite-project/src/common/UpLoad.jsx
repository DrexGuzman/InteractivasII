import '../index.css';
import Img from '../assets/upload.svg';

export function UpLoad({text}) {
    return (
        <div className='flex flex-col items-center'>
            <div className='my-3 size-20 overflow-hidden relative ring-2 ring-amber-500 rounded-full'>
                <img className='absolute top-4 size-12 right-4' src={Img} alt="" />
                <input className='absolute top-7 opacity-0' type="file" />
            </div>
            <h3 className='subtitulo'>{text}</h3>
        </div>
    );
}
