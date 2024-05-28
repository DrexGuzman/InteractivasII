import { useState, useEffect } from 'react';

// Custom hook that provides today's formatted date
export const useToday = () => {
  // State to store the selected date
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    // Get the current date
    const today = new Date();
    
    // Format the date to a readable string
    const dateString = today.toDateString();
    const [weekday, month, dayOfMonth, year] = dateString.split(' ');
    const formattedDate = `${weekday}, ${dayOfMonth} ${month} ${year}`;
    
    // Update the state with the formatted date
    setSelectedDate(formattedDate);
  }, []);

  // Log the selected date to the console (for debugging)
  console.log(selectedDate);

  // Return the selected date
  return { selectedDate };
}