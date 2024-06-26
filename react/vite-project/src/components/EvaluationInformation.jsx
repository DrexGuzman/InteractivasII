export function EvaluationInformation({name, cant, porcent}) {
    // Displays evaluation information, including name, quantity, and percentage.
    return (
      <li className="flex justify-between">
        <div className="flex gap-5 texto clr-blue-3">
          <span>{name}</span>
          <span>{cant}</span>
        </div>
        <span className="texto clr-blue-3">{porcent}</span>
      </li>
    );
  }
  