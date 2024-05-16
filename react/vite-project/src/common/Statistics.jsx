import Star from '../assets/Star.svg';
import '../index.css';

export function Statistics({text, progress, total}) {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='my-2'>{text}</h2>
      <div className='ring-[0.5px] ring-blue-3 rounded-lg w-max py-2'>
        <h2>{progress}/{total}</h2>
        <div className='flex gap-x-4 px-8 py-2'>
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
        </div>
      </div>
    </section>
  );
}
