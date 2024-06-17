import { format } from 'date-fns';
import { Calendario } from './Calendar.jsx';
import { Eventos } from './Events.jsx';
import { Courses } from './Courses.jsx';
import { Filters } from './Filters.jsx';
import { NextEvent } from './NextEvent.jsx';
import React, { useState } from 'react';
import { useAddEvent } from "../hooks/useAddEvents";
import { useSelectedDay } from '../hooks/useSelectedDay.js';
import { useToday } from '../hooks/useToday.js';
import { useFetchData } from '../hooks/useFetchData.js';
/**
 * MainSection component.
 * Renders the main section of the application.
 */
export function MainSection() {
  const { dayClicked, day } = useSelectedDay();
  const { selectedDate } = useToday();
  const  events = useFetchData();
  //console.log(day);

  const data = useAddEvent();




  return (
    
    <div className="max-w-[90rem] m-4 text min-[1445px]:m-auto relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 mb-8">
        <NextEvent />
        <Courses />
        <Filters />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10 gap-y-12 sm:gap-y-4 sm:mb-4">
        {!events.isLoading && (
          <Calendario eventsList={events.data[0].courses} addNewEvent={data.addNewEvent} dayClicked={dayClicked} />
        )

        }
        <div className="col-span-2 bg-blue-1 rounded-3xl ring-1 ring-[#11567D] h-[100%]">
          <h1 id='selectedDate' className="text-center text-[1.5rem] sm:text-[3rem] mt-4 mb-4 clr-blue-3 titulo">{`${selectedDate}`}</h1>
          <div className='overflow-y-auto scrollbar-hide h-[25rem]'>
            <ul className="flex flex-col px-4 sm:px-12 gap-4 mb-4 pb-4 overflow"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                overflow: "hidden",
              }}
            >
             {!events.isLoading && (
               events.data[0].courses.map((course, index) => (
                 //for each que recorra los eventos dentro de los cursos
                course.events.map((event, index) => (
                  event.eve_datetime.split(' ')[0] == format(day, 'yyyy-MM-dd') ? (
                    <Eventos key={index} cat={event.cat} titulo={event.eve_title} texto={event.eve_description} image={course.image} fecha={course.fecha} hora={event.hora} />
                  ) : null
                ))
                 
              ))
            )}
             

             {/*  {events.data.map((event, index) => (
                

                event.dia == day ? (
                  <Eventos key={index} cat={""} titulo={event.eve_title} texto={event.eve_description} image={"todo.image"} fecha={""} hora={event.hora} />
                 
                ) : null
              ))} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
