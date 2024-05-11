import '../index.css';
import Check from "../assets/evenready.svg";
import Penta from "../assets/penta.svg";
import Ramdom from "../assets/ramdomevent.png";
import EventesMenu from "../assets/eventsMenu.svg";
export function Eventos({titulo, text, image, hora}) {
    return (
        <div className='flex flex-col justify-center'>
        <p className="   clr-blue-3  text-[1rem] xl:text-[2rem] text-nowrap subtitulo-pesado ">Hora: 5:00pm</p>
        <div className="rounded-2xl min-h-32 ring-1 bg-white ring-[#11567D]   relative flex flex-col lg:flex-row justify-center items-center px-4 gap-4 ">
             
            
           

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
        </div>
    );
}
