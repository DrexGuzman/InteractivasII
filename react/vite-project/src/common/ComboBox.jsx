export function ComboBox({ title, list }) {
    return (
        <div>
            {/* Title of the ComboBox */}
            <h1 className="text-subtitulo mb-[0.781rem] text-blue-3">{title}</h1>
            {/* Dropdown menu */}
            <select className="w-full mb-[0.781rem] sm:h-[62px] h-[52px] text-center ring-[0.031rem] ring-blue-3 rounded-full focus:outline-none text-blue-3 font-bold text-texto font-second bg-blue-1" name="" id="">
                {/* Options for the ComboBox */}
                <option value="Carrera">Carrera</option>
                <option value="Curso">Curso</option>
                <option value="Universidad">Universidad</option>
                <option value="Estudiante">Estudiante</option>
            </select>
        </div>
    );
}
