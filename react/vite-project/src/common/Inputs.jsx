import '../index.css';

// Inputs component to render input fields with placeholder text
export function Inputs({ text, type, name, texto }) {

  // Function to clear default value when input is focused
  function clearDefaultValue(input) {
    if (input.value === input.defaultValue) {
      input.value = '';
      // Change input type to 'password' if type is 'password'
      if (type === "password") {
        input.type = 'password';
      }
    }
  }

  // Function to restore default value when input is blurred
  function restoreDefaultValue(input) {
    if (input.value === '') {
      input.value = input.defaultValue;
      input.type = 'text';
    }
  }

  return (
    <input
      className="w-full mb-4 h-16 text-center ring-2 ring-blue-3 rounded-full text-blue-3 focus:outline-none text-texto font-regular font-second bg-blue-1"
      defaultValue={texto? texto : text}
      name={name}
      onBlur={!texto ? (e) => restoreDefaultValue(e.target) : undefined}
      onFocus={!texto ? (e) => clearDefaultValue(e.target) : undefined}
    />
  );
}
