import { startOfWeek, endOfWeek, format, getDay } from 'date-fns';

export const useWeek = ($date) => {
    let start, end;
    // Verificar si $date es un lunes (getDay() devuelve 1 para lunes)
    if (getDay($date) == 0) {

        // Si es un lunes, mantener la fecha tal como está
        start = startOfWeek($date, { weekStartsOn: 8 });
        end = endOfWeek($date, { weekStartsOn: 8 });
       
    } else {
        // Si no es un lunes, calcular el inicio y fin de la semana
        start = startOfWeek($date, { weekStartsOn: 1 });
        end = endOfWeek($date, { weekStartsOn: 1 });
    }

    const dayi = format(start, 'yyyy-MM-dd');
    const dayf = format(end, 'yyyy-MM-dd');

    return { dayi, dayf };
};
