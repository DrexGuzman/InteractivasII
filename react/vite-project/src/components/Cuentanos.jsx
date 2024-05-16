import '../index.css';
import VinxLogo from '../assets/vinxLogo.svg';
import Sleep from '../assets/moon.svg';
import Weight from '../assets/weight.svg';
import Heart from '../assets/heart.svg';
import { ButtonBlue } from '../common/ButtonBlue';
import { useInput } from '../hoocks/useInput';
import { useState } from 'react';

export function Cuentanos({ modalOpen, modalClose, isOpen }) {
  const { isEnabled, changeEnabled, changeDisabled } = useInput();
  const [value, setValue] = useState("Especifica cual?");

  function handleBothClick() {
    changeEnabled();
    setValue('Especifica cual?');
  }

  function handleFocus() {
    if (value === "Especifica cual?" ) {
      setValue('');
    }
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="flex overflow-y-auto fixed inset-0 z-50 justify-center items-center w-full max-h-full bg-gray-950 bg-opacity-50">
      <div className="p-4 max-h-full">
        {/* Modal content */}
        <div className="relative bg-white text-blue-3 rounded-[3.4rem] py-4">
          {/* Modal header */}
          <header className="flex justify-center">
            <div className="flex flex-col items-center sm:flex-row justify-center sm:gap-7">
              <img className="size-12 sm:size-11" src={VinxLogo} alt="Vinx Logo" />
              <h1 className="flex text-titulo font-pesado font-main items-center px-4">Cuéntanos más de ti</h1>
            </div>
          </header>

          <div className="px-4 sm:px-12">
            {/* Sleep section */}
            <section className="flex flex-col mt-[1.6rem]">
              <h2 className="flex font-main font-regular text-subtitulo items-center">¿Cuantas horas duermes al día? <img className="size-5" src={Sleep} alt="Sleep" /></h2>
              <form className="flex flex-nowrap justify-center">
                <div className="flex flex-col items-center gap-2 flex-1">
                  <label className="font-second text-texto text-center" htmlFor="opcion1.1">&lt; de 5 horas</label>
                  <input className="size-8 appearance-none ring-4 ring-blue-3 bg-blue-1 rounded-full checked:bg-yellow-500 cursor-pointer" type="radio" id="opcion1.1" name="sleep" value="less_than_5_hours" />
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <label className="font-second text-texto text-center" htmlFor="opcion1.2">8 horas</label>
                  <input className="size-8 appearance-none ring-4 ring-blue-3 bg-blue-1 rounded-full checked:bg-yellow-500 cursor-pointer" type="radio" id="opcion1.2" name="sleep" value="8_hours" />
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <label className="font-second text-texto text-center" htmlFor="opcion1.3">&gt; de 8 horas</label>
                  <input className="size-8 appearance-none ring-4 ring-blue-3 bg-blue-1 rounded-full checked:bg-yellow-500 cursor-pointer" type="radio" id="opcion1.3" name="sleep" value="more_than_8_hours" />
                </div>
              </form>
            </section>

            {/* Activity section */}
            <section className="flex flex-col mt-[1.6rem]">
              <h2 className="flex font-main font-regular text-subtitulo items-center">¿Qué tan frecuente realizas actividad física en la semana? <img className="size-7" src={Weight} alt="Weight" /></h2>
              <form className="flex flex-nowrap justify-center">
                <div className="flex flex-col items-center gap-2 flex-1">
                  <label className="font-second text-texto text-center" htmlFor="opcion2.1">Nunca</label>
                  <input className="size-8 appearance-none ring-4 ring-blue-3 bg-blue-1 rounded-full checked:bg-yellow-500 cursor-pointer" type="radio" id="opcion2.1" name="activity" value="never" />
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <label className="font-second text-texto text-center" htmlFor="opcion2.2">&lt; de 5 días</label>
                  <input className="size-8 appearance-none ring-4 ring-blue-3 bg-blue-1 rounded-full checked:bg-yellow-500 cursor-pointer" type="radio" id="opcion2.2" name="activity" value="less_than_5_days" />
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <label className="font-second text-texto text-center" htmlFor="opcion2.3">Todos</label>
                  <input className="size-8 appearance-none ring-4 ring-blue-3 bg-blue-1 rounded-full checked:bg-yellow-500 cursor-pointer" type="radio" id="opcion2.3" name="activity" value="everyday" />
                </div>
              </form>
            </section>

            {/* Disease section */}
            <section className="flex flex-col mt-[1.6rem]">
              <h2 className="flex font-main font-regular text-subtitulo items-center gap-1">¿Padeces alguna enfermedad? <img className="size-5" src={Heart} alt="Heart" /></h2>
              <form className="flex flex-wrap justify-center">
                <div className="flex flex-col items-center flex-1 gap-2">
                  <label className="font-second text-texto text-center" htmlFor="opcion3.1">No</label>
                  <input className="size-8 appearance-none ring-4 ring-blue-3 bg-blue-1 rounded-full checked:bg-yellow-500 cursor-pointer" type="radio" id="opcion3.1" name="disease" value="no" onClick={handleBothClick} />
                </div>
                <div className="flex flex-col items-center flex-1 gap-2">
                  <label className="font-second text-texto text-center" htmlFor="opcion3.2">Sí</label>
                  <input className="size-8 appearance-none ring-4 ring-blue-3 bg-blue-1 rounded-full checked:bg-yellow-500 cursor-pointer" type="radio" id="opcion3.2" name="disease" value="yes" onClick={changeDisabled} />
                </div>
                <div className="pt-7 sm:pt-auto flex flex-col items-center justify-end flex-1">
                  <input
                    className="text-center ring-2 ring-blue-3 rounded-full bg-blue-1 h-8 focus:outline-none"
                    type="text"
                    value={value}
                    disabled={isEnabled}
                    onFocus={handleFocus}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </section>

            <div className="flex flex-col items-center mt-7">
              <ButtonBlue text="Completar Registro" address="formRegi.html" />
              <button onClick={modalClose} className="texto sm:text-[1.625rem] text-amber-500">Regresar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
