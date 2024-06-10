import { se } from 'date-fns/locale';
import { useState } from 'react';

// Custom hook to handle date selection and formatting
export const useSelectedDay = () => {
  const today = new Date();
  const initialDay = today.getDate();
  const [day, setDay] = useState(initialDay );

  // Function to handle the day click event
  const dayClicked = (day) => {
    // Create a new Date object from the clicked day
    const date = new Date(day);

    // Convert the date to a readable string
    const dateString = date.toDateString();
    const [weekday, month, dayOfMonth, year] = dateString.split(' ');
    const formattedDate = `${weekday}, ${dayOfMonth} ${month} ${year}`;
    setDay(dayOfMonth);
    // Set the inner HTML of an element with id 'selectedDate' to the formatted date
    document.getElementById('selectedDate').innerHTML = formattedDate;
  };

  // Return the dayClicked function
  return { dayClicked, day };
}
