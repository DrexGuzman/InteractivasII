import React from 'react';
import checkW from '../assets/checkWhite.svg'; // Importing unchecked checkbox icon
import checkG from '../assets/CheckGreen.svg'; // Importing checked checkbox icon
import Dot from '../assets/circle-white.svg'; // Importing dot icon
import '../index.css'; // Importing CSS file
import { useHandleCheck } from '../hooks/useHandleCheck.js'; // Importing custom hook

// Task component to display a task with a checkbox
export function Task({ text }) {

  // Using the custom hook to handle checkbox state
  const { isChecked, handleCheck } = useHandleCheck();

  return (
    <div className='relative text-center items-center justify-between flex py-4 gap-4'>
      {/* Dot icon */}
      <img className='size-4' src={Dot} alt='' />

      {/* Blue vertical line */}
      <div className='absolute bg-blue-3 w-1 h-full left-[0.4rem]'></div>

      {/* Task text */}
      <p className='text-blue-3'>{text}</p>

      {/* Checkbox */}
      <div className='relative'>
        {/* Displaying the checked or unchecked checkbox icon based on the state */}
        <img src={isChecked ? checkG : checkW} alt="" id='img' />

        {/* Hidden checkbox input */}
        <input
          className='absolute top-0 left-0 size-6 opacity-0'
          type='checkbox'
          checked={isChecked}
          onChange={handleCheck}
        />
      </div>
    </div>
  );
}
