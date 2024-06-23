import '../index.css';
import { Task } from '../common/Task';
import { Statistics } from '../common/Statistics';
import { useEffect, useState } from 'react';
import { useWeek } from '../hooks/useWeek';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useEventsDay } from '../hooks/useEventsDay';

export function DailyTask({ eventsList }) {

    let events = [];
    if (!eventsList.isLoading) {
        events = eventsList.data.events;
    }


    const [day, setDay] = useState(format(new Date(), 'yyyy-MM-dd', { locale: es }));
    const [dayf, setDayf] = useState('');
    const [dayi, setDayi] = useState('');
    const [year, months, days] = day.split('-');
    const [yeari, monthsi, iday] = dayi.split('-');
    const [yearf, monthsf, fday] = dayf.split('-');
    const [month, setMonth] = useState(format(day, 'MMMM', { locale: es }));



    function handleDayChange(event) {
        setDay(event.target.value);
    }

    useEffect(() => {
        const { dayi, dayf } = useWeek(day);
        setDayi(dayi);
        setDayf(dayf);
        setMonth(format(day, 'MMMM', { locale: es }));


    }, [day]);


    const { eventsDay, eventsWeek, qtyEventsDay, qtyEventsWeek, qtyEventsDayCompleted, qtyEventsWeekCompleted } = useEventsDay(day, events, dayf, dayi);

    return (
        // Componnent to show the daily tasks
        <div className='grid lg:grid-cols-4 grid-cols-1 gap-y-4 gap-x-10 mb-8'>
            <div className="flex flex-col justify-center items-center lg:hidden ">
                <h1 className="text-[2rem] text-blue-3 font-semibold">Fecha</h1>
                <input className="text-blue-3 px-4 w-full ring-[0.5px] h-[52px] ring-blue-3 rounded-full" type="date" value={day} onChange={handleDayChange} />
            </div>

            <div className='bg-blue-1 ring-[0.5px] ring-blue-3 lg:flex lg:flex-col px-8 text-center rounded-3xl'>
                <h1 className='py-4 text-blue-3 font-bold text-xl'>Actividades del dia {days} de {month} 2024</h1>
                <div className='h-80 overflow-y-auto scrollbar-hide'>
                    <div>
                        {eventsDay.map((event, index) => (
                            <Task key={index} text={event.eve_title} />
                        ))}
                    </div>
                </div>
            </div>

            <div className='bg-blue-1 ring-[0.5px] ring-blue-3 lg:flex lg:flex-col px-8 text-center rounded-3xl'>
                <h1 className='py-4 text-blue-3 font-bold text-xl'>Actividades del {iday} al {fday} de {month}</h1>
                <div className='h-80 overflow-scroll scrollbar-hide'>
                    <div>
                        {eventsWeek.map((event, index) => (
                            <Task key={index} text={event.eve_title} />
                        ))}
                    </div>
                </div>
            </div>

            <div className='lg:col-span-2'>
                <div className='lg:grid lg:grid-cols-2 gap-4'>
                    <div className='hidden rounded-2xl py-10 lg:flex justify-center bg-blue-1 text-blue-3 ring-[0.5px] ring-blue-3 text-2xl font-semibold'>
                        <h1>Fecha</h1>
                    </div>
                    <div className='hidden rounded-2xl py-10 lg:flex justify-center bg-blue-1 text-blue-3 ring-[0.5px] ring-blue-3 text-2xl font-semibold'>
                        <input className='bg-transparent ring-blue-3 ring-[0.5px] rounded-xl px-4' type="date" value={day} onChange={handleDayChange} />
                    </div>
                    <div className='bg-blue-1 ring-[0.5px] ring-blue-3 rounded-2xl col-span-2 py-10 text-center text-blue-3 text-3xl font-semibold'>
                        <h1 className='lg:mb-2'>Estadísticas</h1>
                        <div className='flex flex-col lg:flex-row justify-between gap-4 px-8 text-xl'>
                            <Statistics text={"Actividades del día completadas"} progress={qtyEventsDayCompleted} total={qtyEventsDay} />
                            <Statistics text={"Actividades de la semana completadas"} progress={qtyEventsWeekCompleted} total={qtyEventsWeek} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
