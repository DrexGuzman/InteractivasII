import { EvaluationInformation } from "./EvaluationInformation";

export function EvaluationsProgress(){

    return(
        <section className="    md:border-r-2 border-yellow-300 px-8  flex items-center flex-col flex-1 text-white " >
                <p className="text-center align-text-top text-[2rem]  font-semibold mb-4">Evaluaciones</p>
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