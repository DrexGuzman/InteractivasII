import checkW from '../assets/checkWhite.svg';
import checkG from '../assets/CheckGreen.svg';
import Dot from '../assets/circle-white.svg';
import '../index.css';

export function Task({text}) {

     function check() {
         const check = document.getElementById('check');
         const img = document.getElementById('img');
         check.addEventListener('change', () => {
             if (check.checked) {
                 img.src = checkG;
             } else {
                 img.src = checkW;
             }
         });
     }

    return (
        <div className='relative text-center items-center justify-between flex py-4 gap-4'>
        <img className='size-4' src={Dot} alt='' />
        <div className='absolute bg-blue-3 w-1 h-full left-[0.4rem]'></div>
        <p className='text-blue-3'>{text}</p>
        <div className='relative'>
            <img src={checkW} alt="" id='img'/>
         <input className='absolute top-0 left-0 size-6 opacity-1' type='checkbox' name='' id='check' onChange={check}/>  
        </div>
    </div>
    );
  }