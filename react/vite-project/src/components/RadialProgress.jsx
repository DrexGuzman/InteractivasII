export const RadialProgress = ({ porcent }) => {
    return (
        

        <section className=" px-8 flex  items-center flex-col flex-1 text-white border-t-yellow-300 border-t-2 md:border-t-0 " >
               
        <p className="text-center align-text-top text-[2rem] font-semibold ">Progreso</p>
          
        <div className="relative size-48">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                        className="text-gray-200 stroke-current"
                        strokeWidth="0"
                        cx="50"
                        cy="50"
                        r="30"
                        fill="#F5A747"
                    ></circle>
                    <circle
                        className="text-[#E6691E]  progress-ring__circle stroke-current"
                        strokeWidth="15"
                        strokeLinecap=""
                        cx="50"
                        cy="50"
                        r="37"
                        fill="transparent"
                        strokeDasharray="232.4"
                        strokeDashoffset={`calc(232.4 -  ${porcent * -232.4} / 100)`}
                    ></circle>

                     <text x="50" y="50" font-family="Verdana" font-size="12" text-anchor="middle" alignment-baseline="middle">{porcent}% </text>
                </svg>
            </div>
            
        </section>
           
      
    );
};