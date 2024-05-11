import '../index.css'
import { Calendario } from './Calendar.jsx';
import { Eventos } from './Events.jsx';
import { Courses } from './Courses.jsx';
import { Filters } from './Filters.jsx';
import { NextEvent } from './NextEvent.jsx';

 export function MainSection() {

  

 return (
  
    <div className="max-w-[90rem]  m-4 text min-[1445px]:m-auto">
    <div className="grid  grid-cols-1  min-[430px]:grid-cols-2   xs:grid-cols-1 sm:grid-cols-3  gap-x-10 mb-8">
        <NextEvent />
        <Courses />
        <Filters />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-10 gap-y-4 h-[70rem] sm:h-[30rem] mb-32  ">
        <Calendario/>
        <div className=" col-span-2  bg-blue-1 rounded-3xl ring-1 ring-[#11567D] ">
            <h1 className="text-center  text-[1.5rem] sm:text-[3rem]  mt-4 mb-4 clr-blue-3 titulo">Jueves 25 Abril 2024</h1>
            <div className='overflow-y-auto scrollbar-hide h-[24rem] flex flex-col px-12  gap-4'>
            <Eventos/>
            </div>
        </div>
    </div>

    
</div>

 );
 }