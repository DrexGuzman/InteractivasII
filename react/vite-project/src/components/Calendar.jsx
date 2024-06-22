import "../index.css";
import { useCalendar } from "../hooks/useCalendar";
import { useModal } from "../hooks/useModal";
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
  startOfWeek,
} from 'date-fns'

import { Link } from "react-router-dom";
import { AddEvent } from "./AddEvent";


export function Calendario({eventsList, addNewEvent, dayClicked, setDay}) {
console.log();
 let events = []; 
 if(!eventsList.isLoading){
  events = eventsList.data.events;
  
    
 }


 
 

 const modalAddEvents = useModal();

  const {days, firstDayCurrentMonth, nextMonth, previousMonth, selectedDay, setSelectedDay} = useCalendar();

/* setDay(selectedDay.getDate()); */


  return (

<>
      {modalAddEvents.isOpen && (
          <>
            <AddEvent closeModal={modalAddEvents.closeModal} addEvent={addNewEvent} action={'http://localhost/backend-interactivas-II/vinx-app/public/api/new-event/'} />
          </>
        )}

    <div className="flex flex-col gap-3 w-full ">
      <div className="flex  w-full  ">
        <div className="p-1 m-1 font-sans rounded-2xl  ring-[1px] ring-[#11567D] shadow-md w-full py-8 relative bg-blue-1 texto clr-blue-3 ">
          <div className="flex justify-around mb-8">
            <div>
              <p className="text-center texto">Poco</p>
              <div className="h-5 w-14 ring-[2px] ring-[#11567D]  bg-[#F5A747] rounded-lg  mt-3"></div>
            </div>
            <div>
              <p className="text-center texto">Moderado</p> 
              <div className="h-5 w-14 ring-[2px] ring-[#11567D] bg-gray-300 m-auto rounded-lg mt-3"></div>
            </div>
            <div className="place-items-center">
              <p className="text-center texto">Mucho</p>
              <div className="h-5 w-14 ring-[2px] ring-[#11567D] bg-gray-300 m-auto rounded-lg mt-3"></div>
            </div>
          </div>
          
          <div className="flex justify-around items-center">
            <button type="button" onClick={previousMonth} href="" className="w-5 h-5 ring-2 ring-[#11567D] rounded-full text-center flex items-center justify-center "><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.59844 9.66V7.58L1.15844 4.42V5.58L9.59844 2.42V0.34L0.378437 3.92V6.08L9.59844 9.66Z" fill="#11567D" />
            </svg></button>
            <p className="p-1 text-xl font-semibold text-center subtitulo-pesado w-[52%]">  
              {format(firstDayCurrentMonth, 'MMMM yyyy')}
            </p>
            <button onClick={nextMonth} type="button" href="" className="w-5 h-5 ring-2 ring-[#11567D] rounded-full text-center flex items-center justify-center"><svg className="-rotate-180" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.59844 9.66V7.58L1.15844 4.42V5.58L9.59844 2.42V0.34L0.378437 3.92V6.08L9.59844 9.66Z" fill="#11567D" />
            </svg></button>
          </div>
          <hr className="w-[100%] border-[#11567D ] m-auto"></hr>

          <div className="flex justify-around subtitulo font-normal mb-4 clr-blue-3 subtitulo-pesado">
            <div className="grid place-items-center">D</div>
            <div className="grid place-items-center">L</div>
            <div className="grid place-items-center">K</div>
            <div className="grid place-items-center">M</div>
            <div className="grid place-items-center">J</div>
            <div className="grid place-items-center">V</div>
            <div className="grid place-items-center">S</div>
          </div>
          <div className="grid grid-cols-7 gap-1 texto text-center">
            {days.map((day, dayIdx) => (
              <div onClick={() => dayClicked(day)}
                key={day.toString()}
                className={classNames(
                  dayIdx === 0 && colStartClasses[getDay(day)],
                  ' '
                )}
              >
                <button
                  type="button"
                  onClick={() => setSelectedDay(day)}
                  className={classNames(
                    isEqual(day, selectedDay) && 'text-white',
                    !isEqual(day, selectedDay) &&
                    isToday(day) &&
                    'text-red-500',
                    !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    isSameMonth(day, firstDayCurrentMonth) &&
                    'text-wite',
                    !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    'text-gray-400',
                    isEqual(day, selectedDay) && isToday(day) && 'bg-[#F5A747]',
                    isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    'bg-gray-900',
                    !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                    (isEqual(day, selectedDay) || isToday(day)) &&
                    '',
                    'mx-auto flex h-8 w-8 items-center justify-center rounded-full texto relative'
                  )}
                >
                  <time className="texto" dateTime={format(day, 'yyyy-MM-dd')}>
                    {format(day, 'd')}
                  </time>
                <div className="w-1 h-1 mx-auto top-0 right-0  absolute ">
                    {events.some((event) =>
                      isSameDay(parseISO(event.eve_datetime), day)
                    ) && (
                      <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                    )}
                  </div>
                </button>



              </div>
            ))}

          </div>  
          <div>

          
          
           <button onClick={modalAddEvents.openModal} className=" absolute  left-[48%] top-[95%] ring-2 ring-[#11567D] bg-blue-1 h-8 w-8 rounded-md flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25559 1.97652C8.25559 1.28296 7.69332 0.720703 6.99977 0.720703C6.30623 0.720703 5.74396 1.28296 5.74396 1.97652V5.74396H1.97652C1.28296 5.74396 0.720703 6.30623 0.720703 6.99977C0.720703 7.69332 1.28296 8.25559 1.97652 8.25559H5.74396V12.023C5.74396 12.7166 6.30623 13.2788 6.99977 13.2788C7.69332 13.2788 8.25559 12.7166 8.25559 12.023V8.25559H12.023C12.7166 8.25559 13.2788 7.69332 13.2788 6.99977C13.2788 6.30623 12.7166 5.74396 12.023 5.74396H8.25559V1.97652Z" fill="#11567D" />
          </svg>
          <span className=" text-center text-blue-3 font-main text-texto font-pesado sm:text-subtitulo text-nowrap  absolute top-8 ">Añadir nuevo</span>
           </button>
          
           </div>
         
        </div>

      </div>


       
      <Link to='dailyTask' className=" bg-blue-1 text-center rounded-full ring-1 ring-[#11567D] shadow-md  hidden sm:flex flex-col py-4 mt-12 ">
          Resumen de actividades Diarias y Semanales
        </Link>
    </div>
</>



  )


}

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]








