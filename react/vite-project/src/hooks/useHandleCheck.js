import { useState } from 'react';

// Custom hook to handle checkbox state and actions
export const useHandleCheck = (status) => {
  
  // State to track whether the checkbox is checked or unchecked
  const [isChecked, setIsChecked] = useState(status === 'Completada' ? true : false);
  
  // Function to handle checkbox click
  // const handleCheck = () => {
  //   // Toggle the checkbox state
  //   setIsChecked(!isChecked);
  // };

  // Return the checkbox state and handle function
  return { isChecked };
}
