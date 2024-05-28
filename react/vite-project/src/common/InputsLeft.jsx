import '../index.css';

// InputsLeft component to render input fields with placeholder text and left padding
export function InputsLeft({ text, type }) {

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
      className="w-full mb-4 h-16 pl-10 ring-2 ring-blue-3 rounded-full text-blue-3 focus:outline-none text-texto font-regular font-second bg-blue-1"
      defaultValue={text}
      onBlur={(e) => restoreDefaultValue(e.target)}
      onFocus={(e) => clearDefaultValue(e.target)}
      type="text"
    />
  );
}
