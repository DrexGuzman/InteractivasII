import { set } from 'date-fns';
import { se } from 'date-fns/locale';
import { useState, useEffect } from 'react';

// Custom hook that provides today's formatted date
export const useToday = () => {
  // State to store the selected date
  const [selectedDate, setSelectedDate] = useState('');
  const [day, setDay] = useState('');

  useEffect(() => {
    // Get the current date
    const today = new Date();
    
    // Format the date to a readable string
    const dateString = today.toDateString();
    const [weekday, month, dayOfMonth, year] = dateString.split(' ');
    const formattedDate = `${weekday}, ${dayOfMonth} ${month} ${year}`;
    setDay(dayOfMonth);

    // Update the state with the formatted date and day of the week
    setSelectedDate(formattedDate);
    
  }, []);

  function setFecha(fecha) {
    setDay(fecha);
  }

  // Log the selected date to the console (for debugging)
  console.log(selectedDate);

  // Return the selected date and day of the week
  return { selectedDate, day, setFecha };
}
