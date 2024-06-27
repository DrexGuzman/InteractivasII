import "../index.css";
import { useCalendar } from "../hooks/useCalendar";
import { useModal } from "../hooks/useModal";
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
  isBefore,
} from 'date-fns';
import { Link } from "react-router-dom";
import { AddEvent } from "./AddEvent";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Calendario({ eventsList, addNewEvent, dayClicked, setDay, carreraFilter, universidadFilter, cursosFilter, estudiantesFilter }) {
  let events = [];
  if (!eventsList.isLoading) {
    events = eventsList.data.events;
  }

  const modalAddEvents = useModal();
  const { days, firstDayCurrentMonth, nextMonth, previousMonth, selectedDay, setSelectedDay } = useCalendar();

  const filterEvents = (event, day) => {
    return (
      isSameDay(parseISO(event.eve_datetime), day) &&
      ((event.categoria_nombre === "Carrera" && carreraFilter) ||
        (event.categoria_nombre === "Universidad" && universidadFilter) ||
        (event.categoria_nombre === "Curso" && cursosFilter) ||
        (event.categoria_nombre === "Estudiantes" && estudiantesFilter))
    );
  };

  return (
    <>
      {modalAddEvents.isOpen && (
        <AddEvent closeModal={modalAddEvents.closeModal} addEvent={addNewEvent} action={'http://localhost/backend-interactivas-II/vinx-app/public/api/new-event/'} />
      )}

      <div className="flex flex-col gap-3 w-full">
        <div className="flex w-full">
          <div className="p-1 m-1 font-sans rounded-2xl ring-[1px] ring-[#11567D] shadow-md w-full py-8 relative bg-blue-1 texto clr-blue-3">
            <div className="flex justify-around mb-8">
              <div>
                <p className="text-center texto">Poco</p>

                {events.length <= 2 ? (
                  <div className="h-5 w-14 ring-[2px] ring-[#11567D] bg-[#F5A747] rounded-lg mt-3"></div>
                ) : (
                  <div className="h-5 w-14 ring-[2px] ring-[#11567D] bg-gray-300 m-auto rounded-lg mt-3"></div>
                )}
              </div>
              <div>
                <p className="text-center texto">Moderado</p>
                {events.length >= 4 ? (
                  <div className="h-5 w-14 ring-[2px] ring-[#11567D] bg-[#F5A747] rounded-lg mt-3"></div>
                ) : (
                  <div className="h-5 w-14 ring-[2px] ring-[#11567D] bg-gray-300 m-auto rounded-lg mt-3"></div>
                )}
              </div>
              <div className="place-items-center">
                <p className="text-center texto">Mucho</p>
                {events.length >= 6 ? (
                  <div className="h-5 w-14 ring-[2px] ring-[#11567D] bg-[#F5A747] rounded-lg mt-3"></div>
                ) : (
                  <div className="h-5 w-14 ring-[2px] ring-[#11567D] bg-gray-300 m-auto rounded-lg mt-3"></div>
                )}
              </div>
            </div>

            <div className="flex justify-around items-center">
              <button type="button" onClick={previousMonth} className="w-5 h-5 ring-2 ring-[#11567D] rounded-full text-center flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.59844 9.66V7.58L1.15844 4.42V5.58L9.59844 2.42V0.34L0.378437 3.92V6.08L9.59844 9.66Z" fill="#11567D" />
                </svg>
              </button>
              <p className="p-1 text-xl font-semibold text-center subtitulo-pesado w-[52%]">
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
              </p>
              <button onClick={nextMonth} type="button" className="w-5 h-5 ring-2 ring-[#11567D] rounded-full text-center flex items-center justify-center">
                <svg className="-rotate-180" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.59844 9.66V7.58L1.15844 4.42V5.58L9.59844 2.42V0.34L0.378437 3.92V6.08L9.59844 9.66Z" fill="#11567D" />
                </svg>
              </button>
            </div>
            <hr className="w-[100%] border-[#11567D] m-auto"></hr>

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
              {days.map((day, dayIdx) => {
                const filteredEvents = events.filter((event) => filterEvents(event, day));
                const isPast = filteredEvents.some((event) => isBefore(parseISO(event.eve_datetime), new Date()));
                const isCompleted = filteredEvents.some((event) => event.estado === "Completada");
                return (
                  <div onClick={() => dayClicked(day)} key={day.toString()} className={classNames(dayIdx === 0 && colStartClasses[getDay(day)], ' ')}>
                    <button
                      type="button"
                      onClick={() => setSelectedDay(day)}
                      className={classNames(
                        isEqual(day, selectedDay) && 'text-white',
                        !isEqual(day, selectedDay) && isToday(day) && 'text-red-500',
                        !isEqual(day, selectedDay) && !isToday(day) && isSameMonth(day, firstDayCurrentMonth) && 'text-wite',
                        !isEqual(day, selectedDay) && !isToday(day) && !isSameMonth(day, firstDayCurrentMonth) && 'text-gray-400',
                        isEqual(day, selectedDay) && isToday(day) && 'bg-[#F5A747]',
                        isEqual(day, selectedDay) && !isToday(day) && 'bg-gray-900',
                        !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                        (isEqual(day, selectedDay) || isToday(day)) && '',
                        'mx-auto flex h-8 w-8 items-center justify-center rounded-full texto relative'
                      )}
                    >
                      <time className="texto" dateTime={format(day, 'yyyy-MM-dd')}>
                        {format(day, 'd')}
                      </time>
                      {filteredEvents.length > 0 && (
                        <div className={classNames(
                          'w-2 h-2 rounded-full absolute bottom-7 left-7', 
                          isCompleted ? 'bg-green-500' : isPast ? 'bg-red-500' : 'bg-sky-500'
                        )}></div>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            <button onClick={modalAddEvents.openModal} className="absolute left-[48%] top-[95%] ring-2 ring-[#11567D] bg-blue-1 h-8 w-8 rounded-md flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.25559 7.22222H14V6.05556H8.25559V0H5.74441V6.05556H0V7.22222H5.74441V14H8.25559V7.22222Z" fill="#11567D" />
              </svg>
              <span className="text-center text-blue-3 font-main text-texto font-pesado sm:text-subtitulo text-nowrap absolute top-8">Añadir nuevo</span>
            </button>
          </div>
        </div>
        <Link to='dailyTask' className="bg-blue-1 text-center rounded-full ring-1 ring-[#11567D] shadow-md hidden sm:flex flex-col py-4 mt-12">
          Resumen de actividades Diarias y Semanales
        </Link>
      </div>
    </>
  );
}

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
];
