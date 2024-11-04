
import Searchbox from "../components/Searchbox";
import Slideraja from "../components/Slider";
import TombolSamping from "../components/TombolSamping";
import Navbar from "../components/Navbar";
import FooterKaki from "../components/Footer";
import CsButton from "../components/CsButton";
import Flashel from "../components/Flashel"
import Allgames from "../components/Allgames";
import ViaLogin from "../components/ViaLogin";
import ViaUid from "../components/ViaUid";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Nabvbar */}
            <Navbar />
            <div className="flex-1 bg-gradient-to-b from-black via-black to-red-600">
                <div className="container mx-auto px-4 py-6 mt-6">
                    <div className="flex">
                        <TombolSamping />
                        {/* Slider, searchbar */}
                        <div className="flex-1 ml-32 mt-16 z-o ">
                            <Slideraja />
                            <Searchbox />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-zinc-900">
                <div className="container mx-auto px-2 py-6">
                    <div className="flex-1 mx-32">
                        <div className="bg-black rounded-lg p-6 shadow-lg mt-4">
                            <Flashel />
                            <br />
                            <Allgames />
                            <br />
                            <ViaLogin />
                            <br />
                            <ViaUid />
                            <CsButton />
                        </div>
                    </div>
                </div>
            </div>
            <FooterKaki />
        </div>
    );
}