import { Link } from 'react-router-dom';
import { Flags } from "../assets/data";

export default function Navbar() {
    return (
        <nav className="bg-black fixed top-0 left-0 right-0 z-50 w-full px-32 py-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-6">
                    <img
                        src={Flags.logo}
                        style={{ width: '80px', height: '60px' }}
                        alt="logo rrq"
                        className="rounded-full w-12 h-12"
                    />
                    <nav className="flex space-x-6">
                        <Link to="/" className="text-white hover:text-gray-300">RRQ STORE</Link>
                        <Link to="/cek-pesanan" className="text-white hover:text-gray-300">Periksa Pesanan</Link>
                        <Link to="/tentang-aku&kamu" className="text-white hover:text-gray-300">About me</Link>
                    </nav>
                </div>
                <div className="flex items-center space-x-6 relative">
                    <Link to="/" className="text-white hover:text-gray-300">Akun Reseller</Link>
                    <button className="focus:outline-none">
                        <img
                            src={Flags.indonesia}
                            alt="Indonesian flag"
                            className="cursor-pointer w-12 h-8"
                        />
                    </button>
                </div>
            </div>
        </nav>
    );
}
