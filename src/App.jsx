import Home from "./pages/Homes";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CekPesanan from "./pages/CekPesanan";
import About from "./pages/About";
import ViaLoginpages from "./pages/ViaLoginpages";
import ViaUidpages from "./pages/ViaUidpages";
import Mlbb from "./pages/Detailpage.jsx/Mlbb";
import Hok from "./pages/Detailpage.jsx/Hok";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cek-pesanan" element={<CekPesanan />} />
        <Route path="/tentang-aku&kamu" element={<About />} />
        <Route path="/via-login" element={<ViaLoginpages />} />
        <Route path="/via-uid" element={<ViaUidpages />} />
        <Route path="mlbb-topup" element={<Mlbb />} />
        <Route path="hok-topup" element={<Hok />} />
      </Routes>
    </Router>
  );
}
