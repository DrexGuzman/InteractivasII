import '../index.css'; // Importing CSS file
import Img from '../assets/upload.svg'; // Importing upload icon

// UpLoad component to display an upload button
export function UpLoad({ text }) {
    return (
        <div className='flex flex-col items-center mb-[1.562rem] m-auto'>
            {/* Upload button */}
            <div className='my-3 sm:size-20 size-12 overflow-hidden relative ring-2 ring-blue-3 rounded-full'>
                {/* Upload icon */}
                <img className='absolute sm:top-4 top-3 sm:size-12 size-6 sm:right-4 right-3' src={Img} alt="" />
                {/* Hidden file input */}
                <input className='absolute sm:top-7 sm:righ-0 opacity-0 right-1' type="file" name='image' />
            </div>
            {/* Text */}
            <h3 className='text-subtitulo text-blue-3'>{text}</h3>
        </div>
    );
}
