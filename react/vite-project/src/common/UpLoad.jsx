import '../index.css'; // Importing CSS file
import Img from '../assets/upload.svg'; // Importing upload icon
import { useState } from 'react'; // Importing useState for managing state

// UpLoad component to display an upload button
export function UpLoad({ text }) {
    const [uploadedImage, setUploadedImage] = useState(null);

    // Function to handle file upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setUploadedImage(imageUrl);
        }
    };

    return (
        <div className='flex flex-col items-center mb-[1.562rem] m-auto'>
            {/* Upload button */}
            <div className='my-3 sm:w-20 sm:h-20 w-12 h-12 overflow-hidden relative ring-2 ring-blue-3 rounded-full'>
                {/* Upload icon */}
                <img
                    className='absolute top-0 left-0 w-full h-full object-cover rounded-full'
                    src={uploadedImage || Img}
                    alt=""
                />
                {/* Hidden file input */}
                <input
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                    type="file"
                    name='image'
                    onChange={handleImageUpload}
                />
            </div>
            {/* Text */}
            <h3 className='text-subtitulo text-blue-3'>{text}</h3>
        </div>
    );
}
