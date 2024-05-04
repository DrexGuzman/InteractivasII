import '../index.css'
import React, { useState } from 'react';

 export function Cuentanos() {

   const [defaultValue, setDefaultValue] = useState('');
  const [sickInputDisabled, setSickInputDisabled] = useState(true);
  const [sickInputOpacity, setSickInputOpacity] = useState('50%');
  const [sickInputValue, setSickInputValue] = useState('');

//   useEffect(() => {
//     const inputElement = document.querySelector('input[name="sick"]');
//     setDefaultValue(inputElement.value);
//   }, []);

  function handleRadioChange(input) {
    if (input.target.id === 'opcion3.2') {
      // Si el radio input "Si" está seleccionado
      setSickInputDisabled(false);
      setSickInputOpacity('100%');
    } else if (input.target.id === 'opcion3.1') {
      // Si el radio input "No" está seleccionado
      setSickInputDisabled(true);
      setSickInputOpacity('50%');
      setSickInputValue(defaultValue);
    }
  }

return (

<div className="p-1 min-h-screen">
      <div className="max-w-[58rem] bg-sky-600 rounded-[3.4rem] py-20 m-auto">
        <header className="flex justify-center">
          <div className="flex flex-col sm:flex-row justify-center w-auto sm:gap-12">
            <img className="m-auto size-12 sm:size-16" src="./img/vinxLogo.svg" alt="" />
            <h1 className="flex subtitulo font-semibold items-center text-white sm:text-[2.5rem] sm:font-semibold">Cuentanos más de ti</h1>
          </div>
        </header>

        <div className="px-4 sm:px-12">
          <section className="flex flex-col">
          <h2 className="flex texto sm:text-[1.625rem] text-white items-center mt-10 mb-2">¿Cuantas horas duermes al día? <img className="size-5" src="./img/moon.svg" alt="" /></h2>
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

        <section className="flex flex-col">

        <h2 className="flex texto sm:text-[1.625rem] text-white mt-10 mb-2 items-start sm:items-center ">¿Que tan frecuente realizas actividad fisica la semana? <img className="size-7" src="./img/weight.svg" alt="" /></h2>
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
        <h2 className="flex texto sm:text-[1.625rem] text-white items-center mt-10 mb-2 gap-1">¿Padeces alguna enfermedad? <img className="size-5" src="./img/heart.svg" alt="" /></h2>
        <form className="flex flex-wrap justify-center">
          <div className="flex flex-col items-center flex-1 gap-2">
            <label className="texto  sm:text-[1.625rem] text-white text-center" htmlFor="opcion3.1">No</label>
            <input className="size-5 appearance-none ring-4 ring-white rounded-full  checked:bg-yellow-500 cursor-pointer" type="radio" id="opcion3.1" name="opcion3" value="opcion" onClick={() => avaiableSick(this)} />
          </div>
          <div className="flex flex-col items-center flex-1 gap-2">
            <label className="texto sm:text-[1.625rem] text-white text-center" htmlFor="opcion3.2">Si</label>
            <input className="size-5 appearance-none ring-4 ring-white rounded-full  checked:bg-yellow-500 cursor-pointer" type="radio" id="opcion3.2" name="opcion3" value="opcion" onClick={() => avaiableSick(this)} />
          </div>
          <div className="min-w-[22rem] pt-7 sm:pt-auto flex flex-col items-center justify-end flex-1">
            {/* <Inputs text="especifica cuál?" /> */}
            <input className='text-center  ring-2 ring-white rounded-full text-white bg-transparent w-full h-8 focus: outline-none' type="text" value={"Especifica cuál?"} />
          </div>
        </form>
      </section>

      <div className="flex flex-col items-center mt-7 gap-2">
        <a className="texto sm:text-[1.625rem] bg-[var(--clr-yelow-100)] text-white w-full text-center py-2 rounded-2xl" href="#">Completar registro</a>
        <a className="texto sm:text-[1.625rem] text-[var(--clr-yelow-100)]" href="formRegi.html">Regresar</a>
      </div>

    </div>
  </div>
</div>
    
);
  

 }