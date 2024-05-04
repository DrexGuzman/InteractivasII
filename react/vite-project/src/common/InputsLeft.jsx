import '../index.css'

 export function InputsLeft({text}) {
  

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
    className=" mb-3 px-4 ring-2 ring-white rounded-full text-white bg-transparent w-full h-10 focus: outline-none"
    defaultValue={text}
    onBlur={(e) => restoreDefaultValue(e.target)}
    onFocus={(e) => clearDefaultValue(e.target)}
    type="text"
  />
 );
 }