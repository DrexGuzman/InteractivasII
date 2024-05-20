import { NavDrawer } from "../components/NavDrawer";
import { DailyTask } from "../components/DailyTask";
import {NextEvent} from "../components/NextEvent";
import {Courses} from "../components/Courses";
import {Filters} from "../components/Filters";

export function ResumeActivities(){

    return(
        <>
        <NavDrawer />
        <div className="max-w-[90rem]  m-4 text min-[1445px]:m-auto">
    <div className="grid  grid-cols-1  sm:grid-cols-2  lg:grid-cols-3  gap-x-10 mb-8 8">
        <NextEvent />
        <Courses />
        <Filters />
    </div>
        <DailyTask />
    </div>
        </>
    );
}