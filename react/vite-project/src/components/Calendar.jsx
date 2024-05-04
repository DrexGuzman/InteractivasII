import "../index.css";


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

import { Fragment, useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Calendario() {

  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  let days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfMonth(endOfMonth(firstDayCurrentMonth)),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  return (






    <div className="flex flex-col gap-3 w-full ">
      <div className="flex  w-full  ">
        <div className="font-sans rounded-2xl  w-full  ring-2 ring-white shadow-xl py-8 px-12 relative bg-sky-600 text-white ">
          <div class="flex justify-around mb-8">
            <div>
              <p class="text-center texto">Poco</p>
              <div class="h-5 w-12  bg-[#F5A747] rounded-full mt-3"></div>
            </div>
            <div>
              <p class="text-center texto">Moderado</p>
              <div class="h-5 w-12 bg-gray-300 m-auto rounded-full mt-3"></div>
            </div>
            <div class="place-items-center">
              <p class="text-center texto">Mucho</p>
              <div class="h-5 w-12 bg-gray-300 m-auto rounded-full mt-3"></div>
            </div>
          </div>
          <div class="flex justify-around items-center">
            <button type="button" onClick={previousMonth} href="" class="w-5 h-5 ring-2 ring-[#F5A747] rounded-full text-center flex items-center justify-center"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.59844 9.66V7.58L1.15844 4.42V5.58L9.59844 2.42V0.34L0.378437 3.92V6.08L9.59844 9.66Z" fill="#F5A747" />
            </svg></button>
            <p class="p-1 text-xl font-semibold text-center subtitulo w-[52%]">
              {format(firstDayCurrentMonth, 'MMMM yyyy')}
            </p>
            <button onClick={nextMonth} type="button" href="" class="w-5 h-5 ring-2 ring-[#F5A747] rounded-full text-center flex items-center justify-center"><svg class="-rotate-180" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.59844 9.66V7.58L1.15844 4.42V5.58L9.59844 2.42V0.34L0.378437 3.92V6.08L9.59844 9.66Z" fill="#F5A747" />
            </svg></button>
          </div>
          <hr class="w-[100%] border-[#F5A747] m-auto"></hr>

          <div className="flex justify-around subtitulo font-normal mb-4 text-white">
            <div className="grid place-items-center">D</div>
            <div className="grid place-items-center">L</div>
            <div className="grid place-items-center">K</div>
            <div className="grid place-items-center">M</div>
            <div className="grid place-items-center">J</div>
            <div className="grid place-items-center">V</div>
            <div className="grid place-items-center">S</div>
          </div>
          <div className="grid grid-cols-7 gap-1 font-semibold text-center">
            {days.map((day, dayIdx) => (
              <div
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
                    'font-semibold',
                    'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                  )}
                >
                  <time dateTime={format(day, 'yyyy-MM-dd')}>
                    {format(day, 'd')}
                  </time>
                </button>


              </div>
            ))}

          </div>  
          <div>

          
          
           <button  class="absolute z-30 left-[45%] top-[95%] ring-2 ring-white bg-sky-600 h-8 w-8 rounded-md flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25559 1.97652C8.25559 1.28296 7.69332 0.720703 6.99977 0.720703C6.30623 0.720703 5.74396 1.28296 5.74396 1.97652V5.74396H1.97652C1.28296 5.74396 0.720703 6.30623 0.720703 6.99977C0.720703 7.69332 1.28296 8.25559 1.97652 8.25559H5.74396V12.023C5.74396 12.7166 6.30623 13.2788 6.99977 13.2788C7.69332 13.2788 8.25559 12.7166 8.25559 12.023V8.25559H12.023C12.7166 8.25559 13.2788 7.69332 13.2788 6.99977C13.2788 6.30623 12.7166 5.74396 12.023 5.74396H8.25559V1.97652Z" fill="white" />
          </svg>
           </button>
           </div>
         
        </div>

      </div>

      <div className="flex flex-col  ">
        <span class=" text-center text-sky-600 text-nowrap font-semibold sm:text-[1.625rem]  ">Añadir evento</span>

       
      </div>

       
      <div class=" bg-sky-600 text-center rounded-full ring-2 ring-white shadow-xl flex flex-col py-4 px-8">
          Resumen de actividades Diarias y Semanales
        </div>
    </div>


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








