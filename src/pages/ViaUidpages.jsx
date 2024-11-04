import Navbar from "../components/Navbar";
import TombolSamping from "../components/TombolSamping";
import ViaUid from "../components/ViaUid";
export default function ViaUidpages() {
    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-b from-black via-black to-red-600 min-h-screen">
                <TombolSamping />
                <div className="mx-32 my-auto pt-32">
                    <ViaUid />
                </div>
            </div>
        </>
    );
}