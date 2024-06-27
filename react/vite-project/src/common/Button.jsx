import { Link } from 'react-router-dom';
import '../index.css';

// Button component to navigate to a specified address with a specific style
export function Button({ text, address, loading, handleLoading }) {
    return (
        <button className={`flex bg-blue-1 font-main font-bold text-subtitle justify-center items-center mb-4 text-center ring-2 ring-blue-3 rounded-full text-blue-3 w-full h-16 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}  onClick={handleLoading}>
            <h1 className="focus:outline-none">{text}</h1>
            {/* <Link to={`/${address}`} className="focus:outline-none">{text}</Link> */}
        </button>
    );
}
