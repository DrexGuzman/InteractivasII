import '../index.css';
import Check from "../assets/evenready.svg";
import Penta from "../assets/penta.svg";
import Ramdom from "../assets/ramdomevent.png";
import EventesMenu from "../assets/eventsMenu.svg";
export function Eventos(titulo, text, image) {
    return (
        <div className="mt-3 rounded-2xl min-h-32 ring-2 ring-white ml-[25%] mr-8 relative flex flex-col lg:flex-row justify-center items-center px-4 gap-4 ">
            <div className="absolute h-8 w-8 bg-sky-600 border-b-2 border-l-2 border-white bottom-[32%] -left-[1.1rem] rotate-45"></div>
            <div className="absolute right-[127.5%] h-full flex flex-col">
                <div className="relative flex justify-center">
                    <div className="absolute size-[1.5rem] md:size-[1.8] bg-amber-500 rounded-full top-[4rem]"></div>
                    <div className="absolute h-44 top-0 w-1 bg-amber-500 rounded-3xl"></div>
                    <p className="absolute top-[3rem] left-5 text-white text-[1rem] xl:text-[2rem] text-nowrap">5:00pm</p>
                </div>
            </div>

            <div className=' hidden  w-[10rem] items-center justify-start gap-2 lg:flex lg:flex-col'>
                <button>
                    <img src={Check} alt="" />
                </button>
                <img className='size-8' src={Penta} alt="" />
            </div>

            <div className='flex flex-col text-white '>
                <div className='flex  max-w-[10rem] sm:max-w-full '>
                <h1 className='text-[1.4rem]   lg:text-[2rem] whitespace-nowrap text-ellipsis overflow-hidden '>Lorem ipsum dolor sitet.</h1>
                </div>
              
                <p className='hidden lg:block'>Lorem ipsum dolor sit amet consectetur. Feugiat hendrerit aliquet diam vulputate nibh. Adipisci dapibus. Elit commodo ullamcorper eu ac sit sit...</p>
            </div>
            
               
                <div className=' flex w-full items-center justify-between gap-2 lg:hidden'>
                    <button className=''>
                        <img className='size-8' src={Check} alt="" />
                    </button>
                    <img className='size-8' src={Penta} alt="" />
                     <img  className='size-12' src={Ramdom} alt="" />
                </div>
          
                <img className='hidden lg:block' src={Ramdom} alt="" />

              {/*  <img  className='mb-12' src={EventesMenu} alt="" /> */}

        </div>
    );
}
