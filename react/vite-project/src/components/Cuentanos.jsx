import '../index.css';
import VinxLogo from '../assets/vinxLogo.svg';
import Sleep from '../assets/moon.svg';
import Weight from '../assets/weight.svg';
import Heart from '../assets/heart.svg';

import React, { useState, useEffect } from 'react';

export function Cuentanos() {
  // function health() {
  //   const [defaultValue, setDefaultValue] = useState('');
  //   const [sickInputValue, setSickInputValue] = useState('');
  //   const [sickInputDisabled, setSickInputDisabled] = useState(true);
  
  //   useEffect(() => {
  //     // Aquí podrías realizar cualquier operación necesaria al cargar la página
  //     setDefaultValue(document.querySelector('input[name="sick"]').value);
  //   }, []);
  
  //   const avaiableSick = (event) => {
  //     const inputId = event.target.id;
  
  //     if (inputId === 'opcion3.2') {
  //       // Si el radio input "Si" está seleccionado
  //       setSickInputDisabled(false);
  //     } else if (inputId === 'opcion3.1') {
  //       // Si el radio input "No" está seleccionado
  //       setSickInputDisabled(true);
  //       setSickInputValue(defaultValue);
  //     }
  //   };
  
  //   const clearDefaultValue = (event) => {
  //     if (event.target.value === event.target.defaultValue) {
  //       event.target.value = '';
  //     }
  //   };
  // }
  
  //   const restoreDefaultValue = (event) => {
  //     if (event.target.value === '') {
  //       event.target.value = event.target.defaultValue;
  //     }
  //   };

  return (
    <div className="p-1 min-h-screen">
      <div className="max-w-[58rem] bg-sky-600 rounded-[3.4rem] py-20 m-auto">
        <header className="flex justify-center">
          <div className="flex flex-col sm:flex-row justify-center w-auto sm:gap-12">
            <img className="m-auto size-12 sm:size-16" src={VinxLogo} alt="" />
            <h1 className="flex subtitulo font-semibold items-center text-white sm:text-[2.5rem] sm:font-semibold">Cuentanos más de ti</h1>
          </div>
        </header>

        <div className="px-4 sm:px-12">
          <section className="flex flex-col">
            <h2 className="flex texto sm:text-[1.625rem] text-white items-center mt-10 mb-2">¿Cuantas horas duermes al día? <img className="size-5" src={Sleep} alt="" /></h2>
            <form className="flex flex-nowrap justify-center">
              <div className="flex flex-col items-center gap-2 flex-1">
                <label className="sm:text-[1.625rem] texto text-white text-center" htmlFor="opcion1.1">&lt; de 5 horas</label>
                <input className="size-5 appearance-none ring-4 ring-white rounded-full checked:bg-yellow-500 cursor-pointer" type="radio" id="opcion1.1" name="opcion" value="opcion1" />
              </div>

              <div className="flex flex-col items-center gap-2 flex-1">
                <label className="texto sm:text-[1.625rem] text-white text-center" htmlFor="opcion1.2">8 horas</label>
                <input className="size-5 appearance-none ring-4 ring-white rounded-full checked:bg-yellow-500 cursor-pointer" type="radio" id="opcion1.2" name="opcion" value="opcion1" />
              </div>

              <div className="flex flex-col items-center gap-2 flex-1">
                <label className="texto sm:text-[1.625rem] text-white text-center" htmlFor="opcion1.3">&gt; de 8 horas</label>
                <input className="size-5 appearance-none ring-4 ring-white rounded-full checked:bg-yellow-500 cursor-pointer" type="radio" id="opcion1.3" name="opcion" value="opcion1" />
              </div>
            </form>
          </section>

          <section className="flex flex-col"></section>

        <section className="flex flex-col">

        <h2 className="flex texto sm:text-[1.625rem] text-white mt-10 mb-2 items-start sm:items-center ">¿Que tan frecuente realizas actividad fisica la semana? <img className="size-7" src={Weight} alt="" /></h2>
        <form className="flex flex-nowrap justify-center">
          <div className="flex flex-col items-center gap-2 flex-1">
            <label className="texto sm:text-[1.625rem] text-white text-center" htmlFor="opcion2.1"> Nunca </label>
            <input className="size-5 appearance-none ring-4 ring-white rounded-full  checked:bg-yellow-500 cursor-pointer" type="radio" id="opcion2.1" name="opcion" value="opcion1" />
          </div>

          <div className="flex flex-col items-center gap-2 flex-1">
            <label className="texto sm:text-[1.625rem] text-white text-center" htmlFor="opcion2.2">&lt; de 5 días</label>
            <input className="size-5 appearance-none ring-4 ring-white rounded-full  checked:bg-yellow-500 cursor-pointer" type="radio" id="opcion2.2" name="opcion" value="opcion1" />
          </div>

          <div className="flex flex-col items-center gap-2 flex-1">
            <label className="texto sm:text-[1.625rem] text-white text-center" htmlFor="opcion2.3">Todos</label>
            <input className="size-5 appearance-none ring-4 ring-white rounded-full  checked:bg-yellow-500 cursor-pointer" type="radio" id="opcion2.3" name="opcion" value="opcion1" />
          </div>
        </form>
      </section>

      <section className="flex flex-col">
        <h2 className="flex texto sm:text-[1.625rem] text-white items-center mt-10 mb-2 gap-1">¿Padeces alguna enfermedad? <img className="size-5" src={Heart} alt="" /></h2>
        <form className="flex flex-wrap justify-center">
          <div className="flex flex-col items-center flex-1 gap-2">
            <label className="texto  sm:text-[1.625rem] text-white text-center" htmlFor="opcion3.1">No</label>
            <input className="size-5 appearance-none ring-4 ring-white rounded-full  checked:bg-yellow-500 cursor-pointer" type="radio" id="opcion3.1" name="opcion3" value="opcion" onClick={(event) => health(event)}/>
          </div>
          <div className="flex flex-col items-center flex-1 gap-2">
            <label className="texto sm:text-[1.625rem] text-white text-center" htmlFor="opcion3.2">Si</label>
            <input className="size-5 appearance-none ring-4 ring-white rounded-full  checked:bg-yellow-500 cursor-pointer" type="radio" id="opcion3.2" name="opcion3" value="opcion" onClick={(event) => health(event)} />
          </div>
          <div className="min-w-[22rem] pt-7 sm:pt-auto flex flex-col items-center justify-end flex-1">
            {/* <Inputs text="especifica cuál?" /> */}
            <input className='text-center  ring-2 ring-white rounded-full text-white bg-transparent w-full h-8 focus: outline-none' type="text" defaultValue="Especifica cuál?" />
          </div>
        </form>
      </section>

      <div className="flex flex-col items-center mt-7 gap-2">
        <a className="texto sm:text-[1.625rem] bg-amber-500 text-white w-full text-center py-2 rounded-2xl" href="#">Completar registro</a>
        <a className="texto sm:text-[1.625rem] text-amber-500" href="formRegi.html">Regresar</a>
      </div>

    </div>
  </div>
</div>
    
);
  

 }