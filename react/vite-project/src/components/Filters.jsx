import filters from "../assets/filters.svg";

/**
 * Component for rendering filters.
 */
export function Filters({handleFilterChange}) {
  return (
    <div id="filterBox" className="overflow-hidden hidden lg-[1440px]:flex flex-col p-4 bg-blue-1 rounded-3xl ring-[1px] ring-[#11567D] shadow-md">
      <div className="py-2 flex justify-between">
        <h1 className="texto clr-blue-3 pb-2">
          Aplicar filtros de busqueda
        </h1>
        <div className='relative'>
          <img
            alt=""
            className="size-6"
            src={filters}
          />
        </div>
      </div>
      <hr className="border-[#11567D] w-full" />
      <ul className="mt-2 flex flex-col">
        <li className="mt-2">
          <label className="container flex">
            <input
            className="relative"
              defaultChecked
              type="checkbox"
              onChange={() => handleFilterChange("carrera")}
            
            />
         
            <svg
              className="star-regular"
              fill="none"
              height="19"
              viewBox="0 0 18 19"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.93782 13.1152L8 2.61523L14.0622 13.1152H1.93782Z"
                fill="#11567D"
                stroke="#11567D"
                strokeWidth="2"
              />
            </svg>
            <svg
              className="star-solid"
              fill="none"
              height="19"
              viewBox="0 0 18 19"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.93782 13.1152L8 2.61523L14.0622 13.1152H1.93782Z"
                stroke="#11567D"
                strokeWidth="2"
              />
            </svg>
            <span className="px-2 texto clr-blue-3">
              Eventos de carrera
            </span>
          </label>
        </li>
        <li className="mt-2">
          <label className="container flex ">
            <input
              defaultChecked
              type="checkbox"
              onChange={() => handleFilterChange("universidad")}
            />
            <svg
              className="star-regular"
              fill="none"
              height="19"
              viewBox="0 0 18 19"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.36396 12.7072V1.9793L12.0919 1.9793V12.7072L1.36396 12.7072Z"
                fill="#11567D"
                stroke="#11567D"
                strokeWidth="2"
              />
            </svg>
            <svg
              className="star-solid"
              fill="none"
              height="19"
              viewBox="0 0 18 19"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.36396 12.7072V1.9793L12.0919 1.9793V12.7072L1.36396 12.7072Z"
                stroke="#11567D"
                strokeWidth="2"
              />
            </svg>
            <span className="px-2 texto text-white clr-blue-3">
              Eventos de universidad
            </span>
          </label>
        </li>
        <li className="mt-2">
          <label className="container flex">
            <input
              defaultChecked
              type="checkbox"
              onChange={() => handleFilterChange("curso")}
            />
            <svg
              className="star-regular"
              fill="none"
              height="19"
              viewBox="0 0 18 19"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0.615234L17.5595 6.83408L14.2901 16.8964H3.70993L0.440492 6.83408L9 0.615234Z"
                fill="#11567D"
              />
            </svg>
            <svg
              className="star-solid"
              fill="none"
              height="19"
              viewBox="0 0 18 19"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.61606 7.21605L9 1.8513L16.3839 7.21605L13.5635 15.8964H4.43648L1.61606 7.21605Z"
                stroke="#11567D"
                strokeWidth="2"
              />
            </svg>
            <span className="px-2 texto text-white clr-blue-3">
              Eventos de cursos
            </span>
          </label>
        </li>
        <li className="mt-2">
          <label className="container flex">
            <input
              defaultChecked
              type="checkbox"
              onChange={() => handleFilterChange("estudiantes")}
            />
            <svg
              className="star-regular"
              fill="none"
              height="19"
              viewBox="0 0 18 19"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 17.201L1.41421 9.61523L9 2.02945L16.5858 9.61523L9 17.201Z"
                fill="#11567D"
                stroke="#11567D"
                strokeWidth="2"
              />
            </svg>
            <svg
              className="star-solid"
              fill="none"
              height="19"
              viewBox="0 0 18 19"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 17.201L1.41421 9.61523L9 2.02945L16.5858 9.61523L9 17.201Z"
                stroke="#11567D"
                strokeWidth="2"
              />
            </svg>
            <span className="px-2 texto text-white clr-blue-3">
              Eventos de estudiantes
            </span>
          </label>
        </li>
      </ul>
    </div>
  );
}