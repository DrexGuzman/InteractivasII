import '../index.css';
import Check from "../assets/evenready.svg";
import Penta from "../assets/penta.svg";
import Ramdom from "../assets/ramdomevent.png";
import EventesMenu from "../assets/eventsMenu.svg";

export function Eventos({ titulo, texto, image, hora, cat}) {
    return (
        <div className='flex flex-col justify-center relative  '>
            <p className="text-blue-3 text-texto sm:text-subtitulo font-main font-pesado">Hora: 5:00pm</p>
            <div className="rounded-2xl min-h-32 ring-1 bg-white ring-[#11567D] relative flex flex-row justify-center items-center   py-4 px-8 gap-4">
                <div className=' w-[10rem] items-center justify-start gap-2  hidden sm:flex flex-col'>
                    <button>
                        <img src={Check} alt="" />
                    </button>   
                    <img className='min-w-8' src={Penta} alt="" />
                </div>
                <div className='flex flex-col items-center sm:items-start  min-w-[135px]  '>
                        <h1 className='font-main  line-clamp-1 sm:line-clamp-none text-subtitulo font-pesado text-blue-3'>{titulo} </h1>
                    <div className='hidden sm:flex'>
                    <p className='  text-blue-3 text-texto font-second sm:line-clamp-2'> {texto} </p>
                    </div>
                    <div className='  items-center justify-between w-full gap-2 flex  sm:hidden'>
                    
                        <button>
                        <img src={Check} alt="" />
                        </button>   
                        <img className='min-w-8 sm:hidden' src={Penta} alt="" />
                        <img className=' block size-12' src={Ramdom} alt="" />
                    
                    
                </div>
                </div>
               
                <img className=' hidden sm:block' src={Ramdom} alt="" />
                <img className='absolute  top-4 right-4' src={EventesMenu} alt="" />
            </div>
        </div>
    );
}
