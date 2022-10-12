import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Glossary from "./pages/Glossary"
import WhyCrypto from "./pages/WhyCrypto"
import KnowledgeBase from "./pages/KnowledgeBase"
import CryptoBasic from "./pages/CryptoBasic"
import About from "./pages/About"
import Tools from "./pages/Tools"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/glossary" element={<Glossary />} />
                <Route path="/whycrypto" element={<WhyCrypto />} />
                <Route path="/knowledge-base" element={<KnowledgeBase />} />
                <Route path="/crypto-basics" element={<CryptoBasic />} />
                <Route path="/about" element={<About />} />
                <Route path="/tools" element={<Tools />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App