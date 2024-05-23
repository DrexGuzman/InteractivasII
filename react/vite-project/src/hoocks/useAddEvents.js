import {useState } from 'react';

export const useAddEvent=()=> {
    
  const [eventosList, setEventosList] = useState([
    {
      titulo: "Conferencia de Innovación", texto: "Una conferencia sobre las últimas innovaciones tecnológicas.", image: "https://via.placeholder.com/150", fecha: "2024-06-01", hora: "10:00 AM", categoria: "universidad"
    }
  ]);
    
      function addNewEvent() {
      
          const nuevoEvento = {
            titulo: "Concierto de Música Clásica",
            texto: "Un concierto con las mejores piezas de música clásica.",
            image: "https://via.placeholder.com/150",
            fecha: "2024-06-02",
            hora: "7:00 PM",
            categoria: "entretenimiento"
        };
        setEventosList((prevEventosList) => [...prevEventosList, nuevoEvento]);
      
      }

      
    
      return {eventosList, addNewEvent}
}

