

export const useFilteredEvents = () => {
// const events = [
  //   { id: 1, name: 'Concierto de Rock' },
  //   { id: 2, name: 'Taller de pintura' },
  //   { id: 3, name: 'Exposición de arte' },
  //   { id: 4, name: 'Competencia de programación' },
  //   { id: 5, name: 'Festival de comida' },
  //   { id: 6, name: 'Conferencia de tecnología' }
  // ];

 const numeros = [1,2,3,4,5,6,7,8,9,10];

 numeros.forEach(numero => {
    console.log(numero);
 });


  return {numeros};
}