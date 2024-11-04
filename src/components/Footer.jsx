import {Icon, Flags} from "../assets/data";

export default function FooterKaki(){
    return(
        <footer className="bg-black text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                        <div>
                            <img src={Flags.logo} style={{width: '130px', height:'100px'}} alt="RRQ Store Logo" className="mb-2" />
                        </div>
                        <div>
                            <p className="text-gray-300">
                                RRQ Store adalah toko online terpercaya untuk kebutuhan gaming Anda. 
                                Kami menyediakan berbagai macam produk dan layanan untuk para gamer di seluruh dunia.
                            </p>
                        </div>
                        <div className="flex space-x-4 justify-center md:justify-end">
                            <a href="#" className="hover:text-gray-300"><img src={Icon.instagram} style={{width:'50px', height:'50px'}}/></a>
                            <a href="#" className="hover:text-gray-300"><img src={Icon.twitter} style={{width:'45px', height:'45px'}}/></a>
                            <a href="#" className="hover:text-gray-300"><img src={Icon.whatsapp} style={{width:'40px', height:'40px'}}/></a>
                        </div>
                    </div>
                    <div className="text-center border-t border-gray-700 pt-4">
                        <p className="text-sm text-gray-400">&copy; 2024 RRQ Store. All rights reserved.</p>
                        <p className="text-sm text-gray-400">Contact us: azr@gmail.com</p>
                    </div>
                </div>
        </footer>
    );
}