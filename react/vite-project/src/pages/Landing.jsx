import landingphone from '../assets/landingphone.png';
export function Landing() {
    return (
        <>
        <header className=" relative bg-[#808080] bg-gradient-to-b from-[#808080] to-white bg-[linear-gradient(180deg,rgba(128,128,128,1)_0%,rgba(255,255,255,1)_77%)] ">
        <nav className=''>
            <ul className="flex lg:flex-row items-center justify-between px-8 pt-8 text-texto xl:text-subtitulo font-pesado font-main">
                <li className=" z-10 flex items-center gap-2"><svg className='w-[6rem] sm:w-[153px] ' height="70" viewBox="0 0 153 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.6652 31.7912C28.4333 31.4527 28.878 30.5946 29.2553 29.8074C30.0301 27.9968 30.4479 26.5168 31.2699 24.596C33.6955 20.1167 40.6421 21.6754 43.5393 24.6511L43.0205 24.3756C47.117 24.7928 51.3483 25.706 54.8722 28.2723C51.0519 26.4538 46.8475 26.013 42.7712 26.0524C42.1985 25.4305 41.5247 24.8951 40.6488 24.4937C38.0885 23.3365 34.221 22.4469 32.4355 25.4305C32.0986 26.0524 31.8561 27.0915 31.472 27.9732C31.1823 28.9257 30.5692 29.7051 29.9628 30.4293C29.3496 31.0984 28.5546 31.8148 27.6787 31.7833L27.6652 31.7912Z" fill="#007AB8"/>
                <path d="M44.1254 33.2842C41.181 35.4018 38.8632 38.4247 37.3877 41.9908C36.9228 43.2504 36.3231 44.5729 35.555 45.6278C31.1081 51.524 24.4378 54.2242 17.9224 54.8854C11.1375 55.1925 4.35931 63.7574 0.128017 69.4726L0 69.3466C1.43514 66.9771 2.95113 64.6312 4.17066 62.1987C4.34584 61.7972 4.58166 61.3485 4.64904 60.9391C4.76358 60.0181 4.92528 59.0892 5.11394 58.1996C6.67036 51.5791 9.16332 43.0457 14.7489 39.7472C11.1779 43.8093 9.40587 49.249 7.61364 54.5548C6.93986 56.7275 6.2863 58.9475 5.83488 61.1911C5.78097 61.4745 5.70686 61.6634 5.62601 61.8602C4.18413 64.7808 2.13586 67.1188 0.128017 69.4805L0 69.3545C4.0359 63.3795 9.52715 55.8931 16.0358 53.8306C22.6253 52.9725 29.7404 50.4219 34.0053 44.195C34.7263 43.148 35.0227 41.92 35.71 40.8415C37.7583 37.3935 40.77 34.6067 44.1254 33.2842Z" fill="#007AB8"/>
                <path d="M26.9441 34.6297C25.1182 29.4341 22.9149 24.4116 20.9273 19.3105C18.2928 13.0363 15.4562 6.25838 10.8139 1.74762L11.7505 1.60592C11.2788 2.3774 10.8746 3.41653 10.6051 4.42416C8.59723 12.0995 12.8218 19.6568 17.1946 25.0257L16.2243 26.1199C13.6168 23.1206 10.9756 19.9481 7.90998 17.6179L8.92738 16.9331C9.19689 23.9629 10.7668 31.5123 14.9644 36.7867C16.4399 38.4871 18.2996 39.6837 20.3141 40.3134C19.2765 40.1402 18.2322 39.8568 17.235 39.3766C12.0739 36.8575 9.39902 30.489 8.36815 24.4038C7.82239 21.5147 7.56636 18.5232 7.54614 15.5239C9.60789 16.8465 11.4001 18.602 13.1115 20.4283C14.513 21.9161 15.8672 23.4434 17.1946 25.0178L16.2243 26.112L14.2434 23.5221C10.4568 18.1926 7.4316 10.9581 9.3249 3.94396C9.66853 2.5742 10.2749 1.21232 11.0767 0L11.6225 0.495947C16.0492 4.73905 18.6836 10.6668 21.244 16.4529C23.7908 22.1995 25.4887 28.4028 26.9441 34.6297Z" fill="#007AB8"/>
                <path d="M49.7178 47.8388L48.633 47.6892L49.2462 46.6344C49.6841 45.8786 50.4455 44.4931 50.6207 44.0051C50.9104 43.1785 51.281 40.8483 51.2944 40.4232V40.313C51.281 40.2185 51.281 40.1241 51.281 40.0217C51.281 37.8648 52.7835 37.2822 54.6229 37.2822C56.4623 37.2822 57.9648 37.8726 57.9648 40.0217V40.0847C57.9648 40.1398 57.9648 40.1871 57.9648 40.2422C58.0524 41.3994 58.2545 43.4068 58.4567 44.0208C58.6116 44.5089 59.4202 45.8629 59.8918 46.6029L60.5723 47.6735L59.4404 47.8388C59.3595 47.8546 57.3921 48.138 54.6229 48.138C51.8537 48.138 49.8121 47.8546 49.7246 47.8467L49.7178 47.8388ZM57.1967 44.5719C56.8598 43.5406 56.6442 40.6515 56.6173 40.3209V40.2658V40.2107C56.6173 40.1792 56.6173 40.1477 56.6173 40.1162V40.0217C56.6173 38.7228 55.7144 37.6758 54.6094 37.6758C53.5044 37.6758 52.6016 38.7307 52.6016 40.0217C52.6016 40.0532 52.6016 40.0847 52.6016 40.1241L52.615 40.3366C52.6285 41.0215 52.1838 43.6429 51.8469 44.6034C51.692 45.0363 51.3079 45.7842 50.9576 46.4218C51.8132 46.5005 53.1136 46.5871 54.6094 46.5871C56.1052 46.5871 57.2978 46.5084 58.1265 46.4297C57.7492 45.7921 57.3449 45.0442 57.1967 44.5876V44.5719Z" fill="#007AB8"/>
                <path d="M54.5418 36.7314H54.5486C55.0844 36.7314 55.5188 36.2239 55.5188 35.5978V35.59C55.5188 34.9639 55.0844 34.4564 54.5486 34.4564H54.5418C54.006 34.4564 53.5716 34.9639 53.5716 35.59V35.5978C53.5716 36.2239 54.006 36.7314 54.5418 36.7314Z" fill="#007AB8"/>
                <path d="M77.064 48L68.82 28.776H73.5L80.592 45.732H78.288L85.632 28.776H89.952L81.708 48H77.064ZM92.7645 48V28.776H97.2645V48H92.7645ZM95.0325 25.608C94.1925 25.608 93.4965 25.344 92.9445 24.816C92.4165 24.288 92.1525 23.652 92.1525 22.908C92.1525 22.14 92.4165 21.504 92.9445 21C93.4965 20.472 94.1925 20.208 95.0325 20.208C95.8725 20.208 96.5565 20.46 97.0845 20.964C97.6365 21.444 97.9125 22.056 97.9125 22.8C97.9125 23.592 97.6485 24.264 97.1205 24.816C96.5925 25.344 95.8965 25.608 95.0325 25.608ZM114.079 28.56C115.615 28.56 116.983 28.86 118.183 29.46C119.407 30.06 120.367 30.984 121.063 32.232C121.759 33.456 122.107 35.04 122.107 36.984V48H117.607V37.56C117.607 35.856 117.199 34.584 116.383 33.744C115.591 32.904 114.475 32.484 113.035 32.484C111.979 32.484 111.043 32.7 110.227 33.132C109.411 33.564 108.775 34.212 108.319 35.076C107.887 35.916 107.671 36.984 107.671 38.28V48H103.171V28.776H107.455V33.96L106.699 32.376C107.371 31.152 108.343 30.216 109.615 29.568C110.911 28.896 112.399 28.56 114.079 28.56ZM125.187 48L133.647 36.984L133.575 39.396L125.511 28.776H130.515L136.167 36.336H134.259L139.947 28.776H144.807L136.671 39.396L136.707 36.984L145.131 48H140.055L134.115 39.972L135.987 40.224L130.155 48H125.187Z" fill="#007AB8"/>
                </svg>
                <span className=" hidden sm:block h-8 border-l-2 border-black opacity-50 rotate-[25deg] "></span>
                <a className='hidden sm:block  ' href=''>Descargar version Mobile</a>
                </li>
                <li className="flex gap-4 items-center  ">
                    <a  href="" className='underline'>Iniciar Sesion</a>
                    <a className='hidden  ring-2 rounded-md ring-[#F5A747] bg-blue-2 px-4  py-1 ' href="">Comenzar</a>
                    <div className="h-8 border-l-2  border-black opacity-50 "></div>
                    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2V3.28751M14 23.8876V25.1751M3.33333 13.5875H2M6.41883 6.26695L5.33333 5.21876M21.5812 6.26695L22.6667 5.21876M6.41883 20.9135L5.33333 21.9565M21.5812 20.9135L22.6667 21.9565M26 13.5875H24.6667M19.3333 13.5875C19.3333 16.4318 16.9455 18.7376 14 18.7376C11.0545 18.7376 8.66667 16.4318 8.66667 13.5875C8.66667 10.7433 11.0545 8.43753 14 8.43753C16.9455 8.43753 19.3333 10.7433 19.3333 13.5875Z" stroke="#007AB8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_63_2924)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 0C20.1799 0 26 5.96691 26 13.3288C26 19.2165 22.2794 24.2111 17.1171 25.9752C16.458 26.1065 16.224 25.6903 16.224 25.3354C16.224 24.896 16.2396 23.4608 16.2396 21.6772C16.2396 20.4344 15.8236 19.6233 15.3569 19.2099C18.252 18.8797 21.294 17.7525 21.294 12.6331C21.294 11.1771 20.7896 9.98897 19.955 9.05557C20.0902 8.71887 20.5361 7.36314 19.8276 5.52754C19.8276 5.52754 18.7382 5.17039 16.2565 6.89419C15.2178 6.59909 14.105 6.45061 13 6.44541C11.895 6.45061 10.7835 6.59909 9.7461 6.89419C7.2618 5.17039 6.1698 5.52754 6.1698 5.52754C5.4639 7.36314 5.9098 8.71887 6.0437 9.05557C5.213 9.98897 4.7047 11.1771 4.7047 12.6331C4.7047 17.7395 7.7402 18.884 10.6275 19.2207C10.2557 19.5535 9.919 20.1406 9.802 21.0025C9.061 21.3431 7.1786 21.9326 6.019 19.8955C6.019 19.8955 5.3313 18.6148 4.0261 18.5212C4.0261 18.5212 2.7586 18.5044 3.9377 19.3312C3.9377 19.3312 4.7892 19.7407 5.3807 21.2812C5.3807 21.2812 6.1438 23.6601 9.7604 22.8541C9.7669 23.9682 9.7786 25.0182 9.7786 25.3354C9.7786 25.6877 9.5394 26.1 8.8907 25.9765C3.7245 24.215 0 19.2178 0 13.3288C0 5.96691 5.8214 0 13 0Z" fill="#25292A"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_63_2924">
                    <rect width="26" height="26" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </li>
               
            </ul>
        </nav>
        <div className='flex flex-col md:flex-row  px-8 items-center justify-center gap-4 max-w-[1440px] m-auto '>
            <div className="flex flex-col font-main font-pesado z-10  ">
                <p className=" text-subtitulo lg:text-titulo max-w-[555px] ">La agenda virtual que se adapta a ti.</p>
                <p className="text-texto lg:text-subtitulo mt-2 max-w-[555px]">Todo lo que necesitas al alcance de tu mano.</p>
                <div className='flex text-texto lg:text-subtitulo font-main font-semibold text-white gap-4 mt-6'>
                    <a className='ring-2 rounded-full ring-[#F5A747] bg-blue-2 px-12  py-1 text-nowrap ' href="">Comenzar</a>
                    <a className='ring-2 rounded-full ring-[#F5A747] bg-blue-2 px-8 py-1 text-nowrap ' href="">Conoce más +</a>
                </div>
            </div>
            <div className='z-10 m '>
                <img className='' src={landingphone} alt="Landing phone" />
            </div>
           
        </div>
        
        <div className='hidden md:block'>   
            <div className='border-t-[1px]  absolute  top-[30%] right-0 border-black w-[60%] '></div>
            <div className='border-t-[1px]  absolute  top-[18%] border-black w-[60%] '></div>
            <div className='border-t-[1px]  absolute  top-[98%] right-0 border-black w-[60%] '></div>
            <div className='border-t-[1px]  absolute  top-[85%] border-black w-[60%] '></div>
        </div>


        </header>

        
        </>
    );
}