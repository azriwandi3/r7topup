import { Link } from "react-router-dom";

export default function TombolSamping() {
    return (
        <div className="w-24 fixed left-4 top-1/4 space-y-6 bg-black/30 rounded-xl">
            <Link to="/" className="flex flex-col items-center text-white hover:text-yellow-600">
                <span className="text-2xl mb-1">🏠</span>
                <span className="text-sm font-bold">HOME</span>
            </Link>
            <Link to="/" className="flex flex-col items-center text-white hover:text-yellow-600">
                <span className="text-2xl mb-1">⚡</span>
                <span className="text-sm">FLASHSALE</span>
            </Link>
            <Link to="/via-uid" className="flex flex-col items-center text-white hover:text-yellow-600">
                <span className="text-2xl mb-1">🆔</span>
                <span className="text-sm font-bold">VIA UID</span>
            </Link>
            <Link to="/via-login" className="flex flex-col items-center text-white hover:text-yellow-600">
                <span className="text-2xl mb-1">🔑</span>
                <span className="text-sm font-bold">VIA LOGIN</span>
            </Link>
        </div>
    );
}