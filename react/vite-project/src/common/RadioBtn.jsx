import '../index.css';

// RadioButton component to render a set of radio buttons with a question
export function RadioButton({ question, opcion1, opcion2, opcion3 }) {

  // Function to handle radio button change
  function handleRadioChange(input) {
    if (input.target.id === 'opcion2.3') {
      // If the "Yes" radio input is selected
      setSickInputDisabled(false);
      setSickInputOpacity('100%');
    } else if (input.target.id === 'opcion2.2') {
      // If the "No" radio input is selected
      setSickInputDisabled(true);
      setSickInputOpacity('50%');
      setSickInputValue(defaultValue);
    }
  }

  return (
    <div>
      {/* Question */}
      <h2 className="flex texto sm:text-[1.625rem] text-white mt-10 mb-2 items-start sm:items-center">
        {question}
        <img
          alt=""
          className="size-7"
          src="./img/weight.svg"
        />
      </h2>

      {/* Radio button options */}
      <form className="flex flex-nowrap justify-center">
        {/* Option 1 */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <label
            className="texto sm:text-[1.625rem] text-white text-center"
            htmlFor="opcion2.1"
          >
            {opcion1}
          </label>
          <input
            className="size-5 appearance-none ring-4 ring-white rounded-full checked:bg-yellow-500 cursor-pointer"
            defaultValue="opcion1"
            id="opcion2.1"
            name="opcion"
            type="radio"
            onChange={handleRadioChange}
          />
        </div>

        {/* Option 2 */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <label
            className="texto sm:text-[1.625rem] text-white text-center"
            htmlFor="opcion2.2"
          >
            {opcion2}
          </label>
          <input
            className="size-5 appearance-none ring-4 ring-white rounded-full checked:bg-yellow-500 cursor-pointer"
            defaultValue="opcion1"
            id="opcion2.2"
            name="opcion"
            type="radio"
            onChange={handleRadioChange}
          />
        </div>

        {/* Option 3 */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <label
            className="texto sm:text-[1.625rem] text-white text-center"
            htmlFor="opcion2.3"
          >
            {opcion3}
          </label>
          <input
            className="size-5 appearance-none ring-4 ring-white rounded-full checked:bg-yellow-500 cursor-pointer"
            defaultValue="opcion1"
            id="opcion2.3"
            name="opcion"
            type="radio"
            onChange={handleRadioChange}
          />
        </div>
      </form>
    </div>
  );
}
