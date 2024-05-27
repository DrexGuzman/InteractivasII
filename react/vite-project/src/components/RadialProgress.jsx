export const RadialProgress = ({ porcent }) => {
    return (
        

        <section className=" border-t-[0.5px] min-[840px]:border-t-[0px]  min-[840px]:border-l-[0.5px]  border-[#11567D] px-8 flex  items-center flex-col flex-1 clr-blue-3 border-t-[#11567D]  " >
               
        <p className="text-center align-text-top text-[2rem] font-semibold titulo">Progreso</p>
          
        <div className="relative size-48">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                        className="stroke-current"
                        strokeWidth="1"
                        cx="50"
                        cy="50" 
                        r="29"
                        fill="#FFFFFF"
                    ></circle>
                    <circle
                        className="text-[#F5A747]  progress-ring__circle stroke-current"
                        strokeWidth="15"
                        strokeLinecap=""
                        cx="50"
                        cy="50"
                        r="37"
                        fill="transparent"
                        strokeDasharray="232.4"
                        strokeDashoffset={`calc(232.4 -  ${porcent * -232.4} / 100)`}
                    ></circle>

                     <text  x="50" y="51" fontFamily="Montserrat" fill="#11567D" fontSize="12" fontWeight="600" textAnchor="middle" alignmentBaseline="middle">{porcent}% </text>
                </svg>
            </div>
            
        </section>
           
      
    );
};