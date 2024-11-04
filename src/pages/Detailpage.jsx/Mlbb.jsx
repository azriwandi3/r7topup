import React from "react";
import { iconGames } from "../../assets/data";
import Navbar from "../../components/Navbar";
import FooterKaki from "../../components/Footer";

const Section = ({ title, children, className = "" }) => (
    <div className={`border border-red-500 rounded-lg p-5 mb-6 ${className}`}>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {children}
    </div>
);

const ServiceOption = ({ price, description }) => (
    <div className="bg-gray-800 p-4 rounded border border-gray-600 hover:border-red-500 cursor-pointer transition-colors">
        <p className="text-sm">{description}</p>
        <p className="font-bold mt-2">Rp {price.toLocaleString()}</p>
    </div>
);

const PaymentMethod = ({ method }) => (
    <div className="bg-gray-800 p-4 rounded border border-gray-600 hover:border-red-500 cursor-pointer transition-colors">
        {method}
    </div>
);

export default function Mlbb() {



    const gameInstructions = [
        "Masukan User ID dan Zone ID kamu, Contoh : 12345678(1234)",
        "Pilih Item yang ingin kamu beli",
        "Lakukan pembayaran",
        "Item akan dikirimkan ke akun Mobile Legends kamu"
    ];

    const paymentMethods = [
        "Saldo Akun (Member/Reseller)",
        "QRIS",
        "Virtual Account",
        "Convenience Store"
    ];

    const serviceOptions = Array(15).fill({
        description: "Weekly Diamond Pass (Event Topup +10)",
        price: 17000
    });

    return (
        <>
            <div className="min-h-screen bg-[#0d0d0d] text-white">
                <Navbar />
                <main className="container mx-auto px-4 mt-32">
                    <div className="flex gap-6">
                        {/* Sidebar */}
                        <div className="w-1/4">
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <img
                                    src={iconGames.mlbb}
                                    alt="Mobile Legends"
                                    className="w-24 h-24 mb-4 object-cover rounded"
                                />
                                <h2 className="text-xl font-bold mb-2">MOBILE LEGENDS : BANG-BANG</h2>
                                <hr className="border-gray-600 my-4" />
                                <h3 className="text-lg font-semibold mb-4">Cara Topup :</h3>
                                <ol className="list-decimal list-inside space-y-2">
                                    {gameInstructions.map((instruction, index) => (
                                        <li key={index} className="text-gray-300">{instruction}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="w-3/4">
                            <form >
                                <Section title="1. Lengkapi Data">
                                    <div className="flex gap-4 mb-4">
                                        <input
                                            type="text"
                                            placeholder="Masukkan User ID"
                                            className="flex-1 p-3 bg-gray-800 border border-gray-600 rounded focus:border-red-500 focus:outline-none"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Masukkan Zone ID"
                                            className="flex-1 p-3 bg-gray-800 border border-gray-600 rounded focus:border-red-500 focus:outline-none"
                                        />
                                    </div>
                                    <p className="text-sm text-gray-400">
                                        Pastikan data di atas sudah benar. Contoh: 12345678(1234).
                                        Jika data tidak valid, item tidak akan terkirim.
                                    </p>
                                </Section>

                                <Section title="2. Pilih Nominal Layanan">
                                    <div className="grid grid-cols-3 gap-4">
                                        {serviceOptions.map((option, index) => (
                                            <ServiceOption
                                                key={index}
                                                description={option.description}
                                                price={option.price}
                                            />
                                        ))}
                                    </div>
                                </Section>

                                <Section title="3. Pilih Pembayaran">
                                    <div className="space-y-3">
                                        {paymentMethods.map((method, index) => (
                                            <PaymentMethod key={index} method={method} />
                                        ))}
                                    </div>
                                </Section>

                                <Section title="4. Kode Voucher">
                                    <input
                                        name="voucher"
                                        type="text"
                                        placeholder="Kode Voucher"
                                        className="w-full p-3 bg-gray-800 border border-gray-600 rounded focus:border-red-500 focus:outline-none"
                                    />
                                </Section>

                                <Section title="5. Konfirmasi Pesanan">
                                    <input
                                        name="confirmation"
                                        type="text"
                                        placeholder="Konfirmasi Pesanan"

                                        className="w-full p-3 bg-gray-800 border border-gray-600 rounded focus:border-red-500 focus:outline-none"
                                    />
                                </Section>

                                <button
                                    type="submit"
                                    className="w-full bg-red-600 text-white py-3 px-6 rounded font-bold hover:bg-red-700 transition-colors"
                                >
                                    BELI SEKARANG
                                </button>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
            <FooterKaki />
        </>
    );
}