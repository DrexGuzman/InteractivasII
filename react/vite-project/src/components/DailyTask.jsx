import '../index.css';
import Star from '../assets/Star.svg';
import checkW from '../assets/checkWhite.svg';
import checkG from '../assets/CheckGreen.svg';
import {Task} from '../common/Task';
import {Statistics} from '../common/Statistics';

export function DailyTask() {

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
        <div className='grid lg:grid-cols-4 grid-cols-1 gap-y-4 gap-x-10 mb-8 '>

            <div className="flex flex-col justify-center items-center lg:hidden ">
           <h1 className="text-[2rem] text-sky-600 font-semibold">Fecha</h1> 
           <input  className="text-sky-600 px-4 w-full ring-2 ring-sky-600 rounded-full" type="date" />
           </div>
            
            <div className='bg-sky-600 lg:flex lg:flex-col px-8 text-center rounded-3xl'>
                <h1 className=' py-4 text-white font-bold text-xl'>Actividades del dia 25 de abril 2024</h1>
                <div className='h-80 overflow-y-auto scrollbar-hide'>
                    <div>
                        <Task text='Desarrollo de aplicaciones interactivas II' />
                        <Task text='Desarrollo de aplicaciones interactivas II' />
                        <Task text='Desarrollo de aplicaciones interactivas II' />
                        <Task text='Desarrollo de aplicaciones interactivas II' />
                        <Task text='Desarrollo de aplicaciones interactivas II' />
                        
                    </div>
                </div>
            </div>
            <div className='bg-sky-600 lg:flex lg:flex-col px-8 text-center rounded-3xl'>
                <h1 className=' py-4 text-white font-bold text-xl'>Actividades del 22 al 28 de abril</h1>
                <div className='h-80 overflow-scroll scrollbar-hide'>
                    <div>
                        <Task text='Desarrollo de aplicaciones interactivas II' />
                        <Task text='Desarrollo de aplicaciones interactivas II' />
                        <Task text='Desarrollo de aplicaciones interactivas II' />
                        <Task text='Desarrollo de aplicaciones interactivas II' />
                        <Task text='Desarrollo de aplicaciones interactivas II' />

                    </div>
                </div>
            </div>
            <div className='lg:col-span-2'>
                <div className='lg:grid lg:grid-cols-2 gap-4'>
                    <div className='hidden rounded-2xl py-10 lg:flex justify-center bg-sky-600 text-white text-2xl font-semibold'>
                        <h1>Fecha</h1>
                    </div>
                    <div className='hidden rounded-2xl py-10 lg:flex justify-center bg-sky-600 text-white text-2xl font-semibold'>
                        <input className='bg-transparent' type="date" />
                    </div>
                    <div className='bg-sky-600 rounded-2xl col-span-2 py-10 text-center  text-white text-3xl font-semibold'>
                        <h1 className='lg:mb-2'>Estadísticas</h1>
                        <div className='flex flex-col lg:flex-row justify-between gap-4 px-8 text-xl'>
                        
                        
                        <Statistics text={"Actividades del día completadas"} progress={4} total={5}/>

                        <Statistics text={"Actividades de la semana completadas"} progress={4} total={5}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
