import { Courses } from "./Courses";
import { CoursesProgressName } from "./CoursesProgressName";
import { EvaluationsProgress } from "./EvaluationsProgress";
import { Filters } from "./Filters";
import { NextEvent } from "./NextEvent";
import { RadialProgress } from "./RadialProgress";

export function ProgressSection() {
    return (
        <div className="max-w-[90rem]  m-4  text lg:m-auto">
            <div className="grid  grid-cols-1  min-[430px]:grid-cols-2   xs:grid-cols-1 sm:grid-cols-3  gap-x-10 mb-8">
                <NextEvent />
                <Courses />
                <Filters />
            </div>

            <div className="flex flex-col justify-center items-center sm:hidden mb-4">
           <h1 className="text-[2rem] text-sky-600 font-semibold">Cursos</h1> 
           <select className="w-full ring-2 ring-sky-600 rounded-full" name="" id=""></select>
           </div>
        <div className="h-[33rem] overflow-x-hidden scrollbar-hide ">

         
            
            <section className="bg-sky-600 flex flex-wrap  mt-4 rounded-2xl justify-around py-4 px-4 gap-y-4 ">
                    < CoursesProgressName course={"Desarrollo de aplicaciones Interactivas"} semestre={"I Semestre"} />

                    < EvaluationsProgress/>
                
                    < RadialProgress porcent={55} />
            </section>

            <section className="bg-sky-600 flex flex-wrap  mt-4 rounded-2xl justify-around py-4 px-4 gap-y-4 ">
                    < CoursesProgressName course={"Diseño web TM:6400"} semestre={"I Semestre"} />

                    < EvaluationsProgress/>
                
                    < RadialProgress porcent={85} />
            </section>

            <section className="bg-sky-600 flex flex-wrap  mt-4 rounded-2xl justify-around py-4 px-4 gap-y-4 ">
                    < CoursesProgressName course={"Lectura en Inglés para Informática - 001"} semestre={"I Semestre"} />

                    < EvaluationsProgress/>
                
                    < RadialProgress porcent={25} />
            </section>
            </div>





        </div>
    );
}