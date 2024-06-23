import { MainSection } from "../components/MainSection";
import { NavDrawer } from "../components/NavDrawer";
import { Link, Route, Navigate, Routes } from 'react-router-dom';
import { DailyTask } from "../components/DailyTask";
import { ProgressSection } from "../components/ProgressSection";
import {NextEvent} from "../components/NextEvent";
import {Courses} from "../components/Courses";
import {Filters} from "../components/Filters";
import { useFetchData } from '../hooks/useFetchData.js';
export function Vinx() {
    const  events = useFetchData();
    
    return (
        <>
        <NavDrawer />
        <div className="max-w-[90rem]  m-4 text min-[1445px]:m-auto">
    <div className="grid  grid-cols-1  sm:grid-cols-2  lg:grid-cols-3  gap-x-10 mb-8 8">
        <NextEvent eventsList={events} />
        <Courses eventsList={events} />
        <Filters />
    </div>
    <Routes>
          <Route path="/" element={ <MainSection events={events} /> } />
          <Route path="/progress" element={ <ProgressSection  eventsList={events}/> } />
          <Route path="/dailyTask" element={ <DailyTask eventsList={events}/> } />
        </Routes> 
    </div>
        
        </> 
    );
}
