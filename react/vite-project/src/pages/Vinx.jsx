import { MainSection } from "../components/MainSection";
import { NavDrawer } from "../components/NavDrawer";
import { Link, Route, Navigate, Routes } from 'react-router-dom';
import { DailyTask } from "../components/DailyTask";
import { ProgressSection } from "../components/ProgressSection";
import { NextEvent } from "../components/NextEvent";
import { Courses } from "../components/Courses";
import { Filters } from "../components/Filters";
import { useFetchData } from '../hooks/useFetchData.js';
import { useState } from "react";

export function Vinx() {
    const   events = useFetchData();
    
    const [isCarreraFilter, setCarreraFilter] = useState(true);
    const [isUniversidadFilter, setUniversidadFilter] = useState(true);
    const [isCursosFilter, setCursosFilter] = useState(true);
    const [isEstudiantesFilter, setEstudiantesFilter] = useState(true);

    function handleFilterChange(filterName) {
        switch (filterName) {
            case 'carrera':
                setCarreraFilter(prev => !prev);
                break;
            case 'universidad':
                setUniversidadFilter(prev => !prev);
                break;
            case 'curso':
                setCursosFilter(prev => !prev);
                break;
            case 'estudiantes':
                setEstudiantesFilter(prev => !prev);
                break;
            default:
                break;
        }
    }

    return (
        <>
            <NavDrawer eventos={events} handleFilterChange={handleFilterChange}/>
            <div className="max-w-[90rem] m-4 text min-[1445px]:m-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 mb-8">
                    <NextEvent eventsList={events} />
                    <Courses eventsList={events} />
                    <Filters handleFilterChange={handleFilterChange} />
                </div>
                <Routes>
                    <Route path="/" element={<MainSection events={events} carreraFilter={isCarreraFilter} estudiantesFilter={isEstudiantesFilter} cursosFilter={isCursosFilter} universidadFilter={isUniversidadFilter} />} />
                    <Route path="/progress" element={<ProgressSection eventsList={events} />} />
                    <Route path="/dailyTask" element={<DailyTask eventsList={events} />} />
                </Routes> 
            </div>
        </>
    );
}
