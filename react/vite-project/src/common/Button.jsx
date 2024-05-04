import '../index.css';

export function Button({text, address}) {
    return (
            <a className="flex justify-center items-center my-3 text-center ring-2 ring-white rounded-full text-white w-full h-10 focus: outline-none" href={`${address}`}>{text}</a>

    );
}