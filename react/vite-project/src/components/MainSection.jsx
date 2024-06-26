import { format } from 'date-fns';
import { Link, Route, Navigate, Routes } from 'react-router-dom';
import { Calendario } from './Calendar.jsx';
import { DailyTask } from './DailyTask.jsx';
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
export function MainSection({ events, carreraFilter, universidadFilter, cursosFilter, estudiantesFilter }) {
  const { dayClicked, day } = useSelectedDay();
  const { selectedDate } = useToday();
  const data = useAddEvent();
  console.log(day);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10 gap-y-12 sm:gap-y-4 sm:mb-4">
        <Calendario eventsList={events} addNewEvent={data.addNewEvent} dayClicked={dayClicked}  carreraFilter={carreraFilter} estudiantesFilter={universidadFilter} cursosFilter={cursosFilter} universidadFilter={estudiantesFilter}  />
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
                events.data.events.map((event, index) => {
                  const eventDate = event.eve_datetime.split(' ')[0];
                  const eventTime = event.eve_datetime.split(' ')[1];
                  const isSameDate = eventDate === format(day, 'yyyy-MM-dd');
                  const shouldRenderEvent = isSameDate && (
                    (event.categoria_nombre === "Carrera" && carreraFilter) ||
                    (event.categoria_nombre === "Universidad" && universidadFilter) ||
                    (event.categoria_nombre === "Curso" && cursosFilter) ||
                    (event.categoria_nombre === "Estudiantes" && estudiantesFilter)
                  );

                  if (shouldRenderEvent) {
                    return (
                      <Eventos
                        key={index}
                        event={event}
                        events={events}
                        cat={event.categoria_nombre}
                        titulo={event.eve_title}
                        texto={event.eve_description}
                        image={event.eve_image}
                        fecha={eventDate}
                        hora={eventTime}
                        tag={event.etiqueta_nombre}
                        estado={event.estado}
                        horaFormatted={event.hora}
                        curso={event.curso_nombre}
                      />
                    );
                  }

                  return null;
                })
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
