import React, { useState } from 'react';
import checkW from '../assets/checkWhite.svg';
import checkG from '../assets/CheckGreen.svg';
import Dot from '../assets/circle-white.svg';
import '../index.css';
import { useHandleCheck } from '../hoocks/useHandleCheck.js';

export function Task({ text }) {

  const {isChecked, handleCheck} = useHandleCheck();

  return (
    <div className='relative text-center items-center justify-between flex py-4 gap-4'>
      <img className='size-4' src={Dot} alt='' />
      <div className='absolute bg-blue-3 w-1 h-full left-[0.4rem]'></div>
      <p className='text-blue-3'>{text}</p>
      <div className='relative'>
        <img src={isChecked ? checkG : checkW} alt="" id='img'/>
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