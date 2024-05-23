import { useState, useEffect } from 'react';

export const useToday = () => {
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const today = new Date();
    setSelectedDate(today.toDateString());
     //const today = new Date();
     const dateString = today.toDateString();
     const [weekday, month, dayOfMonth, year] = dateString.split(' ');
     const formattedDate = `${weekday}, ${dayOfMonth} ${month} ${year}`;
     setSelectedDate(formattedDate);
  }, []);
  console.log(selectedDate);

   return {selectedDate};
}