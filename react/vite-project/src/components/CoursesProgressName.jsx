
export function CoursesProgressName  ({course, semestre})  {
    return (
        <section className="  border-[#11567D] px-8   flex items-center flex-col flex-1 " >
                <p className="text-center titulo clr-blue-3 align-text-top text-[2rem]  font-semibold mb-4 hidden   min-[430px]:flex ">Curso</p>
                    <p className="text-center subtitulo-pesado clr-blue-3">{course} </p>
                    <p className="subtitulo clr-blue-3">{semestre} </p>
        </section>
    );
}