import { useState } from 'react';
import { startOfWeek, endOfWeek, format } from 'date-fns';
import { es } from 'date-fns/locale'



export const useWeek = ($date) => {

    const dayi = format(startOfWeek($date, { weekStartsOn: 1 }), 'yyyy-MM-dd'); // weekStartsOn: 1 significa que la semana empieza el lunes
    
    const dayf = format(endOfWeek($date, { weekStartsOn: 1 }), 'yyyy-MM-dd');

    return { dayi, dayf};
};