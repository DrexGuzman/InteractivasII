import { Courses } from "./Courses";
import { Filters } from "./Filters";
import { NextEvent } from "./NextEvent";


export function ProgressSection() {
    return (
        <>
                    <NextEvent />
                    <Courses />
                    <Filters />
        </>
    );
}