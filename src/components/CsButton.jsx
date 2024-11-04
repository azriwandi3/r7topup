
import { Icon } from "../assets/data";

export default function CsButton() {
    const tombolCustomerServiceMenu = () => {
        const menu = document.getElementById('customer-service-menu');
        if (menu) {
            menu.classList.toggle('hidden');
        }
    };
    return (
        <div className="fixed bottom-6 right-6">
            <button
                onClick={tombolCustomerServiceMenu}
                className="bg-orange-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg">🎧
            </button>
            <div
                id="customer-service-menu"
                className="hidden absolute bottom-full right-0 mb-2  bg-white/50 rounded-lg shadow-lg p-2 space-y-2">
                <a href="#" className="block text-gray-800 hover:text-blue-500"><img src={Icon.instagram} style={{ width: '100px', height: '60px' }} /></a>
                <a href="#" className="block text-gray-800 hover:text-blue-500"><img src={Icon.twitter} style={{ width: '60px', height: '60px' }} /></a>
                <a href="#" className="block text-gray-800 hover:text-blue-500"><img src={Icon.whatsapp} /></a>
            </div>
        </div>
    );
}