import {useState } from 'react';

export const useSelectedDay=()=> {
      
    const dayClicked = (day) => {
        const date = new Date(day);
        const dateString = date.toDateString();
        const [weekday, month, dayOfMonth, year] = dateString.split(' ');
        const formattedDate = `${weekday}, ${dayOfMonth} ${month} ${year}`;
        document.getElementById('selectedDate').innerHTML = formattedDate;
      };
  
    return {dayClicked}
}