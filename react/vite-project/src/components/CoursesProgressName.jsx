
export function CoursesProgressName  ({course, semestre})  {
    return (
        <section className=" border-b-2  sm:border-b-0 sm:border-r-2 border-yellow-300 px-8  flex items-center flex-col flex-1 text-white " >
                <p className="text-center align-text-top text-[2rem]  font-semibold mb-4 hidden   min-[430px]:flex ">Cursos</p>
                    <p className="text-center">{course} </p>
                    <p>{semestre} </p>
        </section>
    );
}