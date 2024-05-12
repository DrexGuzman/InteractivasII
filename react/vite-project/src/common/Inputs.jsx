import '../index.css'

 export function Inputs({text, type}) {
  

  function clearDefaultValue(input) {
    if (input.value === input.defaultValue) {
      input.value = '';
      if(type==="password"){
        input.type = 'password';
      }
    }
  }

  function restoreDefaultValue(input) {
    if (input.value === '') {
      input.value = input.defaultValue;
      input.type = 'text';
    }
  }

 return (
    
    <input
    className="w-full mb-[1.562rem] h-[62px] text-center ring-2 ring-blue-3 rounded-full text-blue-3 focus: outline-none text-blue-3 font-bold  text-texto font-regular font-second bg-blue-1"
    defaultValue={text}
    onBlur={(e) => restoreDefaultValue(e.target)}
    onFocus={(e) => clearDefaultValue(e.target)}
  />
 );
 }