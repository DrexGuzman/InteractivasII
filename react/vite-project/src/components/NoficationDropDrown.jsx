import Notify from "../assets/notify.svg";
import Delete from "../assets/delete.svg";
import Task from "../assets/newTask.svg";
export function NoficationDropDrown() {
    return(
        
        <button className="group relative z-30 sm:z-20 ">
        <div className="bg-amber-500 size-6 group-focus:scale-0 duration-200 rounded-full absolute left-4 bottom-4 font-extrabold">4</div>
        <img className="size-8 group-focus:opacity-70" alt="" src={Notify} />
        <div className="fixed inset-0 sm:absolute scale-y-0 group-focus:scale-y-100  origin-top duration-200   sm:w-[25rem] min-h-[33rem] ring-2 ring-blue-3 rounded-sm bg-blue-1  sm:inset-auto sm:right-0 z-40 sm:top-14">
        <div className="size-4 rotate-45 border-t-2 border-l-2  border- -z-0 absolute right-[2%] top-[-3%] "></div>
            <p className="pl-2 pt-2 text-texto font-second font-bold  text-blue-3 border-t-2 border flex justify-between">Noficaciones  <button className="pr-2"> salir</button></p>
           
            <ul className=" text-texto font-second text-blue-3 overflow-y-auto overflow-hidden  max-h-[33rem] ">
              <li className=" hover:bg-blue-2  hover:text-white ">
             
                  <p className="flex gap-1 pl-3 pt-2 relative "> 
                     <img className="size-5 " alt="" src={Task} />
                   Nuevo tarea de assignada
                   <button className="absolute right-2 ">
                        <img className=" size-5 hover:scale-125  " alt="" src={Delete} />
                   </button>
                  
                   </p>
                   
                  <p className="text-[12px] text-start pl-4 ">recibido hace 33 minutos</p>
              </li>

              
            </ul>
          </div>

      </button>

    );

}