import '../index.css'

 export function Inputs({text}) {
  

  function clearDefaultValue(input) {
    if (input.value === input.defaultValue) {
      input.value = '';
    }
  }

  function restoreDefaultValue(input) {
    if (input.value === '') {
      input.value = input.defaultValue;
    }
  }

 return (
    <input
    className=" mb-[1.562rem] h-[62px] text-center ring-2 ring-blue-3 rounded-full text-blue-3 w-full h-10 focus: outline-none text-blue-3 font-bold bg-blue-1 text-texto font-regular font-second"
    defaultValue={text}
    onBlur={(e) => restoreDefaultValue(e.target)}
    onFocus={(e) => clearDefaultValue(e.target)}
    type="text"
  />
 );
 }