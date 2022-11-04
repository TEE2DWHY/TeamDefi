import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Glossary from "./pages/Glossary"
import WhyCrypto from "./pages/WhyCrypto"
import CryptoBasic from "./pages/CryptoBasic"
import About from "./pages/About"
import Tools from "./pages/Tools"
import OurCourses from "./pages/Academy"
import Blog from "./pages/Blog"
import EarnCrypto from "./pages/EarnCrypto"
import TradeCrypto from "./pages/TradeCrypto"
import UseCrypto from "./pages/UseCrypto"
import BuildCrypto from "./pages/BuildCrypto"
import ScrollToTop from "./components/Top"


function App() {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/glossary" element={<Glossary />} />
                    <Route path="/whycrypto" element={<WhyCrypto />} />
                    <Route path="/crypto-basics" element={<CryptoBasic />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/tools" element={<Tools />} />
                    <Route path="/academy" element={<OurCourses />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/use-crypto" element={<UseCrypto />} />
                    <Route path="/trade-crypto" element={<TradeCrypto />} />
                    <Route path="/earn-crypto" element={<EarnCrypto />} />
                    <Route path="/build-crypto" element={<BuildCrypto />} />
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    )
}

export default App