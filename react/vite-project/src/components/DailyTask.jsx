import '../index.css';
import Dot from '../assets/circle-white.svg';
import Star from '../assets/Star.svg';

export function DailyTask() {
    return (
        <div className='grid grid-cols-4 gap-x-10 mb-8 px-8'>
            <div className='bg-sky-600 flex flex-col px-4 text-center rounded-3xl'>
                <h1 className=' py-4 text-white font-bold text-xl'>Actividades del día 25 de abril</h1>
                <div>
                    <div className='flex flex-col'>
                        <div className='relative text-center items-center flex py-8 gap-8'>
                            <img className='size-4' src={Dot} alt='' />
                            <div className='absolute bg-white w-1 h-full left-[0.4rem]'></div>
                            <p className='text-white'>Desarrollo de aplicaciones interactivas II</p>
                            <input type='checkbox' name='' id='' />
                        </div>
                        <div className='relative text-center items-center flex py-8 gap-8'>
                            <img className='size-4' src={Dot} alt='' />
                            <div className='absolute bg-white w-1 h-full left-[0.4rem]'></div>
                            <p className='text-white'>Desarrollo de aplicaciones interactivas II</p>
                            <input type='checkbox' name='' id='' />
                        </div>
                        <div className='relative text-center items-center flex py-8 gap-8'>
                            <img className='size-4' src={Dot} alt='' />
                            <div className='absolute bg-white w-1 h-full left-[0.4rem]'></div>
                            <p className='text-white'>Desarrollo de aplicaciones interactivas II</p>
                            <input type='checkbox' name='' id='' />
                        </div>



                    </div>
                </div>
            </div>
            <div className='bg-sky-600 flex flex-col px-4 text-center rounded-3xl'>
                <h1 className=' py-4 text-white font-bold text-xl'>Actividades del 22 al 28 de abril</h1>
                <div>
                    <div className='flex flex-col'>
                        <div className='relative text-center items-center flex py-8 gap-8'>
                            <img className='size-4' src={Dot} alt='' />
                            <div className='absolute bg-white w-1 h-full left-[0.4rem]'></div>
                            <p className='text-white'>Desarrollo de aplicaciones interactivas II</p>
                            <input type='checkbox' name='' id='' />
                        </div>
                        <div className='relative text-center items-center flex py-8 gap-8'>
                            <img className='size-4' src={Dot} alt='' />
                            <div className='absolute bg-white w-1 h-full left-[0.4rem]'></div>
                            <p className='text-white'>Desarrollo de aplicaciones interactivas II</p>
                            <input type='checkbox' name='' id='' />
                        </div>
                        <div className='relative text-center items-center flex py-8 gap-8'>
                            <img className='size-4' src={Dot} alt='' />
                            <div className='absolute bg-white w-1 h-full left-[0.4rem]'></div>
                            <p className='text-white'>Desarrollo de aplicaciones interactivas II</p>
                            <input type='checkbox' name='' id='' />
                        </div>



                    </div>
                </div>
            </div>
            <div className='bg-red-500 col-span-2'>
                <div className='grid grid-cols-2 gap-8'>
                    <div className='rounded-2xl py-10 flex justify-center bg-sky-600 text-white text-2xl font-semibold'>
                        <h1>Fecha</h1>
                    </div>
                    <div className='rounded-2xl py-10 flex justify-center bg-sky-600 text-white text-2xl font-semibold'>
                        <input className='bg-transparent' type="date" />
                    </div>
                    <div className=' bg-green-500 col-span-2 py-10 text-center  text-white text-2xl font-semibold'>
                        <h1 className='my-2'>Estadisticas</h1>
                        <div className='flex justify-between px-8'>
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
