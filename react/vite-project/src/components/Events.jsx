import '../index.css';
import Check from "../assets/evenready.svg";
import Penta from "../assets/penta.svg";
import Ramdom from "../assets/ramdomevent.png";
import EventesMenu from "../assets/eventsMenu.svg";
export function Eventos(titulo, text, image) {
    return (
        <div className="mt-3 rounded-2xl min-h-32 ring-1 bg-white ring-[#11567D] ml-[25%] mr-8 relative flex flex-col lg:flex-row justify-center items-center px-4 gap-4 ">
            <div className="absolute h-8 w-8 bg-white border-b-2 border-l-2 border-[#11567D] bottom-[32%] -left-[1.1rem] rotate-45"></div>
            <div className="absolute right-[127.5%] h-full flex flex-col">
                <div className="relative flex justify-center">
                 
                    <p className=" absolute top-[3rem] left-5 clr-blue-3  text-[1rem] xl:text-[2rem] text-nowrap subtitulo-pesado ">5:00pm</p>
                </div>
            </div>

            <div className=' hidden  w-[10rem] items-center justify-start gap-2 lg:flex lg:flex-col'>
                <button>
                    <img src={Check} alt="" />
                </button>
                <img className='size-8' src={Penta} alt="" />
            </div>

            <div className='flex flex-col  '>
                <div className='flex  max-w-[10rem] sm:max-w-full '>
                <h1 className='text-[1.4rem]   lg:text-[2rem] whitespace-nowrap text-ellipsis overflow-hidden subtitulo-pesado clr-blue-3'>Lorem ipsum dolor sitet.</h1>
                </div>
              
                <p className='hidden lg:block clr-blue-3 texto'>Lorem ipsum dolor sit amet consectetur. Feugiat hendrerit aliquet diam vulputate nibh. Adipisci dapibus. Elit commodo ullamcorper eu ac sit sit...</p>
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
