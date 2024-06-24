import{ format } from 'date-fns';



export const useEventsDay = (date, events, dayf, dayi) => {

 const eventsDay = [];
 const eventsWeek = [];
 let qtyEventsDay=0;
 let qtyEventsWeek=0;
 let qtyEventsDayCompleted=0;
 let qtyEventsWeekCompleted=0;
 
events.forEach(event => {
    
    if (format(event.eve_datetime,'yyyy-MM-dd') === date) {
        console.log('Evento del dia : '+event.estado);
        eventsDay.push(event);
        qtyEventsDay++;
        if (event.estado === 'Completada') {
            qtyEventsDayCompleted++;
        }
    }

    if (format(event.eve_datetime, 'yyyy-MM-dd') >= dayi && format(event.eve_datetime, 'yyyy-MM-dd') <= dayf) {
        console.log('Evento semanal: '+event.estado);
        eventsWeek.push(event);
        qtyEventsWeek++;
        if (event.estado === 'Completada') {
            qtyEventsWeekCompleted++;
        }
    }
}
);

    return {  
        eventsDay, eventsWeek, qtyEventsDay, qtyEventsWeek, qtyEventsDayCompleted, qtyEventsWeekCompleted
    };
}