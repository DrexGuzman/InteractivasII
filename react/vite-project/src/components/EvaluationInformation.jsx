export function EvaluationInformation({name, cant, porcent}) {

    return(
        <li className="flex justify-between ">
        <div className="flex gap-5">
            <span>{name} </span>
            <span>{cant} </span>
        </div>
        <span>{porcent}</span>
    </li>
    )
}