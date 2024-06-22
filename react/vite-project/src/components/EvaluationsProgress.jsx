import { EvaluationInformation } from "./EvaluationInformation";

/**
 * Component to display evaluations progress.
 */
export function EvaluationsProgress({ eventsList, courseId }) {
        function getEvaluations(tag) {
            let totales=0;
            let completadas=0;
            eventsList.data.events.forEach((event) => {
                if (event.eve_id_course === courseId) {
                    if (event.etiqueta_nombre === tag) {
                        totales++;
                        if (event.estado === "Completada") {
                            completadas++;
                        }
                    }
                }
            });
            return `${completadas}/${totales}`;
        }
      

    return (
        <section className="border-t-[0.5px] min-[600px]:border-t-[0px] min-[600px]:border-l-[0.5px] border-[#11567D] px-8 flex items-center flex-col flex-1 clr-blue-3">
            <p className="text-center align-text-top text-[2rem] titulo mb-4">Evaluaciones</p>
            <ul className="w-full">
                {/* Render EvaluationInformation component for each evaluation */}
                <EvaluationInformation name={"Tareas"} cant={getEvaluations("Tarea")} porcent={"10%"} />
                <EvaluationInformation name={"Proyectos"} cant={getEvaluations("Proyectos")} porcent={"50%"} />
                <EvaluationInformation name={"Examenes"} cant={getEvaluations("Examenes")} porcent={"25%"} />
                <EvaluationInformation name={"Presentaciones"} cant={getEvaluations("Presentaciones")} porcent={"15%"} />
                <EvaluationInformation name={"Quices"} cant={getEvaluations("Quices")} porcent={"10%"} />
            </ul>
        </section>
    );
}