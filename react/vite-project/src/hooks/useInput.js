import { useState } from 'react';

// Custom hook to handle input state and actions
export const useInput = () => {
  
  // State to track whether the input is enabled or disabled
  let [isEnabled, setEnabled] = useState(true);

  // Function to enable the input
  function changeEnabled() {
    setEnabled(true);
  }

  // Function to disable the input
  function changeDisabled() {
    setEnabled(false);
  }

  // Return the input state and actions
  return { isEnabled, changeEnabled, changeDisabled };
}
