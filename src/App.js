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
import Course from "./pages/Course"
import Courses from "./pages/CryptoCourses"
import BuildCrypto from "./pages/BuildCrypto"
import ScrollToTop from "./components/Top"
import BitcoinLimitation from "./pages/BitcoinLimitation"
import Fork from "./pages/Fork"
import Privacy from "./pages/Privacy"
import HowBitcoinWorks from "./pages/HowBitcoinWorks"
import Blockchain from "./pages/Blockchain"
import MarketMakers from "./pages/MarketMakers"
import Dex from "./pages/Dex"
import Forex from "./pages/Forex"
import User from "./pages/User"
import Books from "./pages/Books"
import LegacyOfSatoshi from "./pages/LegacyOfSatoshi"
import CryptocurrencyTrading from "./pages/CryptocurrencyTrading"
import NotFound from "./pages/NotFound"
import Success from "./pages/Success"
import SignUp from "./pages/SignUp"
import DeFiXrp from "./pages/DeFiXrp"
import Subscription from "./pages/Subscription"

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
                    <Route path="/course-pack" element={<Courses />} />
                    <Route path="/bitcoins-limitation" element={<BitcoinLimitation />} />
                    <Route path="/a-fork-in-the-road" element={<Fork />} />
                    <Route path="/how-bitcoin-works" element={<HowBitcoinWorks />} />
                    <Route path="/how-blockchain-works" element={<Blockchain />} />
                    <Route path="/market-makers" element={<MarketMakers />} />
                    <Route path="/decentralized-exchanges" element={<Dex />} />
                    <Route path="/financial-markets" element={<Forex />} />
                    <Route path="/sign-in" element={<User />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/legacy-of-satoshi" element={<LegacyOfSatoshi />} />
                    <Route path="/defi-comes-to-xrp-dogecoin" element={<DeFiXrp/>} />
                    <Route path="/cryptocurrency-trading" element={<CryptocurrencyTrading />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/course" element={<Course />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/subscribe" element={<Subscription/>} />
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    )
}

export default App