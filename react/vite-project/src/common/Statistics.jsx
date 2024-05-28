import Star from '../assets/Star.svg'; // Importing star icon
import '../index.css'; // Importing CSS file

// Statistics component to display progress statistics
export function Statistics({ text, progress, total }) {
  return (
    <section className='flex flex-col items-center'>
      {/* Title */}
      <h2 className='my-2'>{text}</h2>
      
      {/* Progress statistics */}
      <div className='ring-[0.5px] ring-blue-3 rounded-lg w-max py-2'>
        <h2>{progress}/{total}</h2> {/* Progress text */}
        
        {/* Star icons */}
        <div className='flex gap-x-4 px-8 py-2'>
          <img src={Star} alt="" /> {/* Star icon */}
          <img src={Star} alt="" /> {/* Star icon */}
          <img src={Star} alt="" /> {/* Star icon */}
        </div>
      </div>
    </section>
  );
}
