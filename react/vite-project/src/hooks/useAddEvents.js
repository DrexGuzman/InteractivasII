import { useState } from 'react';

// Custom hook to handle adding new events
export const useAddEvent = () => {
  
  // State to store the list of events
  const [eventosList, setEventosList] = useState([
    {
      titulo: "Innovation Conference",
      texto: "A conference on the latest technological innovations.",
      image: "https://via.placeholder.com/150",
      fecha: "2024-06-01",
      hora: "10:00 AM",
      categoria: "university",
    },
  ]);

  // Function to add a new event
  function addNewEvent() {
    const nuevoEvento = {
      titulo: "Classical Music Concert",
      texto: "A concert featuring the best classical music pieces.",
      image: "https://via.placeholder.com/150",
      fecha: "2024-06-02",
      hora: "7:00 PM",
      categoria: "entertainment"
    };
    // Update the list of events by adding the new event
    setEventosList((prevEventosList) => [...prevEventosList, nuevoEvento]);
  }

  // Return the list of events and the function to add a new event
  return { eventosList, addNewEvent, setEventosList };
}


