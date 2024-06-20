import { Courses } from "./Courses";
import { CoursesProgressName } from "./CoursesProgressName";
import { EvaluationsProgress } from "./EvaluationsProgress";
import { Filters } from "./Filters";
import { NavDrawer } from "./NavDrawer";
import { NextEvent } from "./NextEvent";
import { RadialProgress } from "./RadialProgress";

export function ProgressSection() {
    return (
        <>
                <div className="flex flex-col justify-center items-center sm:hidden mb-4">
                    <h1 className="text-[2rem] text-sky-600 font-semibold">Cursos</h1>
                    <select className="w-full ring-2 ring-sky-600 rounded-full" name="" id=""></select>
                </div>
                
                <div className="h-[33rem] overflow-x-hidden p-1 scrollbar-hide">
                    <section className="bg-blue-1 flex flex-wrap mt-4 rounded-2xl justify-around py-4 px-4 gap-y-4 ring-1 ring-[#11567D]">
                        <CoursesProgressName course={"Desarrollo de aplicaciones Interactivas"} semestre={"I Semestre 2024"} />
                        <EvaluationsProgress />
                        <RadialProgress porcent={55} />
                    </section>

                    <section className="bg-blue-1 flex flex-wrap mt-4 rounded-2xl justify-around py-4 px-4 gap-y-4 ring-1 ring-[#11567D]">
                        <CoursesProgressName course={"Desarrollo de aplicaciones Interactivas"} semestre={"I Semestre 2024"} />
                        <EvaluationsProgress />
                        <RadialProgress porcent={55} />
                    </section>

                    <section className="bg-blue-1 flex flex-wrap mt-4 rounded-2xl justify-around py-4 px-4 gap-y-4 ring-1 ring-[#11567D]">
                        <CoursesProgressName course={"Desarrollo de aplicaciones Interactivas"} semestre={"I Semestre 2024"} />
                        <EvaluationsProgress />
                        <RadialProgress porcent={95} />
                    </section>
                </div>
            
        </>
    );
}
