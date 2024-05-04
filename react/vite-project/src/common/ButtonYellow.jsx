import '../index.css';

export function ButtonYellow({text, address}) {
    return (
            <div className='font-semibold flex justify-center items-center my-3 text-center ring-2 bg-amber-500 rounded-full text-black w-full h-10'>
                <button className=" focus: outline-none">{text}</button>
            </div>
    );
}