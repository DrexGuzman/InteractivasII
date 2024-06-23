import { useEffect, useState } from 'react';
import Star from '../assets/Star.svg'; // Importando ícono de estrella llena
import StarGray from '../assets/StarGray.svg'; // Importando ícono de estrella vacía
import '../index.css'; // Importando archivo CSS

// Componente Statistics para mostrar estadísticas de progreso
export function Statistics({ text, progress, total }) {
  // Número de estrellas a mostrar
  const starCount = 3; // Número total de estrellas

  // Calcular el número de estrellas llenas y vacías
  const filledStars = progress >= total ? starCount : Math.min(starCount, Math.floor((progress / total) * starCount));
  const emptyStars = starCount - filledStars;

  // Array de estrellas llenas
  const filledStarArray = Array(filledStars).fill(Star);
  // Array de estrellas vacías
  const emptyStarArray = Array(emptyStars).fill(StarGray);

  return (
    <section className='flex flex-col items-center'>
      {/* Título */}
      <h2 className='my-2'>{text}</h2>

      {/* Estadísticas de progreso */}
      <div className='ring-[0.5px] ring-blue-3 rounded-lg w-max py-2'>
        <h2>{progress}/{total}</h2> {/* Texto de progreso */}

        {/* Íconos de estrellas */}
        <div className='flex gap-x-4 px-8 py-2'>
          {filledStarArray.map((star, index) => (
            <img key={index} src={star} alt={`Star ${index}`} /> 
          ))}
          {emptyStarArray.map((star, index) => (
            <img key={index} src={star} alt={`StarGray ${index}`} /> 
          ))}
        </div>
      </div>
    </section>
  );
}

