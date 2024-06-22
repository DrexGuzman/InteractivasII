import{ format } from 'date-fns';



export const useEventsDay = (date, events, dayf, dayi) => {
 const eventsDay = [];
 const eventsWeek = [];
 
events.forEach(event => {
    
    if (format(event.eve_datetime,'yyyy-MM-dd') === date) {
        eventsDay.push(event);
    }

    if (format(event.eve_datetime, 'd') >= dayi && format(event.eve_datetime, 'd') <= dayf) {
        eventsWeek.push(event);
    }
});

    return {  
        eventsDay, eventsWeek
    };
}