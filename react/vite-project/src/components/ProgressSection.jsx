import { Courses } from "./Courses";
import { Filters } from "./Filters";
import { NextEvent } from "./NextEvent";
import { RadialProgress } from "./RadialProgress";

export const ProgressSection = () => {
    return (
        <div className="max-w-[90rem]  m-4 text lg:m-auto">
            <div className="grid  grid-cols-1  min-[430px]:grid-cols-2   xs:grid-cols-1 sm:grid-cols-3  gap-x-10 mb-8">
                <NextEvent />
                <Courses />
                <Filters />
            </div>

           <div className="flex flex-col justify-center items-center sm:hidden ">
           <h1 className="text-[2rem] text-sky-600 font-semibold">Cursos</h1> 
           <select className="w-full ring-2 ring-sky-600 rounded-full" name="" id=""></select>
           </div>
            
            <section className="bg-sky-600 flex flex-wrap  mt-4 rounded-2xl justify-around py-4 px-4 gap-y-4">
                
                <section className=" border-b-2  sm:border-b-0 sm:border-r-2 border-yellow-300 px-8  flex items-center flex-col flex-1 text-white " >
                <p className="text-center align-text-top text-[2rem]  font-semibold mb-4 hidden   min-[430px]:flex ">Cursos</p>
                    <p className="text-center">Desarrollo de aplicaciones Interactivas II</p>
                    <p>I Semestre</p>
                </section>

                <section className="    md:border-r-2 border-yellow-300 px-8  flex items-center flex-col flex-1 text-white " >
                <p className="text-center align-text-top text-[2rem]  font-semibold mb-4">Evaluaciones</p>
                    <ul className="w-full">
                   
                        
                        <li className="flex justify-between ">
                            <div className="flex gap-5">
                                <span>Tareas</span>
                                <span>1/4</span>
                            </div>
                            <span>10%</span>
                        </li>
                        <li className="flex justify-between ">
                            <div className="flex gap-5">
                                <span>Tareas</span>
                                <span>1/4</span>
                            </div>
                            <span>10%</span>
                        </li>
                        <li className="flex justify-between ">
                            <div className="flex gap-5">
                                <span>Tareas</span>
                                <span>1/4</span>
                            </div>
                            <span>10%</span>
                        </li>
                    </ul>
                </section>

                <section className=" px-8 flex  items-center flex-col flex-1 text-white border-t-2 md:border-t-0 " >
               
                <p className="text-center align-text-top text-[2rem] font-semibold ">Progreso</p>
                  
                    < RadialProgress porcent={50} />
                    
                </section>


            </section>




        </div>
    );
}