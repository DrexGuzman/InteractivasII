import { EvaluationInformation } from "./EvaluationInformation";

export function EvaluationsProgress(){

    return(
        <section className="  border-t-[0.5px] min-[600px]:border-t-[0px] min-[600px]:border-l-[0.5px]  border-[#11567D] px-8  flex items-center flex-col flex-1 clr-blue-3 " >
                <p className="text-center align-text-top text-[2rem]  titulo mb-4">Evaluaciones</p>
                    <ul className="w-full">
                   
                       <EvaluationInformation name={"Tarea"} cant={"3/4"} porcent={"10%"}/> 
                       <EvaluationInformation name={"Proyecto"} cant={"0/2"} porcent={"50%"}/> 
                       <EvaluationInformation name={"Examen"} cant={"1/2"} porcent={"25%"}/> 
                       <EvaluationInformation name={"Presentacion"} cant={"1/1"} porcent={"15%"}/> 
                       <EvaluationInformation name={"Quiz"} cant={"1/2"} porcent={"10%"}/> 
                        
                    </ul>
                </section>     

    )
}