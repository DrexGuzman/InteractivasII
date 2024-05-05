import '../index.css';
import Dot from '../assets/circle-white.svg';
import Star from '../assets/Star.svg';
import checkW from '../assets/checkWhite.svg';
import checkG from '../assets/CheckGreen.svg';
import {Task} from '../common/Task';

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
        <div className='grid grid-cols-4 gap-x-10 mb-8 px-8'>
            <div className='bg-sky-600 flex flex-col px-4 text-center rounded-3xl'>
                <h1 className=' py-4 text-white font-bold text-xl'>Actividades del día 25 de abril</h1>
                <div className='h-80 overflow-scroll'>
                    <div className=' flex flex-col'>

                        {/* <Task text="Desarrollo de aplicaciones interactivas II" /> */}


                        <div className='relative text-center items-center flex py-4 gap-4'>
                            <img className='size-4' src={Dot} alt='' />
                            <div className='absolute bg-white w-1 h-full left-[0.4rem]'></div>
                            <p className='text-white'>Desarrollo de aplicaciones interactivas II</p>
                            <div className='relative'>
                                <img src={checkW} alt="" id='img'/>
                            <input className='absolute top-0 left-0 size-6 opacity-0' type='checkbox' name='' id='check' onChange={check} />
                            </div>
                        </div>
                        <div className='relative text-center items-center flex py-4 gap-4'>
                            <img className='size-4' src={Dot} alt='' />
                            <div className='absolute bg-white w-1 h-full left-[0.4rem]'></div>
                            <p className='text-white'>Desarrollo de aplicaciones interactivas II</p>
                            <div className='relative'>
                                <img src={checkW} alt="" id='img'/>
                            <input className='absolute top-0 left-0 size-6 opacity-0' type='checkbox' name='' id='check' onChange={check} />
                            </div>
                        </div>
                        <div className='relative text-center items-center flex py-4 gap-4'>
                            <img className='size-4' src={Dot} alt='' />
                            <div className='absolute bg-white w-1 h-full left-[0.4rem]'></div>
                            <p className='text-white'>Desarrollo de aplicaciones interactivas II</p>
                            <div className='relative'>
                                <img src={checkW} alt="" id='img'/>
                            <input className='absolute top-0 left-0 size-6 opacity-0' type='checkbox' name='' id='check' onChange={check} />
                            </div>
                        </div>
                        
                        

                    </div>
                </div>
            </div>
            <div className='bg-sky-600 flex flex-col px-4 text-center rounded-3xl'>
                <h1 className=' py-4 text-white font-bold text-xl'>Actividades del 22 al 28 de abril</h1>
                <div className='h-80 overflow-scroll'>
                    <div className='flex flex-col'>
                        <div className='relative text-center items-center flex py-4 gap-4'>
                            <img className='size-4' src={Dot} alt='' />
                            <div className='absolute bg-white w-1 h-full left-[0.4rem]'></div>
                            <p className='text-white'>Desarrollo de aplicaciones interactivas II</p>
                            <div className='relative'>
                                <img src={checkW} alt="" id='img'/>
                            <input className='absolute top-0 left-0 size-6 opacity-0' type='checkbox' name='' id='check' onChange={check} />
                            </div>
                        </div>
                        <div className='relative text-center items-center flex py-4 gap-4'>
                            <img className='size-4' src={Dot} alt='' />
                            <div className='absolute bg-white w-1 h-full left-[0.4rem]'></div>
                            <p className='text-white'>Desarrollo de aplicaciones interactivas II</p>
                            <div className='relative'>
                                <img src={checkW} alt="" id='img'/>
                            <input className='absolute top-0 left-0 size-6 opacity-0' type='checkbox' name='' id='check' onChange={check} />
                            </div>
                        </div>
                        <div className='relative text-center items-center flex py-4 gap-4'>
                            <img className='size-4' src={Dot} alt='' />
                            <div className='absolute bg-white w-1 h-full left-[0.4rem]'></div>
                            <p className='text-white'>Desarrollo de aplicaciones interactivas II</p>
                            <div className='relative'>
                                <img src={checkW} alt="" id='img'/>
                            <input className='absolute top-0 left-0 size-6 opacity-0' type='checkbox' name='' id='check' onChange={check} />
                            </div>
                        </div>
                        
                        <div className='relative text-center items-center flex py-4 gap-4'>
                            <img className='size-4' src={Dot} alt='' />
                            <div className='absolute bg-white w-1 h-full left-[0.4rem]'></div>
                            <p className='text-white'>Desarrollo de aplicaciones interactivas II</p>
                            <div className='relative'>
                                <img src={checkW} alt="" id='img'/>
                            <input className='absolute top-0 left-0 size-6 opacity-0' type='checkbox' name='' id='check' onChange={check} />
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            <div className='col-span-2'>
                <div className='grid grid-cols-2 gap-8'>
                    <div className='rounded-2xl py-10 flex justify-center bg-sky-600 text-white text-2xl font-semibold'>
                        <h1>Fecha</h1>
                    </div>
                    <div className='rounded-2xl py-10 flex justify-center bg-sky-600 text-white text-2xl font-semibold'>
                        <input className='bg-transparent' type="date" />
                    </div>
                    <div className=' bg-sky-600 rounded-2xl col-span-2 py-10 text-center  text-white text-3xl font-semibold'>
                        <h1 className='mb-2'>Estadisticas</h1>
                        <div className='flex justify-between px-8 text-xl'>
                        <section>
                                <h2  className='my-2'>Actividades del día completadas</h2>
                                <div className='ring-2 ring-white rounded-lg w-max py-2'>
                                    <h2>4/5</h2>
                                    <div className='flex gap-x-4 px-8 py-2'>
                                        <img src={Star} alt="" />
                                        <img src={Star} alt="" />
                                        <img src={Star} alt="" />
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2  className='my-2'>Actividades del día completadas</h2>
                                <div className='ring-2 ring-white rounded-lg w-max py-2'>
                                    <h2>4/5</h2>
                                    <div className='flex gap-x-4 px-8 py-2'>
                                        <img src={Star} alt="" />
                                        <img src={Star} alt="" />
                                        <img src={Star} alt="" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
