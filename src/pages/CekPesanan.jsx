import Navbar from "../components/Navbar";
import TombolSamping from "../components/TombolSamping";

export default function CekPesanan() {

    return (
        <>
            <Navbar />
            <TombolSamping />
            <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-black to-red-600">
                <div className="bg-gray-900 p-8 rounded-lg border border-red-600 mx-32 my-auto w-100">
                    <h1 className="text-3xl font-bold text-white mb-4">Cek Status Pesanan</h1>
                    <label className="text-white mb-2 block">No. Transaksi</label>
                    <input
                        type="text"
                        placeholder="Masukkan No. Transaksi"
                        className="w-full p-2 mb-4 rounded bg-gray-300 text-gray-700"
                    />
                    <div className="text-right">
                        <button className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700">
                            CEK PESANAN
                        </button>
                    </div>
                </div>
            </div>
        </>
    );

}