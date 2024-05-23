import '../index.css'
import { Calendario } from './Calendar.jsx';
import { Eventos } from './Events.jsx';
import { Courses } from './Courses.jsx';
import { Filters } from './Filters.jsx';
import { NextEvent } from './NextEvent.jsx';
import React, { useState } from 'react';
import { useAddEvent } from "../hoocks/useAddEvents";
import { useSelectedDay } from '../hoocks/useSelectedDay.js';
import { useToday } from '../hoocks/useToday.js';
    
 export function MainSection() {
  
    const {dayClicked} = useSelectedDay();
    const{selectedDate}=useToday();
    
  const data = useAddEvent();

 return (
  
    <div className="max-w-[90rem]  m-4 text min-[1445px]:m-auto">
    <div className="grid  grid-cols-1  sm:grid-cols-2  lg:grid-cols-3  gap-x-10 mb-8 ">
        <NextEvent />
        <Courses />
        <Filters /> 
        
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10  gap-y-12 sm:gap-y-4   sm:mb-10  ">
        <Calendario eventsList={data.eventosList} addNewEvent={data.addNewEvent} dayClicked={dayClicked}/>
        <div className=" col-span-2  bg-blue-1 rounded-3xl ring-1 ring-[#11567D] ">
            <h1 id='selectedDate' className="text-center  text-[1.5rem] sm:text-[3rem]  mt-4 mb-4 clr-blue-3 titulo">{`${selectedDate}`}</h1>
            <div className='overflow-y-auto scrollbar-hide h-[24rem] flex flex-col px-4 sm:px-12 gap-4 mb-4 pb-4 '>
            {data.eventosList.map((evento, index) => (
                    <Eventos key={index} cat={evento.categoria} titulo={evento.titulo} texto={evento.texto} image={evento.image} fecha={evento.fecha} hora={evento.hora} />
                ))}
            </div>
        </div>
    </div>

    
</div>

 );
 }